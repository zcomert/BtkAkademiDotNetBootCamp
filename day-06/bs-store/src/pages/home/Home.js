import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
  const {theme} = useSelector(state => state.app);
  return (
    <div>Home {theme} </div>
  )
}
