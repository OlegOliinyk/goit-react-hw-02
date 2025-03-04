import styles from "./Feedback.module.css";

const Feedback = ({ reviews, totalFeedback }) => {
  const { good, neutral, bad } = reviews;
  //   const totalFeedback = good + neutral + bad;
  return !totalFeedback ? null : (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>
        Positive: {totalFeedback && Math.round((good / totalFeedback) * 100)}%
      </p>
    </>
  );
};
export default Feedback;
