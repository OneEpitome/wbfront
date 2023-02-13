import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Review({ review, getReviewList }) {
  const onClickDeleteBtn = async () => {
    await fetch("/api/delete/review/" + review.id, { method: "delete" });
    getReviewList();
  };

  return (
    <>
      <h1>{review.title}</h1>
      <h2>{review.content}</h2>
      <h3>{review.creatorId}</h3>
      <img src={"http://localhost:8080/images/" + review.fileName} />
      <Link to={"/edit/review/" + review.id}>
        <Button variant="primary">리뷰 수정</Button>
      </Link>
      <Button variant="primary" onClick={onClickDeleteBtn}>
        리뷰 삭제
      </Button>
    </>
  );
}

export default Review;
