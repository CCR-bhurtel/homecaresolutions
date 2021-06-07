import React, { useState, useEffect, makeStyles } from "react";
import { Grid, TextField } from "@material-ui/core";
import './style.css'

function index() {
return(
  <>
    <div className="container">

      <h6 className="heading">Application Personal Information</h6>

  <div className="row">
  <div className="col-md-8 margin1" >
   
        <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        
   
      </div>
      <div className="col-md-4  margin1">
   
        <div className="mb-6  margin1">
          <label htmlFor="exampleInputEmail1" className="form-label">Date</label>
          <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        
   
      </div>
      <div className="col-md-12  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        

        </div>

        <div className="col-md-4  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">City</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        

        </div>
        <div className="col-md-4  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">State</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        

        </div>
        <div className="col-md-4  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Zip</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        

        </div>
        <div className="col-md-4  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        

        </div>

        <div className="col-md-4  margin1">
      
        

        </div>


        <div className="col-md-4  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        

        </div>


        <div className="col-md-4  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Date Available</label>
          <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        

        </div>




        <div className="col-md-4  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Social Security#</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        

        </div>


        <div className="col-md-4  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Desired Salary/HR</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        

        </div>

        <div className="col-md-6  margin1">
      <div className="mb-6">
        
          <label htmlFor="exampleInputEmail1" className="form-label">Position Applied For</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        

        </div>
        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Certifications</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="CNA   CPR   FIRST/Aid  RN   LPN    " />
        </div>
        

        </div>



<div className="col-md-6  margin1">
<div className="mb-6">
<label style={{marginRight:"25%"}}>Are You Currently Employed ?</label>

<div className="form-check form-check-inline"> 
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
        <label className="form-check-label" htmlFor="inlineCheckbox1">yes</label>
        
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
        <label className="form-check-label" htmlFor="inlineCheckbox1">No</label>
        
      </div>
  </div>
  </div>





  
<div className="col-md-6  margin1">
<div className="mb-6">
<label style={{marginRight:"10%"}}>If no, are you authorized to work in the US</label>

<div className="form-check form-check-inline"> 
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
        <label className="form-check-label" htmlFor="inlineCheckbox1">yes</label>
        
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
        <label className="form-check-label" htmlFor="inlineCheckbox1">No</label>
        
      </div>
  </div>
  </div>



  <div className="col-md-6  margin1">
<div className="mb-6">
<label style={{marginRight:"10%"}}>Have you ever worked for this company?</label>

<div className="form-check form-check-inline"> 
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
        <label className="form-check-label" htmlFor="inlineCheckbox1">yes</label>
        
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
        <label className="form-check-label" htmlFor="inlineCheckbox1">No</label>
        
      </div>
  </div>
  </div>



  <div className="col-md-6  margin1">
<div className="mb-6" style={{display:"flex"}}>
<label style={{marginRight:"20px"}} >If yes, when? </label>
<textarea className="form-control" placeholder="" id="floatingTextarea2" style={{height: '10px',width:"50%"}} defaultValue={""} />


      
  </div>
  </div>














  <div className="col-md-6  margin1">
<div className="mb-6">
<label style={{marginRight:"10%"}}>Have you ever been convicted of a felony?  </label>

<div className="form-check form-check-inline"> 
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
        <label className="form-check-label" htmlFor="inlineCheckbox1">yes</label>
        
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
        <label className="form-check-label" htmlFor="inlineCheckbox1">No</label>
        
      </div>
  </div>
  </div>



  <div className="col-md-6  margin1">
<div className="mb-6" style={{display:"flex"}}>
<label style={{marginRight:"9px"}} >If yes, explain? </label>
<textarea className="form-control" placeholder="" id="floatingTextarea2" style={{height: '10px',width:"50%"}} defaultValue={""} />


      
  </div>
  </div>




  <div className="container">
  <h6 className="heading">Education</h6>

    <div className="row">
    <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">High School</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        

        </div>
        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        

        </div>










<div className="col-md-3" > 
<div className="mb-6 margin1" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <label style={{marginRight:"4px"}} htmlFor="exampleInputEmail1" className="form-label">From</label>
          <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        
        

        </div>
        
<div className="col-md-3 margin1 " > 
        <div className="mb-6"style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <label style={{marginRight:"4px"}} htmlFor="exampleInputEmail1" className="form-label">To</label>
          <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        

        </div>
        <div className="col-md-3 margin1">
        <div className="mb-6" style={{display:"flex"}}>

<label style={{marginRight:"3%"}}>Did you Graduate </label>

<div className="form-check form-check-inline margin1"> 
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
        <label className="form-check-label" htmlFor="inlineCheckbox1">yes</label>
        
      </div>
      <div className="form-check form-check-inline margin1">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
        <label className="form-check-label" htmlFor="inlineCheckbox1">No</label>
        
      </div>
  </div>
  </div>

<div className="col-md-3 margin1">

  <div className="mb-6"style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <label style={{marginRight:"4px"}} htmlFor="exampleInputEmail1" className="form-label">Diploma</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        </div>
        








        <div className="col-md-6 margin1">

  <div className="mb-6"style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <label style={{marginRight:"4px"}} htmlFor="exampleInputEmail1" className="form-label">Other</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        </div>







        <div className="col-md-6 margin1" >

<div className="mb-6"style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <label style={{marginRight:"4px"}} htmlFor="exampleInputEmail1" className="form-label">Address</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      </div>






      <div className="container">
  <h6 className="heading">References</h6>
  <p>Please list three professional references:</p>

    <div className="row">


<div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">FullName</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
    </div>

    <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Relationship</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
    </div>





    <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Company</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
    </div>



    <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
    </div>





    <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
    </div>






    


</div>
</div>


   


<div className="container">
  <p style={{backgroundColor:"black"}} >P</p>

    <div className="row">


<div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">FullName</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
    </div>

    <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Relationship</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
    </div>





    <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Company</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
    </div>



    <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
    </div>





    <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
    </div>






    


</div>
</div>













<div className="container">
  <p style={{backgroundColor:"black"}} >P</p>

    <div className="row">


<div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">FullName</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
    </div>

    <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Relationship</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
    </div>





    <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Company</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
    </div>



    <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
    </div>





    <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
    </div>






    


</div>
</div>




















</div>

    </div>





        



























    <div className="container">
  <h6 className="heading">Previous Employment</h6>
 

    <div className="row">

    <div className="col-md-8  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Company</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        

        </div>

        <div className="col-md-4  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>



        
    <div className="col-md-8  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        

        </div>

        <div className="col-md-4  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Supervisor</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>

        <div className="col-md-4  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Job Title</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>



        <div className="col-md-4  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Starting Salary</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>



        <div className="col-md-4  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Ending Salary</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>




        <div className="col-md-12  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Responsibilities</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>


        
        <div className="col-md-3  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">From</label>
          <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>


          
        <div className="col-md-3  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">To</label>
          <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>

          
        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Reason Of leaving</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>

            
        <div className="col-md-8  margin1">
<div className="mb-6">
<label style={{marginRight:"10%"}}>May we contact your previous supervisor for a reference?</label>

<div className="form-check form-check-inline"> 
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
        <label className="form-check-label" htmlFor="inlineCheckbox1">yes</label>
        
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
        <label className="form-check-label" htmlFor="inlineCheckbox1">No</label>
        
      </div>
  </div>
  </div>












    </div>
      </div>







      <div className="container">
  <p   style={{backgroundColor:"black"}} className="heading"></p>
 

    <div className="row">

    <div className="col-md-8  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Company</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        

        </div>

        <div className="col-md-4  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>



        
    <div className="col-md-8  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        

        </div>

        <div className="col-md-4  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Supervisor</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>

        <div className="col-md-4  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Job Title</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>



        <div className="col-md-4  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Starting Salary</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>



        <div className="col-md-4  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Ending Salary</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>




        <div className="col-md-12  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Responsibilities</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>


        
        <div className="col-md-3  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">From</label>
          <input type="date"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>


          
        <div className="col-md-3  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">To</label>
          <input type="date"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>

          
        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Reason Of leaving</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>

            
        <div className="col-md-8  margin1">
<div className="mb-6">
<label style={{marginRight:"10%"}}>May we contact your previous supervisor for a reference?</label>

<div className="form-check form-check-inline"> 
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
        <label className="form-check-label" htmlFor="inlineCheckbox1">yes</label>
        
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
        <label className="form-check-label" htmlFor="inlineCheckbox1">No</label>
        
      </div>
  </div>
  </div>




<div className="container">
  <h6 className="heading">Disclaimer and Signature  </h6>
<div className="row">
  
<div className="col-md-12">
  <p>
I certify that my answers are true and complete to the best of my knowledge. <br/>
If this application leads to employment, I understand that false or misleading information in my application or  interview may result in my release.
</p>
  </div>
  <div className="col-md-6">
  <label style={{marginRight:"10px"}} htmlFor="exampleInputEmail1" className="form-label">Signature Picture</label>

  <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
  </div>

  <div className="col-md-6  margin1">
      <div className="mb-6" >
          <label style={{marginRight:"10px"}} htmlFor="exampleInputEmail1" className="form-label">Date</label>
          <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>



  </div>


  </div>

















    </div>
      </div>


























      <div className="container " style={{marginTop:'30px'}}>
  <h6 className="">PERSONNEL CODE OF ETHICS</h6>

    <div className="row">


<p>The manner in which Home Care Solutions employs and conducts business is extremely important to our success. We have corporate responsibilities to ourselves, our clients and the communities in which we do business in order to effectively provide premiere care and protect our corporate and professional image, we must strive to conduct our business in the most ethical manner.</p>


<p>we must strive to conduct our business in the most ethical manner.
Each employee is expected to read, understand, sign, date and comply with the company’s code of ethics.  This will be retained in their personal file to be reviewed annually.
</p>
 <p> The following standards will be adhered to with no exceptions:</p>


<ul>


<ol>

<li className="padding12">Staff shall not enter into a personal relationship with their clients</li>
<li className="padding12">Staff shall not give clients their home residence phone number - clients will be encouraged to call the central phone number for assistance after regular office hours</li>

<li className="padding12">Staff shall not discriminate against any consumer or visitor based on race, religion, sexual orientation, economic conditions, or mental and physical challenges sexual orientation, economic conditions, or mental and physical challenges</li>
<li className="padding12">Staff shall protect the rights of all clients by safe guarding clients physical safety at all times</li>
<li className="padding12">	Staff shall not use client’s car for personal reasons</li>
<li className="padding12">Staff shall not consume client’s food or beverage</li>
<li className="padding12">Staff shall not use client’s telephone for personal calls</li>
<li className="padding12">Staff shall not discuss political or religious beliefs, or personal problems with the client</li>
<li className="padding12">	Staff shall not accept gifts or financial gratuities (tips) from the client or client’s representative</li>
<li className="padding12">Staff shall not lend money or other items to the client; borrow money or other items from the client or client’s representative</li>

<li className="padding12">Staff shall not sell gifts, food, or other items to or for the client</li>
<li className="padding12">Staff shall not purchase any items for the client unless directed in client care plan</li>
<li className="padding12">Staff shall not bring other visitors (e.g., children, friends, relatives, pets, etc.) to the client’s home</li>

<li className="padding12">Staff shall not smoke in the client’s home</li>
<li className="padding12">Staff shall not report for duty under the influence of alcoholic beverages or illegal substances</li>
<li className="padding12">Staff shall not sleep in the client’s home</li>
<li className="padding12">Staff shall not remain in the client’s home after services have been rendered</li>



</ol>

</ul>




<div className="row"> 

<div className="col-md-6" style={{display:"flex",marginTop:"5px"}}>

<div style={{width:"5%"}}>I, </div>
<div style={{width:"95%"}}> <input style={{height:"25px"}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  /> 
 </div>
  
</div>



<div className="col-md-6">
have read and fully understand the ethics Policy by HCS Inc. and will abide by the policy.

  
</div>



</div>






<div style={{display:"flex",justifyContent:"space-between"}}>
<div style={{width:"30%"}}>

<label style={{marginRight:"10px"}} htmlFor="exampleInputEmail1" className="form-label">Signature Picture</label>

<input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />  </div>

  <div>
  <div className="mb-6">
          <label style={{marginRight:"10px"}} htmlFor="exampleInputEmail1" className="form-label">Date</label>
          <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
  
  </div>

  </div>

    </div>
      </div>






      </div>
      </div>






<div className="container" style={{marginTop:"30px"}}>
<h6 className="">ORIENTATION / NEW HIRE CHECKLIST</h6>

<div className="row">


<div className="col-md-12  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        

        </div>
        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">SS#</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        

        </div>
        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">DOB</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        

        </div>






        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label"></label>
        </div>
        

        </div>

        

        <div className="col-md-3  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Date Received</label>
        </div>
        

        </div>

        

        <div className="col-md-3  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Approved by</label>
        </div>
        

        </div>





        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Philosophy, Purpose and Description of Services</label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>








        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Employment Application Attached	</label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>




















        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Employee Resume Attached</label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>


















        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Job Duties, Responsibilities, and Ethics	</label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>















        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">W-4 Federal Withholding Form Attached</label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>













        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">G-4 Georgia Withholding Form Attached</label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>









        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">I-9 Employment Eligibility Verification Attached</label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>


















        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Copy of:  Driver's License & SS Card</label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>





















        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Pay Date vs. Start Date Explained to New Hire</label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>

















        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Work Day/Hours Explained to New Hire</label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>

        


        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Holiday & Benefits Explained to New Hire	</label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>










        
       
   






        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Use of Facilities and Equipment</label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>










        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Abuse Policies, Procedures & Reporting Requirements </label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>




















        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Client Rights</label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>











        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Handling Disturbances</label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>










        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Procedures for Handling Emergencies </label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>












        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">TB Exposure Reporting </label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>








        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Medical Exam (TB) (Must be within 12 mos.) </label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>









        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Medical and Special needs of Clients</label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>










        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Characteristics of Clients </label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>










        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Confidentiality </label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>









        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Emergency Weather Procedures</label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>










        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">CPR/ First Aide Certification </label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>










        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Employee Grievance Policies and Procedures </label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>








        <div className="col-md-6  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Medication Management	 </label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>








        <div className="col-md-6  margin1">
      <div className="mb-6" style={{marginTop:"20px"}}>
          <label htmlFor="exampleInputEmail1" className="form-label">Drug Test Done?  </label>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6" style={{marginTop:"23px"}}>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
        <label className="form-check-label" htmlFor="inlineCheckbox1">No</label>

        
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
        <label className="form-check-label" htmlFor="inlineCheckbox1">Yes</label>

        
      </div>
        </div>
        

        </div>
        <div className="col-md-3  margin1">
      <div className="mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label"></label>
          <input type="text" className="form-control" placeholder="When" id="exampleInputEmail1" aria-describedby="emailHelp"  />

          
        </div>
        

        </div>


        <div className="col-md-4  margin1 ">
      <div className="mb-6" style={{display:"flex",alignItems:"center"}}>
          <label   htmlFor="exampleInputEmail1" className="form-label">If No Please Explain</label>
        </div>
        

        </div>
        <div className="col-md-8  margin1 ">
      <div className="mb-6" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
    </div>
        

        </div>




        <div className="col-md-8  margin1 ">
      <div className="mb-6" style={{display:"flex",alignItems:"center"}}>
          <label   htmlFor="exampleInputEmail1" className="form-label">Criminal Background Check Completed</label>
        </div>
        

        </div>
        <div className="col-md-4  margin1 ">
      <div className="mb-6" style={{display:"flex",alignItems:"center"}}>
      <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        

        </div>


<div className="col-md-12 margin1">
  <p>
					
Each document shall be completed in its entirety and attached to this form and submitted for approval.  Each area must be completed within 60 days of hiring. Once approved, please forward to the Administrator. This form must be signed by the administrator.
</p>
  
   </div>

   <div className="col-md-4 margin1">


   <label style={{marginRight:"10px"}} htmlFor="exampleInputEmail1" className="form-label"> Employee Signature Picture</label>

<input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />  

   




   </div>
   <div className="col-md-4 margin1">



   




   </div>

   <div className="col-md-4 margin1">




      <div className="col-mb-6 margin1" >
      <label   htmlFor="exampleInputEmail1" className="form-label" style={{marginRight:"10px"}}>Date</label>

      <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>








   </div>



   <div className="col-md-4 margin1">

   <label style={{marginRight:"10px"}} htmlFor="exampleInputEmail1" className="form-label"> Administrator Signature Picture</label>

   <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />  

   




   </div>
   <div className="col-md-4 margin1">



   




   </div>

   <div className="col-md-4 margin1">




      <div className="col-mb-6">
      <label   htmlFor="exampleInputEmail1" className="form-label" style={{marginRight:"10px"}}>Date</label>

      <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>








   </div>














   <div className="container" style={{marginTop:"30px"}}>
     <div className="row">

       <div className="col-md-12">
<h6 className="">ORIENTATION / NEW HIRE CHECKLIST</h6>

<p> List of documents reviewed during orientation</p>

<ul>
  
  <li>	Written policies an Procedures </li>
  <li>Clients Rights  and Responsibilities</li>
  <li> Clients Rights  and Responsibilities</li>

  <li>	Obligation to report any known exposure to TB and or Hepatitis C immediately to Supervisor</li>

  <li>	Procedure for reporting Clients Progress and Problems to the Supervisor</li>


  <li>Review of all Service Forms / Proper completion of Forms</li>





  <li className="suboptions">Progress Report</li>
  <li className="suboptions"> Incidence Report</li>
  <li className="suboptions">Complaints Report</li>
  <li className="suboptions">Supervisory Visit Forms</li>
  <li className="suboptions">Service Agreement</li>
  <li className="suboptions">	Service Plan</li>



  <li>Employee Job Responsibilities</li>

  <li>Additional 8 hours of training shall be provided annually to each staff to address job roles and responsibilities</li>



  
  
  </ul>


  <div className="row"> 

<div className="col-md-6" style={{display:"flex",marginTop:"5px"}}>

<div style={{width:"5%"}}>I, </div>
<div style={{width:"95%"}}> <input style={{height:"34px"}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  /> 
 </div>
  
</div>



<div className="col-md-6">
acknowledge that I have received information and training on new hire orientation list above, And I agree to comply with all requirements

  
</div>



</div>


 

</div>






<div className="col-md-4 margin1">



<label style={{marginRight:"10px"}} htmlFor="exampleInputEmail1" className="form-label"> Employees Signature Picture</label>

<input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />  

   




   </div>
   <div className="col-md-4 margin1"></div>

   <div className="col-md-4 margin1" style={{display:"flex",alignItems:"center"}}>


   <label   htmlFor="exampleInputEmail1" className="form-label" style={{marginRight:"10px"}}>Date</label>
<input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />

   




   </div>




   
<div className="col-md-4 margin1">


<label style={{marginRight:"10px"}} htmlFor="exampleInputEmail1" className="form-label"> Administrator Signature Picture</label>

<input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />  





   </div>
   <div className="col-md-4 margin1"></div>

   <div className="col-md-4 margin1" style={{display:"flex",alignItems:"center"}}>


   <label   htmlFor="exampleInputEmail1" className="form-label" style={{marginRight:"10px"}}>Date</label>
<input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />

   




   </div>
</div>
</div>









</div>


</div>



<div className="container" style={{marginTop:"30px"}}>
     <div className="row">

       <div className="col-md-12">
<h6 className="">CLIENTS RIGHTS AND RESPONSIBILITIES</h6>
<p>The Nursing or Care Manager shall review with the client or client representative their rights and responsibilities at the time of the face-to-face evaluation and sign the document.  The client is to retain a copy and the Nursing or Care Manager places one in the client’s file to be returned and filed in the office.</p>


<p style={{textDecoration:"underline"}}> <b>Client’s rights recognized by the HCS include: </b></p>




<ul>


<ol>


  <li className="padding12"> The right of access to accurate and easy-to-understand information</li>
  <li className="padding12">The right to be treated with respect and to maintain one's dignity and individuality</li>

  <li className="padding12">The right to voice grievances and complaints regarding treatment or care that is furnished or not furnished, without fear of retaliation, discrimination, coercion, or reprisal</li>

  <li className="padding12">The right to a choice of approved service provider(s) and the right to accept or refuse services</li>

  <li className="padding12">The right to be informed of and participate in preparing the care plan and any changes in the plan</li>

  <li className="padding12">The right to be advised in advance of the provider(s) who will furnish care and the frequency and duration of visits </li>  
  <li className="padding12">The right to confidential treatment of all information, including information in the client record</li>

  <li className="padding12">The right to receive services in accordance with the current care plan</li>

  <li className="padding12">The right to be informed of the name, business telephone number and business address of the person supervising the services and how to contact that person (Department of Human Resources) 2 Peachtree St., N.W. Atlanta, GA 30303 (404) 657-5728</li>
  <li className="padding12">The right to have property and residence treated with respect. The right to review client's records on request</li>
  <li className="padding12">The right to be fully and promptly informed of any cost share liability and the consequences if not paid</li>
  <li className="padding12"> The right to receive adequate and appropriate care and services without discrimination</li>

  <li className="padding12">The right to be free from mental, verbal, sexual and physical abuse, neglect, exploitation, isolation, corporal or unusual punishment, including interference with daily functions of living</li>

  <li className="padding12">The right to be free from chemical or physical restraints.</li>
 
</ol>

</ul>

<p style={{textDecoration:"underline"}}> <b>Client’s responsibilities recognized by the HCS include: </b></p>


<ul>


<ol>

<li className="padding12">The responsibility to notify HCS of any changes in care needs
</li>

<li className="padding12">The responsibility to treat HCS staff in a courteous and respectful manner, as well as cooperate with and respect the   rights of the caregivers providing care</li>


  <li className="padding12">The responsibility to be as accurate as possible when providing information on health history and personal care needs</li>

  <li className="padding12">The responsibility to participate actively in decisions regarding individual healthcare and service/care plan.</li>

  <li className="padding12">The responsibility to comply with agreed-upon care plans</li>

  <li className="padding12">The responsibility to notify the client's physician, service provider(s), and/or caregiver of any change in one's condition. </li>  
  <li className="padding12">The responsibility to maintain a safe home environment or to inform provider(s) of the presence of any safety hazard </li>

  <li className="padding12">The responsibility to be available to provider staff at times services are scheduled to be rendered</li>

  <li className="padding12">The responsibility to pay any cost share liability, if applicable </li>
  <li className="padding12">  The responsibility to avail the member to the utilization review team to make visits as needed. </li>
  <li className="padding12"> The responsibility to maintain a safe environment for self and staff, including a drug free environment at all times.  If present in the home, alcohol must be concealed and must not interfere with the service delivery process.   </li>
  <li className="padding12"> The responsibility to not willfully have utilities (gas, water, electricity) disconnected for non-payment, or other reasons within the member’s control.  </li>


 
</ol>

</ul>






</div>









<div className="col-md-4 margin1" style={{display:"flex"}}>

   <label style={{width:"50%"}} style={{marginRight:"10px"}} htmlFor="exampleInputEmail1" className="form-label">Client Representative </label>

   <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />  

   




   </div>
   <div className="col-md-4 margin1">



   




   </div>

   <div className="col-md-4 margin1">




      <div className="col-mb-6">
      <label   htmlFor="exampleInputEmail1" className="form-label" style={{marginRight:"10px"}}>Date</label>

      <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        </div>





















<div className="col-md-4 margin1">

   <label style={{marginRight:"10px"}} htmlFor="exampleInputEmail1" className="form-label"> Administrator Signature Picture</label>

   <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />  

   




   </div>
   <div className="col-md-4 margin1">



   




   </div>

   <div className="col-md-4 margin1">




      <div className="col-mb-6">
      <label   htmlFor="exampleInputEmail1" className="form-label" style={{marginRight:"10px"}}>Date</label>

      <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        </div>


















<div className="col-md-4 margin1" style={{display:"flex"}}>

   <label  style={{marginRight:"14%"}} htmlFor="exampleInputEmail1" className="form-label">Nurse Manager </label>

   <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />  

   




   </div>
   <div className="col-md-4 margin1">



   




   </div>

   <div className="col-md-4 margin1">




      <div className="col-mb-6">
      <label   htmlFor="exampleInputEmail1" className="form-label" style={{marginRight:"10px"}}>Date</label>

      <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
        </div>



</div>
</div>

<div className="container" style={{marginTop:"30px"}}>
     <div className="row">

       <div className="col-md-12">
<h6 className="">Client Protection Assurances/ Client Rights</h6>

<p>HCS acknowledges that all clients have rights and responsibilities regarding participation in the ICWP program. It is the company’s policy that all clients shall be made to feel free and protected from abuse, neglect, mistreatment or financial exploitation. Each client shall receive a copy of the rights and responsibilities for their record and review. HCS shall also retain a signed copy in the client’s file. </p>


<ul>  

<li className="padding12">HCS shall Screen each potential employee for criminal background history
</li>
<li className="padding12">HCS shall not employ individuals with a prior conviction on charges of abuse, neglect, mistreatment or financial exploitation from performing direct client care duties.
</li>

<li className="padding12">We also check employment references/ verification (Appendix D) 
</li>

<li className="padding12">Provide in-service training at least annually to all employees, subcontractor’s, and volunteers on how to recognize situations of possible abuse, neglect, exploitation, and/or the likelihood of serious physical harm to individuals who receive services through the CCSP 
</li>

<li className="padding12">Observe at least annually staff providing direct care to clients and correct any deficiencies via training and warning or possibly termination of employee.
</li>

<li className="padding12">Report verbally all allegations of mistreatment, abuse, neglect, exploitation, elopement, unexpected death, serious injury, injuries of unknown origin, and any other critical Event/situation immediately (within 24 hours of the event) to the administrator and to CCSP, AAA and Police for thorough investigation of all alleged client protection violations
</li>

<li className="padding12">Within three days of the verbal notification of the incident to the CCSP office, HCS shall submit a follow-up Community Care Notification Form (CCNF) to the care coordinator
</li>


<li className="padding12">Prevent further potential abuse while the investigation is in progress by replacing the care provider with another credible employee. Take appropriate actions if alleged violation is substantiated by discharging the employee or warning depending on the severity of the incident. The accused aide and office staff shall write a comprehensive report of the incident using appropriate instruments - Incident Report Forms (Appendix F). All such incidents are logged in the INCIDENT LOG BOOK, and the alleged violation is thoroughly investigated and reported to the CCSP care coordinator within 5 days. 
</li>

<li className="padding12">Complete the investigation within five (5) business days of the incident and submit a written report of the findings to the administrator and to other officials in accordance with state law.
</li>

<p style={{textDecoration:"underline"}}> <b>Investigation of Allegation </b></p>

<li className="padding12">The Nurse Manager (RN) will go for an assessment of the client to ensure that client is safe to continue receiving services at home. If client’s safety is assured, the aide will be taken off the case immediately and replaced with another aide. The accused aide and the office staff are expected to write comprehensive reports of the incident using appropriate instruments-Incident Report Forms (Appendix F). All such incidents are logged in the INCIDENT LOG BOOK, and the alleged violation is thoroughly investigated and reported to the CCSP care coordinator within 5 days.
</li>
<li className="padding12">If allegations are substantiated, appropriate disciplinary actions are taken. First, the aide’s appointment is terminated and further the Aide is reported to the law enforcement agency. </li>


<li className="padding12">	Appropriate steps such as counseling, staff training and client education are taken in order to prevent future occurrence.</li>
</ul>

<div style={{display:"flex",justifyContent:"space-between"}}>
<div style={{width:"30%"}}>

<label style={{marginRight:"10px"}} htmlFor="exampleInputEmail1" className="form-label"> Employee Signature Picture</label>

<input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />  </div>

  <div>
  <div className="mb-6">
          <label style={{marginRight:"10px"}} htmlFor="exampleInputEmail1" className="form-label">Date</label>
          <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
  
  </div>

  </div>
</div>

<div style={{display:"flex",justifyContent:"space-between"}}>
<div style={{width:"30%"}}>

<label style={{marginRight:"10px"}} htmlFor="exampleInputEmail1" className="form-label"> Administrator   Signature Picture</label>

<input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />  </div>

  <div>
  <div className="mb-6">
          <label style={{marginRight:"10px"}} htmlFor="exampleInputEmail1" className="form-label">Date</label>
          <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>
  
  </div>

  </div>








  <h6 className="" style={{marginTop:"30px"}}>INFECTION CONTROL</h6>


<p>HCS staff shall observe the following procedures in the provision of services to prevent exposure to infectious disease.  These procedures are universal precautions to prevent the spread of infectious diseases in compliance with occupational safety and health administration requirements (OSHA) and state regulations for home care providers. All blood and body fluids with blood are to be treated as potentially infectious. General rule of thumb is hand washing before and after attending to client.  Wash hands and other skin surfaces immediately and thoroughly if soiled with blood or body fluids, and change gloves after contact with each client. Wash hands before and after giving care to clients.  The administrator is responsible for ensuring that infection control is practiced.</p>
<p style={{textDecoration:"underline"}}> <b>Wear latex gloves when: </b></p>
<ul>

  <li className="padding12"> Touching blood/body fluids, mucous membranes, or non-intact skin.
</li>
  <li className="padding12">Handling items or surfaces soiled with blood/body fluids visible with blood.
</li>

  <li className="padding12">Performing venipuncture and other vascular access procedures.
</li>


  <li className="padding12">Cleaning and decontaminating spills of blood/body fluids.
</li>

  <li className="padding12">	Although no diseases are known to be spread by direct skin contact with feces or other body fluids, gloves should be worn when having contact with feces and any body fluids as a basic hygiene measure.
</li>



  </ul>
  <p style={{textDecoration:"underline"}}> <b>Standard housekeeping cleaning procedures to be used. </b></p>






<ul>


  <li className="padding12">All soiled linen should be bagged at the location where it was used; it should not be sorted or rinsed in client-care areas. Linen soiled with blood or body fluids should be placed and transported in bags that prevent leakage.
</li>
  <li className="padding12">All soiled linen should be bagged at the location where it was used; it should not be sorted or rinsed in client-care areas. Linen soiled with blood or body fluids should be placed and transported in bags that prevent leakage.
</li>

  <li className="padding12">Linens and personal clothing items laundered should be washed using routine laundering procedures.
</li>

  <li className="padding12">Dish washing using routine cleaning procedures effectively destroys pathogenic (disease causing) organisms. Dishes of clients with hepatitis B or AIDS do not need to be separated from the rest of the facility clients. Do not share unwashed utensils or use common drinking glasses with any client.  
</li>


 
</ul>



















<p style={{textDecoration:"underline"}}> <b>Environmental procedures to be used </b></p>






<ul>


  <li className="padding12">Use a gown or apron during procedures that are likely to generate splashes of blood or other body fluids. Universal precautions also recommend the use of masks/eye wear during procedures that are likely to generate droplets of blood or other body fluids to prevent exposure of the mucous membrane of the mouth and nose/eyes.

</li>
  <li className="padding12">Dispose of secretions directly into the toilet. An individual toilet for a client is not required, but is recommended if the person has diarrhea.

</li>

  <li className="padding12">Care should be taken to prevent injuries caused by needles and other sharp instruments or devices.

</li>

  <li className="padding12">To prevent needle stick injuries, needles should not be recapped, purposely bent or broken by hand, removed from disposable syringes, or otherwise manipulated by hand. After they are used, disposable syringes and needles, and other sharp items should be placed in puncture-resistant containers for disposal. The puncture-resistant containers should be located as close as practical to the use area.

</li>

<li className="padding12">Direct mouth-to-mouth contact is not recommended. It is recommended that mouthpieces, ventilation bags or other ventilation devices be kept in areas where the need is predictable. However, if such devices are not available an employee should not hesitate to provide CPR (Cardiopulmonary Resuscitation) procedures

</li>
 
</ul>


<p>
I AM CPR & TB CERTIFIED, I WOULD REPORT to Home Care Solutions, LLC,  
ANY EXPOSURE TO TB & HEPATTIS B, WHETHER THE EXPOSURE OCCURRED ON OR OFF THE JOB. I SHALL REPORT THE EXPOSURE IMMEDIATELY TO Home Care Solutions, LLC     
</p>


<div className="col-md-4 margin1">


   <label style={{marginRight:"10px"}} htmlFor="exampleInputEmail1" className="form-label"> Employee Signature Picture</label>

<input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />  

   




   </div>
   <div className="col-md-4 margin1">



   




   </div>

   <div className="col-md-4 margin1">




      <div className="col-mb-6 margin1" >
      <label   htmlFor="exampleInputEmail1" className="form-label" style={{marginRight:"10px"}}>Date</label>

      <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>








   </div>



   <div className="col-md-4 margin1">

   <label style={{marginRight:"10px"}} htmlFor="exampleInputEmail1" className="form-label"> Administrator Signature Picture</label>

   <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />  

   




   </div>
   <div className="col-md-4 margin1">



   




   </div>

   <div className="col-md-4 margin1">




      <div className="col-mb-6">
      <label   htmlFor="exampleInputEmail1" className="form-label" style={{marginRight:"10px"}}>Date</label>

      <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
        </div>








   </div>


</div>

<div className="row"> 

<div className="col-md-6" style={{display:"flex",marginTop:"5px"}}>

<div style={{width:"5%"}}>I, </div>
<div style={{width:"95%"}}> <input style={{height:"34px"}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  /> 
 </div>
  
</div>



<div className="col-md-6">
attest that I have never been shown by credible evidence (e.g. a court or jury, a department investigation, or other reliable evidence) to have abused, neglected, assaulted, exploited, or deprived any person or to have subjected any person to serious injury as a result of intentional or gross negligent misconduct as evidenced by an oral or written statement to this effect obtained at the time of application
  <p>That I have participated in the orientation and training required by these rules;</p>
  <p>That IU have not made any material false statements concerning qualifications requirements either to the department or to HCS</p>
</div>




<div className="col-md-4 margin1">



<label style={{marginRight:"10px"}} htmlFor="exampleInputEmail1" className="form-label"> Employees Signature Picture</label>

<input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />  

   




   </div>

   <div className="col-md-4 margin1"></div>

   <div className="col-md-4 margin1" style={{display:"flex",alignItems:"center"}}>


   <label   htmlFor="exampleInputEmail1" className="form-label" style={{marginRight:"10px"}}>Date</label>
<input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />

   




   </div>


   
<div className="col-md-4 margin1">



<label style={{marginRight:"10px"}} htmlFor="exampleInputEmail1" className="form-label"> First Witness</label>

<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />  

   




   </div>
   <div className="col-md-4 margin1"></div>

   <div className="col-md-4 margin1" style={{display:"flex",alignItems:"center"}}>


   <label   htmlFor="exampleInputEmail1" className="form-label" style={{marginRight:"10px"}}>Date</label>
<input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />

   




   </div>

 






   <div className="col-md-4 margin1">



<label style={{marginRight:"10px"}} htmlFor="exampleInputEmail1" className="form-label"> Second Witness </label>

<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />  

   




   </div>
   <div className="col-md-4 margin1"></div>

   <div className="col-md-4 margin1" style={{display:"flex",alignItems:"center"}}>


   <label   htmlFor="exampleInputEmail1" className="form-label" style={{marginRight:"10px"}}>Date</label>
<input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />

   




   </div>


<div className="col-md-6" style={{display:"flex",marginTop:"5px"}}>

<div style={{width:"50%"}}>Sworn declaration on 
 </div>
<div style={{width:"50%"}}> <input style={{height:"34px"}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  /> 
 </div>
  
</div>



<div className="col-md-6">
<p>2017</p>
</div>




<div className="col-md-6" style={{display:"flex",marginTop:"5px"}}>

<div style={{width:"50%"}}> Notary Public: State of Georgia <br></br> 
 Commission expires, 
 </div>
<div style={{width:"50%",marginTop:"20px"}}> <input style={{height:"34px"}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  /> 
 </div>
  
</div>





</div>









  

<div className="row mt-5 pt-5">
  <h6>EMERGENCY EMPLOYEE CONTACT</h6>
  <div className="col-md-8 mt-4">
    <label style={{marginRight:"9px"}}> Employee Name </label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" />
  </div>

  <div className="col-md-8 mt-4">
    <label style={{marginRight:"9px"}} >Address </label>
    <textarea className="form-control" placeholder="" style={{height: '80px',width:"100%"}} defaultValue={""} />
  </div>

  <div className="col-md-8 mt-4">
    <label style={{marginRight:"9px"}}> Contact Phone </label>
    <input type="number" className="form-control" aria-describedby="emailHelp" />
  </div>

  <div className="col-md-8 mt-4">
    <label style={{marginRight:"9px"}}> Emergency Contact Phone </label>
    <input type="number" className="form-control" aria-describedby="emailHelp" />
  </div>

  <div className="col-md-8 mt-4">
    <label style={{marginRight:"9px"}}> Emergency Contact Name </label>
    <input type="number" className="form-control" aria-describedby="emailHelp" />
  </div>
  
</div>
</div>







</>
)




}

export default index;
