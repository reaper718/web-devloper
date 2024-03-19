import React from 'react';
import helpPhoto from '../images/Group 46.png';
import dashboardImage from '../images/moptro logo.png'; 
import Footer from './footer';

const Home = () => {
  const daysOfWeek = [
    { day: 'Monday', percentage: 4 },
    { day: 'Tuesday', percentage: 92 },
    { day: 'Wednesday', percentage: 122 },
    { day: 'Thursday', percentage: 93 },
    { day: 'Friday', percentage: 89 },
    { day: 'Saturday', percentage: 98 },
  ];

  return (
    <div>
      <img src={helpPhoto} alt="Help" style={{ position: 'absolute', top: '20px', right: '20px' }} />
      <div style={{width: '71px', height: '70px' }} className='profile-pic'>
        <div className='four'></div>
        <img src={dashboardImage} alt="Dashboard" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className='container'>
        <div className='container_heading'>
          <h2 className='container_headingText'>Employee Productivity Dashboard</h2>
        </div>
        {daysOfWeek.map(({ day, percentage }) => (
          <div key={day} className='container_label'>
            Productivity on {day}:
            <span className='progressBar_percentage'>{percentage}%</span>
            <div className='progressBar' style={{ width: `${percentage / 2}px` }}></div>
          </div>
        ))}
      </div>
          <div>
            <Footer />
          </div>
    </div>
  );
}

export default Home;
