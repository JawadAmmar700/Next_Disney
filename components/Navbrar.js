import React, { useEffect } from "react"
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import AddIcon from "@material-ui/icons/Add"
import StarIcon from "@material-ui/icons/Star"
import MovieIcon from "@material-ui/icons/Movie"
import TvIcon from "@material-ui/icons/Tv"
import styles from "../styles/Navbar.module.css"
import { auth, provider } from "../pages/firebase"
import { useSelector, useDispatch } from "react-redux"
import { selectUser, ADD_USER, DELETE_USER } from "../features/user/UserSlice"
import { useRouter } from "next/router"
import Image from "next/image"

const Navbrar = () => {
  const userInfo = useSelector(selectUser)
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(ADD_USER({ user: user }))
      } else {
        dispatch(DELETE_USER({ user: null }))
      }
    })
  }, [])

  const handleSignIn = e => {
    e.preventDefault()
    auth.signInWithPopup(provider).catch(err => console.log(err))
  }

  const handleSignOut = e => {
    e.preventDefault()
    auth.signOut()
    router.push("/")
  }

  return (
    <div className={styles.navbar}>
      <img
        className={styles.img}
        src="/images/logo.svg"
        alt=""
        onClick={() => router.push("/")}
      />
      {userInfo && (
        <div className={styles.navgigation}>
          <div className={styles.link}>
            <HomeIcon className={styles.logo} /> home
          </div>
          <div className={styles.link}>
            <SearchIcon className={styles.logo} />
            Search
          </div>
          <div className={styles.link}>
            <AddIcon className={styles.logo} /> watchlist
          </div>
          <div className={styles.link}>
            <StarIcon className={styles.logo} />
            originals
          </div>
          <div className={styles.link}>
            <MovieIcon className={styles.logo} />
            movies
          </div>
          <div className={styles.link}>
            <TvIcon className={styles.logo} />
            series
          </div>
        </div>
      )}
      {!userInfo ? (
        <button className={styles.button} onClick={handleSignIn}>
          Login
        </button>
      ) : (
        <div className={styles.profile}>
          <button className={styles.button} onClick={handleSignOut}>
            SigOut
          </button>
          <img className={styles.img1} src={userInfo?.photoURL} alt="" />
        </div>
      )}
    </div>
  )
}
export default Navbrar
