import { Aside } from "./components/Aside";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        gap: 40,
        padding: 20,
      }}
    >
      <Header />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          gap: 40,
        }}
      >
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
