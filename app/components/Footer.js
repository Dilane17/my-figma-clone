import Link from "next/link";
import Image from "next/image";
import styles from "./../styles/components/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.redBaniere}>
        <p className={styles.baniereContent}>
          {" "}
          Un bar organise un concours de cris de supporters pendant la mi-temps.
          Le gagnant remporte un trophée... en papier mâché fait par le barman,
          qui a découvert YouTube hier - <span className={styles.gras}>Marseille : </span>
        </p>
      </div>
      {/* Bloc 1 : Contenu Principal du Footer (Utilise Flexbox) */}
      <div className={styles.mainContent}>
        {/* Colonne 1 : Newsletter */}
        <div className={styles.newsletter}>
          <p className={styles.newsletterText}>
            Inscrivez-vous à notre newsletter et recevez les <br />
            dernières actualités de FanMatch
          </p>
          <form className={styles.form}>
            <input
              type="email"
              placeholder="Votre e-mail"
              className={styles.emailInput}
            />
            <button type="submit" className={styles.submitButton}>
              M&#39;INSCRIRE
            </button>
          </form>
          <p className={styles.dataProtection}>
            Nous tenons à la{" "}
            <Link href="/protection-donnees">protection de vos données</Link>
          </p>
        </div>

        {/* Colonne 2 : Navigation (FANMATCH) */}
        <div className={styles.navColumn}>
          <h3 className={styles.columnTitle}>FANMATCH</h3>
          <nav className={styles.footerNav}>
            <Link href="/">Accueil</Link>
            <Link href="/comment-ca-marche">Comment ça marche</Link>
            <Link href="/tarifs">Tarifs</Link>
            <Link href="/qui-sommes-nous">Qui sommes nous</Link>
            <Link href="/faq">FAQ</Link>
          </nav>
        </div>

        {/* Colonne 3 : Social */}
        <div className={styles.socialColumn}>
          <h3 className={styles.columnTitle}>SOCIAL</h3>
          <div className={styles.socialLinks}>
            {/* Les icônes de réseaux sociaux (Font Awesome ou SVG à insérer ici) */}
            <Link href="https://facebook.com" aria-label="Facebook">
              {/*  */}
              <Image
                src="/assets/fb.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              {/*  */}
              <Image
                src="/assets/ig.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              {/*  */}
              <Image
                src="/assets/in.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>{" "}
      {/* Fin .mainContent */}
      {/* Logo surdimensionné (FANMATCH) */}
      <div className={styles.logoGiant}>
        <Image
          src="/assets/fanmatch-logo-white.svg"
          alt="FANMATCH"
          width={1280}
          height={288}
          priority
        />
      </div>
      {/* Bloc 2 : Informations Légales */}
      <div className={styles.legalInfo}>
        <p>© 2024 SuperCHR. Tous droits réservés.</p>
        <Link href="/mentions-legales">Mentions légales</Link>
      </div>
    </footer>
  );
}
