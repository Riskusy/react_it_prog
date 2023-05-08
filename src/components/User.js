import React from 'react';
import AddUser from './AddUser';
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';

class User extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editForm: false
        }
        }
    
    user = this.props.user
    render() {
        return (
            <div className="user">
                <IoHammerSharp onClick={()=> this.setState({
                    editForm: !this.state.editForm
                })} className='update'/>
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className='delete'/>
                <h3>{this.user.first_name}</h3>
                <p>{this.user.last_name}</p>
                <h3>{this.user.email}</h3>
                <img src={this.user.avatar} />
                <b>{this.user.isHappy ? 'Happy' : 'NOT'}</b>

                {this.state.editForm && <AddUser
                    user={this.user}
                    onAdd={this.props.onEdit}/>}

            </div>
        )
    }
}

export default User;