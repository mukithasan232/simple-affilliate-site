import styles from "./Rating.module.css";

interface RatingProps {
    value: number;
    count?: number;
    showLabel?: boolean;
}

export default function Rating({ value, count, showLabel = true }: RatingProps) {
    const fullStars = Math.floor(value);
    const hasHalfStar = value % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className={styles.rating}>
            <div className={styles.stars}>
                {"★".repeat(fullStars)}
                {hasHalfStar && "½"}
                {"☆".repeat(emptyStars)}
            </div>
            {showLabel && (
                <span className={styles.label}>
                    {value} / 5 {count ? `(${count} reviews)` : ""}
                </span>
            )}
        </div>
    );
}
