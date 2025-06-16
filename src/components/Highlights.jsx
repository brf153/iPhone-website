import { Button, Link, styled, Typography } from '@mui/material'
import { ChevronRight, CirclePlay } from 'lucide-react'
import { LucideButtonIcon } from './LucideIconButton'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import VideoCarousel from './VideoCarousel'

const StyledButton = styled(Button)`
  &:hover {
    background: none;
  }
`

function Highlights() {
useGSAP(() => {
  gsap.to('#title', {
    opacity: 1,
    y: 0,
  });

  gsap.to('.link', {
    opacity: 1,
    y: 10,
    duration: 1,
    stagger: 0.2,
  });
}, []);

  return (
    <section className="w-screen h-fit bg-dark">
      <div className='flex justify-between w-9/12 mx-auto pt-28 pb-10'>
        <Typography id="title" variant='h2' className="text-gray -translate-y-10 opacity-0">
          Get the highlights.
        </Typography>
        <div className="text-blue-600">
          <StyledButton className='-translate-y-10 opacity-0 link' disableRipple variant='text' endIcon={<LucideButtonIcon Icon={CirclePlay} />}>
          <Typography variant='h6' className="hover:underline hover:underline-offset-2">
            Watch the film
          </Typography>
          </StyledButton>
          <StyledButton className='-translate-y-10 opacity-0 link' disableRipple variant='text' endIcon={<LucideButtonIcon Icon={ChevronRight} />}>
            <Typography variant='h6' className="hover:underline hover:underline-offset-2">
              Watch the event
            </Typography>
          </StyledButton>
        </div>
      </div>
      <div>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights