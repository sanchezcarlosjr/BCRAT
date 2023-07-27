import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

function Menu() {
  return (
    <ul className={styles.menu}>
      <li>
        <Link to="/me">My medical record</Link>
      </li>
      <li>
        <Link to="/create">New medical record</Link>
      </li>
    </ul>
  );
}

export { Menu };
