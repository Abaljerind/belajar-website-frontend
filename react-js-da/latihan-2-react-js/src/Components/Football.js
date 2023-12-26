function Football(props) {
  // dibawah ini adalah arrow function
  //   const shoot = () => {
  //     alert("Great Shot!");
  //   };

  // mengirim argument ke sebuah event handler seperti onClick menggunakan arrow function.
  const shoot = (goal) => {
    alert(goal);
  };

  return (
    <>
      <button onClick={() => shoot("Goal!!")}>{props.shot}</button>
    </>
  );
}

export default Football;
