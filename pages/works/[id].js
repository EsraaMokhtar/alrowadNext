import * as React from 'react';
import style from '../../styles/OneWork.module.css';

import img1 from '../../public/assets/1.webp';
import img2 from '../../public/assets/2.webp';
import img3 from '../../public/assets/3.webp';
import img4 from '../../public/assets/4.webp';
import img5 from '../../public/assets/5.webp';
import img6 from '../../public/assets/6.webp';
import img7 from '../../public/assets/7.webp';
import img8 from '../../public/assets/8.webp';


import tool1 from '../../public/assets/tool1.webp';
import tool2 from '../../public/assets/tool2.webp';
import tool3 from '../../public/assets/tool3.webp';
import tool4 from '../../public/assets/tool4.webp';
import tool5 from '../../public/assets/tool5.webp';
import tool6 from '../../public/assets/tool6.webp';

import { useTranslation } from 'react-i18next';

import Image from 'next/image'
import dynamic from 'next/dynamic';

const ReactLoading = dynamic(() => import('react-loading'), {
    ssr: false,
  });

  
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
  });

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Work(){

  const { t } = useTranslation();

    
const projects = [{src: img1},{src: img2},{src: img3},{src: img4 },{src: img5},{src: img6},{src: img7 },{src: img8 }]


const options = {
  loop: true,
  center: true,
  items: 3,
  margin: 0,
  autoplay: true,
  dots: true,
  autoplayTimeout: 2000,
  smartSpeed: 450,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    800: {
        items: 1
    },
    1400: {
        items: 1
    }
  }
};

    return(
      <section className={`${style.layout}`}>

        <div className={`${style.inner} container `}>
        <div>
            <p>
              <h3 className='fw-bolder text-capitalize mt-5 text-white d-inline-block me-2'>{t("we_v")}</h3>
              <span className='text-white fw-lighter'>{t("platform")}</span>
            </p>
            
            <div className="row">
                    <div className={`${style.projectTestimonoals} projectTestimonoals col-md-12`} dir='ltr'>
                        <OwlCarousel id="project-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {projects.map((project ,index) => {
                                        return (
                                          <div  key={index}  className={`${style.item} item`}>
                                            <Image src={project.src} className="w-100" height="200px" alt="" />
                                          </div>
                                        )}
                                    )}
                        </OwlCarousel>
                    </div>
            </div>

            <div className='text-center my-5'>
                <h2 className='fw-bolder text-capitalize my-5 text-white'>{t("about_project")}</h2>
                <p>
                {t("about_project_parag")}
                </p>
            </div>

            <div className='text-center my-5'>
                <h2 className='fw-bolder text-uppercase mt-5 mb-2 text-white'>{t("services_provided")}</h2>
                <ul className="text-decoration-none d-flex flex-column list-unstyled ">
                    <li className="mb-2">
                    {t("UI_UX")}
                    </li>
                    <li className="mb-2">
                    {t("data_analysis")}
                    </li>
                    <li className="mb-2">
                    {t("interactive_website")}
                    </li>
                    <li className="mb-2">
                    {t("software_development")}
                    </li>
                    <li className="mb-2">
                    {t("Database_development")}
                    </li>
                    <li className="mb-2">
                    {t("Mobile_application_development")}
                    </li>
                </ul>

            </div>
           

           
            <div className='text-center my-5'>
                <h2 className='fw-bolder text-uppercase mt-5 mb-3 text-white'>{t("tech_that")}</h2>
                <div className='justify-content-center'>

                <ul className="text-decoration-none row justify-content-center list-unstyled ">
                    <li className="col-lg-1 col-3 mb-3">
                        <Image src={tool1} height="45" width="45" alt="" />
                    </li>
                    <li className="col-lg-1 col-3 mb-3">
                        <Image src={tool2} height="45" width="45" alt="" />
                    </li>
                    <li className="col-lg-1 col-3 mb-3">
                        <Image src={tool3} height="45" width="45" alt="" />
                    </li>
                    <li className="col-lg-1 col-3 mb-3">
                        <Image src={tool4} height="45" width="45" alt="" />
                    </li>
                    <li className="col-lg-1 col-3 ">
                        <Image src={tool5} height="45" width="45" alt="" />
                    </li>
                    <li className=" col-lg-1 col-3 ">
                        <Image src={tool6} height="45" width="45" alt="" />
                    </li>
                </ul>                        
                </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Work;