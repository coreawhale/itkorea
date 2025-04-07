import styles from "./Layout.module.css";
const Layout = (props) => {
  return (
    <main className={styles.application}>
      <section className={styles.todoolist}>{props.children}</section>
    </main>
  );
};

export default Layout;
