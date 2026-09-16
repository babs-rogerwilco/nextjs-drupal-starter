export const NAVIGATION_MENU_QUERY = `
  query GetHeaderNavigation {
    menu(name: "main") {
      items {
        id
        title
        url
        children {
          id
          title
          url
        }
      }
    }
  }
`;

export interface MenuItem {
  id: string;
  title: string;
  url: string;
  children?: MenuItem[];
}

export interface NavigationQueryResponse {
  menu: {
    items: MenuItem[];
  };
}
