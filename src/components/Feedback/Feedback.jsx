import styles from "./Feedback.module.css";

const Feedback = ({ reviews, totalFeedback, positiveReviews }) => {
  const { good, neutral, bad } = reviews;
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveReviews}%</p>
    </>
  );
};
export default Feedback;
