import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from "./ItemSelector.module.css";

interface IItemSelectorProps {
  currTitle: string;
  setDisplayState: React.Dispatch<React.SetStateAction<number>>;
  infoLength: number;
}

const ItemSelector = ({
  currTitle,
  setDisplayState,
  infoLength,
}: IItemSelectorProps) => {
  const setDisplayNext = () => {
    setDisplayState((prevState) => {
      if (prevState + 1 >= infoLength) {
        return prevState;
      } else {
        return prevState + 1;
      }
    });
  };

  const setDisplayPrev = () => {
    setDisplayState((prevState) => {
      if (prevState - 1 < 0) {
        return prevState;
      } else {
        return prevState - 1;
      }
    });
  };

  return (
    <div className={styles.masterContainer}>
      <button onClick={setDisplayPrev} className={styles.btn}>
        <IoIosArrowBack className={styles.icon} />
      </button>
      <div className={styles.titleDiv}>
        <h5 className={styles.title}>{currTitle}</h5>
      </div>
      <button onClick={setDisplayNext} className={styles.btn}>
        <IoIosArrowForward className={styles.icon} />
      </button>
    </div>
  );
};

export default ItemSelector;
