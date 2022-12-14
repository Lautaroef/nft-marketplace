import styles from "./navbar.module.sass";
import Link from "next/link";

const siteMap: SiteMapProps[] = [
  { id: 0, name: "home", route: "/" },
  { id: 1, name: "explore", route: "/explore" },
  { id: 3, name: "blog", route: "/blog" },
  { id: 4, name: "contact", route: "/contact" },
  { id: 5, name: "login", route: "/login" },
];

function Navbar() {
  return (
    <nav className={`${styles.main_navbar_lg}`}>
      <ul className={styles.navigation_list}>
        {siteMap.map((el, i) => {
          return (
            <li key={i} className={styles.nav_item}>
              <Link href={el.route} className={styles.nav_link}>
                {el.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
