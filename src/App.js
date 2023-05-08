// import ReactDOM from 'react-dom';//Старый формат
import React from 'react';
import * as ReactDom from 'react-dom/client';
import Header from './components/Header';
import Image from './components/Image';
import images from './img/images.png';
import Users from './components/Users';
import AddUser from './components/AddUser';
import axios from 'axios';


const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {
  constructor(props){
    super(props)

    axios.get(baseUrl).then((res)=>{
    this.setState({users: res.data.data})
    })
    // Заполняли в ручную 
    this.state = {
        // users : [
        //     {
        //         "id": 1,
        //         "firstname": "Fifa",
        //         "lastname": "dsaf",
        //         "bio": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
        //         "age": 34,
        //         "isHappy": true,                
        //       },
        //       {
        //         "id": 2,
        //         "firstname": "Fifa",
        //         "lastname": "dsaf",
        //         "bio": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
        //         "age": 43,
        //         "isHappy": false,                
        //       },
        //       {
        //         "id": 3,
        //         "firstname": "Fifa",
        //         "lastname": "dsaf",
        //         "bio": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
        //         "age": 44,
        //         "isHappy": true,                
        //     }
        // ]

        // создали новый массив в который передаем
        //  данные из сервера и меняем форму в User.js для
        //  корректного получения их
        users: []
    }
    this.addUser = this.addUser.bind(this)
    this.removeUser = this.removeUser.bind(this)
    this.editUser = this.editUser.bind(this)

}
//  Так создается класс с конструктором
//   constructor(props){
//     super(props)
//     this.state = {
//       helpText: "Help text",
//       userData: ""
//     }
    //Прописываем эту строчку так как хотим использовать
    // setState
    // this.inputClick = this.inputClick.bind(this)

  // }

    // componentDidUpdate(in class) записывается вместо useEffect
    // componentDidUpdate(prevProp) {
    //     if(this.state.helpText !== "Help")
    //       console.log("Some");
    // }

  render(){
    return (
    <div className="name">
      {/* <Header title="A Cap"/>
      Записывается от конструктора
    <h1>{this.state.helpText}</h1>
    <h2>{this.state.userData}</h2>
    <input placeholder={this.state.helpText}
      onChange={event =>this.setState({userData: event.currentTarget.value})}
      onClick={this.inputClick} 
      onMouseEnter={this.mouseOver}
      />
      <p>{this.state.helpText === "Help text" ? "Yes" : "No"}</p>
      <Image image={images}/> */}
      <Header title="List costomers" />
      <main>
      <Users 
        users={this.state.users}
        onEdit={this.editUser} 
        onDelete={this.removeUser}/>
      </main>
      <aside>
        <AddUser onAdd={this.addUser}/>
      </aside>
  </div>
  )}
//   inputClick() {
//     Записиь на изменения текста
//    this.setState({helpText: "Changed"})
//     console.log("Clicked")
//   }
//   Запись сколько раз мы увидим пролистывание мыши по инпуту
//   mouseOver() {console.log("Mouse Over")}
// }
      addUser(user){
        const id = this.state.users.length + 1
        this.setState({ users: [...this.state.users, {id, ...user}] })
        
      }

      removeUser(id) {
        this.setState({
          users: this.state.users.filter((user) => user.id !== id)
        })
      }

      editUser(user){
        let allUsers = this.state.users
        allUsers[user.id - 1] = user

        this.setState({users: []}, () => {
          this.setState({users: [...allUsers]})
        })
      }

    }

export default App;
