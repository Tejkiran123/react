import UserClass from "./UserClass"
import UserFunc from "./UserFunc"

const About = ()=>{
    return (
        <div>
        <div>This is about us compoenent</div>
        <UserClass name={'kiran'} location={'vikarabad'}/>
        <UserFunc />
        </div>

    )
}
export default About