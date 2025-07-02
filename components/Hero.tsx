import "./Hero.css";
import Image from "next/image";
import CapyHero from "../assets/CapyHero.jpg";

const Hero = () => {
    return(
        <div className="heroContainer">
            <div className="item-large">
                <div className="heroHeader">Hi, I'm Zach</div>
                <div className="heroBlurb">I’m a recent Master of Science grad now coding for good at a nonprofit. My goal?
Use software & science to make the world a better, cooler place—and drop sick beats while I’m at it.</div>
            <div className="heroSpacer" />
            <div className="heroContainer2">
                <button className="heroButtonOne">View Projects</button>
                <button className="heroButtonTwo">Read Blog</button>
            </div>
            </div>
            <div className="item-small">
                <Image src={CapyHero} alt="capy_logo" className="heroImg"/>
            </div>
        </div>
    )
};

export default Hero;