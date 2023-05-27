import Artist from "../../components/Artist";
import "./styles.css";

function App() {
  return (
    <main>
      <h1 className="title">Music App</h1>
      <Artist name="Justin Bieber" category="Artista" image = "https://www.rionegro.com.ar/wp-content/uploads/2022/02/Justin-1.jpg" />
      <Artist name="Dua Lipa" category="Artista"  image = "https://www.losandes.com.ar/resizer/9mr-cBxbzky_uMEbwZxP7UUvoP0=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/MPUTSVC5IJDKPJLE7LBUWGLHE4.png"/>
      <Artist name="Dillom" category="Artista"  image ="https://media.lacapital.com.ar/p/65f5b8343356343037ab39e9b25ebfa2/adjuntos/203/imagenes/030/530/0030530243/1200x675/smart/dillom1jpg.jpg" />
    </main>
  );
}

export default App;