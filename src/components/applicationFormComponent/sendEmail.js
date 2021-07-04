// emailjs.init('user_xKjnEiz2TrzHygDYVtChk');
import jsPDF from 'jspdf';

const axios = require('axios').default;

export const sendMail = async (e, details) => {
  const processing = document.getElementById('processing');
  const error = document.getElementById('error');
  const success = document.getElementById('success');

  error.style.display = 'none';
  success.style.display = 'none';

  processing.style.display = 'block';
  const page1 = `Application Personal Information
Full Name : ${details.name}
Date : ${details.date}
Address :${details.address}
City : ${details.city}
State: ${details.state}
Zip : ${details.zip}
Phone: ${details.phone}
Email: ${details.email}
Date Available: ${details.dateAvailable}
Social Security# : ${details.socialSecurity}
Desired Salary/HR: ${details.desiredSalary}
Position Applied For:${details.positionAppliedFor}
Certifications:${details.certifications}
Are You Currently Employed ?:
${details.employed}
If no, are you authorized to work in the US:
${details.authorized}

Have you ever worked for this company?:
${details.worked}
If yes, when?:
${details.whenWorked}
Have you ever been convicted of a felony?:
${details.convicted}

If yes, explain?: ${details.descriptionIfFelony}

Education

High School: ${details.highSchool}
Address: ${details.hsAddress}

From: ${details.hsFrom}
To:${details.hsTo}
Did you Graduate: ${details.graduated}
Diploma: ${details.diploma}
Other: ${details.eduOther}
Address: ${details.otherAddress}`;

  const page2 = `
  References

Please list three professional references:

Refrence 1

FullName: ${details.pr1Name}
Relationship: ${details.pr1Relation}
Company: ${details.pr1Company}
Phone: ${details.pr1Phone}
Address: ${details.pr1Address}

Refrence 2

FullName: ${details.pr2Name}
Relationship: ${details.pr2Relation}
Company: ${details.pr2Company}
Phone: ${details.pr2Phone}
Address: ${details.pr2Address}

Refrence 3


FullName: ${details.pr3Name}
Relationship: ${details.pr3Relation}
Company: ${details.pr3Company}
Phone: ${details.pr3Phone}
Address: ${details.pr3Address}

Previous Employment

Employment 1

Company: ${details.pe1Company}
Phone: ${details.pe1Phone}
Address: ${details.pe1Address}
Supervisor: ${details.pe1Supervisor}
Job Title: ${details.pe1Jobtitle}
Starting Salary: ${details.pe1StartingSalary}
Ending Salary: ${details.pe1EndingSalary}
Responsibilities; ${details.pe1Responsibilities}
From: ${details.pe1From}
To: ${details.pe1To}
Reason Of leaving: ${details.pe1ROL}
May we contact your previous supervisor for a reference?: ${details.pe1ContactSupervisor}
`;

  const page3 = `
  Employment 2

Company: ${details.pe2Company}
Phone: ${details.pe2Phone}
Address: ${details.pe2Address}
Supervisor: ${details.pe2Supervisor}
Job Title: ${details.pe2Jobtitle}
Starting Salary: ${details.pe2StartingSalary}
Ending Salary: ${details.pe2EndingSalary}
Responsibilities; ${details.pe2Responsibilities}
From: ${details.pe2From}
To: ${details.pe2To}
Reason Of leaving: ${details.pe2ROL}
May we contact your previous supervisor for a reference?: ${details.pe2ContactSupervisor}

PERSONNEL CODE OF ETHICS

I, ${details.tName}
have read and fully understand the ethics Policy by HCS Inc. and will abide by the policy.
Signature Picture, (check attachment ${details.name}-${details.phone}-SP)
Date: ${details.tDate}`;
  const page4 = `

  ORIENTATION / NEW HIRE CHECKLIST
Name : ${details.hireName1}
SS#: ${details.ss}
DOB: ${details.hireDob}
Philosophy, Purpose and Description of Services:     
       Date Received:${details.table11}         Approved By: ${details.table12}
Employment Application Attached                      
       Date Received: ${details.table21}        Approved By:  ${details.table22}
Employee Resume Attached                             
        Date Received:${details.table31}        Approved By:  ${details.table32}
Job Duties, Responsibilities, and Ethics             
       Date Received: ${details.table41}        Approved By:  ${details.table42}
W-4 Federal Withholding Form Attached                
       Date Received: ${details.table51}        Approved By:  ${details.table52}
G-4 Georgia Withholding Form Attached                
       Date Received: ${details.table61}        Approved By:  ${details.table62}
  I-9 Employment Eligibility Verification Attached   
         Date Received: ${details.table71}        Approved By:  ${details.table72}
Copy of: Driver's License & SS Card                  
       Date Received: ${details.table81}        Approved By:  ${details.table82}
Pay Date vs. Start Date Explained to New Hire        
       Date Received: ${details.table91}        Approved By:  ${details.table92}
Work Day/Hours Explained to                          
       Date Received: ${details.table101}       Approved By:  ${details.table102}
Holiday & Benefits Explained to New Hire             
       Date Received: ${details.table111}       Approved By:  ${details.table112}
Use of Facilities and Equipment                      
       Date Received: ${details.table121}       Approved By:  ${details.table122}
Abuse Policies, Procedures & Reporting Requirements  
       Date Received: ${details.table131}       Approved By:  ${details.table132}
Client Rights                                        
       Date Received: ${details.table141}       Approved By:  ${details.table142}
Handling Disturbances                                
       Date Received: ${details.table151}       Approved By:  ${details.table152}
Procedures for Handling Emergencies                  
       Date Received:  ${details.table161}      Approved By:   ${details.table162}
TB Exposure Reporting                                
       Date Received:  ${details.table171}      Approved By:   ${details.table172}
Medical Exam (TB) (Must be within 12 mos.)           
       Date Received:  ${details.table181}      Approved By:   ${details.table182}
Medical and Special needs of Clients                 
       Date Received:  ${details.table191}      Approved By:   ${details.table192}
Characteristics of Clients                           
       Date Received:  ${details.table201}      Approved By:   ${details.table202}
Confidentiality                                      
       Date Received:  ${details.table211}      Approved By:   ${details.table212}`;

  const page5 = `
  Emergency Weather Procedures                         
       Date Received:  ${details.table221}      Approved By:   ${details.table222}
CPR/ First Aide Certification                        
       Date Received:   ${details.table231}     Approved By:   ${details.table232}
Employee Grievance Policies and Procedures           
       Date Received:  ${details.table241}      Approved By:    ${details.table242}
Medication Management                                
       Date Received:  ${details.table251}      Approved By:    ${details.table252}


Drug Test Done?
${details.drugTest}
If No Please Explain: ${details.drugNoExplain}

Criminal Background Check Completed :${details.CBDate}


Each document shall be completed in its entirety and attached to this form 
and submitted for approval.
 Each area must be completed within60 days of hiring. 
 Once approved, please forward to the Administrator. 
 This form must be signed by the administrator.


Employee Signature Picture : (check attachment file ${details.name}-${details.phone}-ESP1 )
Date: ${details.ESP1D}
Administrator Signature Picture:  (check attachment file ${details.name}-${details.phone}-ASP1)
Date: ${details.ASP1D}

ORIENTATION / NEW HIRE CHECKLIST



I, ${details.hireName2}
acknowledge that I have received information and training on new hire orientation list above, 
And I agree to comply with all requirements


Employee Signature Picture : (check attachment file  ${details.name}-${details.phone}-ESP2)
Date: ${details.ESP2D}
Administrator Signature Picture: (check attachment file ${details.name}-${details.phone}-ASP2) 
Date${details.ASP2D}



`;
  const page6 = `
  CLIENTS RIGHTS AND RESPONSIBILITIES
...
Client Representative: ${details.clientRepr}
Date: ${details.clientReprD}

Administrator Signature Picture: (check attachment file ${details.name}-${details.phone}-ASP3)
Date: ${details.ASP3D}
Nurse Manager: ${details.NM}
Date: ${details.NMD}



Client Protection Assurances/ Client Rights

Employee Signature Picture: (check attachment file ${details.name}-${details.phone}-ESP3)
Date: ${details.ESP3D}
Administrator Signature Picture : (check attachment file ${details.name}-${details.phone}-ASP4)
Date: ${details.ASP4D}





INFECTION CONTROL
 ...
I AM CPR & TB CERTIFIED, I WOULD REPORT to Home Care Solutions, LLC,
 ANY EXPOSURE TO TB & HEPATTIS B, WHETHER THE
 EXPOSURE OCCURRED ON OR OFF THE JOB. I SHALL REPORT THE EXPOSURE 
 IMMEDIATELY TO Home Care Solutions, LLC

Employee Signature Picture : (check attachment file ${details.name}-${details.phone}-ESP4)
Date : ${details.ESP4D}

Administrator Signature Picture: (check attachment file  ${details.name}-${details.phone}-ASP5)
Date: ${details.ASP5D}
I, ${details.eveName}
attest that I have never been shown by credible evidence 
(e.g. a court or jury, a department investigation, or other 
  reliable evidence) to have abused, neglected, assaulted, exploited, 
  or deprived any person or to have subjected any person to
   serious injury as a result of intentional or gross negligent misconduct 
   as evidenced by an oral or written statement to this 
   effect obtained at the time of application

`;

  const page7 = `
That I have participated in the orientation and training by these rules;
That IU have not made any material false statements concerning qualifications
 requirements either to the department or to HCS

Employee Signature Picture: (check attachment file ${details.name}-${details.phone}-ESP5)
Date: ${details.ESP5D}

First Witness:${details.FW}
Date: ${details.FWD}


Second Witness: ${details.SW}
Date: ${details.SW}

Sworn declaration on: ${details.SWD}
2017


Notary Public: State of Georgia
Commission expires, : ${details.Nortary}



EMERGENCY EMPLOYEE CONTACT

Employee Name: ${details.EEName}
Address: ${details.EEAddress}
Contact Phone: ${details.EEContact}
Emergency Contact Phone : ${details.EEemergencyContact}
Emergency Contact Name: ${details.EEemergencyName}`;

  const doc = new jsPDF('p', 'mm', [350, 250]);

  doc.text(page1, 10, 10);

  doc.addPage();
  doc.text(page2, 10, 10);

  doc.addPage();
  doc.text(page3, 10, 10);

  doc.addPage();
  doc.text(page4, 10, 10);

  doc.addPage();
  doc.text(page5, 10, 10);

  doc.addPage();
  doc.text(page6, 10, 10);

  doc.addPage();
  doc.text(page7, 10, 10);

  //   doc.save();

  const sendPdf = async () => {
    const pdfForm = new FormData();
    pdfForm.append(`pdf-${details.name}-${details.phone}`, doc.output('blob'));

    await axios({
      method: 'POST',
      url: 'https://email-api-route.herokuapp.com/uploadPdf',
      headers: { filename: `pdf-${details.name}-${details.phone}` },

      data: pdfForm,
    });
  };

  await sendPdf();

  const returnFormData = async (id) => {
    const formData = new FormData();
    const image = document.getElementById(id).files[0];

    formData.append(`${details.name}-${details.phone}-${id}`, image);
    await axios({
      method: 'POST',
      url: 'https://email-api-route.herokuapp.com/uploadImage',
      headers: { filename: `${details.name}-${details.phone}-${id}` },

      data: formData,
    });
    if (image) {
      return image.type.split('/')[1];
    }
  };

  const sp = await returnFormData('SP');
  const esp1 = await returnFormData('ESP1');
  const esp2 = await returnFormData('ESP2');
  const esp3 = await returnFormData('ESP3');
  const esp4 = await returnFormData('ESP4');
  const esp5 = await returnFormData('ESP5');
  const asp1 = await returnFormData('ASP1');
  const asp2 = await returnFormData('ASP2');
  const asp3 = await returnFormData('ASP3');
  const asp4 = await returnFormData('ASP4');
  const asp5 = await returnFormData('ASP5');

  //   const api = 'https://email-api-route.herokuapp.com/sendmail'
  const api = 'https://email-api-route.herokuapp.com/sendmail';
  axios
    .post(api, {
      name: details.name,
      email: details.email,
      phone: details.phone,
      extensions: {
        sp,
        esp1,
        esp2,
        esp3,
        esp4,
        esp5,
        asp1,
        asp2,
        asp3,
        asp4,
        asp5,
      },
    })
    .then((res) => {
      processing.style.display = 'none';
      if (res.status == 200) {
        error.style.display = 'none';
        processing.style.display = 'none';
        success.style.display = 'block';
      } else if ((res.status = 500)) {
        processing.style.display = 'none';
        success.style.display = 'none';
        error.style.display = 'block';
      }
    });
};
