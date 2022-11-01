import Link from "next/link";
import Image from "next/image";
import styles from "./component.module.sass";

type Props = {
  id: number;
  name: string;
  link: string;
  icon?: JSX.Element;
};

function WalletConnectComponent({ id, name, link, icon }: Props) {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 my-3">
      <div className={styles.wallet_connect_component}>
        <div className={`${styles.component_icon} ${icon && styles.iconed}`}>
          {!icon ? (
            <Image
              width={55}
              height={55}
              quality={100}
              loading="eager"
              style={{ objectFit: "cover" }}
              alt="wallet_connect_method_icon"
              src={`/static/assets/images/connects/${id}.png`}
            />
          ) : (
            icon
          )}
        </div>
        <Link href={link} className={styles.login_link}>
          {name}
        </Link>
        <div className={styles.component_overview}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum perferendis error
          provident aut qui.
        </div>
      </div>
    </div>
  );
}

export default WalletConnectComponent;
