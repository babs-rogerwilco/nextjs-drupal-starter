'use client';

import React from 'react';
import Image from 'next/image';
import styles from './OfferCard.module.scss';

export interface OfferCardProps {
  tag?: string;
  title: string;
  priceTag?: string;
  description: string;
  imageUrl: string;
  ctaText?: string;
  ctaUrl?: string;
}

const OfferCard: React.FC<OfferCardProps> = ({
  tag = 'SPECIAL OFFER',
  title,
  priceTag,
  description,
  imageUrl,
  ctaText = 'LEARN MORE',
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {tag && <span className={styles.tag}>{tag}</span>}
        <Image src={imageUrl} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" priority />
        {priceTag && <div className={styles.priceTag}>{priceTag}</div>}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <button className={styles.ctaButton}>{ctaText}</button>
      </div>
    </article>
  );
};

export default OfferCard;
