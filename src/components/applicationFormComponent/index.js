import React, { useState, useEffect, makeStyles } from 'react';

import { Grid, TextField } from '@material-ui/core';
import './style.css';
import { sendMail } from './sendEmail';

function index() {
  const [details, setDetails] = useState({
    name: '',
    date: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    dateAvailable: '',
    socialSecurity: '',
    desiredSalary: '',
    positionAppliedFor: '',
    certifications: '',
    employed: '',
    authorized: '',
    worked: '',
    whenWorked: '',
    drugTest: '',
    drugTestWhen: '',
    drugNoExplain: '',
    convicted: '',
    descriptionIfFelony: '',
    highSchool: '',
    hsAddress: '',
    hsFrom: '',
    hsTo: '',
    graduated: '',
    diploma: '',
    eduOther: '',
    otherAddress: '',
    pr1Name: '',
    pr1Relation: '',
    pr1Company: '',
    pr1Phone: '',
    pr1Address: '',
    pr2Name: '',
    pr2Relation: '',
    pr2Company: '',
    pr2Phone: '',
    pr2Address: '',
    pr3Name: '',
    pr3Relation: '',
    pr3Company: '',
    pr3Phone: '',
    pr3Address: '',
    pe1Company: '',
    pe1Phone: '',
    pe1Address: '',
    pe1Supervisor: '',
    pe1Jobtitle: '',
    pe1StartingSalary: '',
    pe1EndingSalary: '',
    pe1Responsibilities: '',
    pe1From: '',
    pe1To: '',
    pe1ROL: '',
    pe1ContactSupervisor: '',
    pe2Company: '',
    pe2Phone: '',
    pe2Address: '',
    pe2Supervisor: '',
    pe2Jobtitle: '',
    pe2StartingSalary: '',
    pe2EndingSalary: '',
    pe2Responsibilities: '',
    pe2From: '',
    pe2To: '',
    pe2ROL: '',
    pe2ContactSupervisor: '',
    tName: '',
    SP: '',
    tDate: '',
    hireName1: '',
    ss: '',
    hireDob: '',
    table11: '',
    table12: '',
    table21: '',
    table22: '',
    table31: '',
    table32: '',
    table41: '',
    table42: '',
    table51: '',
    table52: '',
    table61: '',
    table62: '',
    table71: '',
    table72: '',
    table81: '',
    table82: '',
    table91: '',
    table92: '',
    table101: '',
    table102: '',
    table111: '',
    table112: '',
    table121: '',
    table122: '',
    table131: '',
    table132: '',
    table141: '',
    table142: '',
    table151: '',
    table152: '',
    table161: '',
    table162: '',
    table171: '',
    table172: '',
    table181: '',
    table182: '',
    table191: '',
    table192: '',
    table201: '',
    table202: '',
    table211: '',
    table212: '',
    table221: '',
    table222: '',
    table231: '',
    table232: '',
    table241: '',
    table242: '',
    table251: '',
    table252: '',
    CBDate: '',
  
    ESP1D: '',
    ASP1: '',
    ASP1D: '',
    hireName2: '',
    ESP2: '',
    ASP2: '',
    ESP2D: '',
    ASP2D: '',
    clientRepr: '',
    clientReprD: '',
    ASP3: '',
    ASP3D: '',
    NM: '',
    NMD: '',
    ESP3: '',
    ESP3D: '',
    ASP4: '',
    ASP4D: '',
    ESP4: '',
    ESP4D: '',
    eveName: '',
    ESP5: '',
    ESP5D: '',
    ASP5: '',
    ASP5D: '',
    FW: '',
    FWD: '',
    SW: '',
    SWD: '',
    swornDec: '',
    Nortary: '',
    EEName: '',
    EEAddress: '',
    EEContact: '',
    EEemergencyContact: '',
    EEemergencyName: '',
  });

 
  const onChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    sendMail(e, details);
  };

  return (
    <form id="applicationForm" onSubmit={onSubmit}>
      <div className="container">
        <h6 className="heading">Application Personal Information</h6>

        <div className="row">
          <div className="col-md-8 margin1">
            <div className="mb-6">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                name="name"
                id="name"
                value={details.name}
              />
            </div>
          </div>
          <div className="col-md-4  margin1">
            <div className="mb-6  margin1">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                // required
                onChange={onChange}
                type="date"
                name="date"
                className="form-control"
                id="date"
                value={details.date}
              />
            </div>
          </div>
          <div className="col-md-12  margin1">
            <div className="mb-6">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                // required
                onChange={onChange}
                type="text"
                name="address"
                className="form-control"
                id="address"
                value={details.address}
              />
            </div>
          </div>

          <div className="col-md-4  margin1">
            <div className="mb-6">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                // required
                onChange={onChange}
                type="text"
                name="city"
                className="form-control"
                id="city"
                value={details.city}
              />
            </div>
          </div>
          <div className="col-md-4  margin1">
            <div className="mb-6">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                name="state"
                id="state"
                value={details.state}
              />
            </div>
          </div>
          <div className="col-md-4  margin1">
            <div className="mb-6">
              <label htmlFor="zip" className="form-label">
                Zip
              </label>
              <input
                // required
                onChange={onChange}
                id="zip"
                name="zip"
                className="form-control"
                type="text"
                value={details.zip}
                pattern="[0-9]*"
              />
            </div>
          </div>
          <div className="col-md-4  margin1">
            <div className="mb-6">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                // required
                onChange={onChange}
                type="number"
                className="form-control"
                id="phone"
                name="phone"
                value={details.phone}
              />
            </div>
          </div>

          <div className="col-md-4  margin1"></div>

          <div className="col-md-4  margin1">
            <div className="mb-6">
              <label
                htmlFor="exampleInput
              onChange={onChange}Email2"
                className="form-label"
              >
                Email
              </label>
              <input
                // required
                onChange={onChange}
                type="email"
                name="email"
                className="form-control"
                id="email"
                value={details.email}
              />
            </div>
          </div>

          <div className="col-md-4  margin1">
            <div className="mb-6">
              <label htmlFor="Date_Available" className="form-label">
                Date Available
              </label>
              <input
                // required
                onChange={onChange}
                type="date"
                name="dateAvailable"
                className="form-control"
                id="dateAvailable"
                value={details.dateAvailable}
              />
            </div>
          </div>

          <div className="col-md-4  margin1">
            <div className="mb-6">
              <label htmlFor="Social_Security" className="form-label">
                Social Security#
              </label>
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="socialSecurity"
                name="socialSecurity"
                value={details.socialSecurity}
              />
            </div>
          </div>

          <div className="col-md-4  margin1">
            <div className="mb-6">
              <label htmlFor="Desired_Salary" className="form-label">
                Desired Salary/HR
              </label>
              <input
                // required
                onChange={onChange}
                type="number"
                className="form-control"
                id="desiredSalary"
                name="desiredSalary"
                value={details.desiredSalary}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="Position_Applied_For" className="form-label">
                Position Applied For
              </label>
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="position"
                name="positionAppliedFor"
                value={details.positionAppliedFor}
              />
            </div>
          </div>
          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="cerfifications" className="form-label">
                Certifications
              </label>
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="certifications"
                name="certifications"
                value={details.certifications}
                placeholder="CNA   CPR   FIRST/Aid  RN   LPN    "
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label style={{ marginRight: '25%' }}>
                Are You Currently Employed ?
              </label>

              <div className="form-check form-check-inline">
                <input
                  // required
                  onChange={onChange}
                  className="form-check-input
                  onChange={onChange}"
                  type="radio"
                  name="employed"
                  id="inlineCheckbox1"
                  value="yes"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  // required
                  onChange={onChange}
                  className="form-check-input
                  onChange={onChange}"
                  name="employed"
                  type="radio"
                  value="no"
                  id="inlineCheckbox1"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label style={{ marginRight: '10%' }}>
                If no, are you authorized to work in the US
              </label>

              <div className="form-check form-check-inline">
                <input
                  onChange={onChange}
                  className="form-check-input"
                  type="radio"
                  name="authorized"
                  id="inlineCheckbox1"
                  value="yes"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  onChange={onChange}
                  className="form-check-input
                  onChange={onChange}"
                  type="radio"
                  name="authorized"
                  id="inlineCheckbox1"
                  value="no"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label style={{ marginRight: '10%' }}>
                Have you ever worked for this company?
              </label>

              <div className="form-check form-check-inline">
                <input
                  // required
                  onChange={onChange}
                  className="form-check-input
                  onChange={onChange}"
                  type="radio"
                  id="inlineCheckbox1"
                  name="worked"
                  value="yes"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  // required
                  onChange={onChange}
                  className="form-check-input
                  onChange={onChange}"
                  type="radio"
                  name="worked"
                  id="inlineCheckbox1"
                  value="no"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6" style={{ display: 'flex' }}>
              <label style={{ marginRight: '20px' }}>If yes, when? </label>
              <input
                type="date"
                onChange={onChange}
                className="form-control"
                name="whenWorked"
                placeholder=""
                id="floatingTextarea2"
                value={details.whenWorked}
                style={{ height: '40px', width: '50%' }}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label style={{ marginRight: '10%' }}>
                Have you ever been convicted of a felony?{' '}
              </label>

              <div className="form-check form-check-inline">
                <input
                  // required
                  onChange={onChange}
                  className="form-check-input
                  onChange={onChange}"
                  type="radio"
                  name="convicted"
                  id="inlineCheckbox1"
                  value="yes"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  // required
                  onChange={onChange}
                  className="form-check-input
                  onChange={onChange}"
                  type="radio"
                  name="convicted"
                  id="inlineCheckbox1"
                  value="no"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6" style={{ display: 'flex' }}>
              <label style={{ marginRight: '9px' }}>If yes, explain? </label>
              <textarea
                onChange={onChange}
                className="form-control"
                name="descriptionIfFelony"
                placeholder=""
                id="floatingTextarea2"
                value={details.descriptionIfFelony}
                style={{ height: '10px', width: '50%' }}
              />
            </div>
          </div>

          <div className="container">
            <h6 className="heading">Education</h6>

            <div className="row">
              <div className="col-md-6  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    High School
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="highSchool"
                    name="highSchool"
                    value={details.highSchool}
                  />
                </div>
              </div>
              <div className="col-md-6  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    Address
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    name="hsAddress"
                    id="hsAddress"
                    value={details.hsAddress}
                  />
                </div>
              </div>

              <div className="col-md-3">
                <div
                  className="mb-6 margin1"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <label
                    style={{ marginRight: '4px' }}
                    htmlFor="exampleInput
    "
                    className="form-label"
                  >
                    From
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="date"
                    className="form-control"
                    id="hsFrom"
                    name="hsFrom"
                    value={details.hsFrom}
                  />
                </div>
              </div>

              <div className="col-md-3 margin1 ">
                <div
                  className="mb-6"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <label
                    style={{ marginRight: '4px' }}
                    htmlFor="exampleInput
    "
                    className="form-label"
                  >
                    To
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="date"
                    className="form-control"
                    id="hsTo"
                    name="hsTo"
                    value={details.hsTo}
                  />
                </div>
              </div>
              <div className="col-md-3 margin1">
                <div className="mb-6" style={{ display: 'flex' }}>
                  <label style={{ marginRight: '3%' }}>Did you Graduate </label>

                  <div className="form-check form-check-inline margin1">
                    <input
                      // required
                      onChange={onChange}
                      className="form-check-input
                      onChange={onChange}"
                      type="radio"
                      name="graduated"
                      id="inlineCheckbox1"
                      value="yes"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      yes
                    </label>
                  </div>
                  <div className="form-check form-check-inline margin1">
                    <input
                      // required
                      onChange={onChange}
                      className="form-check-input
                      onChange={onChange}"
                      type="radio"
                      name="graduated"
                      id="inlineCheckbox1"
                      value="no"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-3 margin1">
                <div
                  className="mb-6"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <label
                    style={{ marginRight: '4px' }}
                    htmlFor="exampleInput
    "
                    className="form-label"
                  >
                    Diploma
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="diploma"
                    name="diploma"
                    value={details.diploma}
                  />
                </div>
              </div>

              <div className="col-md-6 margin1">
                <div
                  className="mb-6"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <label
                    style={{ marginRight: '4px' }}
                    htmlFor="exampleInput
    "
                    className="form-label"
                  >
                    Other
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="eduOther"
                    name="eduOther"
                    value={details.eduOther}
                  />
                </div>
              </div>

              <div className="col-md-6 margin1">
                <div
                  className="mb-6"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <label
                    style={{ marginRight: '4px' }}
                    htmlFor="exampleInput
    "
                    className="form-label"
                  >
                    Address
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="otherAddress"
                    name="otherAddress"
                    value={details.otherAddress}
                  />
                </div>
              </div>

              <div className="container">
                <h6 className="heading">References</h6>
                <p>Please list three professional references:</p>

                <div className="row">
                  <div className="col-md-6  margin1">
                    <div className="mb-6">
                      <label
                        htmlFor="exampleInput
        "
                        className="form-label"
                      >
                        FullName
                      </label>
                      <input
                        // required
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        id="pr1Name"
                        name="pr1Name"
                        value={details.pr1Name}
                      />
                    </div>
                  </div>

                  <div className="col-md-6  margin1">
                    <div className="mb-6">
                      <label
                        htmlFor="exampleInput
        "
                        className="form-label"
                      >
                        Relationship
                      </label>
                      <input
                        // required
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        id="pr1Relation"
                        name="pr1Relation"
                        value={details.pr1Relation}
                      />
                    </div>
                  </div>

                  <div className="col-md-6  margin1">
                    <div className="mb-6">
                      <label
                        htmlFor="exampleInput
        "
                        className="form-label"
                      >
                        Company
                      </label>
                      <input
                        // required
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        id="pr1Company"
                        name="pr1Company"
                        value={details.pr1Company}
                      />
                    </div>
                  </div>

                  <div className="col-md-6  margin1">
                    <div className="mb-6">
                      <label
                        htmlFor="exampleInput
        "
                        className="form-label"
                      >
                        Phone
                      </label>
                      <input
                        // required
                        onChange={onChange}
                        type="number"
                        className="form-control"
                        id="pr1Phone"
                        name="pr1Phone"
                        value={details.pr1Phone}
                      />
                    </div>
                  </div>

                  <div className="col-md-6  margin1">
                    <div className="mb-6">
                      <label
                        htmlFor="exampleInput
        "
                        className="form-label"
                      >
                        Address
                      </label>
                      <input
                        // required
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        id="pr1Address"
                        name="pr1Address"
                        value={details.pr1Address}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="container">
                <p style={{ backgroundColor: 'black' }}>P</p>

                <div className="row">
                  <div className="col-md-6  margin1">
                    <div className="mb-6">
                      <label
                        htmlFor="exampleInput
        "
                        className="form-label"
                      >
                        FullName
                      </label>
                      <input
                        // required
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        id="pr2Name"
                        name="pr2Name"
                        value={details.pr2Name}
                      />
                    </div>
                  </div>

                  <div className="col-md-6  margin1">
                    <div className="mb-6">
                      <label
                        htmlFor="exampleInput
        "
                        className="form-label"
                      >
                        Relationship
                      </label>
                      <input
                        // required
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        id="pr2Relation"
                        name="pr2Relation"
                        value={details.pr2Relation}
                      />
                    </div>
                  </div>

                  <div className="col-md-6  margin1">
                    <div className="mb-6">
                      <label
                        htmlFor="exampleInput
        "
                        className="form-label"
                      >
                        Company
                      </label>
                      <input
                        // required
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        id="pr2Company"
                        name="pr2Company"
                        value={details.pr2Company}
                      />
                    </div>
                  </div>

                  <div className="col-md-6  margin1">
                    <div className="mb-6">
                      <label
                        htmlFor="exampleInput
        "
                        className="form-label"
                      >
                        Phone
                      </label>
                      <input
                        // required
                        onChange={onChange}
                        type="number"
                        className="form-control"
                        id="pr2Phone"
                        name="pr2Phone"
                        value={details.pr2Phone}
                      />
                    </div>
                  </div>

                  <div className="col-md-6  margin1">
                    <div className="mb-6">
                      <label
                        htmlFor="exampleInput
        "
                        className="form-label"
                      >
                        Address
                      </label>
                      <input
                        // required
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        id="pr2Address"
                        name="pr2Address"
                        value={details.pr2Address}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="container">
                <p style={{ backgroundColor: 'black' }}>P</p>

                <div className="row">
                  <div className="col-md-6  margin1">
                    <div className="mb-6">
                      <label
                        htmlFor="exampleInput
        "
                        className="form-label"
                      >
                        FullName
                      </label>
                      <input
                        // required
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        id="pr3Name"
                        name="pr3Name"
                        value={details.pr3Name}
                      />
                    </div>
                  </div>

                  <div className="col-md-6  margin1">
                    <div className="mb-6">
                      <label
                        htmlFor="exampleInput
        "
                        className="form-label"
                      >
                        Relationship
                      </label>
                      <input
                        // required
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        id="pr3Relation"
                        name="pr3Relation"
                        value={details.pr3Relation}
                      />
                    </div>
                  </div>

                  <div className="col-md-6  margin1">
                    <div className="mb-6">
                      <label
                        htmlFor="exampleInput
        "
                        className="form-label"
                      >
                        Company
                      </label>
                      <input
                        // required
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        id="pr3Company"
                        name="pr3Company"
                        value={details.pr3Company}
                      />
                    </div>
                  </div>

                  <div className="col-md-6  margin1">
                    <div className="mb-6">
                      <label
                        htmlFor="exampleInput
        "
                        className="form-label"
                      >
                        Phone
                      </label>
                      <input
                        // required
                        onChange={onChange}
                        type="number"
                        className="form-control"
                        id="pr3Phone"
                        name="pr3Phone"
                        value={details.pr3Phone}
                      />
                    </div>
                  </div>

                  <div className="col-md-6  margin1">
                    <div className="mb-6">
                      <label
                        htmlFor="exampleInput
        "
                        className="form-label"
                      >
                        Address
                      </label>
                      <input
                        // required
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        id="pr3Address"
                        name="pr3Address"
                        value={details.pr3Address}
                      />
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
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    Company
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="pe1Company"
                    name="pe1Company"
                    value={details.pe1Company}
                  />
                </div>
              </div>

              <div className="col-md-4  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    Phone
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="number"
                    className="form-control"
                    id="pe1Phone"
                    name="pe1Phone"
                    value={details.pe1Phone}
                  />
                </div>
              </div>

              <div className="col-md-8  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    Address
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="pe1Address"
                    name="pe1Address"
                    value={details.pe1Address}
                  />
                </div>
              </div>

              <div className="col-md-4  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    Supervisor
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="pe1Supervisor"
                    name="pe1Supervisor"
                    value={details.pe1Supervisor}
                  />
                </div>
              </div>

              <div className="col-md-4  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    Job Title
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="pe1Jobtitle"
                    name="pe1Jobtitle"
                    value={details.pe1Jobtitle}
                  />
                </div>
              </div>

              <div className="col-md-4  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    Starting Salary
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="number"
                    className="form-control"
                    id="pe1StartingSalary"
                    name="pe1StartingSalary"
                    value={details.pe1StartingSalary}
                  />
                </div>
              </div>

              <div className="col-md-4  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    Ending Salary
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="number"
                    className="form-control"
                    id="pe1EndingSalary"
                    name="pe1EndingSalary"
                    value={details.pe1EndingSalary}
                  />
                </div>
              </div>

              <div className="col-md-12  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    Responsibilities
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="pe1Responsibilities"
                    name="pe1Responsibilities"
                    value={details.pe1Responsibilities}
                  />
                </div>
              </div>

              <div className="col-md-3  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    From
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="date"
                    className="form-control"
                    id="pe1From"
                    name="pe1From"
                    value={details.pe1From}
                  />
                </div>
              </div>

              <div className="col-md-3  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    To
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="date"
                    className="form-control"
                    id="pe1To"
                    name="pe1To"
                    value={details.pe1To}
                  />
                </div>
              </div>

              <div className="col-md-6  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    Reason Of leaving
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="pe1ROL"
                    name="pe1ROL"
                    value={details.pe1ROL}
                  />
                </div>
              </div>

              <div className="col-md-8  margin1">
                <div className="mb-6">
                  <label style={{ marginRight: '10%' }}>
                    May we contact your previous supervisor for a reference?
                  </label>

                  <div className="form-check form-check-inline">
                    <input
                      // required
                      onChange={onChange}
                      className="form-check-input
                      onChange={onChange}"
                      type="radio"
                      id="pe1ContactSupervisor"
                      name="pe1ContactSupervisor"
                      value="yes"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      yes
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      // required
                      onChange={onChange}
                      className="form-check-input
                      onChange={onChange}"
                      type="radio"
                      id="pe1ContactSupervisor"
                      name="pe1ContactSupervisor"
                      value="no"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <p style={{ backgroundColor: 'black' }} className="heading"></p>

            <div className="row">
              <div className="col-md-8  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    Company
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="pe2Company"
                    name="pe2Company"
                    value={details.pe2Company}
                  />
                </div>
              </div>

              <div className="col-md-4  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    Phone
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="number"
                    className="form-control"
                    id="pe2Phone"
                    name="pe2Phone"
                    value={details.pe2Phone}
                  />
                </div>
              </div>

              <div className="col-md-8  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    Address
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="pe2Address"
                    name="pe2Address"
                    value={details.pe2Address}
                  />
                </div>
              </div>

              <div className="col-md-4  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    Supervisor
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="pe2Supervisor"
                    name="pe2Supervisor"
                    value={details.pe2Supervisor}
                  />
                </div>
              </div>

              <div className="col-md-4  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    Job Title
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="pe2Jobtitle"
                    name="pe2Jobtitle"
                    value={details.pe2Jobtitle}
                  />
                </div>
              </div>

              <div className="col-md-4  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    Starting Salary
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="number"
                    className="form-control"
                    id="pe2StartingSalary"
                    name="pe2StartingSalary"
                    value={details.pe2StartingSalary}
                  />
                </div>
              </div>

              <div className="col-md-4  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    Ending Salary
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="number"
                    className="form-control"
                    id="pe2EndingSalary"
                    name="pe2EndingSalary"
                    value={details.pe2EndingSalary}
                  />
                </div>
              </div>

              <div className="col-md-12  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    Responsibilities
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="pe2Responsibilities"
                    name="pe2Responsibilities"
                    value={details.pe2Responsibilities}
                  />
                </div>
              </div>

              <div className="col-md-3  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    From
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="date"
                    className="form-control"
                    id="pe2From"
                    name="pe2From"
                    value={details.pe2From}
                  />
                </div>
              </div>

              <div className="col-md-3  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    To
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="date"
                    className="form-control"
                    id="pe2To"
                    name="pe2To"
                    value={details.pe2To}
                  />
                </div>
              </div>

              <div className="col-md-6  margin1">
                <div className="mb-6">
                  <label
                    htmlFor="exampleInput
  "
                    className="form-label"
                  >
                    Reason Of leaving
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="pe2ROL"
                    name="pe2ROL"
                    value={details.pe2ROL}
                  />
                </div>
              </div>

              <div className="col-md-8  margin1">
                <div className="mb-6">
                  <label style={{ marginRight: '10%' }}>
                    May we contact your previous supervisor for a reference?
                  </label>

                  <div className="form-check form-check-inline">
                    <input
                      // required
                      onChange={onChange}
                      className="form-check-input
                      onChange={onChange}"
                      type="radio"
                      id="pe2ContactSupervisor"
                      name="pe2ContactSupervisor"
                      value="yes"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      yes
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      // required
                      onChange={onChange}
                      className="form-check-input
                      onChange={onChange}"
                      type="radio"
                      id="pe2ContactSupervisor"
                      name="pe2ContactSupervisor"
                      value="no"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container " style={{ marginTop: '30px' }}>
            <h6 className="">PERSONNEL CODE OF ETHICS</h6>

            <div className="row">
              <p>
                The manner in which Home Care Solutions employs and conducts
                business is extremely important to our success. We have
                corporate responsibilities to ourselves, our clients and the
                communities in which we do business in order to effectively
                provide premiere care and protect our corporate and professional
                image, we must strive to conduct our business in the most
                ethical manner.
              </p>

              <p>
                we must strive to conduct our business in the most ethical
                manner. Each employee is expected to read, understand, sign,
                date and comply with the company’s code of ethics. This will be
                retained in their personal file to be reviewed annually.
              </p>
              <p>
                {' '}
                The following standards will be adhered to with no exceptions:
              </p>

              <ul>
                <ol>
                  <li className="padding12">
                    Staff shall not enter into a personal relationship with
                    their clients
                  </li>
                  <li className="padding12">
                    Staff shall not give clients their home residence phone
                    number - clients will be encouraged to call the central
                    phone number for assistance after regular office hours
                  </li>

                  <li className="padding12">
                    Staff shall not discriminate against any consumer or visitor
                    based on race, religion, sexual orientation, economic
                    conditions, or mental and physical challenges sexual
                    orientation, economic conditions, or mental and physical
                    challenges
                  </li>
                  <li className="padding12">
                    Staff shall protect the rights of all clients by safe
                    guarding clients physical safety at all times
                  </li>
                  <li className="padding12">
                    {' '}
                    Staff shall not use client’s car for personal reasons
                  </li>
                  <li className="padding12">
                    Staff shall not consume client’s food or beverage
                  </li>
                  <li className="padding12">
                    Staff shall not use client’s telephone for personal calls
                  </li>
                  <li className="padding12">
                    Staff shall not discuss political or religious beliefs, or
                    personal problems with the client
                  </li>
                  <li className="padding12">
                    {' '}
                    Staff shall not accept gifts or financial gratuities (tips)
                    from the client or client’s representative
                  </li>
                  <li className="padding12">
                    Staff shall not lend money or other items to the client;
                    borrow money or other items from the client or client’s
                    representative
                  </li>

                  <li className="padding12">
                    Staff shall not sell gifts, food, or other items to or for
                    the client
                  </li>
                  <li className="padding12">
                    Staff shall not purchase any items for the client unless
                    directed in client care plan
                  </li>
                  <li className="padding12">
                    Staff shall not bring other visitors (e.g., children,
                    friends, relatives, pets, etc.) to the client’s home
                  </li>

                  <li className="padding12">
                    Staff shall not smoke in the client’s home
                  </li>
                  <li className="padding12">
                    Staff shall not report for duty under the influence of
                    alcoholic beverages or illegal substances
                  </li>
                  <li className="padding12">
                    Staff shall not sleep in the client’s home
                  </li>
                  <li className="padding12">
                    Staff shall not remain in the client’s home after services
                    have been rendered
                  </li>
                </ol>
              </ul>

              <div className="row">
                <div
                  className="col-md-6"
                  style={{ display: 'flex', marginTop: '5px' }}
                >
                  <div style={{ width: '5%' }}>I, </div>
                  <div style={{ width: '95%' }}>
                    {' '}
                    <input
                      // required
                      onChange={onChange}
                      style={{ height: '25px' }}
                      type="text"
                      className="form-control"
                      id="tName"
                      name="tName"
                      value={details.tName}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  have read and fully understand the ethics Policy by HCS Inc.
                  and will abide by the policy.
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '30%' }}>
                  <label
                    style={{ marginRight: '10px' }}
                    htmlFor="exampleInput
    "
                    className="form-label"
                  >
                    Signature Picture
                  </label>
                  <input
                    // required
                   
                    type="file"
                    className="form-control"
                    id="SP"
                    name="SP"
                  />{' '}
                </div>

                <div>
                  <div className="mb-6">
                    <label
                      style={{ marginRight: '10px' }}
                      htmlFor="exampleInput
      "
                      className="form-label"
                    >
                      Date
                    </label>
                    <input
                      // required
                      onChange={onChange}
                      type="Date"
                      className="form-control"
                      id="tDate"
                      name="tDate"
                      value={details.tDate}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '30px' }}>
        <h6 className="">ORIENTATION / NEW HIRE CHECKLIST</h6>

        <div className="row">
          <div className="col-md-12  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                Name
              </label>
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="hireName1"
                name="hireName1"
                value={details.hireName1}
              />
            </div>
          </div>
          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                SS#
              </label>
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="ss"
                name="ss"
                value={details.ss}
              />
            </div>
          </div>
          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                DOB
              </label>
              <input
                // required
                onChange={onChange}
                type="date"
                className="form-control"
                id="hireDob"
                name="hireDob"
                value={details.hireDob}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label
                htmlFor="exampleInput
                "
                className="form-label"
              ></label>
            </div>
          </div>

          <div className="col-md-3  margin1">
            <div className="mb-6">
              <label
                htmlFor="exampleInput
             "
                className="form-label"
              >
                Date Received
              </label>
            </div>
          </div>

          <div className="col-md-3  margin1">
            <div className="mb-6">
              <label
                htmlFor="exampleInput
             "
                className="form-label"
              >
                Approved by
              </label>
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label
                htmlFor="exampleInput
           "
                className="form-label"
              >
                Philosophy, Purpose and Description of Services
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table11"
                name="table11"
                value={details.table11}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table12"
                name="table12"
                value={details.table12}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label
                htmlFor="exampleInput
             "
                className="form-label"
              >
                Employment Application Attached{' '}
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table21"
                name="table21"
                value={details.table21}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table22"
                name="table22"
                value={details.table22}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                Employee Resume Attached
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table31"
                name="table31"
                value={details.table31}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table32"
                name="table32"
                value={details.table32}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                Job Duties, Responsibilities, and Ethics{' '}
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table41"
                name="table41"
                value={details.table41}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table42"
                name="table42"
                value={details.table42}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                W-4 Federal Withholding Form Attached
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table51"
                name="table51"
                value={details.table51}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table52"
                name="table52"
                value={details.table52}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                G-4 Georgia Withholding Form Attached
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table61"
                name="table61"
                value={details.table61}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table62"
                name="table62"
                value={details.table62}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                I-9 Employment Eligibility Verification Attached
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table71"
                name="table71"
                value={details.table71}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table72"
                name="table72"
                value={details.table72}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                Copy of: Driver's License & SS Card
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table81"
                name="table81"
                value={details.table81}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table82"
                name="table82"
                value={details.table82}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                Pay Date vs. Start Date Explained to New Hire
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table91"
                name="table91"
                value={details.table91}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table92"
                name="table92"
                value={details.table92}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                Work Day/Hours Explained to New Hire
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table101"
                name="table101"
                value={details.table101}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table102"
                name="table102"
                value={details.table102}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                Holiday & Benefits Explained to New Hire{' '}
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table111"
                name="table111"
                value={details.table111}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table112"
                name="table112"
                value={details.table112}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                Use of Facilities and Equipment
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table121"
                name="table121"
                value={details.table121}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table122"
                name="table122"
                value={details.table122}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                Abuse Policies, Procedures & Reporting Requirements{' '}
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table131"
                name="table131"
                value={details.table131}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table132"
                name="table132"
                value={details.table132}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                Client Rights
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table141"
                name="table141"
                value={details.table141}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table142"
                name="table142"
                value={details.table142}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                Handling Disturbances
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table151"
                name="table151"
                value={details.table151}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table152"
                name="table152"
                value={details.table152}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                Procedures for Handling Emergencies{' '}
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table161"
                name="table161"
                value={details.table161}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table162"
                name="table162"
                value={details.table162}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                TB Exposure Reporting{' '}
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table171"
                name="table171"
                value={details.table171}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table172"
                name="table172"
                value={details.table172}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                Medical Exam (TB) (Must be within 12 mos.){' '}
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table181"
                name="table181"
                value={details.table181}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table182"
                name="table182"
                value={details.table182}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                Medical and Special needs of Clients
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table191"
                name="table191"
                value={details.table191}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table192"
                name="table192"
                value={details.table192}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                Characteristics of Clients{' '}
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table201"
                name="table201"
                value={details.table201}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table202"
                name="table202"
                value={details.table202}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                Confidentiality{' '}
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table211"
                name="table211"
                value={details.table211}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table212"
                name="table212"
                value={details.table212}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                Emergency Weather Procedures
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table221"
                name="table221"
                value={details.table221}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table222"
                name="table222"
                value={details.table222}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                CPR/ First Aide Certification{' '}
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table231"
                name="table231"
                value={details.table231}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table232"
                name="table232"
                value={details.table232}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                Employee Grievance Policies and Procedures{' '}
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table241"
                name="table241"
                value={details.table241}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table242"
                name="table242"
                value={details.table242}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6">
              <label htmlFor="exampleInput" className="form-label">
                Medication Management{' '}
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="Date"
                className="form-control"
                id="table251"
                name="table251"
                value={details.table251}
              />
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <input
                // required
                onChange={onChange}
                type="text"
                className="form-control"
                id="table252"
                name="table252"
                value={details.table252}
              />
            </div>
          </div>

          <div className="col-md-6  margin1">
            <div className="mb-6" style={{ marginTop: '20px' }}>
              <label htmlFor="exampleInput" className="form-label">
                Drug Test Done?{' '}
              </label>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6" style={{ marginTop: '23px' }}>
              <div className="form-check form-check-inline">
                <input
                  // required
                  onChange={onChange}
                  className="form-check-input
                  onChange={onChange}"
                  type="radio"
                  name="drugTest"
                  id="inlineCheckbox1"
                  value="no"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  No
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  // required
                  onChange={onChange}
                  className="form-check-input
                  onChange={onChange}"
                  type="radio"
                  name="drugTest"
                  id="inlineCheckbox1"
                  value="yes"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  Yes
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-3  margin1">
            <div className="mb-6">
              <label
                htmlFor="exampleInput
"
                className="form-label"
              ></label>
              <input
                // required
                onChange={onChange}
                type="date"
                className="form-control"
                placeholder="When"
                id="drugTestWhen"
                name="drugTestWhen"
                value={details.drugTestWhen}
              />
            </div>
          </div>

          <div className="col-md-4  margin1 ">
            <div
              className="mb-6"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <label htmlFor="exampleInput" className="form-label">
                If No Please Explain
              </label>
            </div>
          </div>
          <div className="col-md-8  margin1 ">
            <div
              className="mb-6"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <input
                onChange={onChange}
                type="text"
                className="form-control"
                id="drugNoExplain"
                name="drugNoExplain"
                value={details.drugNoExplain}
              />
            </div>
          </div>

          <div className="col-md-8  margin1 ">
            <div
              className="mb-6"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <label htmlFor="exampleInput" className="form-label">
                Criminal Background Check Completed
              </label>
            </div>
          </div>
          <div className="col-md-4  margin1 ">
            <div
              className="mb-6"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <input
                // required
                onChange={onChange}
                type="date"
                className="form-control"
                id="CBDate"
                name="CBDate"
                value={details.CBDate}
              />
            </div>
          </div>

          <div className="col-md-12 margin1">
            <p>
              Each document shall be completed in its entirety and attached to
              this form and submitted for approval. Each area must be completed
              within 60 days of hiring. Once approved, please forward to the
              Administrator. This form must be signed by the administrator.
            </p>
          </div>

          <div className="col-md-4 margin1">
            <label
              style={{ marginRight: '10px' }}
              htmlFor="exampleInput"
              className="form-label"
            >
              {' '}
              Employee Signature Picture
            </label>

            <input
              // required
             
              type="file"
              className="form-control"
              id="ESP1"
              name="ESP1"
            />
          </div>
          <div className="col-md-4 margin1"></div>

          <div className="col-md-4 margin1">
            <div className="col-mb-6 margin1">
              <label
                htmlFor="exampleInput
"
                className="form-label"
                style={{ marginRight: '10px' }}
              >
                Date
              </label>

              <input
                // required
                onChange={onChange}
                type="date"
                className="form-control"
                id="ESP1D"
                name="ESP1D"
              />
            </div>
          </div>

          <div className="col-md-4 margin1">
            <label
              style={{ marginRight: '10px' }}
              htmlFor="exampleInput"
              className="form-label"
            >
              {' '}
              Administrator Signature Picture
            </label>

            <input
              // required
             
              type="file"
              className="form-control"
              id="ASP1"
              name="ASP1"
            />
          </div>
          <div className="col-md-4 margin1"></div>

          <div className="col-md-4 margin1">
            <div className="col-mb-6">
              <label
                htmlFor="exampleInput
"
                className="form-label"
                style={{ marginRight: '10px' }}
              >
                Date
              </label>

              <input
                // required
                onChange={onChange}
                type="date"
                className="form-control"
                id="ASP1D"
                name="ASP1D"
                value={details.ASP1D}
              />
            </div>
          </div>

          <div className="container" style={{ marginTop: '30px' }}>
            <div className="row">
              <div className="col-md-12">
                <h6 className="">ORIENTATION / NEW HIRE CHECKLIST</h6>

                <p> List of documents reviewed during orientation</p>

                <ul>
                  <li> Written policies an Procedures </li>
                  <li>Clients Rights and Responsibilities</li>
                  <li> Clients Rights and Responsibilities</li>

                  <li>
                    {' '}
                    Obligation to report any known exposure to TB and or
                    Hepatitis C immediately to Supervisor
                  </li>

                  <li>
                    {' '}
                    Procedure for reporting Clients Progress and Problems to the
                    Supervisor
                  </li>

                  <li>
                    Review of all Service Forms / Proper completion of Forms
                  </li>

                  <li className="suboptions">Progress Report</li>
                  <li className="suboptions"> Incidence Report</li>
                  <li className="suboptions">Complaints Report</li>
                  <li className="suboptions">Supervisory Visit Forms</li>
                  <li className="suboptions">Service Agreement</li>
                  <li className="suboptions"> Service Plan</li>

                  <li>Employee Job Responsibilities</li>

                  <li>
                    Additional 8 hours of training shall be provided annually to
                    each staff to address job roles and responsibilities
                  </li>
                </ul>

                <div className="row">
                  <div
                    className="col-md-6"
                    style={{ display: 'flex', marginTop: '5px' }}
                  >
                    <div style={{ width: '5%' }}>I, </div>
                    <div style={{ width: '95%' }}>
                      {' '}
                      <input
                        // required
                        onChange={onChange}
                        style={{ height: '34px' }}
                        type="text"
                        className="form-control"
                        id="hireName2"
                        name="hireName2"
                        value={details.hireName2}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    acknowledge that I have received information and training on
                    new hire orientation list above, And I agree to comply with
                    all requirements
                  </div>
                </div>
              </div>

              <div className="col-md-4 margin1">
                <label
                  style={{ marginRight: '10px' }}
                  htmlFor="exampleInput
  "
                  className="form-label"
                >
                  {' '}
                  Employee Signature Picture
                </label>

                <input
                  // required
                 
                  type="file"
                  className="form-control"
                  id="ESP2"
                  name="ESP2"
                />
              </div>
              <div className="col-md-4 margin1"></div>

              <div
                className="col-md-4 margin1"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <label
                  htmlFor="exampleInput
  "
                  className="form-label"
                  style={{ marginRight: '10px' }}
                >
                  Date
                </label>
                <input
                  // required
                  onChange={onChange}
                  type="date"
                  className="form-control"
                  id="ESP2D"
                  name="ESP2D"
                  value={details.ESP2D}
                />
              </div>

              <div className="col-md-4 margin1">
                <label
                  style={{ marginRight: '10px' }}
                  htmlFor="exampleInput
  "
                  className="form-label"
                >
                  {' '}
                  Administrator Signature Picture
                </label>

                <input
                  // required
                 
                  type="file"
                  className="form-control"
                  id="ASP2"
                  name="ASP2"
                />
              </div>
              <div className="col-md-4 margin1"></div>

              <div
                className="col-md-4 margin1"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <label
                  htmlFor="exampleInput
  "
                  className="form-label"
                  style={{ marginRight: '10px' }}
                >
                  Date
                </label>
                <input
                  // required
                  onChange={onChange}
                  type="date"
                  className="form-control"
                  id="ASP2D"
                  name="ASP2D"
                  value={details.ASP2D}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '30px' }}>
        <div className="row">
          <div className="col-md-12">
            <h6 className="">CLIENTS RIGHTS AND RESPONSIBILITIES</h6>
            <p>
              The Nursing or Care Manager shall review with the client or client
              representative their rights and responsibilities at the time of
              the face-to-face evaluation and sign the document. The client is
              to retain a copy and the Nursing or Care Manager places one in the
              client’s file to be returned and filed in the office.
            </p>

            <p style={{ textDecoration: 'underline' }}>
              {' '}
              <b>Client’s rights recognized by the HCS include: </b>
            </p>

            <ul>
              <ol>
                <li className="padding12">
                  {' '}
                  The right of access to accurate and easy-to-understand
                  information
                </li>
                <li className="padding12">
                  The right to be treated with respect and to maintain one's
                  dignity and individuality
                </li>

                <li className="padding12">
                  The right to voice grievances and complaints regarding
                  treatment or care that is furnished or not furnished, without
                  fear of retaliation, discrimination, coercion, or reprisal
                </li>

                <li className="padding12">
                  The right to a choice of approved service provider(s) and the
                  right to accept or refuse services
                </li>

                <li className="padding12">
                  The right to be informed of and participate in preparing the
                  care plan and any changes in the plan
                </li>

                <li className="padding12">
                  The right to be advised in advance of the provider(s) who will
                  furnish care and the frequency and duration of visits{' '}
                </li>
                <li className="padding12">
                  The right to confidential treatment of all information,
                  including information in the client record
                </li>

                <li className="padding12">
                  The right to receive services in accordance with the current
                  care plan
                </li>

                <li className="padding12">
                  The right to be informed of the name, business telephone
                  number and business address of the person supervising the
                  services and how to contact that person (Department of Human
                  Resources) 2 Peachtree St., N.W. Atlanta, GA 30303 (404)
                  657-5728
                </li>
                <li className="padding12">
                  The right to have property and residence treated with respect.
                  The right to review client's records on request
                </li>
                <li className="padding12">
                  The right to be fully and promptly informed of any cost share
                  liability and the consequences if not paid
                </li>
                <li className="padding12">
                  {' '}
                  The right to receive adequate and appropriate care and
                  services without discrimination
                </li>

                <li className="padding12">
                  The right to be free from mental, verbal, sexual and physical
                  abuse, neglect, exploitation, isolation, corporal or unusual
                  punishment, including interference with daily functions of
                  living
                </li>

                <li className="padding12">
                  The right to be free from chemical or physical restraints.
                </li>
              </ol>
            </ul>

            <p style={{ textDecoration: 'underline' }}>
              {' '}
              <b>Client’s responsibilities recognized by the HCS include: </b>
            </p>

            <ul>
              <ol>
                <li className="padding12">
                  The responsibility to notify HCS of any changes in care needs
                </li>

                <li className="padding12">
                  The responsibility to treat HCS staff in a courteous and
                  respectful manner, as well as cooperate with and respect the
                  rights of the caregivers providing care
                </li>

                <li className="padding12">
                  The responsibility to be as accurate as possible when
                  providing information on health history and personal care
                  needs
                </li>

                <li className="padding12">
                  The responsibility to participate actively in decisions
                  regarding individual healthcare and service/care plan.
                </li>

                <li className="padding12">
                  The responsibility to comply with agreed-upon care plans
                </li>

                <li className="padding12">
                  The responsibility to notify the client's physician, service
                  provider(s), and/or caregiver of any change in one's
                  condition.{' '}
                </li>
                <li className="padding12">
                  The responsibility to maintain a safe home environment or to
                  inform provider(s) of the presence of any safety hazard{' '}
                </li>

                <li className="padding12">
                  The responsibility to be available to provider staff at times
                  services are scheduled to be rendered
                </li>

                <li className="padding12">
                  The responsibility to pay any cost share liability, if
                  applicable{' '}
                </li>
                <li className="padding12">
                  {' '}
                  The responsibility to avail the member to the utilization
                  review team to make visits as needed.{' '}
                </li>
                <li className="padding12">
                  {' '}
                  The responsibility to maintain a safe environment for self and
                  staff, including a drug free environment at all times. If
                  present in the home, alcohol must be concealed and must not
                  interfere with the service delivery process.{' '}
                </li>
                <li className="padding12">
                  {' '}
                  The responsibility to not willfully have utilities (gas,
                  water, electricity) disconnected for non-payment, or other
                  reasons within the member’s control.{' '}
                </li>
              </ol>
            </ul>
          </div>

          <div className="col-md-4 margin1" style={{ display: 'flex' }}>
            <label
              style={{ width: '50%' }}
              style={{ marginRight: '10px' }}
              htmlFor="exampleInput"
              className="form-label"
            >
              Client Representative{' '}
            </label>

            <input
              // required
              onChange={onChange}
              type="text"
              className="form-control"
              id="clientRepr"
              name="clientRepr"
              value={details.clientRepr}
            />
          </div>
          <div className="col-md-4 margin1"></div>

          <div className="col-md-4 margin1">
            <div className="col-mb-6">
              <label
                htmlFor="exampleInput
"
                className="form-label"
                style={{ marginRight: '10px' }}
              >
                Date
              </label>

              <input
                // required
                onChange={onChange}
                type="date"
                className="form-control"
                id="clientReprD"
                name="clientReprD"
                value={details.clientReprD}
              />
            </div>
          </div>

          <div className="col-md-4 margin1">
            <label
              style={{ marginRight: '10px' }}
              htmlFor="exampleInput"
              className="form-label"
            >
              {' '}
              Administrator Signature Picture
            </label>

            <input
              // required
             
              type="file"
              className="form-control"
              id="ASP3"
              name="ASP3"
            />
          </div>
          <div className="col-md-4 margin1"></div>

          <div className="col-md-4 margin1">
            <div className="col-mb-6">
              <label
                htmlFor="exampleInput
"
                className="form-label"
                style={{ marginRight: '10px' }}
              >
                Date
              </label>

              <input
                // required
                onChange={onChange}
                type="date"
                className="form-control"
                id="ASP3D"
                name="ASP3D"
                value={details.ASP3D}
              />
            </div>
          </div>

          <div className="col-md-4 margin1" style={{ display: 'flex' }}>
            <label
              style={{ marginRight: '14%' }}
              htmlFor="exampleInput"
              className="form-label"
            >
              Nurse Manager{' '}
            </label>

            <input
              // required
              onChange={onChange}
              type="text"
              className="form-control"
              id="NM"
              name="NM"
              value={details.NM}
            />
          </div>
          <div className="col-md-4 margin1"></div>

          <div className="col-md-4 margin1">
            <div className="col-mb-6">
              <label
                htmlFor="exampleInput
"
                className="form-label"
                style={{ marginRight: '10px' }}
              >
                Date
              </label>

              <input
                // required
                onChange={onChange}
                type="date"
                className="form-control"
                id="NMD"
                name="NMD"
                value={details.NMD}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '30px' }}>
        <div className="row">
          <div className="col-md-12">
            <h6 className="">Client Protection Assurances/ Client Rights</h6>

            <p>
              HCS acknowledges that all clients have rights and responsibilities
              regarding participation in the ICWP program. It is the company’s
              policy that all clients shall be made to feel free and protected
              from abuse, neglect, mistreatment or financial exploitation. Each
              client shall receive a copy of the rights and responsibilities for
              their record and review. HCS shall also retain a signed copy in
              the client’s file.{' '}
            </p>

            <ul>
              <li className="padding12">
                HCS shall Screen each potential employee for criminal background
                history
              </li>
              <li className="padding12">
                HCS shall not employ individuals with a prior conviction on
                charges of abuse, neglect, mistreatment or financial
                exploitation from performing direct client care duties.
              </li>

              <li className="padding12">
                We also check employment references/ verification (Appendix D)
              </li>

              <li className="padding12">
                Provide in-service training at least annually to all employees,
                subcontractor’s, and volunteers on how to recognize situations
                of possible abuse, neglect, exploitation, and/or the likelihood
                of serious physical harm to individuals who receive services
                through the CCSP
              </li>

              <li className="padding12">
                Observe at least annually staff providing direct care to clients
                and correct any deficiencies via training and warning or
                possibly termination of employee.
              </li>

              <li className="padding12">
                Report verbally all allegations of mistreatment, abuse, neglect,
                exploitation, elopement, unexpected death, serious injury,
                injuries of unknown origin, and any other critical
                Event/situation immediately (within 24 hours of the event) to
                the administrator and to CCSP, AAA and Police for thorough
                investigation of all alleged client protection violations
              </li>

              <li className="padding12">
                Within three days of the verbal notification of the incident to
                the CCSP office, HCS shall submit a follow-up Community Care
                Notification Form (CCNF) to the care coordinator
              </li>

              <li className="padding12">
                Prevent further potential abuse while the investigation is in
                progress by replacing the care provider with another credible
                employee. Take appropriate actions if alleged violation is
                substantiated by discharging the employee or warning depending
                on the severity of the incident. The accused aide and office
                staff shall write a comprehensive report of the incident using
                appropriate instruments - Incident Report Forms (Appendix F).
                All such incidents are logged in the INCIDENT LOG BOOK, and the
                alleged violation is thoroughly investigated and reported to the
                CCSP care coordinator within 5 days.
              </li>

              <li className="padding12">
                Complete the investigation within five (5) business days of the
                incident and submit a written report of the findings to the
                administrator and to other officials in accordance with state
                law.
              </li>

              <p style={{ textDecoration: 'underline' }}>
                {' '}
                <b>Investigation of Allegation </b>
              </p>

              <li className="padding12">
                The Nurse Manager (RN) will go for an assessment of the client
                to ensure that client is safe to continue receiving services at
                home. If client’s safety is assured, the aide will be taken off
                the case immediately and replaced with another aide. The accused
                aide and the office staff are expected to write comprehensive
                reports of the incident using appropriate instruments-Incident
                Report Forms (Appendix F). All such incidents are logged in the
                INCIDENT LOG BOOK, and the alleged violation is thoroughly
                investigated and reported to the CCSP care coordinator within 5
                days.
              </li>
              <li className="padding12">
                If allegations are substantiated, appropriate disciplinary
                actions are taken. First, the aide’s appointment is terminated
                and further the Aide is reported to the law enforcement agency.{' '}
              </li>

              <li className="padding12">
                {' '}
                Appropriate steps such as counseling, staff training and client
                education are taken in order to prevent future occurrence.
              </li>
            </ul>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '30%' }}>
                <label
                  style={{ marginRight: '10px' }}
                  htmlFor="exampleInput
  "
                  className="form-label"
                >
                  {' '}
                  Employee Signature Picture
                </label>
                <input
                  // required
                 
                  type="file"
                  className="form-control"
                  id="ESP3"
                  name="ESP3"
                />{' '}
              </div>

              <div>
                <div className="mb-6">
                  <label
                    style={{ marginRight: '10px' }}
                    htmlFor="exampleInput
    "
                    className="form-label"
                  >
                    Date
                  </label>
                  <input
                    // required
                    onChange={onChange}
                    type="Date"
                    className="form-control"
                    id="ESP3D"
                    name="ESP3D"
                    value={details.ESP3D}
                  />
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '30%' }}>
              <label
                style={{ marginRight: '10px' }}
                htmlFor="exampleInput
"
                className="form-label"
              >
                {' '}
                Administrator Signature Picture
              </label>
              <input
                // required
               
                type="file"
                className="form-control"
                id="ASP4"
                name="ASP4"
              />{' '}
            </div>

            <div>
              <div className="mb-6">
                <label
                  style={{ marginRight: '10px' }}
                  htmlFor="exampleInput
  "
                  className="form-label"
                >
                  Date
                </label>
                <input
                  // required
                  onChange={onChange}
                  type="Date"
                  className="form-control"
                  id="ASP4D"
                  name="ASP4D"
                  value={details.ASP4D}
                />
              </div>
            </div>
          </div>

          <h6 className="" style={{ marginTop: '30px' }}>
            INFECTION CONTROL
          </h6>

          <p>
            HCS staff shall observe the following procedures in the provision of
            services to prevent exposure to infectious disease. These procedures
            are universal precautions to prevent the spread of infectious
            diseases in compliance with occupational safety and health
            administration requirements (OSHA) and state regulations for home
            care providers. All blood and body fluids with blood are to be
            treated as potentially infectious. General rule of thumb is hand
            washing before and after attending to client. Wash hands and other
            skin surfaces immediately and thoroughly if soiled with blood or
            body fluids, and change gloves after contact with each client. Wash
            hands before and after giving care to clients. The administrator is
            responsible for ensuring that infection control is practiced.
          </p>
          <p style={{ textDecoration: 'underline' }}>
            {' '}
            <b>Wear latex gloves when: </b>
          </p>
          <ul>
            <li className="padding12">
              {' '}
              Touching blood/body fluids, mucous membranes, or non-intact skin.
            </li>
            <li className="padding12">
              Handling items or surfaces soiled with blood/body fluids visible
              with blood.
            </li>

            <li className="padding12">
              Performing venipuncture and other vascular access procedures.
            </li>

            <li className="padding12">
              Cleaning and decontaminating spills of blood/body fluids.
            </li>

            <li className="padding12">
              {' '}
              Although no diseases are known to be spread by direct skin contact
              with feces or other body fluids, gloves should be worn when having
              contact with feces and any body fluids as a basic hygiene measure.
            </li>
          </ul>
          <p style={{ textDecoration: 'underline' }}>
            {' '}
            <b>Standard housekeeping cleaning procedures to be used. </b>
          </p>

          <ul>
            <li className="padding12">
              All soiled linen should be bagged at the location where it was
              used; it should not be sorted or rinsed in client-care areas.
              Linen soiled with blood or body fluids should be placed and
              transported in bags that prevent leakage.
            </li>
            <li className="padding12">
              All soiled linen should be bagged at the location where it was
              used; it should not be sorted or rinsed in client-care areas.
              Linen soiled with blood or body fluids should be placed and
              transported in bags that prevent leakage.
            </li>

            <li className="padding12">
              Linens and personal clothing items laundered should be washed
              using routine laundering procedures.
            </li>

            <li className="padding12">
              Dish washing using routine cleaning procedures effectively
              destroys pathogenic (disease causing) organisms. Dishes of clients
              with hepatitis B or AIDS do not need to be separated from the rest
              of the facility clients. Do not share unwashed utensils or use
              common drinking glasses with any client.
            </li>
          </ul>

          <p style={{ textDecoration: 'underline' }}>
            {' '}
            <b>Environmental procedures to be used </b>
          </p>

          <ul>
            <li className="padding12">
              Use a gown or apron during procedures that are likely to generate
              splashes of blood or other body fluids. Universal precautions also
              recommend the use of masks/eye wear during procedures that are
              likely to generate droplets of blood or other body fluids to
              prevent exposure of the mucous membrane of the mouth and
              nose/eyes.
            </li>
            <li className="padding12">
              Dispose of secretions directly into the toilet. An individual
              toilet for a client is not , but is recommended if the person has
              diarrhea.
            </li>

            <li className="padding12">
              Care should be taken to prevent injuries caused by needles and
              other sharp instruments or devices.
            </li>

            <li className="padding12">
              To prevent needle stick injuries, needles should not be recapped,
              purposely bent or broken by hand, removed from disposable
              syringes, or otherwise manipulated by hand. After they are used,
              disposable syringes and needles, and other sharp items should be
              placed in puncture-resistant containers for disposal. The
              puncture-resistant containers should be located as close as
              practical to the use area.
            </li>

            <li className="padding12">
              Direct mouth-to-mouth contact is not recommended. It is
              recommended that mouthpieces, ventilation bags or other
              ventilation devices be kept in areas where the need is
              predictable. However, if such devices are not available an
              employee should not hesitate to provide CPR (Cardiopulmonary
              Resuscitation) procedures
            </li>
          </ul>

          <p>
            I AM CPR & TB CERTIFIED, I WOULD REPORT to Home Care Solutions, LLC,
            ANY EXPOSURE TO TB & HEPATTIS B, WHETHER THE EXPOSURE OCCURRED ON OR
            OFF THE JOB. I SHALL REPORT THE EXPOSURE IMMEDIATELY TO Home Care
            Solutions, LLC
          </p>

          <div className="col-md-4 margin1">
            <label
              style={{ marginRight: '10px' }}
              htmlFor="exampleInput"
              className="form-label"
            >
              {' '}
              Employee Signature Picture
            </label>

            <input
              // required
             
              type="file"
              className="form-control"
              id="ESP4"
              name="ESP4"
            />
          </div>
          <div className="col-md-4 margin1"></div>

          <div className="col-md-4 margin1">
            <div className="col-mb-6 margin1">
              <label
                htmlFor="exampleInput
"
                className="form-label"
                style={{ marginRight: '10px' }}
              >
                Date
              </label>

              <input
                // required
                onChange={onChange}
                type="date"
                className="form-control"
                id="ESP4D"
                name="ESP4D"
                value={details.ESP4D}
              />
            </div>
          </div>

          <div className="col-md-4 margin1">
            <label
              style={{ marginRight: '10px' }}
              htmlFor="exampleInput"
              className="form-label"
            >
              {' '}
              Administrator Signature Picture
            </label>

            <input
              // required
             
              type="file"
              className="form-control"
              id="ASP5"
              name="ASP5"
            />
          </div>
          <div className="col-md-4 margin1"></div>

          <div className="col-md-4 margin1">
            <div className="col-mb-6">
              <label
                htmlFor="exampleInput
"
                className="form-label"
                style={{ marginRight: '10px' }}
              >
                Date
              </label>

              <input
                // required
                onChange={onChange}
                type="date"
                className="form-control"
                id="ASP5D"
                name="ASP5D"
                value={details.ASP5D}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col-md-6"
            style={{ display: 'flex', marginTop: '5px' }}
          >
            <div style={{ width: '5%' }}>I, </div>
            <div style={{ width: '95%' }}>
              {' '}
              <input
                // required
                onChange={onChange}
                style={{ height: '34px' }}
                type="text"
                className="form-control"
                id="eveName"
                name="eveName"
                value={details.eveName}
              />
            </div>
          </div>

          <div className="col-md-6">
            attest that I have never been shown by credible evidence (e.g. a
            court or jury, a department investigation, or other reliable
            evidence) to have abused, neglected, assaulted, exploited, or
            deprived any person or to have subjected any person to serious
            injury as a result of intentional or gross negligent misconduct as
            evidenced by an oral or written statement to this effect obtained at
            the time of application
            <p>
              That I have participated in the orientation and training by these
              rules;
            </p>
            <p>
              That IU have not made any material false statements concerning
              qualifications requirements either to the department or to HCS
            </p>
          </div>

          <div className="col-md-4 margin1">
            <label
              style={{ marginRight: '10px' }}
              htmlFor="exampleInput"
              className="form-label"
            >
              {' '}
              Employee Signature Picture
            </label>

            <input
              // required
             
              type="file"
              id="ESP5"
              name="ESP5"
              className="form-control"
            />
          </div>

          <div className="col-md-4 margin1"></div>

          <div
            className="col-md-4 margin1"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <label
              htmlFor="exampleInput"
              className="form-label"
              style={{ marginRight: '10px' }}
            >
              Date
            </label>
            <input
              // required
              onChange={onChange}
              type="date"
              className="form-control"
              id="ESP5D"
              name="ESP5D"
              value={details.ESP5D}
            />
          </div>

          <div className="col-md-4 margin1">
            <label
              style={{ marginRight: '10px' }}
              htmlFor="exampleInput"
              className="form-label"
            >
              {' '}
              First Witness
            </label>

            <input
              // required
              onChange={onChange}
              type="text"
              className="form-control"
              id="FW"
              name="FW"
              value={details.FW}
            />
          </div>
          <div className="col-md-4 margin1"></div>

          <div
            className="col-md-4 margin1"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <label
              htmlFor="exampleInput"
              className="form-label"
              style={{ marginRight: '10px' }}
            >
              Date
            </label>
            <input
              // required
              onChange={onChange}
              type="date"
              className="form-control"
              id="FWD"
              name="FWD"
              value={details.FWD}
            />
          </div>

          <div className="col-md-4 margin1">
            <label
              style={{ marginRight: '10px' }}
              htmlFor="exampleInput"
              className="form-label"
            >
              {' '}
              Second Witness{' '}
            </label>

            <input
              // required
              onChange={onChange}
              type="text"
              className="form-control"
              id="SW"
              name="SW"
              value={details.SW}
            />
          </div>
          <div className="col-md-4 margin1"></div>

          <div
            className="col-md-4 margin1"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <label
              htmlFor="exampleInput"
              className="form-label"
              style={{ marginRight: '10px' }}
            >
              Date
            </label>
            <input
              // required
              onChange={onChange}
              type="date"
              className="form-control"
              id="SWD"
              name="SWD"
              value={details.SWD}
            />
          </div>

          <div
            className="col-md-6"
            style={{ display: 'flex', marginTop: '5px' }}
          >
            <div style={{ width: '50%' }}>Sworn declaration on</div>
            <div style={{ width: '50%' }}>
              {' '}
              <input
                // required
                onChange={onChange}
                style={{ height: '34px' }}
                type="text"
                className="form-control"
                id="swornDec"
                name="swornDec"
                value={details.swornDec}
              />
            </div>
          </div>

          <div className="col-md-6">
            <p>2017</p>
          </div>

          <div
            className="col-md-6"
            style={{ display: 'flex', marginTop: '5px' }}
          >
            <div style={{ width: '50%' }}>
              {' '}
              Notary Public: State of Georgia <br></br>
              Commission expires,
            </div>
            <div style={{ width: '50%', marginTop: '20px' }}>
              {' '}
              <input
                // required
                onChange={onChange}
                style={{ height: '34px' }}
                type="text"
                className="form-control"
                id="Nortary"
                name="Nortary"
                value={details.Nortary}
              />
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-5">
          <h6>EMERGENCY EMPLOYEE CONTACT</h6>
          <div className="col-md-8 mt-4">
            <label style={{ marginRight: '9px' }}> Employee Name </label>
            <input
              // required
              onChange={onChange}
              type="text"
              className="form-control"
              id="EEName"
              name="EEName"
              value={details.EEName}
            />
          </div>

          <div className="col-md-8 mt-4">
            <label style={{ marginRight: '9px' }}>Address </label>
            <textarea
              // required
              onChange={onChange}
              className="form-control"
              placeholder=""
              style={{ height: '80px', width: '100%' }}
              id="EEAddress"
              name="EEAddress"
              value={details.EEAddress}
            />
          </div>

          <div className="col-md-8 mt-4">
            <label style={{ marginRight: '9px' }}> Contact Phone </label>
            <input
              // required
              onChange={onChange}
              type="number"
              className="form-control"
              id="EEContact"
              name="EEContact"
              value={details.EEContact}
            />
          </div>

          <div className="col-md-8 mt-4">
            <label style={{ marginRight: '9px' }}>
              {' '}
              Emergency Contact Phone{' '}
            </label>
            <input
              // required
              onChange={onChange}
              type="number"
              className="form-control"
              id="EEemergencyContact"
              name="EEemergencyContact"
              value={details.EEemergencyContact}
            />
          </div>

          <div className="col-md-8 mt-4">
            <label style={{ marginRight: '9px' }}>
              {' '}
              Emergency Contact Name{' '}
            </label>
            <input
              // required
              onChange={onChange}
              type="text"
              className="form-control"
              id="EEemergencyName"
              name="EEemergencyName"
              value={details.EEemergencyName}
            />
          </div>
        </div>
        <p
          id="processing"
          style={{
            color: '#09519c',
            fontSize: '24px',
            display: 'none',
          }}
        >
          Wait for it. The process can take some time.........
        </p>
        <p
          id="success"
          style={{
            color: '#25d9a6',
            fontSize: '24px',
            display: 'none',
          }}
        >
          Email sent successfully
        </p>
        <p
          id="error"
          style={{
            color: '#ff3333',
            fontSize: '24px',
            display: 'none',
          }}
        >
          Error sending email, please try again
        </p>
        <button
          style={{
            background: 'yellow',
            color: 'black',
            marginBottom: '3rem',
            marginTop: '15px',
          }}
          className="btn"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default index;
