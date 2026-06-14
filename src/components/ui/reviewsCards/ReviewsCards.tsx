import { IReview } from "@/types/Types";
import "./reviewsCards.scss"

interface IReviews {
  reviews: IReview;
}

const ReviewsCards = ({reviews}: IReviews) => {
    return (
        <div className="review-card">
            <h2>"{reviews.comment}"</h2>
            <h3>{reviews.name}</h3>
        </div>
    );
};

export default ReviewsCards;