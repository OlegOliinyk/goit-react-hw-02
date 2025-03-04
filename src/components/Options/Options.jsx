import styles from "./Options.module.css";

const Options = ({ onClick, totalFeedback }) => {
  return (
    <>
      <button onClick={() => onClick("good")}>Good</button>
      <button onClick={() => onClick("neutral")}>Neutral</button>
      <button onClick={() => onClick("bad")}>Bad</button>
      <button
        onClick={() => onClick("reset")}
        style={{ display: totalFeedback ? "inline" : "none" }}>
        Reset
      </button>
    </>
  );
};

export default Options;
