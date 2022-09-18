import { accessToken } from 'mapbox-gl'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from '../components/Map'
import RideSelector from '../components/RideSelector'

const Confirm = () => {

    const router = useRouter();
    const { pickup, dropoff } = router.query
    const [pickupCoordinates, setpickupCoordinates] = useState([0,0]);
    const [dropoffCoordinates, setdropoffCoordinates] = useState([0,0]);
    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoic2hhcmlhbiIsImEiOiJjbDg0aGQxNG8wZnhnM25sa3VlYzk1NzVtIn0.BxFbcyCbxdoSXAmSgcS5og",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setpickupCoordinates(data.features[0].center);
            })

    }

    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoic2hhcmlhbiIsImEiOiJjbDg0aGQxNG8wZnhnM25sa3VlYzk1NzVtIn0.BxFbcyCbxdoSXAmSgcS5og",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setdropoffCoordinates(data.features[0].center);

            })
    }
    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])
    return (
        <Wrapper>
            <Buttoncon>
                <Link href='/search'>
                    <Back src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>

            </Buttoncon>
            <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer>
                <RideSelector
                    pickupCoordinates={pickupCoordinates}
                    dropoffCoordinates={dropoffCoordinates}
                />
                <BtnCon>
                    <ConfirmBtn>
                        Confirm uberX
                    </ConfirmBtn>
                </BtnCon>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
h-screen flex flex-col
`
const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`
const ConfirmBtn = tw.div`
bg-black text-white my-4 mx-4 py-3 text-center text-xl rounded-md font-uber
`
const BtnCon = tw.div`
border-t-2
`
const Back = tw.img`
h-8 cursor-pointer 
`
const Buttoncon = tw.div`
flex w-8 rounded-full bg-white fixed z-10 m-2 shadow-md cursor-pointer
`