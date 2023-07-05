import { useContext } from "react";

import { useQuizzesFetch } from "../../effects/useQuizzesFetch";

import { QuizzesContext } from "../../context";

import { Card } from "../../Components/Card";

import styles from "./styles.module.scss";
import { Loader } from "../../Components/Loader";

const max = 25;
const min = 7;

const categoriesArray = Array(10)
  .fill()
  .map(() => Math.floor(Math.random() * (max - min + 1)) + min);

const Home = () => {
  const { isLoading } = useContext(QuizzesContext);
  return (
    <div>
      <div className={styles.header}>Quizzes</div>
      {isLoading ? <Loader /> : <></>}

      <div className={styles.flex_container}>
        {categoriesArray?.map((category) => {
          return <Card category={category} />;
        })}
      </div>
    </div>
  );
};

export { Home };
