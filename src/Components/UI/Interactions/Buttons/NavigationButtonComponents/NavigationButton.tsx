import { Link } from "react-scroll";

import styles from "./NavigationButton.module.css";

interface AnchorButtonProps {
  children: string;
  href: string;
  realLink?: boolean;
  fontSize?: number | string;
}

const NavigationButton = ({
  children,
  href,
  realLink,
  fontSize,
}: AnchorButtonProps) => {
  if (realLink === true) {
    return (
      <a target="_blank" rel="noreferrer" href={href}>
        <button
          className={styles.btnSlide}
          style={fontSize ? { fontSize: fontSize } : {}}
        >
          {children}
        </button>
      </a>
    );
  }

  return (
    <Link smooth={true} to={href}>
      <button
        className={styles.btnSlide}
        style={fontSize ? { fontSize: fontSize } : {}}
      >
        {children}
      </button>
    </Link>
  );
};

export default NavigationButton;
