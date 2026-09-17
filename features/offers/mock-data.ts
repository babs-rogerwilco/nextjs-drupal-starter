import { OfferNode } from './graphql';

export const MOCK_OFFERS: OfferNode[] = [
  {
    id: '1',
    title: 'ISUZU D-MAX V-CROSS',
    fieldTag: 'EXCLUSIVE DEAL',
    fieldPriceTag: 'FROM R779,900',
    fieldDescription:
      'Conquer tough terrain with standard modern luxury, 3.0L turbo diesel power, and 4x4 capability.',
    fieldImage: {
      url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
      alt: 'Isuzu D-Max',
    },
  },
  {
    id: '2',
    title: 'ISUZU MU-X LSE',
    fieldTag: 'SPECIAL OFFER',
    fieldPriceTag: 'FROM R699,000',
    fieldDescription:
      'Premium 7-seater family SUV with state-of-the-art IDAS safety suite and refined interior styling.',
    fieldImage: {
      url: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=600&q=80',
      alt: 'Isuzu MU-X',
    },
  },
];
