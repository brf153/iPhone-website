import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

function Content() {
    useGSAP(() => {
        gsap.to('#iphone-14-pro', {
            opacity: 1,
            delay: 2,
        });
        gsap.to('#cta', {
            opacity: 1,
            y: -50,
            duration: 1,
        });
    }, []);

    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

    const handleResize = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo);
        } else {
            setVideoSrc(heroVideo);
        }
    };

    useEffect(() => {

        handleResize()

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='flex flex-col items-center justify-center h-[90vh]'>
            <p id='iphone-14-pro' className="text-center font-semibold text-3xl text-gray-400 opacity-0 max-md:mb-10">iPhone 14 Pro</p>
            <div className='w-9/12 md:w-10/12'>
                <video autoPlay muted playsInline>
                    <source src={videoSrc} type='video/mp4' />
                </video>
            </div>
            <div id={'cta'} className='flex flex-col opacity-0 items-center justify-center mt-15 md:mt-10 gap-4'>
                <button className="bg-white/90 text-black border hover:bg-zinc-700 hover:border-[#666666] hover:text-white/90 shadow-md hover:shadow-lg rounded-full px-6 py-2 font-medium transition-all duration-600">
                    Buy
                </button>
                <p className='text-white'>From $199/month or $999</p>
            </div>

        </div>
    )
}

export default Content