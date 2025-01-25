import { useState } from "react"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import Button from "../components/Button"
import BottomWarning from "../components/BottomWarning"

const SignIn = () => {
    const {username, setUsername} = useState("")
    const {password, setPassword} = useState("")
    
    function handleSubmit() {
    }

  return (
    <div className="h-screen bg-slate-300 flex justify-center">
    <div className="flex flex-col justify-center">
    <div className="flex-col justify-center w-80 p-3 px-5 rounded-lg bg-white text-center">
        <Heading title={"Sign In"}/>
        <SubHeading text={"Enter your credentials to access your account"} />
        <InputBox label={"Email"} placeholder={"aegon@targaryen.com"} setState={setUsername}/>
        <InputBox label={"Password"} placeholder={""} setState={setPassword}/>
        <Button label={"Sign In"} onClick={handleSubmit}/>
        <BottomWarning text={"Don't have an account?"} linkText={"Sign Up"} to={"/signup"}/>
    </div>
    </div>
    </div>
  )
}

export default SignIn