import { data } from 'autoprefixer';
import {useEffect,useState} from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'
const RideSelector = ({pickupCoordinates,dropoffCoordinates}) => {
  const [rideDuration,setrideDuration]=useState(0);
  useEffect(()=>{
    
    const newrideDuration=fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?geometries=geojson&access_token=pk.eyJ1Ijoic2hhcmlhbiIsImEiOiJjbDg0aGQxNG8wZnhnM25sa3VlYzk1NzVtIn0.BxFbcyCbxdoSXAmSgcS5og`).then(res=>res.json())
    .then(data=>{
     setrideDuration(newrideDuration);
      setrideDuration(data.routes[0].duration / 10)
    
  })
  
  },[pickupCoordinates,dropoffCoordinates])
  return (
    <Wrapper>
      <Title>
        Choose a ride or swipe up for more
      </Title>
      <Carlist> 
        {carList.map((car,index)=>(
            <Car key={index}>
             <Carimg src={car.imgUrl} />
            <CarDetails> 
                <Service>
                    {car.service}
                </Service>
                <Time>
                    {(car.multiplier*rideDuration/30).toFixed(1)+' min away'} 
                </Time>
            </CarDetails>
            <Price>{'₹'+(rideDuration*car.multiplier).toFixed(2)}</Price>
        </Car>
        ))}
      </Carlist>
    </Wrapper>
  )
}

export default RideSelector

const Wrapper=tw.div`
flex-1 overflow-y-scroll flex flex-col`

const Title=tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const Carlist=tw.div`
overflow-y-scroll 
`
const Car=tw.div`
flex p-4 items-center border-b border-gray-200
`
const Carimg=tw.img`
h-14 mr-4
`
const Price=tw.div`
text-sm`

const Time=tw.div`
font-xs text-blue-500`

const Service=tw.div`
font-medium`

const CarDetails=tw.div`
flex-1`