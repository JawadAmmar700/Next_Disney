import React from 'react'
import styles from '../styles/movieCategory.module.css'
import Link from 'next/link'

const Recommended = ({ recommend }) => {


    return (
        <div className={styles.wrap}>
            <p className={styles.p}>Recommended</p>
            <div className={styles.movieCont}>
                {recommend?.map((item, id) => (

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

export default Recommended
