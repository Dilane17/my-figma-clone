import Link from "next/link";
import styles from "./../styles/components/header.module.scss";
import Image from "next/image";
// app/components/Header.js

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.h1}>
          Devenez le bar pour <br /> regarder les matchs
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
          tincidunt purus, id elementum magna. Nullam mollis neque tempor
          fermentum ultrices. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </p>
        <div className={styles.cta}>
          <Link href="/login" className={styles.loginButton}>
            Rejoindre le club
            <Image src="/assets/bal.svg" alt="ballon" width={12} height={12} />
          </Link>
          <div className={styles.ratings}>
            <Image src="/assets/rating.png" alt="User" width={10} height={10} />
            <Image
              src="/assets/rating1.png"
              alt="User"
              width={44}
              height={44}
            />
            <Image
              src="/assets/rating2.png"
              alt="User"
              width={44}
              height={44}
            />
            <Image
              src="/assets/rating3.png"
              alt="User"
              width={44}
              height={44}
            />
            <Image
              src="/assets/rating4.png"
              alt="User"
              width={44}
              height={44}
            />
          </div>
          <div className={styles.avisContainer}>
            <Image className={styles.star} src="/assets/star.png" alt="User" width={44} height={44} />
            <span className={styles.avis}>5.0 sur 50+ notes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
