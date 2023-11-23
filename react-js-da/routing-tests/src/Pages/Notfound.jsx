import { useNavigate } from "react-router-dom";
const Notfound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>404: Page Not Found!!!</h1>
      <button onClick={() => navigate("/")}>Back to Home!!!</button>
    </>
  );
};

export default Notfound;
