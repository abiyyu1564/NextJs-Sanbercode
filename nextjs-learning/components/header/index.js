import styles from "./style.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.ul}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
      </ul>
    </div>
  );
}
