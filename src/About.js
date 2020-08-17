import React from 'react'
import './About.css'
import Footer from './Footer'
import about from './about-us.jpg'
import im from './im.jpg'
import kaki from './kaki.jpg'
import team from './team.jpg'

function About() {
	return (
		<div className="about_page">
		<h1 className="about">ABOUT US</h1>

		<div className="part1">

		<img src ={about} className ="image_about" />
		<h4 className="ho">A LITTLE ABOUT OUR HOME SALON</h4>
	
		
		
		<p className="party">Sona Home Salon is Merrut's most established Home Salon, delivering beauty treatments in the comfort of your own home.<br/><br/>

Today´s busy lifestyle leads us with neither the time nor the inclination to visit conventional beauty salons. Understanding how precious and rare relaxation time is for you, 
Sona Home Salon offers a convenient, indulgent and professional solution.</p><br/>


<h4 className="cot">Happiness begins at home</h4>


<p className="parap">We take the pressure and stress away, 
delivering a comprehensive menu of treatments directly to your door at a 
time that suits you. The Sona Home Salon services aims to provide ultimate luxury 
treatments in the comfort of your home. We are proud to offer a wide range of treatments with the 
highest standard and go that extra mile to ensure you feel totally pampered at home.</p>

		</div>


		<div className="part1">

		<h4 className="left_partheading">WHY DO WE NEED BEAUTY HOME SERVICES?</h4>
	
		
		
		<p className="left_partpara">We all yearn for a day of pampering and relaxation. 
		Unfortunately with today’s hectic pace, it is becoming impossible to do so.<br/><br/>
		 With Sona Home Salon, you can enjoy beauty services from the convenience of your home. 
		 The Home Salon is devoted to bringing you back to balance with our vibrant array of products.<br/><br/>
		 At Sona Home Salon, we ensure that you shall enjoy a complete beauty experience. 
		 We pride ourselves for providing services to suit all your unique needs related to 
		hair, face, body, manicure or pedicure.</p><br/>

		<img src ={im} className ="right_image_about" />
		

		</div>


		<div className="part1">

		<img src ={kaki} className ="image_about2" />
		<h4 className="heading_about2">THE FOUNDER</h4>
	
		<p className="party">Sona Home Salon is the brain child of Sonakshi Singh
		who is dedicated to the enhancement of personal beauty and relaxation at home. 
		She worked in the beauty field for over a decade.<br/><br/>
		She keeps their knowledge of various techniques by continually upgrading and educating 
		themselves with the latest innovation in beauty and lifestyle.</p><br/>

		</div>
      
		<div className="part1">

		<h4 className="bottom_partheading">THE TEAM</h4>
	
		
		
		<p className="bottom_partpara">Every member of the Amaze Home Salon is highly trained 
		and exceptionally talented. Hand-picked by the founders, the beauticians encompass a variety 
		of beauty treatments to ensure that we can cater to your requirements. <br/><br/>
		You will find that our friendly approach puts you at ease, giving you a much 
		better experience than a salon. Besides the usual beauty regimes, 
		our beauticians give you a fabulous makeover for that party you want to look good in. 
		They undergo through several trainings to give you the best service.</p><br/>

		<img src ={team} className ="bottom_image_about" />
		

		</div>



		

		< Footer/>
		
			
		</div>
	)
}

export default About