import React from "react"
import share from "../assets/share.mp4"
// import GoogleLogin from "react-google-login"
import { FcGoogle } from "react-icons/fc"
import logo from "../assets/logoWite.png"
import { firebase } from "../firebase/firebase"
import { client } from "../sanityClient/client"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  const SignInWithFirebase = () => {
    var provider = new firebase.auth.GoogleAuthProvider()

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(({ user }) => {
        localStorage.setItem("user", JSON.stringify(user))
        const { uid, displayName, photoURL } = user
        const doc = {
          _id: uid,
          _type: "user",
          userName: displayName,
          image: photoURL,
        }
        console.log(doc)
        client.createIfNotExists(doc).then(() => {
          navigate("/", { replace: true })
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="flex justify-start item-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={share}
          controls={false}
          autoPlay
          loop
          type="video/mp4"
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} alt="imagfdse" width="150px" />
          </div>
          <div className="shadow-2xl ml-2">
            <div className="bg-mainColor flex justify-center items-center p-2 rounded-lg cursor-pointer outline-none hover:bg-red-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:text-white duration-500 ">
              <FcGoogle />
              <button
                className=" flex justify-center text-sm items-center ml-2 rounded-sm cursor-pointer outline-none"
                onClick={() => SignInWithFirebase()}
              >
                SingIn With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
