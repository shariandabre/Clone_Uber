import React from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken= 'pk.eyJ1Ijoic2hhcmlhbiIsImEiOiJjbDg0aGQxNG8wZnhnM25sa3VlYzk1NzVtIn0.BxFbcyCbxdoSXAmSgcS5og'
const geojson = [
  {
    properties: {
      'marker-color': '#ffff',
      'marker-size': 'large',
      'marker-symbol': 'rocket'
    }
  },

];
const Map = (props) => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/sharian/cl87iovwy001a14lhmz62bclu',
          center: [78.9629, 20.5937],
          zoom: 4
        });
        if(props.pickupCoordinates){
          addToMap(map,props.pickupCoordinates)
        }
        if(props.dropoffCoordinates){
          addToMap(map,props.dropoffCoordinates)
        }

        if(props.pickupCoordinates&&props.dropoffCoordinates){
          map.fitBounds([
            props.dropoffCoordinates,
            props.pickupCoordinates
          ],{
            padding:60
          })
        }
      },[props.pickupCoordinates,props.dropoffCoordinates]);

      const addToMap=(map,coordinates)=>{
        const marker1=new mapboxgl.Marker({ "color": "#000"})
        .setLngLat(coordinates)
        .addTo(map);
      }


  return (
    <Wapper id="map"></Wapper>
  )
}
const Wapper = tw.div`
  flex-1 h-1/2
`
export default Map
