import React from 'react'
import styles from '../styles/movieCategory.module.css'
import Link from 'next/link'


const New = ({ newMovies }) => {

    return (
        <div className={styles.wrap}>

            <p className={styles.p}>New Movies for you</p>
            <div className={styles.movieCont}>
                {newMovies?.map((item, id) => (

                    <div key={id} className={styles.moviePhoto}>
                        <Link as={`/Details/${item.title}`} href={`/Details/[${item.title}]`}>
                            <img className={styles.img} src={item.cardImg} />
                        </Link>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default New
