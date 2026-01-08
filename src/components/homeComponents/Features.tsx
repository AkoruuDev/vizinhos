function Features() {
    return (
        <section>
            <Feature
                title=""
                content=""
                image=""
                reverse
            />
            <Feature
                title=""
                content=""
                image=""
                reverse={false}
            />
            <Feature
                title=""
                content=""
                image=""
                reverse
            />
            <Feature
                title=""
                content=""
                image=""
                reverse={false}
            />
        </section>
    );
}

export default Features;

function Feature({title, content, image, reverse}: {title: string; content: string; image: string; reverse: boolean}) {
    return (
        <div className={`flex ${reverse ? "flex-row-reverse" : ""}`}>
            <img src={image} alt="" />
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
}