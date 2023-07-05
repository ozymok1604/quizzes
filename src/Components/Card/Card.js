import { useContext } from "react";

import { QuizzesContext } from "../../context";
import { useQuizzesFetch } from "../../effects/useQuizzesFetch";

import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

import { getRandomColor } from "../../features/randomColor";

const Card = ({ category }) => {
  const questions = useQuizzesFetch(category);

  const { setQuizziz } = useContext(QuizzesContext);

  const onHandleClick = (quizziz) => {
    setQuizziz(quizziz);
  };

  return (
    <div style={{ backgroundColor: getRandomColor() }} className={styles.card}>
      <div className={styles.name}>{questions?.[0]?.category}</div>
      <div>Questions: 10</div>

      <Link to={"/play"}>
        <button
          onClick={() => onHandleClick(questions)}
          className={styles.button}
        >
          Play
        </button>
      </Link>
    </div>
  );
};

export { Card };
