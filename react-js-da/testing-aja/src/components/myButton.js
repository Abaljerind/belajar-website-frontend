// contoh penggunaan component menggunakan arrow function
const MyButton = (props) => {
  return (
    <div>
      <button onClick={() => props.clicked()}>Click me! 👈</button>
    </div>
  );
};

export default MyButton;
