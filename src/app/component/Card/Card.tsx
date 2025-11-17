import styles from "./Card.module.scss";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { ProfileCard } from "../ProfileCard";

type CardProps = {
    image: StaticImageData;
    alt: string;
    title: string;
    description: string;

}

export const Card = ({ image,alt, title, description }: CardProps) => {
    return (
        <section className={styles.card}>
            <Image className={styles.card__image} src={image} alt={alt} />
            <article className={styles.card__content}>
                <h1>{title}</h1>
                <p>{description}</p>
                <ProfileCard />
            </article>
        </section>
    )
}