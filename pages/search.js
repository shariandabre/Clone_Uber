import Link from 'next/link'
import React, { useState } from 'react'
import tw from 'tailwind-styled-components'
function Search() {

  const [pickup,setpickup]=useState()
  const [dropoff,setdropoff]=useState()

  return (
    <Wapper>
      <ButtonContainer>
      <Link href='/'>
        <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
      </Link>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"/>
          <Square src="https://img.icons8.com/windows/344/square-full.png"/>
        </FromToIcons>
        <InputBoxes>
          <Input placeholder="Enter pickup location"
          value={pickup}
          onChange={(e)=>setpickup(e.target.value)} required/>
          <Input placeholder="Where to?"
          value={dropoff}
          onChange={(e)=>setdropoff(e.target.value)} required/>
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/external-others-inmotus-design/344/external-Plus-geo-others-inmotus-design-2.png"/>
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/344/star--v1.png"/>
        Saved Places
      </SavedPlaces>
      <Link href={{
        pathname:"/confirm",
        query:{
          pickup:pickup,
          dropoff:dropoff
        }
      }}>
      <ConfirmBtn >
        Confirm Location
      </ConfirmBtn>
      </Link>
    </Wapper>
  )
}

export default Search

const Wapper = tw.div`
bg-gray-200 h-screen p-2
`
const ButtonContainer = tw.div`
bg-white px-4 border-b border-gray-200  
`
const BackButton = tw.img`
h-8 cursor-pointer 
`
const InputContainer=tw.div`
bg-white flex items-center px-4 mb-2 
`
const FromToIcons =tw.div`
w-10 flex flex-col mr-2 items-center
`
const Circle=tw.img`
h-2.5 
`
const Line = tw.img`
h-10
`
const Square=tw.img`
h-3 
`
const InputBoxes=tw.div`
flex flex-col flex-1
`
const Input=tw.input`
h-10 bg-gray-200 my-2 rounded-3 p-2 outline-none borber-none
`
const PlusIcon=tw.img`
w-10 h-10 ml-3
`
const SavedPlaces=tw.div`
flex items-center bg-white px-4 py-2  rounded-4
`
const StarIcon=tw.img`
bg-gray-400 w-8 h-8 p-2 rounded-full mr-2
`
const ConfirmBtn=tw.div`
bg-black text-white  my-2 py-3 text-center text-xl cursor-pointer rounded-md font-uber

`