
const HeroSection = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/gyRJdck/pexels-keira-burton-6146978-1.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white drop-shadow-md">
                <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold">TutorConnect,
                            Where <br />Learning Knows No Bounds.    
                            </h1>
                        <p className="mb-5">Discover the perfect tutor for your needs, harnessing expertise across a variety of subjects. Dive into a world of personalized learning, where success is just a click away</p>
                    <div>
                        <input type="text" placeholder="your@email.com" className="input rounded-full text-black  input-md w-full max-w-md" />
                        <a className="bg-[#00A5A7] hover:bg-[#008E90] text-white py-3 px-5 rounded-full border-none absolute right-4 md:right-28">Subscribe us</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;