import React from "react";

import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>brand</h1>
        <ul>
          <li>about</li>
          <li>services</li>
          <li>contact us</li>
        </ul>
      </div>
    </header>
  );
}
