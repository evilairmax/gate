import Link from 'next/link'
import styles from '../../styles/components/Footer.module.css'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const Footer = () => {
    const { i18n } = useTranslation('common')
    const year = new Date().getFullYear()
    const router = useRouter()
    const currentLanguage = i18n.language

    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>
                © {year} | <span className={styles.heart}><i className="fas fa-heart" title="Made with love"></i></span> | <Link href={router.asPath} locale={currentLanguage === 'es' ? 'en' : 'es'}><span className={styles.language}><i
                className="fas fa-language"></i> {currentLanguage}</span></Link>
            </div>
            <div className={styles.links}>
                <Link href="https://gitlab.com/ssspells"><i className={`${styles.gitlab} fab fa-gitlab`}></i></Link>
                <Link href="https://github.com/7-7-7-7-7-7"><i className={`${styles.github} fab fa-github`}></i></Link>
                <Link href="https://www.linkedin.com/in/rodolfo-thiede/"><i className={`${styles.linkedIn} fab fa-linkedin`}></i></Link>
            </div>
        </footer>
    )
}

export default Footer
