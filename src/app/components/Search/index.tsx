import styles from "./styles.module.css";

function Search(){
    return (
        <form>
            <div>
                <label htmlFor= "song">Buscar Canción</label>
                <input type = "text" id= "song" placeholder="Sorry Justin Bieber"></input>
            </div>
            <button type="submit">Buscar</button>
        </form>
            
    )
}

export default Search