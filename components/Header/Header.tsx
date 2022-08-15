import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/logo.svg';
import Lang from '../Lang/Lang';

import styles from './Header.module.css';

export default function Header() {
  return(
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link href="/">
          <a><Image src={logo} className={styles.header__logo} /></a>
        </Link>
        <Lang />
      </div>
    </header>
  );
}