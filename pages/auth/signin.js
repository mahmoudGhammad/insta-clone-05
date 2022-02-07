import { getProviders, signIn } from "next-auth/react"
import Header from "../../components/Header"

export default function SignIn({ providers }) {
  return (
    <>
    <Header/>

    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-50 px-14 text-center ">
    <div >
        <img src="https://links.papareact.com/ocw" className=" w-80">
        </img>
        <p className=" w-80 text-xs italic -px-100">This is not a real app it's an app built by me <span className=" text-sm text-red-900">'Mahmoud Hammad'</span> for educational Purpose</p>

      </div>
      <div className=" mt-40">
        {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id , {callbackUrl:"/"})} 
           className=" bg-blue-500 p-3 rounded-lg text-white "
           >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
      </div>
    </div>

      
    </>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}