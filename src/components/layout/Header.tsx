import icon from "@/assets/icon.png";
import menu from "@/assets/menu-ico.png";

function Header() {
    return (
        <header className="w-full flex justify-center bg-neutral-200">
            <div className="w-[80%] flex justify-between items-center">
                <img src={icon} alt="logo-icon" className="h-12" />
                <div className="min-[431px]:hidden flex items-center">
                    <button className="mr-5 py-8 px-6 rounded-5 ">Entrar</button>
                    <img src={menu} alt="menu-ico" className="h-12" />
                </div>
                <div className="max-[431px]:hidden flex items-center">
                    <nav>
                        <ul className="flex gap-4 mx-5">
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Contato</a></li>
                            <li><a href="#">Planos</a></li>
                        </ul>
                    </nav>
                    <button className="mx-2 my-2 py-3 px-6 rounded-3xl border-4 bg-indigo-400 border-indigo-400 font-bold text-neutral-200 hover:bg-neutral-200 hover:text-indigo-400 hover:cursor-pointer ease-linear duration-200">Entrar</button>
                </div>
            </div>
        </header>
    );
}

export default Header;