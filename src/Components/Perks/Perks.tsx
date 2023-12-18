"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'

const Perks = () => {
    const items = [
     
        {
            title: 'Best Accessories Available',
            icon : 'https://www.svgrepo.com/show/427671/accessories-eyeglasses-fashion.svg'
        },
        {
            title: 'Affordable Prices',
            icon : 'https://www.svgrepo.com/show/513339/price-tag.svg'
        },
        {
            title: 'High Quality Products',
            icon : 'https://www.svgrepo.com/show/425182/accessories-watch-ecommerce.svg'
        },
        {
            title: 'Delivery Anywhere in Lebanon',
            icon : 'https://www.svgrepo.com/show/398058/pickup-truck.svg'
        },

    ]
  return (
    <Box className='w100' sx={{px:1,py:8}}>
        <Box>
        <Typography
                className='sectionTitle  box'
                sx={{
                  pt:'.5em',
                  mx:1,
                  width:'100%',
                  display:{xs:'flex',sm:'flex'},
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                py:2,
                fontWeight: '500'
            }}>
Why Choose Us 
            </Typography>
        </Box>
        <Box  className='flex wrap gap auto row justify-between'>

        {
           items.map(i=>{
                return <Box key={i.title} className='center items-center auto flex col' sx={{
                    py:2,
                    width:{xs:'32%',sm:'22%'}}}>
                    <Box sx={{width:'80px'}}>
                        <img src={i.icon} alt="" className="img contain" />
                    </Box>
                    <Typography className='text-center' sx={{fontSize:'1.05em'}}  component={'h1'}>{i.title}</Typography>
                    {/* <Typography sx={{fontSize:'.9em'}} component={'p'}>Fooer Name</Typography> */}
                </Box>
            })
        }
        </Box>

    </Box>
  )
}

export default Perks