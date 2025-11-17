import styles from "./profilecard.module.scss";
import Image from "next/image";
import profileImage from "@/app/assets/images/avatar-michelle.jpg";

export const ProfileCard = () => {
    return (
        <div className={styles.profilecard}>
            <Image className={styles.profilecard__image} src={profileImage} alt="profile image" />
            <div className={styles.profilecard__content}>
                <h3>Michelle Appleton</h3>
                <p>28 Jun 2020</p>
            </div>
            <button className={styles.profilecard__button}></button>
        </div>
    )
}