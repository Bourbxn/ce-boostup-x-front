import React from "react"
import { Link } from 'react-router-dom'
import '../css/home.css'

import Mars from '../pictures/homeImage/Mars.png'
import Pluto from '../pictures/homeImage/Pluto.png'
import Jupiter from '../pictures/homeImage/Jupiter_real.png'
import Neptune from '../pictures/homeImage/Naptune.png'
import Saturn from '../pictures/homeImage/Saturn.png'
import Mercury from '../pictures/homeImage/Mercury.png'
import Rocket from '../pictures/homeImage/cloundWithRocket.png'
import Star from '../pictures/homeImage/star.png'

const HomeComponent = () => {

     const image = [
          {key: 1, img: Mars, alt: 'Mars', style: 'mars'},
          {key: 2, img: Pluto,alt: 'Pluto', style: 'pluto'},
          {key: 3, img: Jupiter,alt: 'Jupiter', style: 'jupiter'},
          {key: 4, img: Neptune,alt: 'Neptune', style: 'neptune'},
          {key: 5, img: Saturn,alt: 'Saturn', style: 'saturn'},
          {key: 6, img: Mercury,alt: 'Mercury', style: 'mercury'},
          {key: 7, img: Rocket,alt: 'Rocket', style: 'clound'},
          {key: 8, img: Star,alt: 'Star1', style: 'star star01'},
          {key: 9, img: Star,alt: 'Star2', style: 'star star02'},
          {key: 10, img: Star,alt: 'Star3', style: 'star star03'},
          {key: 11, img: Star,alt: 'Star4', style: 'star star04'},
          {key: 12, img: Star,alt: 'Star5', style: 'star star05'},
          {key: 13, img: Star,alt: 'Star6', style: 'star star06'},
          {key: 14, img: Star,alt: 'Star7', style: 'star star07'},
          {key: 15, img: Star,alt: 'Star8', style: 'star star08'},
          {key: 16, img: Star,alt: 'Star9', style: 'star star09'},
          {key: 17, img: Star,alt: 'Star10', style: 'star star10'},
     ]

     return (
          <div>
               {image.map((components) => {
                    return <img key={components.key} src={components.img} alt={components.alt} className={components.style} />
               })}
          </div>
     )
}

const Top3Card = (props) => {

     const {top3} = props

     return (
          <div className=' top-3-box'>
               {top3.map((data) => {
                    return <div key={data.key} className={data.style} >{data.data}</div>
               })}
          </div>
     )
}

const Home = () => {

     const data = [
          {key: 1, data: 'T', style: 'card-1'},
          {key: 2, data: 'O', style: 'card-2'},
          {key: 3, data: 'P', style: 'card-3'}
     ]

     return (
          <div className="home-layout">
               <HomeComponent />
               <div className=" text-1">
               Practice C Programing
               <br />
               In 2 Week
               <br />
               <Link to='/Tasks'>
                    <button
                         className=" button-getStart">
                         GET START
                    </button>
               </Link>
               </div>
                    
               <p className=" text-2">
               Top 3 ranking
               </p>

               <Top3Card top3={data} />
          </div>
     );
};

export default Home;
