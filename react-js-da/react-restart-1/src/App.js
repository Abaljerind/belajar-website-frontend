import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Navigation from "./components/Navigation";
import NewsFeed from "./components/NewsFeed";
import TextBody from "./components/TextBody";

function App() {
  return (
    <div>
      <Introduction />
      <Navigation />
      <TextBody />
      <NewsFeed />
      <Footer />
    </div>
  );
}

export default App;
