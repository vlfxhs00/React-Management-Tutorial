import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
   'id' : '1',
   'image' : 'https://placeimg.com/64/64/any1', 
   'name' : '이재천',
   'birthday' : '961222',
   'gender' : '남자',
   'job' : '대학생'
},
{
  'id' : '2',
  'image' : 'https://placeimg.com/64/64/any2', 
  'name' : '이지현',
  'birthday' : '960305',
  'gender' : '남자',
  'job' : '프로그래머'
},
{
  'id' : '3',
  'image' : 'https://placeimg.com/64/64/any3', 
  'name' : '이우주',
  'birthday' : '951222',
  'gender' : '남자',
  'job' : '디자이너'
}
]

class App extends Component {
  render (){
    return (
      <div>
          {customers.map(c =>  { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} gender={c.gender} job={c.job}/>);})}
      </div>
      );
    }
}

export default App;
