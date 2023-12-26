function NewsList(props) {
  const styles = {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  };
  return (
    <>
      <ul>
        <li>
          <h3>{props.title}</h3>
        </li>
      </ul>
      <p style={styles}>
        <a href="#">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem architecto, perferendis consectetur quas, mollitia quae
          veritatis quo voluptas dolorem, sit ullam corrupti quia quos eius
          fugit ducimus optio! Dolores earum at ipsa quisquam reprehenderit
          architecto, laudantium, ex praesentium, sed debitis consequatur.
          Incidunt molestiae ullam temporibus odit vel accusantium porro
          ducimus.
        </a>
      </p>
    </>
  );
}

export default NewsList;
