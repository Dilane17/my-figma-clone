"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/banner.module.scss";

export default function MobileNav({ links = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.mobileNav}>
      <button
        className={styles.hamburger}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className={styles.hamburgerBox}>
          <span className={styles.hamburgerInner} />
        </span>
      </button>

      <nav className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
        {links.map((l, i) => (
          <Link
            key={`${l.href}-${i}`}
            href={l.href}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
