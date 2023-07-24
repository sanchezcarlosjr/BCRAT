import { Link } from 'react-router-dom';
import { ReactComponent as SVG } from 'assets/images/logoBC.svg';

function Logo() {
  return (
    <Link to="/">
      <SVG width="250"/>
    </Link>
  );
}

export { Logo };
