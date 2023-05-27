import React from "react";
import styles from "./styles.module.css";

type ArtistProps = {
  name: string;
  category: string;
  image: string;
};

function Artist(props: ArtistProps) {
  return (
    <div className={styles.card}>
      <img className={styles.artistImage} src={props.image} alt={props.name} />
      <div className={styles.overlay}>
        <h2 className={styles.artistName}>{props.name}</h2>
        <p className={styles.category}>{props.category}</p>
      </div>
    </div>
  );
}

export default Artist;
