"use client";
import "./ClientReviews.scss";
import ReviewsCards from "@/components/ui/reviewsCards/ReviewsCards";
import InputReviews from "@/components/ui/inputReviews/InputReviews";
import { useAddComment } from "@/utils/useAddComment";

const ClientReviews = () => {
  const { comments } = useAddComment();
  return (
    <section id="reviews">
      <div className="container">
        <div className="reviews">
          <h1>CLIENT REVIEWS</h1>
          <div className="reviews-cards">
            {
              comments.length > 0 ? (
                comments.map((el, index) => (
                  <ReviewsCards reviews={el} key={index} />
                ))
              ) : (
                <h4>No Comments...</h4>
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
