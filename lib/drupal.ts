import { NextDrupal } from 'next-drupal';
import { GraphQLClient } from 'graphql-request';

export const drupal = new NextDrupal(
  process.env.NEXT_PUBLIC_DRUPAL_BASE_URL || 'https://your-drupal-site.com'
);

// Client for fetching GraphQL data from Drupal Decoupled Endpoint
export const graphqlClient = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL || 'https://my-drupal-site.com'}/graphql`,
  {
    headers: {
      'Content-Type': 'application/json',
      ...(process.env.DRUPAL_GRAPHQL_AUTH_KEY && {
        Authorization: `Bearer ${process.env.DRUPAL_GRAPHQL_AUTH_KEY}`,
      }),
    },
  }
);
