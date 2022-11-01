import Link from "next/link";
import Image from "next/image";
import styles from "./category-card.module.sass";

type Props = {
  id: number;
  fullWidth?: boolean;
  category: {
    id: number;
    name: string;
  };
};

function CategoryCard({ id, fullWidth, category }: Props) {
  return (
    <div className={`my-3 ${fullWidth && "col-12 col-md-6 col-lg-4 col-xl-3"}`}>
      <div className={styles.category_card_styled}>
        <h3 className={styles.category_name}>{category?.name}</h3>
        <div className={styles.category_img_wrapper}>
          <Link href={"/explore"}>
            <Image
              fill
              quality={100}
              alt="category-card"
              src={`/static/assets/images/categories/${id}.jpg`}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
