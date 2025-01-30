import React, { useState } from "react";
import Globe from "react-globe.gl";
import Buttons from "../components/Buttons";

const About = () => {

    const[hasCopied, setHasCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('merrillachigan@gmail.com')

        setHasCopied(true)

        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }

    return(
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/me1.jpeg" alt='grid-1' className="w-32 rounded-full sm:h-[276px] h-32 flex mx-auto object-contain"/>

                        <div>
                            <p className="grid-headtext">Hi, i'm Juicee</p>
                            <p className="grid-subtext">With a years of experience, i'm shaping my front end and backends development skills with a focus on animated website.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" className="w-full sm:w-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I'm specialized in JavaScript with a focus on Reactjs/Nextjs. I also love to design immersive UI/UX for a great web/mobile experience and have social media marketing skills.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0 , 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                // labelsData={[{
                                //     lat:5.65 , lng: -0.205,
                                //     text:"I'm here!",
                                //     color:'white',
                                //     size:20
                                // }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I work remotely accross any timezone.</p>
                            <p className="grid-subtext">I'm based in Accra with remote work available.</p>
                            <Buttons name="Contact Me" isBeam containerClass="w-full mt-10" id="contact"/>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">My passion for coding</p>
                            <p className="grid-subtext">I love solving problem and building things through code. It's like a passion.</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src= {hasCopied ? 'assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">merrillachigan@gmail.com</p>
                            </div>
                        </div>                
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About