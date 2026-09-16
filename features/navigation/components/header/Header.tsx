'use-client';

import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import styles from './Header.module.scss';
import { MenuItem } from '../../graphql';

interface HeaderProps {
  menuItems?: MenuItem[];
}

const defaultNavItems: MenuItem[] = [
  { id: '1', title: 'BAKKIES', url: '/bakkies' },
  { id: '2', title: 'SUVS', url: '/suvs' },
  { id: '3', title: 'TRUCKS', url: '/trucks' },
  { id: '4', title: 'OFFERS', url: '/offers' },
];

const Header: React.FC<HeaderProps> = ({ menuItems = defaultNavItems }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logoLink} aria-label="Isuzu Home">
          <span className={styles.logoText}>ISUZU</span>
        </Link>

        {/* Desktop Navigation (Radix UI) */}
        <NavigationMenu.Root className={styles.navRoot}>
          <NavigationMenu.List className={styles.navList}>
            {menuItems.map((item) => (
              <NavigationMenu.Item key={item.id} className={styles.navItem}>
                <NavigationMenu.Link asChild>
                  <Link href={item.url} className={styles.navLink}>
                    {item.title}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* Right Action Icons (Region, User, Dealer Locator) */}
        <div className={styles.actions}>
          <button className={styles.actionBtn} type="button" aria-label="Other Regions">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className={styles.actionLabel}>Other regions</span>
          </button>

          <button className={styles.iconBtn} type="button" aria-label="Account Profile">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          <button className={styles.iconBtn} type="button" aria-label="Locate a Dealer">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.2 1 12 1 13v3c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
