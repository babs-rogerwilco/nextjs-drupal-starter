import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { MenuItem } from '../../graphql';

interface HeaderProps {
  menuItems?: MenuItem[];
}

export const Header = ({ menuItems = [] }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          ISUZU
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {menuItems.map((item) => (
              <li key={item.id} className={styles.navItem}>
                <Link href={item.url} className={styles.navLink}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
