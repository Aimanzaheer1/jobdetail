import './jobview.css';

const JobView = () => {

  const [Jobview, setjobview] = useState("");
  const [jobdescription, setJobdescription] = useState("");
  const [department, setDepartment] = useState(""); // for single drop down
  const [degrees, setDegrees] = useState([]);
  const [employmentCategories, setEmploymentCategories] = useState([]);
  const [genders, setGenders] = useState(""); // for single drop down
  const [location, setLocation] = useState(""); // for single drop down
  const [softskills, setSoftskills] = useState([]);
  const [technicalskills, setTechnicalskills] = useState([]);
  const [experienceLevel, setExperienceLevel] = useState(""); // for single drop down
  const [perksAndBenefits, setPerksAndBenefits] = useState([]);
  const [travelling, setTravelling] = useState(""); // for single drop down
  const [vacancies, setVacancies] = useState("");
  const [closingDate, setClosingDate] = useState(null);
  const [selectedResponsibilites, setSelectedResponsibilities] = useState([]);

  const experienceLevelOptions = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
  ];
  const genderOptions = ["MALE", "FEMALE", "BOTH_MALE_FEMALE", "ALL"];
  const travellingOptions = ["YES", "NO", "MAYBE "];

  let responsibilityOptions = [
    "Contribute in all phases of the development lifecycle",
    "Write well designed, testable, efficient code",
    "Ensure designs are in compliance with specifications",
  ];

  let departmentOptions = ["CLOUD_NATIVE_ENGINEERING", "DATA_ENGINEERING"];

  let degreeOptions = ["B.E - CIS", "BSCS"];

  let employmentCategoriesOptions = [
    "PART_TIME",
    "FULL_TIME",
    "CONTRACT_BASE",
    "ONLINE",
    "ONSITE",
  ];

  let softSkillsOptions = ["JAVA", "JUNIT", "SQL", "REACT"];

  let technicalskillsOptions = ["technical Skill A", "technical Skill B"];

  let benefitsAndPerksOptions = ["benefit A", "benefit B", "benefit C"];

  let locationOptions = ["karachi", "lahore", "islamabad"];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !degrees.length ||
      !employmentCategories.length ||
      !softskills.length ||
      !technicalskills.length ||
      !selectedResponsibilites.length ||
      !perksAndBenefits.length ||
      !experienceLevel.length
    ) {
      // alert("Please fill out all the required fields");
      swal({
        title:"Please fill out all the required fields",
        icon:"error"
      })


    return (
   
      <div className={styled.jobview}>
        
        {" "}
        
        <h1 className={styled.heading}>Job View</h1>
        
        <div className={styled.title}>
     <h2 className={styled.heading1}>Title</h2>
     <span>:</span>
     <p className={styled.paragrap1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
<div className={styled.jobdescription}>
     <h2 className={styled.heading2}>Job Description</h2>
     <span>:</span>
     <p className={styled.paragrap2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
<div className={styled.department}>
     <h2 className={styled.heading3}>Department</h2>
     <span>:</span>
     <p className={styled.paragrap3}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
<div className={styled.responsibilities}>
     <h2 className={styled.heading4}>Responsibilities</h2>
     <span>:</span>
 <p className={styled.paragrap4}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
   <ul className={styled.responsibilitieslist}>
      <li>
      Contribute in all phases of the development lifecycle
      </li>
      <li>
      Write well designed, testable, efficient code
      </li>
      <li>
      Ensure designs are in compliance with specifications
      </li>
    </ul>
    <div className={styled.degrees}>
     <h2 className={styled.heading5}>Degrees/Education</h2>
     <span>:</span>
 <p className={styled.paragrap5}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
<ul className={styled.degreelist}>
      <li>
      Contribute in all phases of the development lifecycle
      </li>
      <li>
      Write well designed, testable, efficient code
      </li>
      <li>
      Ensure designs are in compliance with specifications
      </li>
    </ul>
<div className={styled.employement}>
     <h2 className={styled.heading6}>Employement</h2>
     <span>:</span>
 <p className={styled.paragrap6}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
<ul className={styled.employmentlist}>
      <li>
      Contribute in all phases of the development lifecycle
      </li>
      <li>
      Write well designed, testable, efficient code
      </li>
      <li>
      Ensure designs are in compliance with specifications
      </li>
    </ul>
    <div className={styled.softskills}>
     <h2 className={styled.heading7}>Soft Skills</h2>
     <span>:</span>
 <p className={styled.paragrap7}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
<ul className={styled.softskillslist}>
      <li>
      Contribute in all phases of the development lifecycle
      </li>
      <li>
      Write well designed, testable, efficient code
      </li>
      <li>
      Ensure designs are in compliance with specifications
      </li>
    </ul>
    <div className={styled.technicalskills}>
     <h2 className={styled.heading8}>TechnicalSkills</h2>
     <span>:</span>
 <p className={styled.paragrap8}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
<ul className={styled.technicallist}>
      <li>
      Contribute in all phases of the development lifecycle
      </li>
      <li>
      Write well designed, testable, efficient code
      </li>
      <li>
      Ensure designs are in compliance with specifications
      </li>
    </ul>
    <div className={styled.perksandbenefits}>
     <h2 className={styled.heading9}>Perks and benefits</h2>
     <span>:</span>
 <p className={styled.paragrap9}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
<ul className={styled.perksandbenefitslist}>
      <li>
      Contribute in all phases of the development lifecycle
      </li>
      <li>
      Write well designed, testable, efficient code
      </li>
      <li>
      Ensure designs are in compliance with specifications
      </li>
    </ul>
    <div className={styled.location}>
     <h2 className={styled.heading10}>Location</h2>
     <span>:</span>
 <p className={styled.paragrap10}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
<div className={styled.experience}>
     <h2 className={styled.heading11}>Experience</h2>
     <span>:</span>
 <p className={styled.paragrap11}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
<div className={styled.vacancies}>
     <h2 className={styled.heading12}>No#Vacancies</h2>
     <span>:</span>
 <p className={styled.paragrap12}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
<div className={styled.gender}>
     <h2 className={styled.heading13}>Gender</h2>
     <span>:</span>
 <p className={styled.paragrap13}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
<ul className={styled.genderlist}>
      <li>
      Contribute in all phases of the development lifecycle
      </li>
      <li>
      Write well designed, testable, efficient code
      </li>
      <li>
      Ensure designs are in compliance with specifications
      </li>
    </ul>
    <div className={styled.travelling}>
     <h2 className={styled.heading14}>Require Travelling</h2>
     <span>:</span>
 <p className={styled.paragrap14}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
<ul className={styled.travellinglist}>
      <li>
      Contribute in all phases of the development lifecycle
      </li>
      <li>
      Write well designed, testable, efficient code
      </li>
      <li>
      Ensure designs are in compliance with specifications
      </li>
    </ul>
    <div className={styled.closingdate}>
     <h2 className={styled.heading15}>Closing Date</h2>
     <span>:</span>
 <p className={styled.paragrap15}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
<div className={styled.button}>
            <button className={styled.button}>
            Update
          </button>
          </div>
      </div>
    );
    };
  };
    
  };
    
    export default JobView;
