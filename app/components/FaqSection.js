import styles from "./../styles/components/faq.module.scss";
import { faqQuestions } from "../data/faqData";
import Image from "next/image";

export default function FaqSection() {
  return (
    <section className={styles.faqSection}>
      {/* Titre : QUESTIONS SUR FANMATCH */}
      <h2 className={styles.mainTitle}>
        {/* Segmentation pour le fond rouge */}
        <span className={styles.redBackground}>QUESTIONS</span> SUR FANMATCH
      </h2>

      {/* Conteneur des éléments de la FAQ */}
      <div className={styles.faqContainer}>
        {/* Boucle sur les questions */}
        {faqQuestions.map((question, index) => (
          <div key={index} className={styles.faqItem}>
            {/* Texte de la question */}
            <h3 className={styles.questionText}>{question}</h3>

            {/* Icône Plus (Statique, juste pour l'esthétique) */}
            <span className={styles.iconContainer}>
              <Image
                src="/assets/icon-plus-grey.png" // Assure-toi que cette icône est bien en gris clair
                alt="Ouvrir la question"
                width={20}
                height={20}
              />
            </span>

            {/* Ligne de séparation */}
            <hr className={styles.separator} />
          </div>
        ))}
      </div>
    </section>
  );
}
