import React, { Component } from 'react'

class FormLogin extends Component{
    constructor(){
        super()
        this.state = {}

    }

    render(){

        var st = {
            color: "white",
            linkStyle: "none",
            fontSize: "10px",
        }

        return(
            <div>
                <form method="post" class="formInput">
                    <input type="text" name="username" autoComplete="off" placeholder="username" />
                    <input type="password" name="password" autoComplete="off" placeholder="password" />
                    <input type="submit" value="Login" />
                </form>
                

                <small style={st}>
                    ngak tau password..? <a style={st} href="/shutdown">KLIK DISINI</a>
                </small>

                
            </div>
        )
    }
}

export default FormLogin