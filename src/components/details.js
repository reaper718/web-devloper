import React, { useState } from 'react';
import helpPhoto from '../images/Group 46.png';
import dashboardImage from '../images/moptro logo.png';
import './styles.css';
import Footer from './footer';

const Contact = () => {
  const employees = [
    { EMPID: '001', name: 'John Doe', dob: '01/01/1990', role: 'Manager' },
    { EMPID: '002', name: 'Jane Smith', dob: '05/10/1985', role: 'Developer' },
    { EMPID: '003', name: 'Alice Johnson', dob: '12/15/1995', role: 'Designer' },
    // Add more employee objects as needed
  ];

  const [searchName, setSearchName] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const handleSearch = (event) => {
    setSearchName(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const filtered = employees.filter(employee => employee.name.toLowerCase().includes(searchName.toLowerCase()));
      setFilteredEmployees(filtered);
    }
  };

  return (
    <div>
      <img src={helpPhoto} alt="Help" style={{ position: 'absolute', top: '20px', right: '20px' }} />
      <div style={{ width: '71px', height: '70px' }} className='profile-pic'>
        <div className='four'></div>
        <img src={dashboardImage} alt="Dashboard" style={{ width: '100%', height: '100%' }} />
      </div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchName}
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
        style={{ margin: '10px' }}
        className="search-bar"
      />
      <div>
        {(searchName ? filteredEmployees : employees).map((employee, index) => (
          <div key={index} className='employee-container'>
            <div className='emp-details'><span className='emp-label'>EMPID:</span> <span className='emp-id'>{employee.EMPID}</span></div>
            <div className='emp-details'><span className='emp-label'>Name:</span> <span className='emp-id'>{employee.name}</span></div>
            <div className='emp-details'><span className='emp-label'>DOB:</span> <span className='emp-dob'>{employee.dob}</span></div>
            <div className='emp-details'><span className='emp-label'>Role:</span> <span className='emp-role'>{employee.role}</span></div>
          </div>
        ))}
      </div>
      <div>
            <Footer />
          </div>
    </div>
  );
};

export default Contact;
