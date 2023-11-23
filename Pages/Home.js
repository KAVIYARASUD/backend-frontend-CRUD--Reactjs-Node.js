import React from 'react';
import './css/home.css';
import periyar from '../img/periyar.jpeg';
import { Link } from 'react-router-dom';
import Not from '../Not.js';

function Home() {
  return (
    <nav>
     <Not />
      <img src={periyar} alt="logo of periyar" /><br/>
      <div>

        <ul className="menu-list"> 
          <li className="menu-item">University</li>
          <li className="menu-item word-spacing">Academic
            <ul className="sub-menu">
              <li className="sub-menu-item"><a href='https://www.aagacattur.org.in/' target='_blank' rel='noopener noreferrer'> Arignar_Anna</a></li>
              <li className="sub-menu-item"><a href='https://gacsalem7.ac.in/' target='_blank' rel='noopener noreferrer'> Seven_Arts</a></li>
              <li className="sub-menu-item"><a href='https://www.govtwomencollegeslm8.org/' target='_blank' rel='noopener noreferrer'> Eight_Arts</a></li>
              <li className="sub-menu-item"><a href='https://www.nkrgacw.org/' target='_blank' rel='noopener noreferrer'> NKR_collage</a></li>
            </ul>
          </li>
          <li className="menu-item word-spacing">Examination
            <ul className="sub-menu">
              <li className="sub-menu-item"><a className='result' href='https://www.periyaruniversity.ac.in/Documents/2020/coe/April_2020_Examinations_UG_PG_FinalTime_table.pdf' target='_blank'>UG</a></li>
              <li className="sub-menu-item"><a href='https://www.periyaruniversity.ac.in/Documents/2020/coe/April_2020_Examinations_UG_PG_FinalTime_table.pdf' target='_blank'>PG</a></li>
            </ul>
          </li>
          <li className="menu-item word-spacing"><a href='http://etech.periyaruniversity.ac.in/periyar_univ_result/' target='_blank'>Results</a></li>
          <li className="menu-item word-spacing">Administration</li>
          <li className="menu-item word-spacing">
            <Link to="/Contact" className='link'>Contacts</Link>
          </li>
        </ul>
        <h1>Welcome to Periyar University</h1>
        <div className="read-more">
          <p>
            The Government of Tamil Nadu established Periyar University in Salem on 17th September 1997 as per the provisions of the Periyar University Act, 1997. The University covers the area comprising four districts namely Salem, Namakkal, Dharmapuri, and Krishnagiri. The University obtained 12(B) and 2(f) status from the University Grants Commission, New Delhi and it was reaccredited by the NAAC with "A++" Grade in 2021. <br/><br/> The University secured 59th rank among Indian Universities by MoE NIRF 2023.
            ...
           
          </p>
        </div>
        <div className='menu-list-down'>
          <ul className="menu-list-down">
            <li className="menu-item">University</li>
            <li className="menu-item word-spacing">Academic
              <ul className="sub-menu">
                <li className="sub-menu-item"><a href='https://www.aagacattur.org.in/' target='_blank' rel='noopener noreferrer'> Arignar_Anna</a></li>
                <li className="sub-menu-item"><a href='https://gacsalem7.ac.in/' target='_blank' rel='noopener noreferrer'> Seven_Arts</a></li>
                <li className="sub-menu-item"><a href='https://www.govtwomencollegeslm8.org/' target='_blank' rel='noopener noreferrer'> Eight_Arts</a></li>
                <li className="sub-menu-item"><a href='https://www.nkrgacw.org/' target='_blank' rel='noopener noreferrer'> NKR_collage</a></li>
              </ul>
            </li>
            <li className="menu-item word-spacing">Examination
              <ul className="sub-menu">
                <li className="sub-menu-item"><a href='https://www.periyaruniversity.ac.in/Documents/2020/coe/April_2020_Examinations_UG_PG_FinalTime_table.pdf' target='_blank'>UG</a></li>
                <li className="sub-menu-item"><a href='https://www.periyaruniversity.ac.in/Documents/2020/coe/April_2020_Examinations_UG_PG_FinalTime_table.pdf' target='_blank'>PG</a></li>
              </ul>
            </li>
            <li className="menu-item word-spacing"><a href='http://etech.periyaruniversity.ac.in/periyar_univ_result/' target='_blank'>Results</a></li>
            <li className="menu-item word-spacing">Administration</li>
            <li className="menu-item word-spacing">
              <Link to="/Contact" className='link'>Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
      <h4>© Periyar University - 2022. All Rights Reserved.</h4>
    </nav>
  );
}

export default Home;