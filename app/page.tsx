import Image from "next/image";
import styles from "./page.module.css";
import SelectMenu from "@/components/SelectMenue";

export default function Home() {
  return (
    <main className={styles.main}>
      <SelectMenu />
    </main>
  );
}
