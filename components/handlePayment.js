import React from 'react'

function handlePayment(email, price) {
    console.log(`Email : ${email} price: ${price}`)
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
            alert(message);
        }
    });

    handler.openIframe();
}

export default handlePayment
