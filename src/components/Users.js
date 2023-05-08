import React from 'react';
import User from './User';

class Users extends React.Component {
    render() {
        if(this.props.users.length > 0){
        return (
            <div>
                {this.props.users.map(el=>(
                   <User 
                    onEdit={this.props.editUser}
                    onDelete={this.props.onDelete} 
                    key={el.id} 
                    user={el}
                    />
                ))}
            </div>
        )
    }else {
        return(
        <div className='user'>
        <p>Not users</p>
    </div>)
    }
}
}

export default Users;