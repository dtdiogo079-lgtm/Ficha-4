// PONTO DE PARTIDA DA AULA 4
//
// É exatamente onde o professor acabou o live coding do Bloco 1:
// uma app React criada com o Vite, já sem o código de exemplo.
//
// Para pôr a correr (dentro da pasta client/ do teu repo):
//     npm install
//     npm run dev
// e abrir http://localhost:5173
//
// Tarefa 1: substitui este array vazio pelo array cards do teu server
// (o que fizeste na aula 2).
import { useState } from "react";
import Card from "./Card";




const cards = [{ name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Raio Carmesim", type: "Feitiço", attack: 6, defense: 0 },
  { name: "Muralha de Granito", type: "Estrutura", attack: 0, defense: 10 },
  { name: "Lobo das Cinzas", type: "Criatura", attack: 5, defense: 3 },];

function App() {

const [cartaSorte, setCartaSorte] = useState(null);

function escolherCarta() {
const indice = Math.floor(Math.random() * cards.length);
  setCartaSorte(cards[indice]);}

const [tipo, setTipo] = useState("Todas");
const [pesquisa, setPesquisa] = useState("");

const cartasFiltradas = cards.filter((card) => {
const correspondeTipo =
tipo === "Todas" ||
(tipo === "Criatura" && card.type === "Criatura") ||
(tipo === "Feitiço" && card.type === "Feitiço");

const correspondePesquisa = card.name
  .toLowerCase()
  .includes(pesquisa.toLowerCase());

return correspondeTipo && correspondePesquisa;

});
  
  return (
    
    <main>
      
      <h1>A minha coleção</h1>

  <p>
    Tenho {cards.length} cartas. Estão à vista {cartasFiltradas.length}.
  </p>
  
  <div>
  <button onClick={escolherCarta}>Carta à sorte</button>

  <button onClick={() => setTipo("Todas")}>Todas</button>
  <button onClick={() => setTipo("Criatura")}>Só criaturas</button>
  <button onClick={() => setTipo("Feitiço")}>Só feitiços</button>
</div>
<div>
    <input
      type="text"
      placeholder="Pesquisar carta..."
      value={pesquisa}
      onChange={(e) => setPesquisa(e.target.value)}
    />
  </div>


{cartaSorte && (
  <section>
    <h2>Carta escolhida</h2>
    <Card card={cartaSorte} />
  </section>
)}

  

  {cartasFiltradas.map((card) => (
    <Card key={card.name} card={card} />
  ))}
</main>

);
}

export default App;