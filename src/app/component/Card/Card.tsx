import styles from "./Card.module.scss";

type CardProps = {
    image: string;
    alt: string;
    title: string;
    description: string;

}

export const Card = ({ image,alt, title, description }: CardProps) => {
    return (
        <section className={styles.card}>
            <img className={styles.card__image} src={image} alt={alt} />

            <article className={styles.card__content}>
                <h1>{title}</h1>
                <p>{description}</p>
            </article>
        </section>
    )
}