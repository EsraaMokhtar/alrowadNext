import * as React from 'react';
import style from '../styles/Contact.module.css';


import { useState } from 'react';
import Swal from "sweetalert2";
import axios from 'axios';
// import '../../index.css';
import { useTranslation } from 'react-i18next';


function Contact(){

  const { t } = useTranslation();

  const [name,setName] =  useState('');
  const [email,setEmail] =  useState('');
  const [message,setMessage] =  useState('');
  const [phone,setPhone] =  useState('');
  const [companyName,setCompanyName] =  useState('');
  const [type,setType] =  useState('');

  function showAlert(message,icon){
    Swal.fire({
        title: message,
        icon: icon,
        showConfirmButton: false,
        timer: 2000
      });
  } 


  async function sendData(e){
    e.preventDefault();
    if(name != ""&& email != ""&& message != ""&& companyName != ""&& phone != "" && type != ""){
        await axios.post(`https://php-mail.alrowadit.com/api/public/api/contact`,
        {
            name : name,
            email : email,
            message: message,
            companyName: companyName,
            phone : phone,
            type : type
          }).then(response => {
            // console.log(response);
            showAlert(t("Work_Application_Created_Successfully"),'success'); 
            e.target.reset();
           })
        .catch(error => {
          console.log(error);
          showAlert(t("too_many"), 'error');
          e.target.reset();
        });

      }else{
        showAlert(t("please_fill"), 'error');
      }
  }



    return(
    <section className={`${style.layout} overflow-auto`}>
        <div className={`${style.inner} container mt-5 `}>
          <div className=" d-flex justify-content-center align-items-center text-center  ">
            <div className= {`${style.caption} mt-5`}>
                <h2 className=" m-0 text-capitalize mt-5">{t("got_ideas")}</h2>
                <p className='text-white text-capitalize mt-2'>{t("tell_us")}</p>

                  <form onSubmit={sendData}>
                    <div className={`${style.one} form-row`}>
                      <div className="col">
                        <input type="text" placeholder={t("Name")}  onChange={(e)=> { setName(e.target.value)}}/>
                      </div>
                      <div className="col">
                        <input type="email" placeholder={t("E-mail")}onChange={(e)=> { setEmail(e.target.value)}}/>
                      </div>

                      <div className="col">
                        <input type="text" placeholder={t("company_name")}  onChange={(e)=> { setCompanyName(e.target.value)}} />
                      </div>
                      <div className="col">
                        <input type="text" placeholder={t("phone")}  onChange={(e)=> { setPhone(e.target.value)}}/>
                      </div>
                      <div className="col">
                        <input type="text" placeholder={t("describe_your_idea")}  onChange={(e)=> { setMessage(e.target.value)}} />
                      </div>
                    </div>

                    <div className={` row ${style.row} `}>
                        <div className="form-check col-lg-4 col-md-6 mb-3">
                            <input className={`form-check-input  ${style.formInput}`} value="digital marketing" onChange={(e)=> { 
                              if(e.target.checked){
                                  setType(e.target.value);
                                  document.getElementById("website").checked = false;
                                  document.getElementById("software").checked = false;
                                  document.getElementById("branding").checked = false;
                                  document.getElementById("app").checked = false;
                                  document.getElementById("All").checked = false;
                              }else{
                                setType("");
                              }
                              }} type="checkbox" id="digital" />
                            <label className="form-check-label" htmlFor="digital">
                            {t("digital_marketing")}
                            </label>
                          </div>
                          <div className=" form-check col-lg-4 col-md-6 mb-3">
                            <input className={`form-check-input  ${style.formInput}`} value="website design"  onChange={(e)=> { 
                              if(e.target.checked){
                                setType(e.target.value);
                                  document.getElementById("digital").checked = false;
                                  document.getElementById("software").checked = false;
                                  document.getElementById("branding").checked = false;
                                  document.getElementById("app").checked = false;
                                  document.getElementById("All").checked = false;
                              }else{
                                setType("");
                              }
                              }}  type="checkbox" id="website" />
                            <label className="form-check-label" htmlFor="website">
                            {t("website_design")}
                            </label>
                          </div>
                          <div className=" form-check col-lg-4 col-md-6 mb-3">
                            <input className={`form-check-input  ${style.formInput}`} value="custom software"  onChange={(e)=> { 
                              if(e.target.checked){
                                  setType(e.target.value);
                                  document.getElementById("website").checked = false;
                                  document.getElementById("digital").checked = false;
                                  document.getElementById("branding").checked = false;
                                  document.getElementById("app").checked = false;
                                  document.getElementById("All").checked = false;
                              }else{
                                setType("");
                              }
                              }}  type="checkbox" id="software" />
                            <label className="form-check-label" htmlFor="software">
                            {t("custom software")}
                            </label>
                          </div>

                          <div className=" form-check col-lg-4 col-md-6 mb-3">
                            <input className={`form-check-input  ${style.formInput}`} value="branding"  onChange={(e)=> { 
                              if(e.target.checked){
                                  setType(e.target.value);
                                  document.getElementById("website").checked = false;
                                  document.getElementById("software").checked = false;
                                  document.getElementById("digital").checked = false;
                                  document.getElementById("app").checked = false;
                                  document.getElementById("All").checked = false;
                              }else{
                                setType("");
                              }
                              }} type="checkbox" id="branding" />
                            <label className="form-check-label" htmlFor="branding">
                            {t("branding")}
                            </label>
                          </div>
                          <div className=" form-check col-lg-4 col-md-6 mb-3">
                            <input className={`form-check-input  ${style.formInput}`} value="mobile app"  onChange={(e)=> { 
                              if(e.target.checked){
                                  setType(e.target.value);
                                  document.getElementById("website").checked = false;
                                  document.getElementById("software").checked = false;
                                  document.getElementById("branding").checked = false;
                                  document.getElementById("digital").checked = false;
                                  document.getElementById("All").checked = false;
                              }else{
                                setType("");
                              }
                              }}  type="checkbox" id="app" />
                            <label className="form-check-label" htmlFor="app">
                            {t("mobile_app")}
                            </label>
                          </div>
                          <div className=" form-check col-lg-4 col-md-6 mb-3">
                            <input className={`form-check-input  ${style.formInput}`} value="All"  onChange={(e)=> { 
                              if(e.target.checked){
                                  setType(e.target.value);
                                  document.getElementById("website").checked = false;
                                  document.getElementById("software").checked = false;
                                  document.getElementById("branding").checked = false;
                                  document.getElementById("app").checked = false;
                                  document.getElementById("digital").checked = false;
                              }else{
                                setType("");
                              }
                              }}  type="checkbox" id="All" />
                            <label className="form-check-label" htmlFor="All">
                            {t("all")}
                            </label>
                          </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                      <button type="submit" className='btn mb-5'>{t("send")}</button>
                    </div>

                </form>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contact;
