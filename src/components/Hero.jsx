import './Hero.css';

function Hero() {
    return (
        <section className='hero'>
            <div className='petals'>
                {Array.from({ length: 15 }).map((_, i) => (
                    <span key={i} className='petal'></span>
                ))}
            </div>
            <div className='hero-content'>
                <h1>Calendários que contam sua história</h1>
                <p>Feito à mão, com carinho, para o ano de 2027.</p>
                <button className='cta-btn'>Ver catálogo</button>
            </div>
        </section>
    );
}

export default Hero;