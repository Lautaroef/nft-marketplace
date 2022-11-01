import Link from "next/link";
import styles from "./view-row.module.sass";

type Props = {
  children: React.ReactNode;
  title?: string;
  link?: string;
  g_0?: boolean;
};

function ViewRow({ children, title, link, g_0 }: Props) {
  return (
    <div className={`${styles.view_row} mb-5`}>
      {(title || link) && (
        <div className="container">
          <div className={`row py-2 align-items-center`}>
            <div className="col">
              <h4 className={styles.view_row_title}>{title}</h4>
            </div>
            {link && (
              <div className="col text-end">
                <Link href={link} className={styles.view_row_more_link}>
                  explore more
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="container">
        <div className={`${g_0 && "g-0"} row`}>{children}</div>
      </div>
    </div>
  );
}

export default ViewRow;
