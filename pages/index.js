import Head from 'next/head'
import React from 'react'
import Login from '../components/Login'
import HomePage from '../components/Home'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/user/UserSlice'



export default function Home() {
  const userInfo = useSelector(selectUser)
  return (
    <div>
      <Head>
        <title>Disney +</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        userInfo ? <HomePage /> : <Login />
      }
    </div>
  )
}
