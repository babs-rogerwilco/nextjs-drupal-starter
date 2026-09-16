import React from 'react';
import Link from 'next/link';
import { MenuItem } from '../../graphql';
import styles from './Footer.module.scss';

interface FooterProps {
  columns?: MenuItem[];
}

const Footer = ({ columns = [] }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columnsGrid}>
          {columns.map((column) => (
            <div key={column.id} className={styles.column}>
              <h3 className={styles.columnTitle}>{column.title}</h3>
              {column.children && column.children.length > 0 && (
                <ul className={styles.linkList}>
                  {column.children.map((link) => (
                    <li key={link.id}>
                      <Link href={link.url} className={styles.link}>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} ISUZU Motors South Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
