import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'
import Map from '../components/Map'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged,signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
export default function Home() {
  const [user,setuser]=useState(null)
  const router =useRouter();

  useEffect(()=>{
    return onAuthStateChanged(auth,user=>{
      if(user){
        setuser({
          name:user.displayName,
          photoUrl:user.photoURL,
        })
      }
      else{
        setuser(null)
        router.push('/login')
      }
    })
  })

  return (
    <Wrapper>
      <Map />
      <Start>
        <Header>
          <UberLogo>
            Uber
          </UberLogo>
          <Profile>
            <Name>
              {user && user.name}
            </Name>
            <UserImg src={user && user.photoUrl} onClick={()=> signOut(auth)}/>
          </Profile>
        </Header>
        <ActionButtons>
          <Link href='/search'>
          <ActionButton> 
            <ActionButtonImg src="https://i.ibb.co/cyvcpfF/uberx.png" />
            Ride
          </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImg src='https://img.icons8.com/color/344/driver.png' />
            Drive
          </ActionButton>
          <ActionButton>
            <ActionButtonImg src='https://cdn-icons-png.flaticon.com/512/3652/3652191.png' />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>
          Where to?
        </InputButton>
      </Start>
    </Wrapper>
  )
}
//{
const Wrapper = tw.div`
  flex flex-col h-screen
`
const Start = tw.div`
  flex-1 p-4
`
const Header = tw.div`
  flex justify-between items-center 
`
const UberLogo = tw.div`
  font-uber font-normal text-4xl ml-2
`
const Profile = tw.div`
  flex items-center
`
const Name = tw.div`
  mr-4 text-md font-uber
`
const UserImg = tw.img`
  h-12 rounded-full border border-gray-400 p-px cursor-pointer
`
const ActionButtons = tw.div`
  flex
`
const ActionButton = tw.div`
font-uber flex bg-gray-200 flex-1 m-2 mt-3 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl border border-gray-300
`
const ActionButtonImg = tw.img`
  h-20
`
const InputButton = tw.div`
  h-12 bg-gray-200 text-2xl p-4 flex items-center mt-5 rounded-lg border border-gray-300 font-uber font-medium mx-2
`
//}