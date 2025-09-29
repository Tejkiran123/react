import React from 'react'

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            count: 0
        }
    }
render(){
    const {name, location}=this.props
    return (
        <div className="user-card">
            <h2>Count: {this.state.count}</h2>
            <button onClick={()=>{
                //NEVER DIRECTLY UPDATE STATE VARIABLES means this.state.count = this.state.count+1
                this.setState({  count: this.state.count + 1})
            }}>Count +</button>
            <h3>Name: {name}</h3>
            <h4>Location: {location}</h4>
        </div>
    )
}
}

export default UserClass;