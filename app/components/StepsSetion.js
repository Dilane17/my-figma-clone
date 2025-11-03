import Link from "next/link";
import StepCard from "./StepCard";
import { steps } from "../data/stepsData";
import styles from "./../styles/components/steps.module.scss";

export default function StepsSection() {
  return (
    <section className={styles.stepsSection}>
      {/* Colonne 1 : Contenu de présentation (Fond bleu foncé) */}
      <div className={styles.introContent}>
        <h2 className={styles.mainTitle}>
          COMMENT ÇA <br /> MARCHE ?
        </h2>
        <p className={styles.introText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
          tincidunt purus, id elementum magna. Nullam mollis neque tempor
          fermentum ultrices.
        </p>
        <Link href="/join" className={styles.ctaButton}>
          REJOINDRE LE CLUB
        </Link>
      </div>

      {/* Colonne 2 : Les Cartes (La grille) */}
      <div className={styles.cardsGrid}>
        {/* Utilisation de .map() pour générer dynamiquement les 4 cartes */}
        {steps.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
}
