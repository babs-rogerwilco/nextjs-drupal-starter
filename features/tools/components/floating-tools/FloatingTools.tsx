'use client';

import React from 'react';
import Link from 'next/link';
import { TOOL_ACTIONS } from '../../constants';
import styles from './FloatingTools.module.scss';

const FloatingTools = () => {
  return (
    <aside className={styles.floatingBar} aria-label="Quick action navigation">
      {TOOL_ACTIONS.map((action) => (
        <Link key={action.id} href={action.href} className={styles.actionBtn}>
          <span className={styles.icon}>{action.icon}</span>
          <span className={styles.label}>{action.label}</span>
        </Link>
      ))}
    </aside>
  );
};

export default FloatingTools;
