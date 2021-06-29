import React, { useState, useEffect } from 'react'
import Navbar from './Navbrar'
import Slider from "react-slick";
import ReactPlayer from 'react-player'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/Home.module.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/user/UserSlice'
import { useRouter } from 'next/router'
import { movies } from '../Movies'
import Recommended from './Recommended'
import Trending from './Trending'
import Original from './Original'
import New from './New'



const sliderImgs = [
    {
        url: "/videos/1564674844-disney.mp4",
        src: "/images/viewers-disney.png"
    },
    {
        url: "/videos/1564676115-marvel.mp4",
        src: "/images/viewers-marvel.png"
    },
    {
        url: "/videos/1564676296-national-geographic.mp4",
        src: "/images/viewers-national.png"
    },
    {
        url: "/videos/1564676714-pixar.mp4",
        src: "/images/viewers-pixar.png"
    },
    {
        url: "/videos/1608229455-star-wars.mp4",
        src: "/images/viewers-starwars.png"
    },
]


const Home = () => {
    const userInfo = useSelector(selectUser)
    const router = useRouter()
    const [recommend, setRecommend] = useState([])
    const [trending, setTrending] = useState([])
    const [original, setOriginal] = useState([])
    const [newMovies, setNewMovies] = useState([])

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        ltr: true,
        arrows: false
    };


    useEffect(() => {

        if (!userInfo) {
            router.push('/')
        }

        setRecommend([])
        setTrending([])
        setOriginal([])
        setNewMovies([])

        movies?.map(item => {
            if (item.type === 'recommend') {
                setRecommend(recommend => [...recommend, item])
            }
            if (item.type === 'trending') {
                setTrending(trending => [...trending, item])
            }
            if (item.type === 'original') {
                setOriginal(original => [...original, item])
            }
            if (item.type === 'new') {
                setNewMovies(newMovies => [...newMovies, item])
            }
        })
    }, [])


    return (
        <div className={styles.overall}>

            <Navbar />
            <div className={styles.container}>

                <div className={styles.Slider}>
                    <Slider {...settings}>
                        <img className={styles.img} id="v1" src="/images/slider-badag.jpg" alt="" />
                        <img className={styles.img} src="/images/slider-badging.jpg" alt="" />
                        <img className={styles.img} src="/images/slider-scale.jpg" alt="" />
                        <img className={styles.img} src="/images/slider-scales.jpg" alt="" />
                    </Slider>
                </div>

                <div className={styles.videos}>
                    {
                        sliderImgs.map((item, id) => (
                            <div className={styles.video} key={id} >
                                <ReactPlayer
                                    url={item.url}
                                    autoplay={true}
                                    controls={false}
                                    playing={true}
                                    muted={true}
                                    loop={true}
                                    width='100%'
                                    height='150px'
                                    className={styles.vid}
                                />
                                <img className={styles.img1} src={item.src} alt="" />
                            </div>
                        ))
                    }
                </div>

                <Recommended recommend={recommend} />
                <Trending trending={trending} />
                <Original original={original} />
                <New newMovies={newMovies} />

            </div>
        </div >
    )
}

export default Home
