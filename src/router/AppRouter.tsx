import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home  from "../pages/platform/Home";
import Plans from "../pages/platform/Plans";
import Login from "../pages/platform/Login";

import ClientHome from "../pages/client/ClientHome";
import ClientAbout from "../pages/client/ClientAbout";
import ClientContact from "../pages/client/ClientContact";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* ROTAS DA PLATAFORMA */}
                <Route path="/" element={ <Home /> } />
                <Route path="/plans" element={ <Plans /> } />
                <Route path="/login" element={ <Login /> } />

                {/* ROTAS DOS CLIENTES */}
                <Route path="/:site-name">
                    <Route index element={ <ClientHome /> } />
                    <Route path="sobre" element={ <ClientAbout /> } />
                    <Route path="contato" element={ <ClientContact /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
