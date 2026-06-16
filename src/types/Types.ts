export interface ITourCard {
  _id: number;
  url: string;
  name: string;
  shortOverview: string;
  overview: string;
  price: number;
  createdAt: number;
  updatedAt: number;
}

export interface IGetResponse {
  succes: boolean;
  current_page: number;
  per_page: number;
  total_pages: number;
  total_items: number;
  data: ITourCard[];
}

export interface IReview {
  comment: string;
  name: string;
}

export interface IOrderState {
  orders: IOrder[];
  createOrders: (item: IOrder) => void;
  removeFromOrder: (id: number) => void;
}

export interface IOrder {
  tour: ITourCard;
  guests: number;
  date: string;
  payment: string;
  totalPrice: number;
}

export interface IAddComment {
  comments: IReview[];
  addComment: (name: string, comment: string) => void;
  removeComment: (name: string) => void;
}
