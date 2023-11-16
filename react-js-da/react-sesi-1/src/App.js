import Introduction from "./components/introduction";
import Profile from "./components/profile";

function App() {
  return (
    <>
      <h1>Selamat datang di SESI 1 React JS</h1>
      <p>halo, saya sedang belajar react-js disini</p>

      <Profile />

      {/* mengirim data name dari App.js ke introduction.js */}
      <Introduction name="naruto uzumaki" />
      <Introduction name="hinata hyuga" />
    </>
  );
}

export default App;
