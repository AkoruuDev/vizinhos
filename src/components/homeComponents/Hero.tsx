import { useEffect, useState } from "react";
import images, { type Image } from "./HeroImages";

const activeImages = images.filter(e => e.isActive);

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev =>
                prev === activeImages.length-1 ? 0: prev + 1
            )
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="flex flex-col items-center relative">
            <ImageComponent image={activeImages[currentIndex]} />
            <HeroDots 
                total={activeImages.length}
                currentIndex={currentIndex}
                onSelect={setCurrentIndex}
            />
        </section>
    );
}

export default Hero;

function ImageComponent({image} : {image: Image}) {
    const picture = (
        <picture className="w-full">
            <source media="(min-width: 1024px)" srcSet={image.src.wide} />
            <source media="(min-width: 640px)" srcSet={image.src.landscape} />
            <img src={image.src.square} alt={image.alt} className="w-full h-auto" />
        </picture>
    )

    return(
        <div key={image.id}>
            {image.link ? (
                <a href={image.link}>{picture}</a>
            ) : (
                picture
            )}
        </div>
    )
}

function HeroDots({total, currentIndex, onSelect} : {total: number, currentIndex: number, onSelect: (index: number) => void}) {
    return (
        <div className="absolute bottom-3">
            {Array.from({ length: total }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onSelect(index)}
                    aria-label={`Hero ${index + 1}`}
                    className={`size-4 m-2 rounded-full border-2 border-indigo-400 ${index === currentIndex ? 'bg-indigo-400' : 'bg-transparent' } ${index === currentIndex ? 'w-8' : 'bg-transparent' } ease-linear duration-200`}
                />
            ))}
        </div>
    )
}