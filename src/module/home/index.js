import React from 'react'
import Herobanner from './herobanner'
import Feature from './feature'
import Howitwork from './howitwork'
import Reviewsection from './reviewsection'
import Downloadapp from './downloadapp'

export default function Homepage() {
  return (
    <div>
      <Herobanner/>
      <Feature/>
      <Howitwork/>
      <Reviewsection/>
      <Downloadapp/>
    </div>
  )
}
