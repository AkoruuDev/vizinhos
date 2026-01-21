import icon from "@/assets/icon.png";
import menu from "@/assets/menu-ico.png";
import Menu from "./Menu";

function Header() {
    return (
        <header className="w-full flex justify-center bg-neutral-200">
            <div className="w-[80%] flex justify-between items-center">
                <img src={icon} alt="logo-icon" className="h-18" />
                <div className="min-[531px]:hidden flex items-center">
                    <button className="mx-2 my-2 py-3 px-6 rounded-3xl border-4 bg-indigo-400 border-indigo-400 font-bold text-neutral-200 hover:bg-neutral-200 hover:text-indigo-400 hover:cursor-pointer ease-linear duration-200">Entrar</button>
                    <img src={menu} alt="menu-ico" className="h-12" />
                </div>
                <div className="max-[531px]:hidden flex items-center">
                    <Menu />
                    <button className="mx-2 my-2 py-3 px-6 rounded-3xl border-4 bg-indigo-400 border-indigo-400 font-bold text-neutral-200 hover:bg-neutral-200 hover:text-indigo-400 hover:cursor-pointer ease-linear duration-200">Entrar</button>
                </div>
            </div>
        </header>
    );
}

export default Header;