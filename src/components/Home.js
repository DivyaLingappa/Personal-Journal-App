import React from 'react';
import '../App.css';
import icon from '../assets/add-icon.png';
import { Link } from 'react-router-dom';
import Journals from './Journals';
import Description from './Description';

const Home = () => {
  const journals = [];
  const storedItems = JSON.parse(window.localStorage.getItem('journalLists'));
  if(storedItems){
    journals.push(...storedItems);
  }
  else{
    window.localStorage.clear()
  }
  // console.log(items);

  const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
  }

  return (
    <div className="container">
       <nav className="home-nav">
          <h3 className='home-heading'>Personal Journal</h3>
          <button className='btn-add-img'><Link to='/journals' element={<Journals />} state={{ journalEntries: journals }}><img src={icon} alt='add-icon' className='add-icon-img' /></Link></button>
        </nav>
        <hr className='line'/>
        <ol className='journal-list'>
          {storedItems && storedItems.map((item) => (
            <li className='journal-list-item' key={ generateKey(item.title) }>
            <Link to='/description' element={<Description />} state={{ title: item.title }} className='journal-list-link' >
               {item.title} 
            </Link>
            </li>
          )) 
          }
        </ol>
    </div>
  );
}

export default Home;
