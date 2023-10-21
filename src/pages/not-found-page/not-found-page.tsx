import { Link } from 'react-router-dom';

import styles from './not-found-page.module.css';

export default function NotFoundPage(): JSX.Element {
  return(
    <section className={styles.notFoundPage}>
      <h1 className={styles.title}>
        <span className={`${styles.errorNum} ${styles.animateError}`}>404</span>
        Page not found
      </h1>
      <Link to='/' className={`${styles.link} ${styles.animateLink}`}>Вернуться на главную</Link>
    </section>
  );
}
