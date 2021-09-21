import { useForm } from "react-hook-form";
import { Form, Input, Button, Button1, P } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router";

const schema = yup.object().shape({
  username: yup.string().required("campo obrigatorio").max(18),
  password: yup.string().required("campo obrigatorio").min(4),
});

function Login({ setLoggedIn }) {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const StartUser = (data) => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", { ...data })
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("authToken", res.data.access);
        setLoggedIn(true);
        history.push("/logged");
      })
      .catch((err) => console.log(err));
  };
  const RegisterPage = () => {
    history.push("/register");
  };
  return (
    <>
      <h1>Formulario!</h1>
      <Form onSubmit={handleSubmit(StartUser)}>
        <h2>Login</h2>
        <div>
          <Input type="text" placeholder="Usuario" {...register("username")} />
          {errors.username && <span>{errors.username.message}</span>}
          <Input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <Button type="submit"> Entrar</Button>
        <div>
          <P>Não é Cadastrado?</P>
          <Button1 onClick={RegisterPage}> Cadastrar</Button1>
        </div>
      </Form>
    </>
  );
}

export default Login;
