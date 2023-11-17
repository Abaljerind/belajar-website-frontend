import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/myButton";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// contoh penggunaan arrow function
const App = () => {
  const navHeading = "Navigation Bar";
  const navText = "Sosial Media";

  return (
    <div className="App">
      <header className="App-header">
        <Navbar navText={navText} navHeading={navHeading} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Halo selamat datang! 😊</p>
        <MyButton />
        <Footer />
      </header>
    </div>
  );
};

export default App;
