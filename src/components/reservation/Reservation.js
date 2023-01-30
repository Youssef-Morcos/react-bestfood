import React from "react";
import './ReservationStyles.css';

function Reservation () {
    return (
        
        <div class="container">
        <h1> Skip the waiting list</h1>

        <p>Please fill the form then press "Reseve". You will receive a confirmation message from us.</p>

        <form id="reserve">
            <input name="guestName" type="text" id="guestName" placeholder="Your Name" required />
          

            <input name="customerPhoneNumber" type="text" class="formInput"  id="customerPhoneNumber" placeholder="Your Phone Number" required/>
        

            <input name="guestEmail" id="guestEmail" type="email" placeholder="Your email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
      

           <input type='datetime-local' />
            


            

            <button>Reserve</button>


            <br/><br/>

        </form>


    
    </div>
    )

} 

export default Reservation;