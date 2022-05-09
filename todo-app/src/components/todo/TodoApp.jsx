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
            password: "",
            hasLoginFailed: false,
            showSuccessfulMessage: false

        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);

    }

    //When value changes, we change the state and changes in the UI transforms the component to a CONTROLLED COMPONENT
    handleChange(event){
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked(event){
        if(this.state.username==='Daniel' && this.state.password==='password'){
            this.setState({
                showSuccessfulMessage:true,
                hasLoginFailed:false
            })
        } else {
            this.setState({
                showSuccessfulMessage:false,
                hasLoginFailed:true
            })
        }
        console.log("clicked");
        
    }
    
    

    render(){
        return(
            <div>
                <ShowCredentialsMessage hasLoginFailed={this.state.hasLoginFailed} showSuccessfulMessage={this.state.showSuccessfulMessage}/>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                Password: <input type="password" name="password" vale={this.state.password} onChange={this.handleChange}></input>
                <button className="Login" onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

}

function ShowCredentialsMessage(props){
    if(props.hasLoginFailed){
        return <div>Invalid Login</div>
    } else if(props.showSuccessfulMessage){
        return <div>Successful Login</div>
    } else {
        return null;
    }
}

export default TodoApp