import Link from "next/link";
import Image from "next/image";
import styles from "./../styles/components/cta.module.scss";

export default function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.content}>
        <Image
          className={styles.bal}
          src="/assets/bal.svg"
          alt="ballon"
          width={100}
          height={100}
        />

        <h2 className={styles.title}>
          LE MEILLEUR <br />
          MOYEN D&#39;EN <br />
          PROFITER C&#39;EST <br />
          D&#39;ENTRER AU CLUB
        </h2>

        <Link href="/inscription" className={styles.ctaButton}>
          REJOINDRE LE CLUB
          <Image
            className={styles.balle}
            src="/assets/bal.svg"
            alt="bal"
            width={20}
            height={21}
          />
        </Link>

        <div className={styles.decorations}>
          {/* Icône du ballon ou de la flèche */}
          <div className={styles.decorationLeft}>
            <Image
              src="/assets/arrow-curve.svg" // Chemin à adapter
              alt="Flèche décorative"
              width={100}
              height={100}
            />
          </div>

          {/* Icône de feux d'artifice/d'explosion (à droite) */}
          <div className={styles.decorationRight}>
            <Image
              src="/assets/sparkle.svg" // Chemin à adapter
              alt="Décoration festive"
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
