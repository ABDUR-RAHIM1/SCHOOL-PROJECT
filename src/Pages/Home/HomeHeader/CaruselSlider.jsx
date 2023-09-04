import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function CaruselSlider() {
  const slider = [
     {
      img : "https://img.freepik.com/free-vector/beach-cartoon-illustration_1196-552.jpg?size=626&ext=jpg&ga=GA1.1.1879868527.1693627123&semt=sph",
      title : "Tour of cox-bazar"
     },
     {
      img : "https://img.freepik.com/free-photo/modern-skyscrapers-illuminate-night-city-vanishing-into-dark-generative-ai_188544-11259.jpg?size=626&ext=jpg&ga=GA1.1.1879868527.1693627123&semt=sph",
      title : "Tour of jafhlong"
     },
     {
      img : "https://img.freepik.com/free-vector/summer-city-park-with-pond-path-near-fence-nature-background-scene-public-garden-town-forest-with-river-skyscraper-view-walkway-downtown-green-spring-season-cartoon-environment_107791-22086.jpg?size=626&ext=jpg&ga=GA1.1.1879868527.1693627123&semt=sph",
      title : "Tour of mumbai"
     }
  ]
  return (
    <Carousel className='h-full relative'>
        {
           slider.map((slide, index) => (
               <Carousel.Item key={index}>
                     <img className='w-full sliderImg' src={slide.img} alt="slider " />
                  <div className='bg-green-700 text-center text-white px-1 absolute top-0 left-0 w-full'>
                     <p>{slide.title}</p>
                  </div>
               </Carousel.Item>
           ))
        }
    </Carousel>
  )
}

export default CaruselSlider