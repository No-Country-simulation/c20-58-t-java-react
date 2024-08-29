import "./App.css";
import Navbar from "./components/NavBar";
import AppRouter from "./routers/AppRouter";


function App() {
  return <>
    <div>
      <Navbar/>
      <AppRouter/>
    </div>
  </>;
}

export default App;
