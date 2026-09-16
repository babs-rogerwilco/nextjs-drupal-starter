import { MenuItem } from './graphql';

export const MOCK_HEADER_MENU: MenuItem[] = [
  {
    id: '1',
    title: 'Vehicles',
    url: '/vehicles',
    children: [
      { id: '1-1', title: 'D-MAX Bakkies', url: '/vehicles/d-max' },
      { id: '1-2', title: 'MU-X SUV', url: '/vehicles/mu-x' },
    ],
  },
  { id: '2', title: 'Special Offers', url: '/offers' },
  { id: '3', title: 'Find a Dealer', url: '/dealers' },
];

export const MOCK_FOOTER_MENU: MenuItem[] = [
  {
    id: 'f1',
    title: 'Vehicles',
    url: '/vehicles',
    children: [
      { id: 'f1-1', title: 'D-MAX Single Cab', url: '/vehicles/d-max-single-cab' },
      { id: 'f1-2', title: 'MU-X 7-Seater', url: '/vehicles/mu-x' },
    ],
  },
  {
    id: 'f2',
    title: 'Buyers Guide',
    url: '/buyers-guide',
    children: [
      { id: 'f2-1', title: 'Book a Test Drive', url: '/test-drive' },
      { id: 'f2-2', title: 'Request a Quote', url: '/quote' },
    ],
  },
];
