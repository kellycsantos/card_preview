import styles from "./page.module.scss";
import { Card } from "./component";
import sampleImage from "@/app/assets/images/drawers.jpg";

export default function Home() {
  return (
    <div className={styles.page}>
      <Card image={sampleImage} alt="sample image" title="Sample Title" description="Sample Description" />
    </div>
  );
}

