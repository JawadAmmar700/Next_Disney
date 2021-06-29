import React from 'react'
import styles from '../styles/movieCategory.module.css'
import Link from 'next/link'

const Original = ({ original }) => {

    return (
        <div className={styles.wrap}>

            <p className={styles.p}>Originals</p>
            <div className={styles.movieCont}>
                {original?.map((item, id) => (

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

export default Original
