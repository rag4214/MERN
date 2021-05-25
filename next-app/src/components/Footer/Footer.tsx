import { forwardRef } from "react";

import styles from "./Footer.module.scss";

export type FooterProps = Omit<JSX.IntrinsicElements["footer"], "ref">;
const Footer = forwardRef<HTMLElement, FooterProps>((props, ref) => (
  <footer ref={ref} className={styles.footer} {...props} />
));

export default Footer;
