import React from 'react'
import './work.css'
import Slider from 'infinite-react-carousel';

function Work() {
	return (
		<div>
		<h3 className="workpart">Customer Testimonials</h3>
		<Slider dots>

    <div className="test carousel-initialized">
      <p>Made me feel like pricess. Thank you very much😊 😃</p>
      <p>Anchal Sharma</p>
    </div>
    <div className="test">
      <p>Very Good pedicure & Facial...Highly Recommended...👍 👍</p>
      <p>Sejal Verma</p>
    </div>
    <div className="test">
      <p>I am very happy with my Haircut.I completely looks the way Stylist commited.Thanks...😍</p>
      <p>Nitanshi Vats</p>
    </div>
    <div className="test">
      <p>Neat and Nice work..Thanks!!Would like to recommend to my friends😇</p>
      <p>Simmy Singh</p>
    </div>
    <div className="test">
      <p>Service is good provided at home.Cleaned all the mess that happen during facial and waxing..😋</p>
      <p>Anchal Sharma</p>
    </div>
  </Slider>
  


	

			
		</div>
	)
}

export default Work