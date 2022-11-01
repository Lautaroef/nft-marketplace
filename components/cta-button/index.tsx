import styles from "./cta-button.module.sass";
import Link from "next/link";

type Props = {
  children: any;
  href: string;
};

function CtaButton({ children, href }: Props) {
  return (
    <Link href={`${href}`} className={styles.cta_button_link}>
      <span>{children}</span>
    </Link>
  );
}

export default CtaButton;
