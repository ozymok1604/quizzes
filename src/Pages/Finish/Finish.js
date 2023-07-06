import { useContext } from "react";

import { QuizzesContext } from "../../context";

import { useNavigate } from "react-router-dom";

import ErrorSVG from "../../svg/error.svg";

import SuccessSVG from "../../svg/success.svg";

import styles from "./styles.module.scss";

const Finish = () => {
  const { result, setResult, setIsLoading } = useContext(QuizzesContext);

  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
    setIsLoading(true);
    setResult(0);
  };

  return (
    <div>
      <div className={styles.header}>Finish</div>

      <div className={styles.flex_container}>
        {result > 5 ? (
          <>
            <div className={styles.text}>Congratulates!!!</div>
            <img className={styles.result_img} src={SuccessSVG} />
            <div className={styles.text}>You scored {result} points</div>
          </>
        ) : (
          <>
            <div className={styles.text}>OOOPPPSSS!!!</div>
            <img className={styles.result_img} src={ErrorSVG} />
            <div className={styles.text}>You scored {result} points</div>
          </>
        )}
        <span>
          <button
            onClick={() => handleNavigate("/")}
            className={styles.home_button}
          >
            Go to Home
          </button>
        </span>
      </div>
    </div>
  );
};

export { Finish };
