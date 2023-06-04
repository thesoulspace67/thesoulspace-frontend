// Cart Item, State Context
// Cart Page Comp, Cart Product
type CartProductType = {
  id: number;
  quantity: number;
  Total_Price: number;
  attributes: {
    Name: string;
    Price: number;
    Product_Image: {
      data: {
        attributes: {
          formats: {
            thumbnail: {
              url: string;
            };
          };
        };
      }[];
    };
  };
};

// Found Product, State Context
type foundProductType = {
  quantity: number;
  Total_Price: number;
  attributes: {
    Price: number;
  };
};

// Product Card, Best Seller - Homepage
type ProductCardType = {
  product: {
    data: {
      id: number;
      attributes: {
        Name: string;
        Price: number;
        Short_Description: string;
        slug: string;
      };
    };
  };
  Product_Thumbnail: {
    data: {
      attributes: {
        formats: {
          small: {
            url: string;
          };
        };
      };
    };
  };
};

// Category Product Card, Popular Categories - Homepage
type ProductCategoryCardType = {
  Title: string;
  Description: string;
  Icon: {
    data: {
      attributes: {
        formats: {
          thumbnail: {
            url: string;
          };
        };
      };
    };
  };
};

// Shop Product Card, Shop Page
type ShopProductCardType = {
  id: number;
  attributes: {
    Name: string;
    Price: number;
    Short_Description: string;
    slug: string;
    Product_Image: {
      data: {
        attributes: {
          formats: {
            small: {
              url: string;
            };
          };
        };
      }[];
    };
  };
};

type BannerDataType = {
  Short_Text: string;
  Mid_Text: string;
  Big_Text: string;
  Description_Title: string;
  Description_Text: string;
  CTA_Button: {
    Button_Text: string;
    Button_Link: string;
  };
  BannerImage: {
    data: {
      attributes: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
};

// Add to Cart Button, Product Page
type AddToCartProductType = {
  id: number;
  attributes:
    | {
        Name: string;
        Price: number;
        Short_Description: string;
        slug: string;
        Product_Image: {
          data: {
            attributes: {
              formats: {
                thumbnail: {
                  url: string;
                };
              };
            };
          }[];
        };
      }
    | any;
};

export type {
  CartProductType,
  foundProductType,
  ProductCardType,
  ProductCategoryCardType,
  ShopProductCardType,
  BannerDataType,
  AddToCartProductType,
};