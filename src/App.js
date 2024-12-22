import { DataHandle } from "./Context/dataContext";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <DataHandle>
        <Header title="Vicky's Weather Application" />
        <SearchBar/>
        <Weather/>
      </DataHandle>
    </div>
  );
}

export default App;
