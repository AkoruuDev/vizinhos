function Header() {
    return (
        <section className="w-full flex justify-center bg-neutral-200">
            <div className="w-[80vw] flex justify-between items-center">
                <img src="./src/assets/icon.png" alt="logo-icon" className="h-[50px]" />
                <div className="min-[431px]:hidden flex items-center">
                    <div className="mr-[20px] py-[10px] px-[25px] rounded-[20px] ">Entrar</div>
                    <img src="./src/assets/menu-ico.png" alt="menu-ico" className="h-[50px]" />
                </div>
                <div className="max-[431px]:hidden flex items-center">
                    <nav>
                        <div>Sobre nós</div>
                        <div>Contato</div>
                        <div>Planos</div>
                    </nav>
                    <div className="mr-[20px] py-[10px] px-[25px] rounded-[20px] border-[3px] bg-indigo-400 border-indigo-400 font-bold text-neutral-200 hover:bg-neutral-200 hover:text-indigo-400 hover:cursor-pointer ease-linear duration-200">Entrar</div>
                </div>
            </div>
        </section>
    );
}

export default Header;