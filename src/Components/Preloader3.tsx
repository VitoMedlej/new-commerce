"use client"
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import  { Autoplay } from 'swiper'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';


const Preloader3 = ({res}:{res:any}) => {
    const router = useRouter()
    const [imgs,setImgs] = useState(
        [
        //   {
        //     img: "https://www.footlocker.ph/media/weltpixel/owlcarouselslider/images/i/m/img_2458_1.jpg",
        //     text: ""
        // },
        
        {
            img: "https://ucarecdn.com/401b7064-5775-4200-91a3-59fd170294c5/RolexDesk1920x6553.webp",
            text: ""
        },
        {
            img: "https://ucarecdn.com/57ed3c26-f5de-47c3-a5f3-fb052a7d48c3/DecTudorDesk1920x655.webp",
            text: ""
        },

        
        // {
        //     img: "https://ucarecdn.com/e9c63dfe-42b7-4048-a536-15dbde376c43/ad.JPG",
        //     text: ""
        // },
      
        // {
        //     img: "https://scontent.fbey24-1.fna.fbcdn.net/v/t31.18172-8/17814600_1847111438874077_155868236703513607_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=2be8e3&_nc_ohc=4WtIz6t_OncAX9y0Yvb&_nc_ht=scontent.fbey24-1.fna&oh=00_AfCadQOksvI3kB1MflMPObgJcf-rAwATFe_NPa4_ludDoA&oe=65A7F8C2",
        //     text: ""
        // },
          ]
        
    )
    useEffect(() => {
    if (res && res?.MainCarousel && res?.MainCarousel?.length >0) {
        // console.log('res: ', );
        setImgs(res?.MainCarousel)
    }
    }, [])
    
    return (
        <Box
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'100%',
            // maxWidth: 'lg',
            minHeight:'350px',
            maxHeight:'650px',
            maxWidth:'lg',
            margin: '0 auto',
            display: {
                xs: 'flex'
            },
            pt:2,
            my:2,
            height: '100%'
        }}>
            <Swiper
            
                navigation={false}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                delay: 2000,
                disableOnInteraction: true
            }}
                modules={[Autoplay]}
                className="mySwiper swiper">
    
                {imgs.map((item) => {
    
                    return <SwiperSlide 
                        onClick={() => router.push('/collection/products')}
                    className='ztop pointer ' key={item.img}>
                        <Box
                            sx={{
         
                        
                                height: '100%',
                            width:'100%'
                        }}>
    
                            <img
            
                                className={`img pointer  contain
                                `}
                                // ${item?.className}
                                src={`${item.img}`}
                                alt="Main Carousel Image"/>
                        </Box>
                    </SwiperSlide>
                })
    }
    
            </Swiper>
    
        </Box>
    )
}

export default Preloader3