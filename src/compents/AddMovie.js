import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const AddMovie = ({handelAdd}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState('');
    const [rating, setRating] = useState('2');
    function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
      }
      // func off stars
      const handelRating =(r)=>setRating(r);
      // func off movies
     const handelSumbit = (e)=>{
     e.preventDefault();
     const newMovie={
      id :Math.random(),
      name : name ,
      date : date ,
      image : image ,
     };        
     handelAdd(newMovie)
    }
    return (
        <div>
            <button className='btn add-movie-btn' onClick={openModal}>Add movie </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
          <form className='' onSubmit={handelSumbit}>
              <label>Name</label>
              <input type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
              <label>Date</label>
              <input type='Date' value={date}  onChange={(e)=> setDate(e.target.value)} />
              <label>Rating</label>
              <StarRating rating={rating} handelRating={handelRating}/>
              <label>Poste</label>
              <input required type='URL' value={image} onChange={(e)=> setImage(e.target.value)} />
              <div>
                <button className="btn btn-primary" type='submit'>confirm</button>
                <button className="btn btn-primary" onClick={closeModal}>cancel</button>

              </div>
              
          </form>
      </Modal>
        </div>
    )
}

export default AddMovie
