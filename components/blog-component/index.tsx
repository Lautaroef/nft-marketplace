import Image from "next/image";
import Link from "next/link";
import styles from "./blog-component.module.sass";

function BlogComponent({ id }: { id: number }) {
  return (
    <div className="my-3 col-12 col-md-6 col-lg-4">
      <div className={styles.blog_component}>
        <div className={styles.blog_img_wrapper}>
          <Link href={"/blog-details"}>
            <Image
              fill
              quality={100}
              alt="blog-card-img"
              src={`/static/assets/images/blog/${id}.jpg`}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </Link>
        </div>
        <div className={styles.blog_owner_info_row}>
          <div className={styles.blog_owner}>
            <div className={styles.owner_avatar}>
              <Image
                fill
                quality={100}
                alt="blog-owner-avatar"
                src={`/static/assets/images/avatars/${id}.jpg`}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className={styles.owner_name}>
              <span>post owner</span>
              <Link href={"/authors"}>Silvador dali</Link>
            </div>
          </div>
          <p className={styles.blog_date}>Apr 1, 2022</p>
        </div>
        <div className="my-3">
          <Link href={"/blog-details"} className={styles.blog_link}>
            The Next Big Trend In Crypto
          </Link>
        </div>
        <p className={styles.blog_overview}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil suscipit unde
          eveniet, iusto ab ducimus nulla fugit non alias culpa quis nam iure corporis
          exercitationem. Harum maxime facere libero repellendus.
        </p>
        <div className="py-3">
          <Link href={"/blog-details"} className={styles.read_more_link}>
            read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogComponent;
