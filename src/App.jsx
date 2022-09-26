import "./App.css";
import Meals from "./components/Meals";
import Favorites from "./components/Favorites";
import Modal from "./components/Modal";
import Search from "./components/Search";
import { useGlobalContext } from "./Context";

function App() {
  const { showModal, favorites } = useGlobalContext();

  return (
    <div className="App">
      <main>
        <Search />
        {favorites.length > 0 && <Favorites />}
        <Meals />
        {showModal && <Modal />}
      </main>
    </div>
  );
}

export default App;
