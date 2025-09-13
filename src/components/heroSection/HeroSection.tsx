import React, { useEffect, useState } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { HiTerminal } from "react-icons/hi";
import { LuTimer } from "react-icons/lu";
import { SiExpress, SiMongodb, SiSpringboot } from "react-icons/si";
// import type { DecorationImage } from "../../utils/ImageDecoration";
import { getDecorationFilename, getTodaysDecoration } from "../../utils/ImageDecoration";
import "./HeroSection.css";



export default function HeroSection() {

    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Get decoration image using the new utility
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [imgLoaded, setImgLoaded] = useState(false);
    const [decorationInfo, setDecorationInfo] = useState(getTodaysDecoration());

    useEffect(() => {
        const loadDecoration = async () => {
            const filename = getDecorationFilename();

            setSelectedImage(filename);
            setImgLoaded(false);

            // Update decoration info for current selection
            const todaysDecoration = getTodaysDecoration();
            setDecorationInfo(todaysDecoration);
        };

        loadDecoration();
    }, []);

    // const handleDecorationChange = (filename: string, info: DecorationImage) => {
    //     setSelectedImage(filename);
    //     setDecorationInfo(info);
    //     setImgLoaded(false);
    // };

    return (
        <>
            {/* <DecorationTester onImageChange={handleDecorationChange} /> */}
            <div className="hero-section container">
                <div className="user-info" style={{ justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                    <div className="user" style={{ flex: 1 }}>

                   
                        <span className="small">Hey It's me <BsFillArrowThroughHeartFill /> </span>
                        <div className="name-availability">
                            <h1>Manish Kumar</h1>
                            <div className="availability">
                                <span className="dot"></span>  Available
                            </div>
                        </div>
                        <div className="general-info" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><GrLocation /> Punjab, india </span>
                            <span> | </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><LuTimer /> {time.toLocaleTimeString()}</span>
                        </div>
                    </div>
                    <div className="user-image" style={{ marginLeft: '32px' }}>
                        <img src="https://pbs.twimg.com/profile_images/1962515460148326401/dBeLgEGo_400x400.jpg" alt="user" />

                        <div
                            className="decoration"
                            style={{ visibility: imgLoaded ? "visible" : "hidden" }}
                            title={`${decorationInfo.name} - ${decorationInfo.description}`}
                        >
                            <img
                                src={`/${selectedImage}`}
                                alt={decorationInfo.name}
                                onLoad={() => setImgLoaded(true)}
                                onError={() => setImgLoaded(false)}
                            />
                        </div>
                        <div className="decoration-hover-msg">
                            <p>{decorationInfo.name} - decoration will be applied according to the current Day!</p>
                        </div>
                    </div>
                    <div className="curv-arrow">
                        <img src="/curv-arrow.png" alt="" />
                    </div>
                    <div className="random-lines">
                        <img src="/random-lines.svg" alt="" />
                    </div>
                </div>
                <div className="about-me">
                    <div className="about-me-content">
                        <p>
                            Yup! I'm a <span className="text-white">Full Stack Developer</span>. Big deal, right? But wait... there's more! I'm not just any developer,
                            <span className="text-white"> I</span> love building solutions and solving problems. I enjoy crafting websites with <span className="text-white flex-center"><FaReact /> React</span>, <span className="text-white flex-center"><BiLogoTypescript /> TypeScript</span>, and <span className="text-white flex-center"> <SiExpress />
                                Express</span>, using <span className="text-white flex-center"> <SiMongodb />
                                MongoDB</span> and <span className="text-white flex-center"> <SiSpringboot />
                                Spring Boot</span> and I live on the <span className="text-white flex-center"> <HiTerminal />
                                terminal</span> mostly.
                        </p>
                        <p>
                            I love both <span className="text-white">Development</span> & <span className="text-white">Design</span>. So, that means I can create beautiful and functional websites. I'm always looking for new opportunities to learn and grow.
                        </p>
                    </div>
                    <div className="contact-me">
                        <a target="_blank" href="https://x.com/itz_Manish02">
                            <button className="contact-btn">
                                <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px' }}><g fill="#737373"><path d="M13.25 16H4.75C3.2334 16 2 14.7666 2 13.25V4.75C2 3.2334 3.2334 2 4.75 2H13.25C14.7666 2 16 3.2334 16 4.75V13.25C16 14.7666 14.7666 16 13.25 16Z" fill="#737373" opacity="0.4"></path><path d="M11.75 11C11.5942 11 11.4395 10.9517 11.3091 10.8564L9 9.1772L6.6909 10.8564C6.4638 11.0229 6.1616 11.0468 5.9097 10.9184C5.6582 10.7905 5.5 10.5322 5.5 10.2499V3.24989C5.5 2.28509 6.2852 1.49989 7.25 1.49989H10.75C11.7148 1.49989 12.5 2.28509 12.5 3.24989V10.2499C12.5 10.5321 12.3418 10.7904 12.0903 10.9184C11.9829 10.9731 11.8662 11 11.75 11Z" fill="#737373"></path></g></svg>
                                Twitter DM
                            </button>
                        </a>
                        <span className="contact-or">OR</span>
                        <a target="_blank" href="mailto:work.manish02@yahoo.com">
                            <button className="contact-btn">
                                <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px' }}><g fill="#737373"><path d="M14.75 6H3.25C2.8359 6 2.5 6.3359 2.5 6.75V13.25C2.5 14.7666 3.7334 16 5.25 16H12.75C14.2666 16 15.5 14.7666 15.5 13.25V6.75C15.5 6.3359 15.1641 6 14.75 6Z" fill="#737373" opacity="0.4"></path><path d="M2.58841 6.86181C1.73781 6.86181 0.989809 6.23921 0.858909 5.37351L0.634311 3.89061C0.490311 2.93601 1.14941 2.04251 2.10311 1.89791L14.4624 0.0288128C15.4238 -0.111287 16.3105 0.543913 16.4546 1.49801L16.6792 2.98041C16.8232 3.93501 16.1641 4.82811 15.2104 4.97261L2.85101 6.84221C2.76261 6.85541 2.67481 6.86181 2.58841 6.86181Z" fill="#737373"></path><path d="M11.7803 11.0303L9.53029 13.2803C9.38379 13.4268 9.19189 13.5 8.99999 13.5C8.80809 13.5 8.61619 13.4268 8.46969 13.2803L6.21969 11.0303C5.92669 10.7373 5.92669 10.2627 6.21969 9.9698C6.51269 9.6769 6.98729 9.6768 7.28019 9.9698L8.24989 10.9395V8.25C8.24989 7.8359 8.58579 7.5 8.99989 7.5C9.41399 7.5 9.74989 7.8359 9.74989 8.25V10.9395L10.7196 9.9698C11.0126 9.6768 11.4872 9.6768 11.7801 9.9698C12.073 10.2628 12.0733 10.7374 11.7803 11.0303Z" fill="#737373"></path></g></svg>
                                Email Me
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
