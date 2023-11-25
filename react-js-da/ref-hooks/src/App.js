import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";

function App() {
  const linkRef = useRef(null);

  const goto = (ref) => {
    console.log(ref);
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div onClick={() => goto(linkRef.current)}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
          dignissimos. Impedit dicta quia fugit officia praesentium quos
          suscipit sapiente eligendi delectus, optio harum placeat incidunt
          ipsa, saepe quod. Consequuntur mollitia porro dolore aut corrupti
          ipsum facilis odit perspiciatis praesentium, assumenda quod in
          voluptatibus neque magni. Dolores quam voluptatum expedita, quaerat
          explicabo ipsum ad culpa doloribus rem repudiandae quis, facilis
          voluptatibus minima harum, molestiae cumque vero. Suscipit explicabo
          beatae nisi, enim dolorum temporibus itaque. Blanditiis quasi, id
          repellendus neque ipsum incidunt earum provident maxime iure quibusdam
          fugit quis tempore nostrum repellat recusandae sunt. Expedita minima
          laboriosam blanditiis natus accusantium debitis nostrum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
          dignissimos. Impedit dicta quia fugit officia praesentium quos
          suscipit sapiente eligendi delectus, optio harum placeat incidunt
          ipsa, saepe quod. Consequuntur mollitia porro dolore aut corrupti
          ipsum facilis odit perspiciatis praesentium, assumenda quod in
          voluptatibus neque magni. Dolores quam voluptatum expedita, quaerat
          explicabo ipsum ad culpa doloribus rem repudiandae quis, facilis
          voluptatibus minima harum, molestiae cumque vero. Suscipit explicabo
          beatae nisi, enim dolorum temporibus itaque. Blanditiis quasi, id
          repellendus neque ipsum incidunt earum provident maxime iure quibusdam
          fugit quis tempore nostrum repellat recusandae sunt. Expedita minima
          laboriosam blanditiis natus accusantium debitis nostrum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
          dignissimos. Impedit dicta quia fugit officia praesentium quos
          suscipit sapiente eligendi delectus, optio harum placeat incidunt
          ipsa, saepe quod. Consequuntur mollitia porro dolore aut corrupti
          ipsum facilis odit perspiciatis praesentium, assumenda quod in
          voluptatibus neque magni. Dolores quam voluptatum expedita, quaerat
          explicabo ipsum ad culpa doloribus rem repudiandae quis, facilis
          voluptatibus minima harum, molestiae cumque vero. Suscipit explicabo
          beatae nisi, enim dolorum temporibus itaque. Blanditiis quasi, id
          repellendus neque ipsum incidunt earum provident maxime iure quibusdam
          fugit quis tempore nostrum repellat recusandae sunt. Expedita minima
          laboriosam blanditiis natus accusantium debitis nostrum?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          ref={linkRef}
        >
          Learn React
        </a>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
          distinctio recusandae illum ab ducimus officiis quas doloremque quis
          optio fugiat veniam deleniti obcaecati blanditiis quo eveniet sed
          nobis ratione earum fugit libero impedit nam. In animi, tempore rerum
          nihil suscipit expedita iste nam, soluta eos, numquam ratione?
          Suscipit itaque impedit cumque voluptate vel nobis exercitationem
          tempore dolores dolore et? Aliquid omnis mollitia nostrum adipisci
          voluptatum reprehenderit, reiciendis excepturi eaque debitis eius
          deserunt fugiat asperiores ab commodi voluptas dolor molestiae
          dignissimos, porro sit itaque obcaecati inventore, molestias
          voluptatibus? Doloremque odio voluptas exercitationem quam itaque
          placeat inventore neque, autem esse eveniet aperiam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
          distinctio recusandae illum ab ducimus officiis quas doloremque quis
          optio fugiat veniam deleniti obcaecati blanditiis quo eveniet sed
          nobis ratione earum fugit libero impedit nam. In animi, tempore rerum
          nihil suscipit expedita iste nam, soluta eos, numquam ratione?
          Suscipit itaque impedit cumque voluptate vel nobis exercitationem
          tempore dolores dolore et? Aliquid omnis mollitia nostrum adipisci
          voluptatum reprehenderit, reiciendis excepturi eaque debitis eius
          deserunt fugiat asperiores ab commodi voluptas dolor molestiae
          dignissimos, porro sit itaque obcaecati inventore, molestias
          voluptatibus? Doloremque odio voluptas exercitationem quam itaque
          placeat inventore neque, autem esse eveniet aperiam!
        </p>
      </header>
    </div>
  );
}

export default App;
