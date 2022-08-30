import React, { Component } from 'react';
import request from 'superagent';



export default class App extends Component {

    constructor() {
        super();
        this.state = {
            users : []
        }
    }

    componentDidMount() {
        request.get('http://localhost:3000/api/users')
                .end((err, res) => {
                    const users = JSON.parse(res.text).users;
                   //console.log(users);
                    this.setState({
                        users: users                 
                    });                    
                });
    }

    render() {
        //console.log(this.state.users);
         var users_list = this.state.users.map( (user, i) => {
              return <li key={i}>{ user.name }</li>
          }); 
        
         return (
             <div>
                 <h3>Mi Aplicación -:)</h3>
                 <ul>
                     {users_list}
                 </ul>
             </div>
         );
     }
}