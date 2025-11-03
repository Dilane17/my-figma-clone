import Image from "next/image";
import Link from "next/link";
import styles from "./../styles/components/aboutus.module.scss";

export default function AboutUsSection() {
  return (
    // Conteneur Flexbox Parent
    <section className={styles.aboutUsSection}>
      {/* Colonne 1 : Contenu (Fond Rouge) */}
      <div className={styles.content}>
        {/* L'icône du ballon de football */}
        <div className={styles.icon}>
          <Image
            src="/assets/bal.svg" // Chemin vers l'icône blanche (à adapter)
            alt="Icône ballon de football"
            width={75}
            height={78}
          />
        </div>

        <h1 className={styles.title}>QUI SOMMES NOUS ?</h1>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
          tincidunt purus, id elementum magna. Nullam mollis neque tempor
          fermentum ultrices. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </p>

        {/* Bouton blanc avec bordure */}
        <Link href="/membre" className={styles.ctaButton}>
          DEVENEZ MEMBRE
        </Link>
      </div>

      {/* Colonne 2 : Image (Fond de stade/bar) */}
      {/* On peut laisser cette div vide et utiliser le background CSS */}
      <div className={styles.imageBackground} />
    </section>
  );
}
