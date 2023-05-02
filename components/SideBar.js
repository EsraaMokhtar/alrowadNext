import * as React from 'react';
import style from '../styles/SideBar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faTwitter , faInstagram , faLinkedin , faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function SideBar(){
    return(

        <div className={`${style.sideBar}`}>
            <ul className='list-unstyled d-flex justify-content-around flex-column'>
                <li> 
                  <a className={`${style.facebook} text-decoration-none fs-3`} target="_blank" href= "https://www.facebook.com/IAitsp" >
                    <FontAwesomeIcon className='fs-3' icon={faFacebook} />
                  </a>
                </li>

                <li> 
                  <a className={`${style.twitter} text-decoration-none fs-3`} target="_blank" href= "https://twitter.com/IAitsp" >
                    <FontAwesomeIcon className='fs-3' icon={faTwitter} />
                  </a>
                </li>

                <li> 
                  <a className={`${style.instgram} text-decoration-none fs-3`} target="_blank" href= "https://www.instagram.com/alrowadit/" >
                    <FontAwesomeIcon className='fs-3' icon={faInstagram} />
                  </a>
                </li>

                <li> 
                  <a className={`${style.linked} text-decoration-none fs-3`} target="_blank" href= "https://www.linkedin.com/company/alrowadit/" >
                    <FontAwesomeIcon className='fs-3' icon={faLinkedin} />
                  </a>
                </li>

                <li> 
                  <a className={`${style.whats} text-decoration-none fs-3`} target="_blank" href= "https://wa.me/+201000290936" >
                    <FontAwesomeIcon className='fs-3' icon={faWhatsapp} />
                  </a>
                </li>

            </ul>
        </div>

    )
}


export default SideBar;