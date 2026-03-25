import Header from "./header";
import Sidebar from "./sidebar";
import MainContent from "./maincontent";
import Footer from "./footer";

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;