import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "./jobview.module.css";


const JobView = ({ title, jobDescription, department, responsibilities, education, employement, softskills, technicalskills, benefits, location, experience, vacancies, gender, travelling, closingdate }) => {
  // const [Jobview, setjobview] = useState("");
  // const [jobdescription, setJobdescription] = useState("");
  // const [department, setDepartment] = useState(""); // for single drop down
  // const [degrees, setDegrees] = useState([]);
  // const [employmentCategories, setEmploymentCategories] = useState([]);
  // const [genders, setGenders] = useState(""); // for single drop down
  // const [location, setLocation] = useState(""); // for single drop down
  // const [softskills, setSoftskills] = useState([]);
  // const [technicalskills, setTechnicalskills] = useState([]);
  // const [experienceLevel, setExperienceLevel] = useState(""); // for single drop down
  // const [perksAndBenefits, setPerksAndBenefits] = useState([]);
  // const [travelling, setTravelling] = useState(""); // for single drop down
  // const [vacancies, setVacancies] = useState("");
  // const [closingDate, setClosingDate] = useState(null);
  // const [selectedResponsibilites, setSelectedResponsibilities] = useState([]);

  // const experienceLevelOptions = [
  //   "1",
  //   "2",
  //   "3",
  //   "4",
  //   "5",
  //   "6",
  //   "7",
  //   "8",
  //   "9",
  //   "10",
  //   "11",
  //   "12",
  //   "13",
  //   "14",
  //   "15",
  //   "16",
  //   "17",
  //   "18",
  //   "19",
  //   "20",
  //   "21",
  //   "22",
  //   "23",
  //   "24",
  //   "25",
  // ];
  // const genderOptions = ["MALE", "FEMALE", "BOTH_MALE_FEMALE", "ALL"];
  // const travellingOptions = ["YES", "NO", "MAYBE "];

  // let responsibilityOptions = [
  //   "Contribute in all phases of the development lifecycle",
  //   "Write well designed, testable, efficient code",
  //   "Ensure designs are in compliance with specifications",
  // ];

  // let departmentOptions = ["CLOUD_NATIVE_ENGINEERING", "DATA_ENGINEERING"];

  // let degreeOptions = ["B.E - CIS", "BSCS"];

  // let employmentCategoriesOptions = [
  //   "PART_TIME",
  //   "FULL_TIME",
  //   "CONTRACT_BASE",
  //   "ONLINE",
  //   "ONSITE",
  // ];

  // let softSkillsOptions = ["JAVA", "JUNIT", "SQL", "REACT"];

  // let technicalskillsOptions = ["technical Skill A", "technical Skill B"];

  // let benefitsAndPerksOptions = ["benefit A", "benefit B", "benefit C"];

  // let locationOptions = ["karachi", "lahore", "islamabad"];

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (
  //     !degrees.length ||
  //     !employmentCategories.length ||
  //     !softskills.length ||
  //     !technicalskills.length ||
  //     !selectedResponsibilites.length ||
  //     !perksAndBenefits.length ||
  //     !experienceLevel.length
  //   ) {
  //     // alert("Please fill out all the required fields");
  //     // swal({
  //     //   title:"Please fill out all the required fields",
  //     //   icon:"error"
  //     // })

  return <div className={styled.jobview}>
    {" "}
    <div className={styled.herosec}>
      <h1 className={styled.heading}>Job View</h1>
      <section className={styled.icon}>
      <i class="fa-regular fa-pen-to-square"></i>
      <span>Edit</span></section>
    </div>
    <div className={styled.title}>
      <h2 className={styled.heading1}>Title:</h2>

      <p className={styled.paragrap1}>
        {title}
      </p>
    </div>
    <section className={styled.line}></section>
    <div className={styled.jobdescription}>
      <h2 className={styled.heading2}>Job Description:</h2>
      <p className={styled.paragrap2}>
        {jobDescription}
      </p>
    </div>
    <section className={styled.line}></section>
    <div className={styled.department}>
      <h2 className={styled.heading3}>Department:</h2>

      <p className={styled.paragrap3}>
        {department}
      </p>
    </div>
    <section className={styled.line}></section>
    <div className={styled.responsibilities1}>
      <div className={styled.responsibilities}>
        <h2 className={styled.heading4}>Responsibilities:</h2>

        {/* <p className={styled.paragrap4}>
          
        </p> */}
      </div>
      <ul className={styled.responsibilitieslist}>
        {/* <li>Contribute in all phases of the development lifecycle</li>
        <li>Write well designed, testable, efficient code</li>
        <li>Ensure designs are in compliance with specifications</li> */}
        {responsibilities}
      </ul>
    </div>
    <section className={styled.line}></section>
    <div className={styled.degrees1}>
      <div className={styled.degrees}>
        <h2 className={styled.heading5}>Degrees/Education:</h2>

        {/* <p className={styled.paragrap5}>
          
        </p> */}
      </div>
      <ul className={styled.degreelist}>
        {education}
      </ul>
    </div>
    <section className={styled.line}></section>
    <div className={styled.employement1}>
      <div className={styled.employement}>
        <h2 className={styled.heading6}>Employement:</h2>

        {/* <p className={styled.paragrap6}>
          
        </p> */}
      </div>
      <ul className={styled.employmentlist}>
        {employement}
      </ul>
    </div>
    <section className={styled.line}></section>
    <div className={styled.softskills1}>
      <div className={styled.softskills}>
        <h2 className={styled.heading7}>Soft Skills:</h2>

        {/* <p className={styled.paragrap7}>
        </p>
       */}
      </div>
      <ul className={styled.softskillslist}>
        {softskills}
      </ul>
    </div>
    <section className={styled.line}></section>
    <div className={styled.technicalskills1}>
      <div className={styled.technicalskills}>
        <h2 className={styled.heading8}>Technical Skills:</h2>

        {/* <p className={styled.paragrap8}>
         
        </p> */}
      </div>
      <ul className={styled.technicallist}>
        {technicalskills}
      </ul>
    </div>
    <section className={styled.line}></section>
    <div className={styled.perksandbenefits1}>
      <div className={styled.perksandbenefits}>
        <h2 className={styled.heading9}>Benefits</h2>

        {/* <p className={styled.paragrap9}>
         
        </p> */}
      </div>
      <ul className={styled.perksandbenefitslist}>
        {benefits}
      </ul>
    </div>
    <section className={styled.line}></section>
    <div className={styled.location}>
      <h2 className={styled.heading10}>Location:</h2>

      <p className={styled.paragrap10}>
        {location}
      </p>
    </div>
    <section className={styled.line}></section>
    <div className={styled.experience}>
      <h2 className={styled.heading11}>Experience:</h2>

      <p className={styled.paragrap11}>
        {experience}
      </p>
    </div>
    <section className={styled.line}></section>
    <div className={styled.vacancies}>
      <h2 className={styled.heading12}>Vacancies:</h2>

      <p className={styled.paragrap12}>
        {vacancies}
      </p>
    </div>
    <section className={styled.line}></section>
    <div className={styled.gender1}>
      <div className={styled.gender}>
        <h2 className={styled.heading13}>Gender:</h2>

        <p className={styled.paragrap13}>
          {gender}
        </p>

      </div>
      {/* <ul className={styled.genderlist}>
        
      </ul> */}
    </div>
    <section className={styled.line}></section>
    <div className={styled.travelling1}>
      <div className={styled.travelling}>
        <h2 className={styled.heading14}>Travel Required:</h2>

        <p className={styled.paragrap14}>
          {travelling}
        </p>
      </div>
      <ul className={styled.travellinglist}>

      </ul>
    </div>
    <section className={styled.line}></section>
    <div className={styled.closingdate}>
      <h2 className={styled.heading15}>Closing Date:</h2>

      <p className={styled.paragrap15}>
        {closingdate}
      </p>

    </div>
  </div>

}

export default JobView;
