import "./App.css";
import Content from "./Components/Content";
import Main from "./Components/Main";

function App() {
  return (
    <>
      <Main />
      <Content
        title="What's out there?"
        content="Pointers to the world's online information, subjects, W3 servers, etc."
      />
      <Content title="Help" content="on the browser you are using." />
      <Content
        title="Software Products"
        content="A list of W3 project components and their current state. (e.g. Line Mode, X11 Viola, NeXTStep, Servers, Tools, etc.)"
      />
    </>
  );
}

export default App;
