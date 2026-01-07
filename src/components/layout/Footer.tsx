import Menu from "./Menu";
import MainSpacer from "./spacers/MainSpacer";

function Footer() {
    return (
        <footer className="flex justify-center w-full mt-16 p-4 bg-neutral-200">
            <div className="flex flex-col items-center w-full">
                <div>
                    <Menu />
                </div>
                <MainSpacer />
                <div className="text-center">
                    <p>Todos os direitos reservados | Grupo Majas 2025</p>
                    <p>Desenvolvido por <a href="#">Allan Majas</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;