import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import search from '../images/search.png'

const Home = () => {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState('');
  const [name, setname] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${roomCode}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='marginStyle'>
        <div class="container d-flex justify-content-center align-items-center">
          <div class="row border rounded-5 p-3 bg-white shadow box-area reverseCol">
            <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
              <div class="featured-image mb-3 animateImg">
                <img src={search} class="img-fluid" width={500} />
              </div>
            </div>
            <div class="col-md-6 right-box mt-5">
              <div class="row align-items-center">
                <div class="header-text mb-4">
                  <h3>Enter the room code here: </h3>
                </div>
                <div class="input-group d-flex  align-items-center mb-3">
                  <div class="form-outline flex-fill mb-0">
                    <input value={roomCode} onChange={(e) => setRoomCode(e.target.value)} type="email" class="form-control form-control-lg border-dark  fs-6" placeholder="Enter the room code" required />
                  </div>
                </div>
                <div class="d-flex flex-row align-items-center mt-4 ">
                  <div class="form-outline flex-fill mb-0">
                    <button class="btn btn-lg  text-white" type="submit" style={{ backgroundColor: '#3d86e8', width: '100%' }} >Enter the room</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </form>
  );
};

export default Home;
