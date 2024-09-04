// import "./App.css";
import { Header } from "./components/Header";
import AppRouter from "./routers/AppRouter";


function App() {
  return <>
    <main className="bg-pennBlue_bg p-4 bg-fondoOpcion1 h-screen">
      <Header />
      <AppRouter/>

    </main>
  </>;
}

export default App;
