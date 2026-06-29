import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/Models/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 2,
                ease: 'power2.inOut'
            },
        );
    });
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background"/>
            </div>

            <div className="hero-layout">
                <header className="flex flex-col justify-start pt-2 md:w-full w-screen md:px-20 px-5">
                    <div className="hero-text">
                        <h1>
                          Shaping
                          <span className="slide">
                            <span className="wrapper">
                                {words.map((word) => (
                                    <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                        <img
                                         src={word.imgPath}
                                         alt={word.text}
                                         className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                        />
                                        <span>{word.text}</span>
                                    </span>
                                ))}
                            </span>
                          </span>
                        </h1>
                        <h1>into Real Projects</h1>
                        <h1>that Deliver Results</h1>
                         <p className="text-white-50 md:text-xl mt-5 relative z-10 pointer-events-none">
                            Hi, I'm Robin, a Full Stack Developer who enjoys turning ideas into 
                            <br></br>
                            efficient, scalable, and user-friendly web applications.
                        </p>

                        <Button
                         className="md:w-80 md:h-16 w-60 h-12 mt-7 md:text-2xl text-lg"
                         id="button"
                         text="See my Work"
                        />
                    </div>
                </header>

                <figure className="hero-3d-layout">
                    <HeroExperience/>
                </figure>
            </div>
            <AnimatedCounter/>
        </section>
    )
};
export default Hero;