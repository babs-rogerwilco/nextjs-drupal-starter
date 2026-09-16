import { graphqlClient } from '@/lib/drupal';
import { NAVIGATION_MENU_QUERY, NavigationQueryResponse, MenuItem } from './graphql';

export async function getHeaderNavigation(): Promise<MenuItem[]> {
  try {
    const data = await graphqlClient.request<NavigationQueryResponse>(NAVIGATION_MENU_QUERY);
    return data?.menu?.items || [];
  } catch (error) {
    console.error('Failed to fetch Drupal header menu:', error);
    return [];
  }
}

export async function getFooterNavigation(): Promise<MenuItem[]> {
  try {
    const data = await graphqlClient.request<NavigationQueryResponse>(NAVIGATION_MENU_QUERY);
    return data?.menu?.items || [];
  } catch (error) {
    console.error('Failed to fetch Drupal footer menu:', error);
    return [];
  }
}
