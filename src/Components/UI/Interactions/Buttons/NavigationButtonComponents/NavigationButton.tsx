import { Link } from "react-scroll";

import styles from "./NavigationButton.module.css";

interface AnchorButtonProps {
  children: string;
  href: string;
  realLink?: boolean;
  fontSize?: number | string;
  style?: React.CSSProperties;
}

const NavigationButton = ({
  children,
  href,
  realLink,
  fontSize,
  style,
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
    <Link smooth={true} to={href} style={style} className={styles.link}>
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
