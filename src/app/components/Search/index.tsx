import styles from "./styles.module.css";

function Search() {
  return (
    <form className={styles.searchForm}>
      <div className={styles.searchContainer}>
        <label htmlFor="song" className={styles.searchLabel}>
          Buscar Canción
        </label>
        <input type="text" id="song" className={styles.searchInput} placeholder="Sorry Justin Bieber" />
      </div>
      <button type="submit" className={styles.searchButton}>
        Buscar
      </button>
    </form>
  );
}

export default Search;
