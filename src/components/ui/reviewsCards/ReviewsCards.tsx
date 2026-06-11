import { IReview } from "@/components/hooks/types";
import "./reviewsCards.scss"

interface IReviews {
  reviews: IReview;
}

const ReviewsCards = ({reviews}: IReviews) => {
    return (
        <div className="review-card">
            <h1>"{reviews.message}"</h1>
            <h2>{reviews.name}</h2>
        </div>
    );
};

export default ReviewsCards;