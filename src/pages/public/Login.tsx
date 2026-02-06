import { useState, type Dispatch, type SetStateAction } from "react";

function Login() {
    const [status, setStatus] = useState("login");

    return (
        <>
            {status === "login" && <SignIn setStatus={setStatus} />}
            {status === "create" && <CreateAccount setStatus={setStatus} />}
            {status === "reset" && <ResetPassword setStatus={setStatus} />}
        </>
    )
}

export default Login

function CreateAccount(setStatus: Dispatch<SetStateAction<string>>) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    return (
        <>
            <section>
                <form action="submit">
                    <input id="email" type="text"
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="email">email</label>
                    <input id="password" type="password"
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor="password">senha</label>
                </form>
                <p onClick={() => setStatus("reset")}>Esqueci minha senha</p>
                {/* adicionar o acesso via OAuth aqui */}
                <div>
                    <p>Não tem cadastro?</p>
                    <p onClick={() => setStatus("create")}>Cadastre-se aqui</p>
                </div>
            </section>
        </>
    );
}

function SignIn(setStatus) {
    return(
        <></>
    );
}

function ResetPassword(setStatus) {
    return(
        <></>
    );
}