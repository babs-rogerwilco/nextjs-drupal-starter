import { graphqlClient } from '@/lib/drupal';
import { GET_OFFERS_QUERY, OffersQueryResponse, OfferNode } from './graphql';
import { MOCK_OFFERS } from './mock-data';

const hasValidEndpoint =
  process.env.DRUPAL_GRAPHQL_URI &&
  !process.env.DRUPAL_GRAPHQL_URI.includes('my-drupal-instance.com');

export async function getOffers(): Promise<OfferNode[]> {
  if (!hasValidEndpoint) {
    return MOCK_OFFERS;
  }

  try {
    const data = await graphqlClient.request<OffersQueryResponse>(GET_OFFERS_QUERY);
    return data?.nodeOffers?.nodes?.length ? data.nodeOffers.nodes : MOCK_OFFERS;
  } catch {
    console.warn('Unable to reach Drupal GraphQL endpoint. Serving mock offers.');
    return MOCK_OFFERS;
  }
}
