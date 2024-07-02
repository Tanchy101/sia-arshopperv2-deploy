import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { RiInformation2Fill } from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";
import { FaHeartbeat } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState(null);
  const [setError] = useState(null);

  useEffect(() => {
      const mobileNumber = localStorage.getItem('mobileNumber');
      if (mobileNumber) {
          const fetchUserDetails = async () => {
              try {
                  const response = await axios.get(`https://192.168.1.17:8000/api/user-details/${mobileNumber}/`);
                  setUser(response.data);
              } catch (error) {
                  console.error('Failed to fetch user details', error);
                  setError(error);
              }
          };
          fetchUserDetails();
      }
  }, [setError]);

  return (
    <>
      {/* header */}
      <Header header="PROFILE" headerright="ICHI MART" headersub="©" className='profile-header' />

      {/* content */}
      <img className='profile-icon' src='ProfileImage/profile.png' alt='profileimage'></img>
      {user && <h1 className = "profile-name">{user.firstName} {user.lastName}</h1>}

      <div className='profile-container'>
          <Link to ="/profile-info">
            <div className='profile-btn'>
              <RiInformation2Fill className="profile-btn-icon"/>
              <h1 className='profile-categories'>INFORMATION</h1>
            </div>
          </Link>
          <Link to ="">
            <div className='profile-btn'>
              <AiFillLike className="profile-btn-icon" />
              <h1 className='profile-categories'>LIKES</h1>
            </div>
          </Link>
          <Link to = "/profile-health">
            <div className='profile-btn' id="profile-marg">
              <FaHeartbeat className="profile-btn-icon" />
              <h1 className='profile-categories'>HEALTH STATUS</h1>
            </div>
          </Link>
      </div>

      {/* footer */}
      <Footer />
    </>
  )
}
export default Profile;