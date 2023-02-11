function Review({ review }) {
  return (
    <>
      <h1>{review.title}</h1>
      <h2>{review.content}</h2>
      <h3>{review.creatorId}</h3>
    </>
  );
}

export default Review;
