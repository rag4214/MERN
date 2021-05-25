import { forwardRef } from "react";

import styles from "./Header.module.scss";

export type HeaderProps = Omit<JSX.IntrinsicElements["header"], "ref">;
const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => (
  <header ref={ref} className={styles.header} {...props} />
));

export default Header;
