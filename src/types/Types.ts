export interface ITourCard {
  img: string;
  name: string;
  shortOverview: string;
  overview: string;
  price: number;
  _id: number;
  createdAt: number;
  updatedAt: number;
}


export interface IReview {
    comment: string
    name: string
}


export interface IAddComment {
  comments: IReview[]
  addComment: (name: string, comment: string)=> void 
}
