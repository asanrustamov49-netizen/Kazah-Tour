import "./ClientReviews.scss";
import ReviewsCards from "@/components/ui/reviewsCards/ReviewsCards";
import InputReviews from "@/components/ui/inputReviews/InputReviews";
import { IReview } from "@/types/Types";
import { useAddComment } from "@/utils/useAddComment";

interface IReviews {
  reviews: IReview[];
}

const ClientReviews = ({ reviews }: IReviews) => {
  const {comments} = useAddComment()
  return (
    <section id="reviews">
      <div className="container">
        <div className="reviews">
          <h1>CLIENT REVIEWS</h1>
          <div className="reviews-cards">
            {
              comments ? (
                reviews.map((el) => (
              <ReviewsCards reviews={el}/>
            ))
              ): (
                <h1>No Comments...</h1>
              )
            }
          </div>
          <InputReviews />
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
