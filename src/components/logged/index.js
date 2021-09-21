import { Link } from "react-router-dom";

function Logged() {
  return (
    <>
      <h1> LOGADO</h1>
      <Link to="/">
        <button>Voltar</button>
      </Link>
    </>
  );
}
export default Logged;
