import React from 'react';
import Navbar1 from './Navbar1';

const SuccessPage = () => {
  return (
    <>
      <Navbar1 />
      <div className="container-fluid d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
        <div className="text-center">
          <h1 className="mb-4">PURCHASED SUCCESSFULL!</h1>
          <img src="https://help.zoho.com/galleryDocuments/edbsn82b934c0b00cc3f43d0c9481b13563fbe93e58d2b3f6115d8cc36ddfa850eb5b36cf60cf8cf31fa74004a0fbac06c22d?inline=true" alt="Success" style={{ maxWidth: '60%', maxHeight: '60%', borderRadius: '10px' }} />
        </div>
      </div>
    </>
  );
}

export default SuccessPage;
