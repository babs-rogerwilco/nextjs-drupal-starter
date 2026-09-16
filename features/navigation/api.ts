import { graphqlClient } from '@/lib/drupal';
import { NAVIGATION_MENU_QUERY, NavigationQueryResponse, MenuItem } from './graphql';
import { MOCK_HEADER_MENU, MOCK_FOOTER_MENU } from './mock-data';

const hasValidEndpoint =
  process.env.DRUPAL_GRAPHQL_URI &&
  !process.env.DRUPAL_GRAPHQL_URI.includes('your-drupal-instance.com');

export async function getHeaderNavigation(): Promise<MenuItem[]> {
  if (!hasValidEndpoint) {
    return MOCK_HEADER_MENU;
  }

  try {
    const data = await graphqlClient.request<NavigationQueryResponse>(NAVIGATION_MENU_QUERY);
    return data?.menu?.items?.length ? data.menu.items : MOCK_HEADER_MENU;
  } catch {
    return MOCK_HEADER_MENU;
  }
}

export async function getFooterNavigation(): Promise<MenuItem[]> {
  if (!hasValidEndpoint) {
    return MOCK_FOOTER_MENU;
  }

  try {
    const data = await graphqlClient.request<NavigationQueryResponse>(NAVIGATION_MENU_QUERY);
    return data?.menu?.items?.length ? data.menu.items : MOCK_FOOTER_MENU;
  } catch {
    return MOCK_FOOTER_MENU;
  }
}
