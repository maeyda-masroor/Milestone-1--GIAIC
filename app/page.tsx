"use client"

import {ReactTyped} from "react-typed"
import Confetti from 'react-confetti'
export default function Home() {
  return (
    <div>
    <Confetti width={2000} height={2000}/>
      <h1 style={{fontSize:'40px',fontFamily:'Serif'}}>
        Hello EveryOne ! I'm a{" "}
        <ReactTyped
          strings={["Developer", "Writer", "Designer"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar="|"
          showCursor={true}
          style={{color:'red',fontFamily:'serif',fontSize:'50px'}}
        />
      </h1>
    </div>
  );
}
