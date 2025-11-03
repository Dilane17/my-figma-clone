import Link from "next/link";
import styles from "./../styles/components/data.module.scss";
import Image from "next/image";
// app/components/Data.js

export default function Data() {
    return (
      <div className={styles.data}>
        <div className={styles.title}>
          <h1 className={styles.h1}>
            <span className={styles.red}>Obtenez les données</span> de vos
            clients
          </h1>
        </div>
        <div className={styles.row}>
          <div className={styles.imageContainer}></div>
          <div className={styles.description}>
            <h3 className={styles.h3}>
              <span className={styles.h3Content}>
                Lancez des campagnes SMS et mailing
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
            <Link href="/login" className={styles.loginButton}>
              Devenir membre
            </Link>
          </div>
        </div>
        <div className={styles.howdidyou}>
            <div className={styles.howdidyouContent}>
                <Image
                src="/assets/funfactIcon.png"
                alt="SMS Icon"
                width={35}
                height={31}
                />

                <div className={styles.howdidyouTitle}>
                <p>Le saviez vous ?</p>
                </div>
            </div>
            <p className={styles.funFactText}>
                Mettre ici un fait sur l&#39;importance des bars pour regarder les
                matchs de foot et autres sports.
            </p>
        </div>
      </div>
    );
}