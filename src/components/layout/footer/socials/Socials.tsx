import { ReactComponent as Twitter } from 'assets/images/socials/twitter.svg';
import { ReactComponent as Instagram } from 'assets/images/socials/instagram.svg';
import { ReactComponent as Facebook } from 'assets/images/socials/facebook.svg';
import styles from './Socials.module.scss';

const socials = [
  { href: 'https://twitter.com/traceablehd', icon: Twitter },
  { href: 'https://www.facebook.com/TraceableHealthData', icon: Facebook },
  { href: 'https://www.instagram.com/traceable_health_data/', icon: Instagram },
];

function Socials() {
  const getItems = () =>
    socials.map(({ href, icon: Icon }) => (
      <li key={href}>
        <a href={href} target="_blank" rel="noreferrer">
          <Icon />
        </a>
      </li>
    ));

  return <ul className={styles.socials}>{getItems()}</ul>;
}

export { Socials };
