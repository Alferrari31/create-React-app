import './App.css';
import Contact from './components/Contact.js';

function App() {
  const image = "https://avatars.githubusercontent.com/u/68002914?v=4"
  const noms = ["Mhedi", "PaulA", "Nénette"]
  const city = { 
    Paris: "Paris", 
    Londres: "Londres", 
    Tokyo: "Tokyo"}
  
  return (
    <div className="App">
  < Contact image={image} name={noms[2]} city={city.Londres}/>
    </div>
  );
}

export default App;
