import React from 'react'
import {BsCheck} from 'react-icons/bs'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>Ui/UX Design</h3>
          </div>
          <ul className='service_list'> 
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi!</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi!</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi!</p>
            </li>
          </ul>
        </article>
        {/*End UI/UX*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Developer</h3>
          </div>
          <ul className='service_list'> 
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi!</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi!</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi!</p>
            </li>
          </ul>
        </article>
        {/*End Web Developer*/}
        <article className="service">
          <div className="service__head">
            <h3>Content Creations</h3>
          </div>
          <ul className='service_list'> 
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi!</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi!</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi!</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services