import { useGSAP } from "@gsap/react"
import { Grid, Typography } from "@mui/material"
import gsap from "gsap"
import { explore1Img, explore2Img, exploreVideo } from '../utils';
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

const ExploreStory = () => {
  const videoRef = useRef(null)
    useGSAP(()=>{
        gsap.to('#title', {
            opacity: 1,
            y: 0,
            delay: 1
        })
        gsap.to('#explore-video',{
          scrollTrigger: {
trigger: '#explore-video',
            toggleActions: 'play pause reverse restart',
          start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      }
        })
        gsap.to('.imgClass',{
            scrollTrigger: {
                trigger: '.imgClass',
                toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
                scrub: true
            },
            ease: 'power1',
            opacity: 1,
            scale: 1,
            scrub: 5.5

        })
    },[])


  return (
    <div className="w-screen bg-dark py-32">
        <div className='flex justify-between w-9/12 mx-auto pt-28 px-5 pb-10'>
        <Typography id="title" variant="h2" className="text-gray translate-y-10 opacity-0">
          Explore the full story.
        </Typography>
        </div>
        <div className="flex flex-col w-9/12 mx-auto p-24 text-white">
            <Typography variant="h2">
                iPhone.
            </Typography>
            <Typography variant="h2">
                Forged in Titanium.
            </Typography>
        </div>
<Grid container direction="column" className="w-2/3 mx-auto">
  {/* Video Section */}
  <Grid item xs={12}>
    <video
      src={exploreVideo}
      id="explore-video"
      className="w-full h-auto"
      autoPlay
      muted
      preload="none"
      ref={videoRef}
    />
  </Grid>

  {/* Two images side by side */}
  <Grid item xs={12} display={"flex"} gap={2}>
      <Grid item xs={6} className="overflow-hidden">
        <img
          src={explore1Img}
          alt="Explore 1"
          className="object-cover imgClass h-[24rem] scale-150 w-[30rem] opacity-0"
        />
      </Grid>
      <Grid item xs={6} className="overflow-hidden">
        <img
          src={explore2Img}
          alt="Explore 2"
          className="object-cover imgClass h-[24rem] scale-150 w-[100%] opacity-0"
        />
      </Grid>
    </Grid>
</Grid>

<Grid container gap={1} className="w-2/3 mx-auto mt-10 items-center">
  <Grid item size={5.5}>

    <Typography variant="h6" className="text-dark">
      iPhone 15 Pro is{' '}
      <span className="text-white">
        the first iPhone to feature an aerospace-grade titanium design, {' '}
      </span>
       using the same alloy that spacecrafts use for missions to Mars.
    </Typography>
  </Grid>
  <Grid item size={6}>

    <Typography variant="h6" className="text-dark">
      Titanium has one of the best strength-to-weight ratios of any metal, making these our{' '}
      <span className="text-white">lightest Pro models ever.</span> You'll notice the difference the moment you pick one up.
    </Typography>
  </Grid>
</Grid>



    </div>
  )
}

export default ExploreStory