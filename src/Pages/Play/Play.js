import { useContext, useState } from "react";

import { QuizzesContext } from "../../context";

import { useNavigate } from "react-router-dom";

import { getRandomColor } from "../../features/randomColor";

import { shuffle } from "../../features/randomArray";

import styles from "./styles.module.scss";

const Play = () => {
  const { quizziz, setResult, setIsLoading, result, quizName } =
    useContext(QuizzesContext);

  const [questionNumber, setQuestionNumber] = useState(0);

  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
    setIsLoading(true);
  };

  console.log(quizziz[questionNumber]?.correct_answer);

  const onFinishQuestion = () => {
    handleNavigate("/finish");
  };

  const onAnswer = (answer) => {
    setQuestionNumber(questionNumber + 1);
    answer == quizziz[questionNumber]?.correct_answer
      ? setResult(result + 1)
      : console.log("Incorrect!");
    questionNumber == 9 ? onFinishQuestion() : console.log("play");
  };

  const isBoolean = quizziz[questionNumber].type === "boolean" ? true : false;

  const answers = isBoolean
    ? [true, false]
    : [
        ...quizziz[questionNumber]?.incorrect_answers,
        quizziz[questionNumber]?.correct_answer,
      ];

  shuffle(answers);

  return (
    <div>
      <div className={styles.text}>You selected: {quizName}</div>
      <div className={styles.header}>Question {questionNumber + 1}</div>

      <div className={styles.flex_container}>
        <div className={styles.question}>
          {quizziz[questionNumber].question}
        </div>

        {!isBoolean ? (
          <div className={styles.answers}>
            {answers?.map((item) => {
              return (
                <div
                  style={{ backgroundColor: getRandomColor() }}
                  className={styles.answerCard}
                  onClick={() => onAnswer(item)}
                >
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.answers}>
            <div
              style={{ backgroundColor: "red" }}
              className={styles.answerCard}
              onClick={() => onAnswer("False")}
            >
              False
            </div>
            <div
              style={{ backgroundColor: "green" }}
              className={styles.answerCard}
              onClick={() => onAnswer("True")}
            >
              True
            </div>
          </div>
        )}
        <button
          onClick={() => handleNavigate("/")}
          className={styles.cancel_button}
        >
          Cancel a Quiz
        </button>
      </div>
    </div>
  );
};

export { Play };
