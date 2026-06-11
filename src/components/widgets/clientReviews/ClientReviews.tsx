import { IReview } from "@/components/hooks/types";
import "./ClientReviews.scss";
import ReviewsCards from "@/components/ui/reviewsCards/ReviewsCards";
import InputReviews from "@/components/ui/inputReviews/InputReviews";

interface IReviews {
  reviews: IReview[];
}

const ClientReviews = ({ reviews }: IReviews) => {
  return (
    <section id="reviews">
      <div className="container">
        <div className="reviews">
          <h1>CLIENT REVIEWS</h1>
          <div className="reviews-cards">
            {reviews.map((el) => (
              <ReviewsCards reviews={el} />
            ))}
          </div>
          <InputReviews />
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
