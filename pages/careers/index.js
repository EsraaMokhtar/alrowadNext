import * as React from 'react';

import style from '../../styles/Careers.module.css';


import iconGo from '../../public/assets/iconGo.webp';
import { useTranslation } from 'react-i18next';

import Link from 'next/link';

import axios from 'axios';
import { useState, useEffect } from 'react';

import Image from 'next/image'
import dynamic from 'next/dynamic';

const ReactLoading = dynamic(() => import('react-loading'), {
    ssr: false,
});

function Careers() {

    const { t } = useTranslation();

    const [typeCareers, setTypeCareers] = useState([]);
    const [isChanged , setIsChanged] = useState(true);

    const getData = async ()=> {
        await axios.get(`https://php-mail.alrowadit.com/api/work_type`).then(response => {
            setTypeCareers(response.data.filter(ele => ele.status == 1));
            setIsChanged(true);
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        getData();
    },[]);


    return (
        <section className={`${style.layout}`}>
            <div className={`${style.inner} d-flex align-items-center `}>
                <div className='container min-vh-100 my-5'>
                    <h2 className='text-center fw-bolder text-capitalize my-5'>{t("careers_head")}</h2>
                    <p className='text-white text-center fs-5 mb-5'>{t("innovative_team")}</p>
                    <div className="row mt-5">
                    {isChanged ?  
                         typeCareers.map((type , index)=>{
                                return(
                                    <div key={index} className="col-md-12" >
                                        <div className={`${style.item}`}>
                                            <div>
                                                <h3>{t(`${type.title}`)}</h3>
                                                <h5 className='text-muted'>{t(`${type.type}`)}</h5>
                                            </div>
                                            <div>
                                                <Link className='text-decoration-none mt-4' href={`/careers/${type.id}`}>
                                                    <Image src={iconGo} alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        : 
                        <div className='mt-5 d-flex justify-content-center align-items-center'>
                            <div className='mt-5 '>
                            <ReactLoading type="spin" color="#435aff"
                                height={100} width={50} />
                            </div>
                        </div>
                    }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Careers;