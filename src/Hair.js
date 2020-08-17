
 import React from 'react'
 import { Link } from "react-router-dom";
  import hair from './hair.jpg'
  import skin from './skin.jpg'
  import use from './use.png'
  import bodyspa from './body spa.jpg'
  import handandfeet from './hand and feet.jpg'



import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
 
export default () => (
  <Tabs>
    <TabList className="second_navlist">
   <Tab className="react-tabs"><Link to="/" className="second_navitem">HAIR</Link></Tab>
  <Tab className="react-tabs"><Link to="/" className="second_navitem">SKIN</Link></Tab>
  <Tab className="react-tabs"><Link to="/" className="second_navitem">MAKE-UP</Link></Tab>
  <Tab className="react-tabs"><Link to="/" className="second_navitem">BODY POLISHING</Link></Tab>
  <Tab className="react-tabs"><Link to="/" className="second_navitem">HANDS & FEET</Link></Tab>
      
    </TabList>
 
    <TabPanel>
    <div className="second_navdiv" style={{display:'flex'}}>
  <img className="second_navimage"src={hair} alt="" />      
  <span className="span"><h2 className="second_navtext">HAIR</h2>

<p className="para">Is your hair dull, abused, devoid of nutrition, moisture? Do you feel like just chopping off your tresses or hide under a huge hat or stole? Our verdict – Don`t.<br/>

We will help you restore your hair to its shiny glory.<br/><br/>

Include in our Advance hair spa to get soft and nourished tresses shining with opulence. Get make over for your hair with advanced Cysteine, keratin and permanent straightening treatments. Nourish you scap with natural Ylang Ylang, Palmrosa, Argan, Chamomile and Lavender Oils.<br/>

Increase the shine and age of your colored hair by using various color enhancing and caring Services at our salon exclusively for you.<br/><br/>

Give you crowning glory a glossy touch and feel with our Crystal Shine tretment.<br/><br/>

<b>Call  + 91 123456789 to book appointment for HOME SALON SERVICE.</b></p></span>
</div>
     
    </TabPanel>

    <TabPanel>
      <div className="second_navdiv" style={{display:'flex'}}>
  <img className="second_navimage"src={skin} alt="" />      
  <span className="span"><h2 className="second_navtext">SKIN</h2>

<p className="para">Everything good thing requires maintenance. So does your skin. Get waxing, clean up, threading, bleach and facial at your own home with our experts.<br/>

Indulge in White Lumination Brightening Radiance Treatment and see those dark spots and tan gradually go away leaving you with translucent and glowing skin.<br/>

Our Sea Water pearls which combines the goodness of pearls, algae and caviar re -plumps your skin from within and leaves you with relaxed and radiant complexion.<br/>

Get those worry lines and frown lines off your face with our collagen booster treatment, which help fill in those unsightly lines and bring a confident youthful smile on your face.<br/><br/>

Give your skin the much needed pampering and care with our purifying and hydrating facials and masks.<br/><br/>

<b>Call  + 91 123456789 to book appointment for HOME SALON SERVICE.</b></p></span>
</div>
    </TabPanel>


<TabPanel>
      <div className="second_navdiv" style={{display:'flex'}}>
  <img className="second_navimage"src={use} alt="" />      
  <span className="span"><h2 className="second_navtext">MAKE-UP</h2>

<p className="para">Everything good thing requires maintenance. So does your skin. Get waxing, clean up, threading, bleach and facial at your own home with our experts.<br/>

Indulge in White Lumination Brightening Radiance Treatment and see those dark spots and tan gradually go away leaving you with translucent and glowing skin.<br/>

Our Sea Water pearls which combines the goodness of pearls, algae and caviar re -plumps your skin from within and leaves you with relaxed and radiant complexion.<br/>

Get those worry lines and frown lines off your face with our collagen booster treatment, which help fill in those unsightly lines and bring a confident youthful smile on your face.<br/><br/>

Give your skin the much needed pampering and care with our purifying and hydrating facials and masks.<br/><br/>

<b>Call  + 91 123456789 to book appointment for HOME SALON SERVICE.</b></p></span>
</div>
    </TabPanel>


<TabPanel>
      <div className="second_navdiv" style={{display:'flex'}}>
  <img className="second_navimage"src={bodyspa} alt="" />      
  <span className="span"><h2 className="second_navtext">BODY POLISHING</h2>

<p className="para">Get lost in a worry free and de-stressing environment as you indulge in our Revitalising massage treatment, bask in serene ambience with soft natural music floating in your ears and mind.<br/><br/>

Bring a facial like glow on your entire being with our body polishing services like Minero Body Relaxing and Water Element Treatments.<br/><br/>

Get De –tannned while listening to peaceful music in our spa room using our Chocolate De tanning treatment.<br/><br/>

<b>Call  + 91 123456789 to book appointment for HOME SALON SERVICE.</b></p></span>
</div>
    </TabPanel>



<TabPanel>
      <div className="second_navdiv" style={{display:'flex'}}>
  <img className="second_navimage"src={handandfeet} alt="" />      
  <span className="span"><h2 className="second_navtext">HANDS & FEET</h2>

<p className="para">Hands and Feet are the most neglected parts of our body. We spend a lot on Face and hair care and often forget about pampering our hands and feet, which are usually the first ones to show signs of stress and age.<br/><br/>
Indulge in caring and pampering Hand and Feet spa treatments, De tanning treatments, moisturizing treatments and flaunt gorgeous hands and feet.<br/>
If ice creams are the love of your life then try our Ice cream pedicure and manicure and let your limbs taste the sweetness of different flavors that we have to offer.<br/><br/>

Impress your friends with designer and artistic nails that you just got done at our salon.<br/>

Walk in to our salon or call + 91 9699 790 790 to book appointment for services.<br/><br/>

<b>Call  + 91 123456789 to book appointment for HOME SALON SERVICE.</b></p></span>
</div>
    </TabPanel>




  </Tabs>
);