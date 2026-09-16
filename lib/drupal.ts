import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.DRUPAL_GRAPHQL_URI || 'https://your-drupal-instance.com/graphql';

export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Utility helper to fetch GraphQL data with Next.js revalidation rules
 */
export async function fetchDrupalGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>,
  revalidate: number = 3600 // Cache for 1 hour by default
): Promise<T> {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate },
  });

  if (!response.ok) {
    throw new Error(`Drupal GraphQL Request failed with status ${response.status}`);
  }

  const json = await response.json();
  if (json.errors) {
    console.error('Drupal GraphQL Errors:', json.errors);
    throw new Error('Failed to fetch data from Drupal');
  }

  return json.data;
}
