import picture from '../assets/img/gino_picture.png';
function Home() {
    return (
        <section id="home">
            <div className="text-center">
                <img 
                    src={picture}
                    alt="Gino"
                    width="400"
                    className="mt-4"/>

                <h3>Bonjour, Je suis Georginot
                    <br/>Développeur Mobile / Web et Infographiste
                </h3>
                <p>Je suis un développeur et Infographiste,<br/>
                    et je suis passionné par la création de sites web et d'applications modernes et intuitives<br/>
                    ainsi que graphique design tels que logo, flyer,
                    motion graphic vidéo et autres.<br/>
                    Bienvenue dans mon site web.
                    Je suis trés content que vous me visitiez.
                </p>
            </div>
        </section>
    );
}

export default Home;