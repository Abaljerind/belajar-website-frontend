import { useNavigate } from "react-router-dom";
const Second = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>ABOUT PAGES</h3>
      <button onClick={() => navigate("/")}>Back to Home!</button>
    </>
  );
};

export default Second;
