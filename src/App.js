import './App.css';
import Users from './users/Users';
import img from './image/1.png';
import img2 from './image/2.png';
import img3 from './image/3.png';
import img4 from './image/4.png';
import img5 from './image/5.png';
import img6 from './image/6.png';
import img7 from './image/7.png';
import img8 from './image/8.png';
import img9 from './image/9.png';
import img10 from './image/10.png';
import UserOne from './userOne/UserOne';



const lists = [
{
  id:1,
name:'Dima',
active:'в сети',
img:img,
disactive:'не в сети',
},
{
  id:2,
name:'Vlad',
active:'в сети',
img:img2,
disactive:'не в сети',
},
{
  id:3,
name:'Adil',
active:'в сети',
img:img3,
disactive:'не в сети',

},
{
  id:4,
name:'Amir',
active:'в сети',
img:img4,
disactive:'не в сети',

},
{
  id:5,
name:'Tima',
active:'в сети',
img:img5,
disactive:'не в сети',
},
{
  id:6,
name:'Roma',
active:'в сети',
img:img6,
disactive:'не в сети',
},
{
  id:7,
name:'Gleb',
active:'в сети',
img:img7,
disactive:'не в сети',
},
{
  id:8,
name:'Toma',
active:'в сети',
img:img8,
disactive:'не в сети',
},
{
  id:9,
name:'Dina',
active:'в сети',
img:img9,
disactive:'не в сети',
},
{
  id:10,
name:'Dora',
active:'в сети',
img:img10,
disactive:'не в сети',
},



]



function App() {
  
  return (

    <div className="App">
      
      {
      lists.map(list =>(
<Users
name={list.name}
active={list.active}
img={list.img}
disactive={list.disactive}


/>
      ))
      
      }

      <UserOne/>
    </div>
  );
}

export default App;
