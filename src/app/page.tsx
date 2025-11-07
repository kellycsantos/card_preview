import styles from "./page.module.scss";
import { Card } from "./component";
export default function Home() {
  return (
    <div className={styles.page}>
      <p>page home</p>
      <Card />
    </div>
  );
}

