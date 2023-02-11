import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Review({ review }) {
  return (
    <>
      <h1>{review.title}</h1>
      <h2>{review.content}</h2>
      <h3>{review.creatorId}</h3>
      <Link to={"/edit/review/" + review.id}>
        <Button variant="primary">리뷰 수정</Button>
      </Link>
    </>
  );
}

export default Review;
