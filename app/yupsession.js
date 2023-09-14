"use client"


import { useSession, signIn, signOut } from "next-auth/react"



export default function Component() {
  const { data: session } = useSession()
  
  if (session) {
    return (
      <div style={{backgroundColor:'whitesmoke'}}>
        Signed in as {session.user.email}<br />
        <p style={{backgroundColor:'rgba(16,16,16,0.85)',color:'white',backdropFilter:'blur(28.5px)'}}>{session.user.name} </p>
       
<br/>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("google")}>Sign in</button>
     
    </>
  )
}