import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import Home from './Home';

const Description = () => {
    const storedItems = JSON.parse(window.localStorage.getItem('journalLists'));
    let description = '';
    let date = '';
    const location = useLocation();
    // console.log(location.state.title)
    for (let item of storedItems) {
        if(item.title === location.state.title){
            description = item.description;
            date = item.date;
        }
    }

    const deleteHandler = () => {
        for (let index=0; index<storedItems.length; index++) {
          if(storedItems[index].title === location.state.title){
            storedItems.splice(index, 1);
          }
      }
      window.localStorage.setItem('journalLists', JSON.stringify(storedItems));
    }

    return (
        <>
            <div className="container">
                <nav className="home-nav">
                    <h3 className='home-heading'>{ location.state.title }</h3>
                    <h3 className='home-heading'>{ date }</h3>
                </nav>
                <div className='description-display'>{ description } </div>
                <footer className='footer'>
                    <Link to='/' element={<Home />} onClick={deleteHandler}><button className='btn-delete'>Delete</button></Link>
                    <Link to='/' element={<Home />} ><button className='btn-goback'>Go Back</button></Link>
                </footer>
            </div>
        </>
    );
}

export default Description;
