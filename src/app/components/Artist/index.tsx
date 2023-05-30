import React, { useState } from "react";
import styles from "./styles.module.css";

type ArtistProps = {
  name: string;
  category: string;
  image: string;
  isFav?: boolean;
};

function Artist(props: ArtistProps) {
  const [isFav, setIsFav] = useState(props.isFav);

  function handleFav() {
    setIsFav(!isFav);
  }

  return (
    <div className={`${styles.card} ${styles.enlargedCard}`}>
      <div className={styles.artistImageContainer}>
        <img className={styles.artistImage} src={props.image} alt={props.name} />
      </div>
      <div className={styles.artistInfo}>
        <h2>{props.name}</h2>
        <p className={styles.category}>{props.category}</p>
        <button className={styles.favoriteButton} onClick={handleFav}>
          {isFav ? (
            <span className={styles.heartIconRed}>❤️</span>
          ) : (
            <span className={styles.heartIconBlack}>🖤</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default Artist;
