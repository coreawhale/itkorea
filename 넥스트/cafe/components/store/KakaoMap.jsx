"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const KakaoMap = () => {
  //   const APIKEY = "e62f8678cb703b1ea5e52f56beb8e7e7";
  const [loc, setLoc] = useState({ lat: 37.492, long: 126.723 });
  const [zoom, setZoom] = useState(3);

  const changeLoc = (lat, long) => {
    setLoc((prev) => ({ lat, long }));
  };

  const changeZoom = (level) => {
    setZoom((prev) => prev + level);
  };

  const mapRef = useRef(null);
  const containerRef = useRef(null);
  const markerRef = useRef(null);

  const makeMap = (lat, long) => {
    if (!containerRef.current) return;

    const options = {
      center: new window.kakao.maps.LatLng(loc.lat, loc.long), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    mapRef.current = new kakao.maps.Map(containerRef.current, options);

    const markerPosition = new kakao.maps.LatLng({
      lat: 37.492,
      long: 126.723,
    });
    markerRef.current = new kakao.maps.Marker({
      position: markerPosition,
    });
    markerRef.current = mapRef.current.setMap(mapRef.current);
  };

  useEffect(() => {
    if (mapRef.current) {
      const center = new window.kakao.maps.LatLng(loc.lat, loc.long);
      mapRef.current.setCenter(center);

      const markerPosition = new kakao.maps.LatLng(loc.lat, loc.long);
      markerRef.current = new kakao.maps.Marker({ position: markerPosition });
      markerRef.current.setMap(mapRef.current);
    }
  }, [loc]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setLevel(zoom);
    }
  }, [zoom]);

  return (
    <div>
      {/* onLoad script가 다운로드 완료 됐을 때 */}
      {/* autoload=fales 스크립트 로딩이 끝나기 전까지 홀딩 */}
      <Script
        // strategy="afterInteractive"
        onLoad={() => window.kakao.maps.load(makeMap)}
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=e62f8678cb703b1ea5e52f56beb8e7e7&autoload=false`}
      ></Script>

      <div ref={containerRef} style={{ height: "500px" }}></div>
      {/* < */}

      <button
        onClick={() => {
          changeLoc(37.492, 126.723);
        }}
        className="p-5"
      >
        부평점
      </button>
      <button
        onClick={() => {
          changeLoc(37.567, 126.971);
        }}
        className="p-5"
      >
        신촌점
      </button>
      <button
        onClick={() => {
          changeLoc(37.511, 127.098);
        }}
        className="p-5"
      >
        강남점
      </button>
      <button
        onClick={() => {
          changeZoom(1);
        }}
        className="p-5"
      >
        줌인
      </button>
      <button
        onClick={() => {
          changeZoom(-1);
        }}
        className="p-5"
      >
        줌아웃
      </button>
    </div>
  );
};

export default KakaoMap;
