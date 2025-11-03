//app/components/Banner.js
import Image from "next/image";
import Link from "next/link";
import styles from "./../styles/components/banner.module.scss";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/assets/logo-white.png"
              alt="Logo"
              width={155}
              height={32}
            />
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link href="/">Qui sommes nous</Link>
          <Link href="/">Tarifs</Link>
          <Link href="/">Comment ça marche</Link>
          <Link href="/">Faq</Link>
          <Link href="/">Nous contact</Link>
        </nav>

        <Link href="/login" className={styles.login}>
          Rejoindre le club
          <Image src="/assets/bal.svg" alt="ballon" width={12} height={12} />
        </Link>
      </div>
      <div className={styles.bannerImage}></div>
    </div>
  );
}
