import React, {Component} from "react";

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
                My Todo Application.
                <LoginComponent/>
            </div>
        )
    }
}

class LoginComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: "User Name",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);

    }

    //When value changes, we change the state and changes in the UI transforms the component to a CONTROLLED COMPONENT
    handleChange(event){
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    

    render(){
        return(
            <div>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                Password: <input type="password" name="password" vale={this.state.password} onChange={this.handleChange}></input>
                <button className="Login">Login</button>
            </div>
        )
    }
}

export default TodoApp