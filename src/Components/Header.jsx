import React from 'react'

//component
import TextArea from './TextArea/TextArea'
import Skills from './Skills';

function Header() {
return (
  <div style={{ backgroundColor: "lightgrey" }}>
    <h2 style={{ textAlign: "center", paddingTop: "20px" }}>
      Career Dashboard
    </h2>
    <div className="row" style={{ marginTop: "30px" }}>
      <div
        className="col-6"
        style={{ marginLeft: "65px", marginRight: "40px" }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          aria-label="Title"
        />
      </div>
      <div className="col-4">
        <select className="form-select" aria-label="Default select example">
          <option selected>Employment Type (Option Choose)</option>
          <option value="1">Full-time</option>
          <option value="2">Part-time</option>
          <option value="3">Contract</option>
          <option value="4">Temporary</option>
          <option value="5">Volunteer</option>
          <option value="6">Internship</option>
        </select>
      </div>
    </div>
    <div className="row" style={{ marginTop: "20px" }}>
      <div className="col-1" style={{ marginLeft: "65px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Location"
          aria-label="Location"
        />
      </div>
      <div className="col-3">
        <select className="form-select" aria-label="Default select example">
          <option selected>Job Section (Option Choose)</option>
          <option value="1">Business Systems</option>
          <option value="2">Design</option>
          <option value="3">Engineering</option>
          <option value="4">Finance</option>
          <option value="5">Human Resources</option>
          <option value="6">Legal</option>
          <option value="7">Marketing</option>
          <option value="8">Operations</option>
          <option value="9">Product</option>
          <option value="10">Sales</option>
          <option value="11">Security</option>
          <option value="12">Support</option>
        </select>
      </div>
      <div className="col-3 ">
        <select className="form-select" aria-label="Default select example">
          <option selected>Workplace Type (Option Choose)</option>
          <option value="1" id="one">
            On-site
          </option>
          <option value="2" id="two">
            Hybrid
          </option>
          <option value="3" id="three">
            Remote
          </option>
        </select>
      </div>
      <div className="col-3">
        <select className="form-select" aria-label="Default select example">
          <option selected>Paid/ Gratis (Option Choose)</option>
          <option value="1">Paid</option>
          <option value="2">Gratis</option>
        </select>
      </div>
      <div className="col-10">
        <textarea
          className="form-control form-control-lg"
          type="text"
          placeholder="Short Description  (150 Words)"
          aria-label=".form-control-lg example"
          style={{ marginTop: "55px", marginLeft: "65px" }}
        ></textarea>
      </div>
    </div>
    <div
      className="JobDescription"
      style={{ marginTop: "50px", marginLeft: "65px", paddingRight:"130px" }}
    >
      <h4 className="add">Add a job description</h4>
      <h5 style={{ marginTop: "20px" }}>Description *</h5>
      <TextArea />
    </div>
    <div style={{ marginTop: "20px", marginLeft: "65px" }}>
      <h4>Add skills</h4>
      <p>
        Add skill keywords to make your job more visible to the right candidates
        (Select up to 10)
      </p>
      <Skills />
    </div>
    <div
      className="d-grid d-md-flex justify-content-md-end"
      style={{ marginTop: "50px", padding: "0 250px 25px 150px" }}
    >
      <button className="btn btn-light btn-lg" type="button">
        Submit
      </button>
    </div>
  </div>
);
}

export default Header