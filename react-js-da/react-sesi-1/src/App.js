import "./App.css";
import Introduction from "./components/introduction";

function App() {
  return (
    <div>
      <h1>Selamat datang di SESI 1 React JS</h1>
      <p>halo, saya sedang belajar react-js disini</p>

      {/* mengirim data name dari App.js ke introduction.js */}
      <Introduction name="naruto uzumaki" />
      <Introduction name="hinata hyuga" />
    </div>
  );
}

export default App;
