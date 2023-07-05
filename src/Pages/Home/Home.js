import { useContext } from "react";

import { useQuizzesFetch } from "../../effects/useQuizzesFetch";

import { QuizzesContext } from "../../context";

import { Card } from "../../Components/Card";

import { Loader } from "../../Components/Loader";

import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const max = 25;
const min = 7;

const categoriesArray = Array(10)
  .fill()
  .map(() => Math.floor(Math.random() * (max - min + 1)) + min);

const Home = () => {
  const { isLoading, setQuizziz, setQuizName } = useContext(QuizzesContext);

  const randomCategory = categoriesArray[Math.floor(Math.random() * 9)];

  const questions = useQuizzesFetch(randomCategory);

  const onLuckyClick = () => {
    setQuizziz(questions);
    setQuizName(questions[0].category);
  };

  return (
    <div>
      <div className={styles.header}>Quizzes</div>
      <div className={styles.flex}>
        <Link to={"/play"}>
          <button onClick={onLuckyClick} className={styles.lucky_button}>
            I'm lucky!
          </button>
        </Link>
      </div>
      {isLoading && <Loader />}

      <div className={styles.flex_container}>
        {categoriesArray.map((category) => {
          return <Card category={category} />;
        })}
      </div>
    </div>
  );
};

export { Home };
