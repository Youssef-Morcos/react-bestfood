import React from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Reservation from "../components/reservation/Reservation";

function ReservationPage () {
    return (
        <>
            <Navbar/>
            <Reservation />
            <Footer/>
        </>
    )
}

export default ReservationPage;