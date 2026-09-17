export const GET_OFFERS_QUERY = `
  query GetOffers {
    nodeOffers(first: 6) {
      nodes {
        id
        title
        fieldTag
        fieldPriceTag
        fieldDescription
        fieldImage {
          url
          alt
        }
      }
    }
  }
`;

export interface OfferNode {
  id: string;
  title: string;
  fieldTag?: string;
  fieldPriceTag?: string;
  fieldDescription?: string;
  fieldImage?: {
    url: string;
    alt?: string;
  };
}

export interface OffersQueryResponse {
  nodeOffers: {
    nodes: OfferNode[];
  };
}
