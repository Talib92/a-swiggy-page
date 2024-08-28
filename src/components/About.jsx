import User from "./User"
import UserClass from "./UserClass"

const About = () =>{
    return (
        <div className="about">
            <h1>I am building my first router </h1>
            <User name= {"Talib"} location={"Kashmir"} contact= {"talib@gmail.com"} />
            <UserClass name = {"Talib Mukhtar"} location={"Kashmir,Anantnag"} contact= {"talib@gmail.com"}/>
        </div>
    )
}

export default About