import { useEffect } from 'react';

const Booking = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://secured.sirvoy.com/widget/sirvoy.js";
    script.async = true;
    script.setAttribute('data-form-id', '552f9a950d813')
    script.setAttribute('data-target-confirmation-url', 'https://localhost:3000/summary')
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default Booking;



