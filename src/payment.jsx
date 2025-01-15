const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const displayRazorpay = async (amount, name, email, contact) => {
  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

  if (!res) {
    alert('Razorpay SDK failed to load. Are you online?');
    return;
  }

  const options = {
    key: 'rzp_test_L2JCtYruGGCB8k', // Enter the Key ID generated from the Dashboard
    amount: amount, // Amount in paise (e.g., 106000 paise = INR 1060)
    currency: 'INR',
    name: 'Dasy Delicious',
    description: 'Order Payment',
    image: 'logo1.png',
    // image: 'https://example.com/your_logo', // Replace with your logo URL
    handler: function (response) {
      alert('Payment Successful!');
      console.log(response.razorpay_payment_id);
      console.log(response.razorpay_order_id);
      console.log(response.razorpay_signature);
    },
    prefill: {
      name: name,
      email: email,
      contact: contact,
    },
    notes: {
      address: 'Razorpay Corporate Office',
    },
    theme: {
      // color: '#3399cc',
      color: '#ffea00',
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

export { displayRazorpay };
