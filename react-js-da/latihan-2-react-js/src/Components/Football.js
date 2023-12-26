function Football(props) {
  const shoot = () => {
    alert("Great Shot!");
  };

  return (
    <>
      <button onClick={shoot}>{props.shot}</button>
    </>
  );
}

export default Football;
