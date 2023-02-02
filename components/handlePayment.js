import React from 'react'

function handlePayment(email, price, roomname, arrivalDate, depatureDate, guestNumber) {
    function CreateBooking(semail, sroomname, sarrivalDate, sdepatureDate, sguestNumber, sprice, sref) {
        console.log(semail + sprice + sref)
        fetch("http://localhost:8080/booking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ semail, sroomname, sarrivalDate, sdepatureDate, sguestNumber, sprice, sref })
        })

    }
    const handler = PaystackPop.setup({
        key: 'pk_test_c3c92ed8d034efde8ef609b5b649b38d7737ff3a', // Replace with your public key
        email,
        amount: price * 100,
        // label: "Optional string that replaces customer email"
        onClose: function () {
            alert('Window closed.');
        },
        callback: function (response) {
            let message = 'Payment complete! Reference: ' + response.reference;
            CreateBooking(email, roomname, arrivalDate, depatureDate, guestNumber, price, response.reference)
            alert(message);
        }
    });

    handler.openIframe();
}
export default handlePayment
