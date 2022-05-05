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

        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)

    }

    handleUsernameChange(event){
        this.setState({
            username: event.target.value
        })
    }
    
    handlePasswordChange(event){
        this.setState({
            password: event.target.value
        })
    }

    render(){
        return(
            <div>
                User Name: <input type="text" name="Username" value={this.state.username} onChange={this.handleUsernameChange}></input>
                Password: <input type="password" name="Password" vale={this.state.password} onChange={this.handlePasswordChange}></input>
                <button className="Login">Login</button>
            </div>
        )
    }
}

export default TodoApp