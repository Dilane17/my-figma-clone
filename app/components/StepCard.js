import Image from "next/image";
import styles from "./../styles/components/steps.module.scss";

// Prend les données d'une seule étape en propriété (props)
export default function StepCard({ step }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        {/* L'icône rouge */}
        <Image
          src={step.icon}
          alt={`Étape ${step.id}`}
          width={24}
          height={24}
        />
      </div>

      {/* Le numéro et le titre */}
      <h3 className={styles.cardTitle}>
        <span className={styles.stepNumber}>{step.id}.</span> {step.title}
      </h3>

      {/* La description, avec un cas particulier pour la 2e étape */}
      {step.id === 3 && <div className={styles.space}> </div>}

      <p className={styles.cardDescription}>{step.description}</p>
    </div>
  );
}
