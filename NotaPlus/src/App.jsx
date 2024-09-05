// import "./App.css";
import { Header } from "./components/Header";
import AppRouter from "./routers/AppRouter";


function App() {
  return <>
    <main className="bg-custom p-4 h-screen">
      <Header />
      <AppRouter/>

    </main>
  </>;
}

export default App;
