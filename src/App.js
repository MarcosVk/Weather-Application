import { DataHandle } from "./Context/dataContext";
import Header from "./Header";
import SearchBar from "./SearchBar";
import UserData from "./UserData";
import Weather from "./Weather";
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <DataHandle>
        <Header title="Mega's Weather Application" />
        <Routes>
        <Route path="/" element={<><SearchBar/><Weather /></>} />
          <Route path="/checkuser" element={<UserData/>}/>
        </Routes>
      </DataHandle>
    </div>
  );
}

export default App;
