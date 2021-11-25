const Rating = (props) => {
  const { rating, numReviews } = props;
  const fStar = "fas fa-star"; // Full star
  const hStar = "fas fa-star-half-alt"; // Half star
  const eStar = "far fa-star"; // Empty star

  return (
    <div>
      <div className="rating">
        <span>
          <i
            className={rating >= 1 ? fStar : rating >= 0.5 ? hStar : eStar}
          ></i>
        </span>
        <span>
          <i
            className={rating >= 2 ? fStar : rating >= 1.5 ? hStar : eStar}
          ></i>
        </span>
        <span>
          <i
            className={rating >= 3 ? fStar : rating >= 2.5 ? hStar : eStar}
          ></i>
        </span>
        <span>
          <i
            className={rating >= 4 ? fStar : rating >= 3.5 ? hStar : eStar}
          ></i>
        </span>
        <span>
          <i
            className={rating >= 5 ? fStar : rating >= 4.5 ? hStar : eStar}
          ></i>
        </span>
        <span> {numReviews} reviews </span>
      </div>
    </div>
  );
};

export default Rating;
