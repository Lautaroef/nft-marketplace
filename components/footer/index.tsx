import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.sass";
import { useTheme } from "next-themes";
import { RiSendPlane2Fill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";

function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={styles.app_footer}>
      <div className="container py-5">
        <div className="row">
          <div className="py-3 col-12 col-xl-3">
            <div className="app_logo pb-3">
              <Link href={"/"}>
                {theme && (
                  <Image
                    alt="app_logo"
                    src={`/static/assets/images/f_logo_${theme}.png`}
                    width={133}
                    height={56}
                    quality={100}
                    loading="eager"
                  />
                )}
              </Link>
            </div>
            <p className="m-0 pe-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti qui ex
              nisi earum reiciendis.
            </p>
          </div>
          <div className="py-3 col-6 col-lg-4 col-xl-2">
            <p className={`${styles.footer_col_title} m-0 py-3`}>My Account</p>
            <ul className={styles.footer_nav_list}>
              <li className={styles.footer_nav_list_item}>
                <Link href="/authors" className={styles.footer_nav_link}>
                  Authors
                </Link>
              </li>
              <li className={styles.footer_nav_list_item}>
                <Link href="/wallet-connect" className={styles.footer_nav_link}>
                  Collection
                </Link>
              </li>
              <li className={styles.footer_nav_list_item}>
                <Link href="/edit-profile" className={styles.footer_nav_link}>
                  Author Profile
                </Link>
              </li>
              <li className={styles.footer_nav_list_item}>
                <Link href="/create-item" className={styles.footer_nav_link}>
                  Create Item
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-3 col-6 col-lg-4 col-xl-2">
            <p className={`${styles.footer_col_title} m-0 py-3`}>Resources</p>
            <ul className={styles.footer_nav_list}>
              <li className={styles.footer_nav_list_item}>
                <Link href="/help-center" className={styles.footer_nav_link}>
                  Help & Support
                </Link>
              </li>
              <li className={styles.footer_nav_list_item}>
                <Link href="/auctions" className={styles.footer_nav_link}>
                  Live Auctions
                </Link>
              </li>
              <li className={styles.footer_nav_list_item}>
                <Link href="/item-details" className={styles.footer_nav_link}>
                  Item Details
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-3 col-6 col-lg-4 col-xl-2">
            <p className={`${styles.footer_col_title} m-0 py-3`}>Company</p>
            <ul className={styles.footer_nav_list}>
              <li className={styles.footer_nav_list_item}>
                <Link href="/explore" className={styles.footer_nav_link}>
                  Explore
                </Link>
              </li>
              <li className={styles.footer_nav_list_item}>
                <Link href="/contact" className={styles.footer_nav_link}>
                  Contact us
                </Link>
              </li>
              <li className={styles.footer_nav_list_item}>
                <Link href="/blog" className={styles.footer_nav_link}>
                  Our Blog
                </Link>
              </li>
              <li className={styles.footer_nav_list_item}>
                <Link href="/faq" className={styles.footer_nav_link}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-3 col-12 col-md-6 col-xl-3">
            <p className={`${styles.footer_col_title} m-0 py-3`}>Subscribe Us</p>
            <div className="subscribe_us_form_wrapper py-2">
              <form className={styles.footer_form} onSubmit={(e) => e.preventDefault()}>
                <input type="email" required placeholder="info@yourgmail.com" />
                <button type="submit">
                  <RiSendPlane2Fill />
                </button>
              </form>
            </div>
            <div className="social_media_links_wrapper pt-4">
              <ul className={styles.footer_social_list}>
                <li>
                  <a
                    className={styles.footer_social_link}
                    href="https://github.com/mmm-066550"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <FiGithub />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.footer_social_link}
                    href="https://www.linkedin.com/in/mmm066550"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.footer_social_link}
                    href="https://www.fb.com/MOUSTAPHAMAHMMOUD"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <AiFillFacebook />
                  </a>
                </li>

                <li>
                  <a
                    className={styles.footer_social_link}
                    href="https://www.upwork.com/freelancers/~01cfdc33084883523e"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <SiUpwork />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.footer_social_link}
                    href="https://www.instagram.com/moustapha.mm"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
                {/* <li>
                  <a
                    className={styles.footer_social_link}
                    href="/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <BsTwitter />
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
