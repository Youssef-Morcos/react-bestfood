import React from "react";
import './ContactStyles.css';


function Contact (){
    return (
        <div class="container">
        <h1> We are eager to know what you have to say!</h1>

        <p>Please fill the form then press "Submit". You will receive a confirmation email from us.</p>

        <form id="reserve">
            <input name="guestName" type="text" id="guestName" placeholder="Your Name" required />
          

            <input name="customerPhoneNumber" type="text" class="formInput"  id="customerPhoneNumber" placeholder="Your Phone Number" required/>
        

            <input name="guestEmail" id="guestEmail" type="email" placeholder="Your email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
      

            <textarea rows='10' placeholder='Enter your message here'/>
            


            

            <button>Submit</button>


            <br/><br/>

        </form>


    
    </div>
    )
}

export default Contact;