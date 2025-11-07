import Link from "next/link";
import styles from "./../styles/components/about.module.scss";
import Image from "next/image";
// app/components/About.js

export default function About() {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>
        <span className={styles.red}>Plus de clients</span>
        <span className={styles.titleLine}>dans</span>
        <span className={styles.titleLine}>votre bar</span>
      </h1>
      <div className={styles.row}>
        <div className={styles.imageContainer}></div>
        <div className={styles.description}>
          <h3 className={styles.h3}>
            <span className={styles.h3Content}>
              Faites connaitre votre bar comme l&#39;endroit où regarder le
              match{" "}
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
          <div className={styles.contact}>
            <div className={styles.contactButton}>
              <Link href="/contact">Devenir membre</Link>
            </div>
            <div className={styles.VerticalLine}></div>
            <div className={styles.logo}>
              <Image
                src="/assets/logo-white.png"
                alt="Logo"
                width={233}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
