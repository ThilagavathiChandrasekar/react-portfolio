import React from 'react';
import '../Styles/Project.css';
import Skills from './Skills';
import bank from '../Assets/project/bank.png';
import food from '../Assets/project/food.png';
import quiz from '../Assets/project/quiz.png';
import todolist from '../Assets/project/todolist.png';
import weather from '../Assets/project/weather.png';
import { AiFillProject } from "react-icons/ai";
import { HiArrowSmRight } from "react-icons/hi";
function Project() {
  return (
    <div>
        <Skills />
    
        <div className='project'>
            <p data-aos="zoom-in-up"  data-aos-easing="linear" data-aos-duration="1000"> <AiFillProject /> Undertaking </p>
            <p data-aos="zoom-in-up"  data-aos-easing="linear" data-aos-duration="1000">A select number of project</p>

            <div className='container'>
                <div className='row d-flex justify-content-between  col-sm-12'>
                    <div data-aos="fade-right" data-aos-duration="1000" className="card col-lg-4 col-md-6 col-sm-12" style={{width: "18rem"}}>
                        <img src={bank} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Bankist Website</h5>
                            <button className='card-btn'><a href="https://playful-mooncake-eb9f18.netlify.app/" className='anchor-btn'>Learn more<HiArrowSmRight />  </a></button>
                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="1000" className="card col-lg-4 col-md-6 col-sm-12" style={{width: "18rem"}}>
                        <img src={quiz} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Quiz App</h5>
                            <button className='card-btn'><a href="https://warm-kleicha-20537b.netlify.app/" className='anchor-btn'>Learn more<HiArrowSmRight /></a></button>
                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="1000" className="card col-lg-4 col-md-6 col-sm-12" style={{width: "18rem"}}>
                        <img src={todolist} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">To Do List</h5>
                           <button className='card-btn'><a href="https://thilagavathichandrasekar.github.io/todoList/" className='anchor-btn'>Learn more<HiArrowSmRight /></a></button>
                        </div>
                    </div>

                <div data-aos="fade-right" data-aos-duration="1000" className="card col-lg-4 col-md-6 col-sm-12" style={{width: "18rem"}}>
                    <img src={weather} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Weather Application</h5>
                        <button className='card-btn'><a href="https://weather-reactjs-01.netlify.app/" className='anchor-btn'>Learn more<HiArrowSmRight /></a></button>
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="1000" className="card col-lg-4 col-md-6 col-sm-12" style={{width: "18rem"}}>
                    <img src={food} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Omnifood App</h5>
                        <button className='card-btn'><a href="https://golden-clafoutis-abd81b.netlify.app/" className='anchor-btn'>Learn more<HiArrowSmRight /></a></button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project