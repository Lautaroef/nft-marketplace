import Link from "next/link";
import Image from "next/image";
import styles from "./nft-card.module.sass";
import { IoBagAddSharp } from "react-icons/io5";
import { MdLoop } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

type Props = {
  id: number;
  fullWidth?: boolean;
  live?: boolean;
};

function NFTCard({ id, fullWidth, live }: Props) {
  return (
    <div className={`my-3 ${fullWidth && "col-12 col-md-6 col-lg-4 col-xl-3"}`}>
      <div className={styles.nft_card_styled}>
        <div className={styles.nft_img_wrapper}>
          <Link href={"/item-details"}>
            <Image
              fill
              quality={100}
              alt="nft-card"
              src={`/static/assets/images/nft-cards/${id}.jpg`}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </Link>
          <span className={styles.nft_likes}>
            <AiOutlineHeart className="me-1" />
            <span>100</span>
          </span>
          {live && <span className={styles.nft_comming_soon}>comming soon</span>}
        </div>
        <div className={`${styles.nft_info_row}`}>
          <Link href={"/item-details"} className={styles.nft_name}>
            The RenaiXance Rising The Sun
          </Link>
          <span className={styles.nft_BSC}>BSC</span>
        </div>
        <div className={`${styles.nft_info_row}`}>
          <div className={styles.nft_owner_wrapper}>
            <div className={styles.nft_owner_avatar}>
              <Image
                width={45}
                height={45}
                quality={100}
                layout="fixed"
                alt="user-avatar"
                src={`/static/assets/images/avatars/${id}.jpg`}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className={styles.nft_owner_info}>
              <span className={styles.owned_by}>owned by</span>
              <Link href={"/authors"} className={styles.nft_owner_link}>
                salvador dali
              </Link>
            </div>
          </div>
          <div className={styles.nft_bid_wrapper}>
            <span className={styles.current_bid}>current bid</span>
            <span className={styles.current_bid_value}>3.34 ETH</span>
          </div>
        </div>
        {!live && (
          <div className={`${styles.nft_info_row}`}>
            <button className={styles.nft_place_bid_btn}>
              <IoBagAddSharp className="me-2" />
              <span>place bid</span>
            </button>
            <Link href={"/login"} className={styles.nft_activity_link}>
              <MdLoop className="me-2" />
              <span>view history</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default NFTCard;
