function Content(props) {
  return (
    <>
      <p>
        <a href="#">{props.title}</a>
      </p>
      <p>{props.content}</p>
    </>
  );
}

export default Content;
