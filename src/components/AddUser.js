import React from 'react';

class AddUser extends React.Component {
    userAdd = {}
    constructor(props){
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            age: 1,
            isHappy: false
        }
    }
    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder='name'onChange={(e)=>this.setState({ first_name: e.currentTarget.value })}/>
                <input placeholder='lastName' onChange={(e)=>this.setState({last_name: e.currentTarget.value})}/>
                <textarea placeholder='body' onChange={(e)=>this.setState({ email: e.currentTarget.value })}></textarea>
                <input placeholder='age' onChange={(e)=>this.setState({ age: e.currentTarget.value })}/>
                <label htmlFor='isHappy'>Happy?</label>
                <input type="checkbox" id="isHappy" onChange={(e)=>this.setState({isHappy: e.currentTarget.checked})}/>
                <button type='button' onClick={()=>{
                    //Позволяет очищать форму заполнения каждый раз
                    this.myForm.reset();
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        age: this.state.age,
                        isHappy: this.state.isHappy,
                    }
                    if(this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)
                    }
                    }>Input</button>
            </form>
        )
    }
}

export default AddUser;