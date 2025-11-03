import Link from "next/link";
import styles from "./../styles/components/organize.module.scss";
import Image from "next/image";
// app/components/Organize.js

export default function Organize() {
    return (
      <div className={styles.organize}>
        <div className={styles.title}>
          <h1 className={styles.h1}>
            soyez la{" "}
            <span className={styles.red}>
              pour{" "}
              <span className={styles.white}>
                les grands
                <br />
                matchs{" "}
              </span>
            </span>
          </h1>
        </div>
        <div className={styles.row}>
          <div className={styles.imageContainer}></div>
          <div className={styles.description}>
            <h3 className={styles.h3}>
              <span className={styles.h3Content}>
                Organisez la meilleure soirée de la ville pour les grands matchs
              </span>
            </h3>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
              tincidunt purus, id elementum magna. Nullam mollis neque tempor
              fermentum ultrices. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.
            </p>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
              tincidunt purus, id elementum magna. Nullam mollis neque tempor
              fermentum ultrices. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.
            </p>
            <div className={styles.organizeFooter}>
              <Link href="/login" className={styles.loginButton}>
                Rejoindre le club
                <Image className={styles.bal}
                  src="/assets/bal.svg"
                  alt="bal"
                  width={20}
                  height={40}
                />
              </Link>
              <span className={styles.lineVertical}></span>
              <div className={styles.logo}>
                <Image
                  src="/assets/logo-white.png"
                  alt="Logo"
                  width={214}
                  height={44}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}