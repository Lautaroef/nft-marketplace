import Link from "next/link";
import Image from "next/image";

import styles from "./collection-card.module.sass";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";

type Props = {
  id: number;
  fullWidth?: boolean;
  cols?: number;
};

function CollectionCard({ id, fullWidth, cols }: Props) {
  return (
    <div className={`my-3 ${fullWidth && `col-12 col-md-6 col-lg-4 col-xl-${cols || 3}`}`}>
      <div className={styles.collection_card}>
        <div className={styles.collection_imgs_wrapper}>
          <span className={styles.collection_likes}>
            <AiOutlineHeart className="me-1" />
            <span>100</span>
          </span>
          <div className={styles.seller_avatar}>
            <span className={styles.check_icon}>
              <BsCheck />
            </span>
            <Image
              fill
              alt="user_avatar"
              src={`/static/assets/images/avatars/${id}.jpg`}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className={styles._image}>
            <Image
              fill
              quality={100}
              alt="collection_bg"
              src={`/static/assets/images/collection/${id}/full.jpg`}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className={styles.square_image_1}>
            <Image
              fill
              quality={100}
              alt="collection_bg_1"
              src={`/static/assets/images/collection/${id}/sm-1.jpg`}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className={styles.square_image_2}>
            <Image
              fill
              quality={100}
              alt="collection_bg_2"
              src={`/static/assets/images/collection/${id}/sm-2.jpg`}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
        <div className={styles.collection_info}>
          <Link href="/authors" className={styles.collection_details_link}>
            creative art collection
          </Link>
          <div className={styles.collection_author}>
            <span>created by</span>
            <Link href="/authors" className={styles.collection_author_link}>
              Stephan Doe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
