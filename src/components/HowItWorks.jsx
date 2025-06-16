import React from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { Grid, Typography } from '@mui/material'

const HowItWorks = () => {
  return (
    <div className='bg-black w-screen py-32'>
        <div>
            <img src={chipImg} alt='chip' className='mx-auto w-[12rem]' />
        </div>
        <div className='flex flex-col items-center justify-center gap-4 mt-20'>
            <Typography variant='h2' className='text-white text-center'>
                 A17 Pro chip.
            <br /> A monster win for gaming.
            </Typography>
            <Typography variant='h6' className='text-gray text-center'>
               It's here. The biggest redesign in the history of Apple GPUs.   
            </Typography>
        </div>

        <div className='relative w-[70rem] mx-auto mt-20'>
            <img src={frameImg} alt='frame' className="bg-transparent relative z-10" />
            <video
                className='absolute top-6 left-6 w-[67rem] object-cover rounded-[3rem]'
                autoPlay
                loop
                muted
                playsInline
                src={frameVideo}
            />
        </div>
         <p className="text-gray font-semibold text-center mt-3">Honkai: Star Rail</p>

        <Grid container spacing={14} className='mt-20 justify-center mx-auto'>
                <Grid size={4.5} item className="flex flex-1 justify-center flex-col gap-4">
                  <Typography variant='h6' className="text-gray">
                    A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                    <span className="text-white">
                      best graphic performance by far
                    </span>.
                  </Typography>

                  <Typography variant='h6' className="text-gray">
                   Mobile {' '}
                    <span className="text-white">
                      games will look and feel so immersive
                    </span>,
                     with incredibly detailed environments and characters.
                  </Typography>
                </Grid>

              <Grid size={4.5} item className="flex-1 flex flex-col text-gray">
                <Typography variant='h6'>New</Typography>
                <Typography variant='h3' className="text-white">Pro-class GPU</Typography>
                <Typography variant='h6'>with 6 cores</Typography>
              </Grid>
            </Grid>
    </div>
  )
}

export default HowItWorks