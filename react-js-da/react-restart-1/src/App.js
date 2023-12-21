import Introduction from "./components/Introduction";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Profile />

      <Introduction nama="naruto uzumaki" />
      <Introduction nama="hinata hyuga" />
    </div>
  );
}

export default App;
