import { Link } from "react-scroll";

import styles from "./NavigationButton.module.css";

interface AnchorButtonProps {
  children: string;
  href: string;
  realLink?: boolean;
  fontSize?: number | string;
  padding?: string;
  style?: React.CSSProperties;
}

const NavigationButton = ({
  children,
  href,
  realLink,
  fontSize,
  padding,
  style,
}: AnchorButtonProps) => {
  const buttonStyle: { fontSize?: string | number; padding?: string } = {};

  if (fontSize) {
    buttonStyle.fontSize = fontSize;
  }

  if (padding) {
    buttonStyle.padding = padding;
  }

  if (realLink === true) {
    return (
      <a target="_blank" rel="noreferrer" href={href}>
        <button className={styles.btnSlide} style={buttonStyle}>
          {children}
        </button>
      </a>
    );
  }

  return (
    <Link smooth={true} to={href} style={style} className={styles.link}>
      <button className={styles.btnSlide} style={buttonStyle}>
        {children}
      </button>
    </Link>
  );
};

export default NavigationButton;
