import CTA from "../../components/homeComponents/CTA";
import Ecosystem from "../../components/homeComponents/Ecosystem";
import Features from "../../components/homeComponents/Features";
import Hero from "../../components/homeComponents/Hero";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <section className="mt-6">Sobre nós</section>
                <Ecosystem />
                <Features />
                <CTA />
            </main>
            <Footer />
        </>
    )
}

export default Home