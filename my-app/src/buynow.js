import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import {Outlet,Link} from "react-router-dom"; 


const Buynow = ()=>{
  
  return(
    <>
    <br></br>
    <br></br>
    <div class="row justify-content-center">
        <div class="col-md-3 mb-3">
          
            <div class="card" style={{ width: "18rem" }}>
                <img src="https://funblast.in/cdn/shop/files/61NYw0l2uaL._SL1500.jpg?v=1692434363" class="card-img-top" alt=".." height="150px" />
                <div class="card-body">
                    <h3 class="card-title">Musical Phone</h3>
                    <h5 class="card-title">₹489.00 INR*</h5>
                    <p class="card-text">A colorful musical mobile phone toy with lights, sounds, and interactive buttons, engaging infants in sensory and auditory play.</p>
                    {/* <Link to="/buy" class="btn btn-primary">Buy Now</Link>  */}
                </div>
            </div>
        </div>
        
</div>
</>
  );
}

export default Buynow;