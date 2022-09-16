import React, { useState } from 'react';
import '../App.css';
import Modal from './Modal';
import { useLocation } from 'react-router-dom';

const Journals = () => {
    const [formData, setFormData] = useState({
        title:'',
        date: new Date().toISOString().slice(0, 10),
        description:''
    });
    const { title, date, description } = formData;

    const onChange = e =>{
        setFormData({...formData, [e.target.name]:e.target.value})
    };

    const location = useLocation(); 

    const onSubmit = e =>{
        e.preventDefault();
        // console.log(formData);
        try {
            const journalItems=[];
            // const item = JSON.parse(window.localStorage.getItem('journalLists'));
            const storedItems = location.state.journalEntries;
            if(storedItems) {
                journalItems.push(...storedItems);
            }
            journalItems.push(formData);
            window.localStorage.setItem('journalLists', JSON.stringify(journalItems));
        }
        catch(err) {
            console.log(err);
        }
        finally {
            openHandler();
        }
    }

    const [isOpen, setIsOpen] = useState(false);
    const openHandler = () =>{
        setIsOpen(true)
    };

  return (
    <>
    <Modal open={isOpen} closeHandler={() => setIsOpen(false)} />
     <div className="container">
        <nav className="home-nav">
            <h3 className='home-heading'>Personal Journal</h3>
        </nav>
        <hr className='line'/>
        <form className="add-entry-form" onSubmit={e => onSubmit(e)}>
            <h1 className="segment">Add Entry</h1>
            <label>
                <input type="text" placeholder='Title' className="title-box" name='title' value={title} onChange={e => onChange(e)} required />
            </label>
            <label>
                <input type="date" className="date-box" name='date' value={date} onChange={e => onChange(e)} required />
            </label>
            <label>
                <textarea name="description" placeholder='Description' className="description-box" value={description} onChange={e => onChange(e)} required />
            </label>
            <button className="btn-submit" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Journals;
