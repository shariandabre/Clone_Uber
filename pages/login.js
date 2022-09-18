import {useEffect} from 'react'
import { useRouter } from 'next/router'
import { auth ,provider} from '../firebase'
import { signInWithPopup,onAuthStateChanged } from 'firebase/auth'
import tw from 'tailwind-styled-components'
const Login = () => {
    const router = useRouter()
    useEffect(()=>{
        onAuthStateChanged(auth,user =>{
            if(user){
                router.push('/')
            }
        })
    })
  return (
    <Wrapper>
        <UberLogo>
            Uber
        </UberLogo>
        <Title>
            Log in to access your account
        </Title>
        <Img src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_789,h_444/v1536163183/assets/36/861ecd-09f0-4cdf-aed7-9a9bc83ddbc5/original/whyRideWithUs_tablet.svg'/>
      <SignInButton onClick={()=>signInWithPopup(auth,provider)}>
        Sign in with google
      </SignInButton>
    </Wrapper>
  )
}

export default Login
const Wrapper=tw.div`
flex flex-col h-screen bg-gray-200 p-4`
const SignInButton=tw.button`
bg-black text-white text-center py-3 mt-8 w-full `
const UberLogo = tw.div`
font-uber font-normal text-3xl 
`
const Title=tw.div`
text-4xl pt-4 text-gray-500
`
const Img=tw.img``