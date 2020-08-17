import React from 'react';
import salon4 from './img44.jpeg';
import salon2 from './boby.jpeg';
import salon3 from './nails.jpeg';
import './Home.css'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hair from './Hair';
import Work from './Work'
import Footer from './Footer'









function Home() {
	return (
		 <div>
		
		 
                <div className='container-fluid salon1' >
                    
                    <div className="row">
                        <div className="col-md-12">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 salon1"
                                        src={salon2}
                                        alt="Second slide"
                                    />


                                    <Carousel.Caption>
                                        <h3 className="head1">SALON SERVICE AT HOME</h3>
                                        <p className="subhead1">Life is more beautiful when you meet the right hairdresser.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 salon1"
                                         src={salon3}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className="head1">HIGH-CLASS MAKEUP</h3>
                                        <p className="subhead1">MAKEUP is not an tool meant to make ugly thing beautiful,it is meant to magnify the beauty that already exists.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 salon1 carousel-item"
                                        src={salon4}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3 className="head1">HIGH-END HAIR CARE</h3>
                                        <p className="subhead1">Life is more beautiful when you meet the right hairdresser.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>

                        </div>
                    </div>
                </div>

      <Hair/>
      <Work/>
      <Footer />
     
  
           
              </div>

		
	)
}

export default Home