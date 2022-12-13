import { useEffect } from 'react';

const Start = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://secured.sirvoy.com/widget/sirvoy.js";
    script.async = true;
    script.id = "552f9a950d813";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default Start;


{/* <script async="" data-form-id="552f9a950d813" src="https://secured.sirvoy.com/widget/sirvoy.js" data-target-confirmation-url="https://localhost:3000/summary"></script> */}