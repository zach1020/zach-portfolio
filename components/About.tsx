import "./About.css";

const About = () => {
    return(
        <div>
            <div className="aboutContainer">
                <div className="item-large">
                    <div className="aboutHeader">
                        ABOUT ME
                    </div>
                    <div className="aboutBlurb">
                        I’m a software engineer with a background in both computer science and literature — which means I love both elegant code and a good sentence. I work in systems programming, app development, and generative AI, with a focus on Rust, Python, Web Technologies and C++. In my free time, I compose lo-fi music as Capybara Watanabe and study quantum computing. I’m here to build tech that matters — and maybe have fun doing it.
                    </div>
                </div>
                <div className="item-small">               
            <iframe src='https://widgets.sociablekit.com/twitter-feed/iframe/25573479' frameBorder='0' width='500px' height='1000px'></iframe>
                </div>
            </div>
        </div>
    )
};

export default About;