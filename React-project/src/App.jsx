import "./App.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { MainContainer } from "./MainContainer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
