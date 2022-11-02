import Image from "next/image";
import styles from "./seller-card.module.sass";
import Link from "next/link";
import { BsCheck } from "react-icons/bs";

type Props = {
  id: number;
  fullWidth?: boolean;
  summary?: boolean;
  own?: boolean;
  seller?: boolean;
};

function SellerCard({ id, fullWidth, summary, own, seller }: Props) {
  return (
    <div className={`my-3  ${fullWidth && "col-12 col-md-6 col-lg-4"}`}>
      <div className={`${styles.seller_card} ${summary && styles.summary}`}>
        <div className={styles.seller_info}>
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
          <div className={styles.about_seller}>
            {summary && (
              <span className={styles.seller_username}>
                {(own && "Owned By") || (seller && "Created By")}
              </span>
            )}

            <Link href={"/authors"} className={styles.seller_details_link}>
              Rai Garraway
            </Link>

            {!summary && (
              <>
                <span className={styles.seller_username}>@jhondoe</span>
                <span className={styles.seller_earn}>23.3 ETH</span>
              </>
            )}
          </div>
        </div>
        {!summary && (
          <div className={styles.seller_rate}>
            <span className={styles.check_icon}>#0{id}</span>
            <Link href={"/login"} className={styles.follow_seller_link}>
              follow
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default SellerCard;
