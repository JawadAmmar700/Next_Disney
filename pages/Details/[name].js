import React from 'react'
import Navbar from '../../components/Navbrar'
import styles from '../../styles/Detials.module.css'
import AddIcon from '@material-ui/icons/Add';
import { movies } from '../../Movies'


export function getStaticPaths() {
    const paths = movies?.map(item => {
        return {
            params: { name: item.title }
        }
    })
    return {
        paths, fallback: false
    }
}


export function getStaticProps(context) {
    const name = context.params.name;
    let data = {}
    movies?.map(item => {
        if (item.title === name) {
            data = item
        }
    })
    return {
        props: { data: data }
    }
}




const Detials = ({ data }) => {

    return (
        <div className={styles.container}>
            gfgf
            <Navbar />
            <img className={styles.img} src={data.backgroundImg} alt="" />


            <img className={styles.img1} src={data.titleImg} alt="" />
            <div className={styles.btns}>
                <button className={styles.play}>Play</button>
                <button className={styles.trailer}>trailer</button>
                <button className={styles.add}><AddIcon style={{ color: 'white' }} /></button>
                <button className={styles.group}><img className={styles.img2} src='/images/group-icon.png' alt="" /></button>

            </div>

            <div className={styles.title}>
                <p>{data.subTitle}</p>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default Detials
