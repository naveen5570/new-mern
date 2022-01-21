import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Request extends Component {
  constructor() {
    super();
    this.state = {
      specialisation:'',
      repair_explanation:'',
      repair_immediately:'',
      address_1: '',
      address_2: '',
      country: '',
      state_or_province: '',
      city:'',
      zipcode:'',
      status: '',
      user_id:''
    };
  }



  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    //alert('clicked');
    e.preventDefault();

    const data = {
          specialisation: this.state.specialisation,
          repair_explanation: this.state.repair_explanation,
          repair_immediately: this.state.repair_immediately,
          address_1: this.state.address_1,
          address_2: this.state.address_2,
          country: this.state.country,
          state_or_province: this.state.state_or_province,
          city:this.state.city,
          zipcode: this.state.zipcode,
          status: this.state.status,
          user_id: this.state.user_id
      
    };
    //alert('clicked');
    axios
      .post('https://mern-nav.herokuapp.com/api/requests/place', data)
      .then(res => {
        this.setState({
          specialisation:'',
          repair_explanation:'',
          repair_immediately:'',
          address_1: '',
          address_2: '',
          country: '',
          state_or_province: '',
          city:'',
          zipcode:'',
          status: '',
          user_id:''
        });
        //alert(res.data.msg);
        window.location.href = "https://mern-nav.herokuapp.com/request-created"; 
      })
      .catch(err => {
        //alert(err.data.msg);
        console.log("Error in Creating request");
      })
  };



  render() {
    /* const books = this.state.books;
    console.log("PrintBook: " + books);
    let bookList;

    if(!books) {
      bookList = "there is no book record!";
    } else {
      bookList = books.map((book, k) =>
        <BookCard book={book} key={k} />
      );
    }
*/
    return (
<div>
      <div className="dashboard-top-header">
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          
        <Link to='/'><img src="./img/logo.jpg"/></Link>
        </div>
        <div className="col-md-7">
      
        </div>
        <div className="col-md-3">
          
        </div>
      </div>
      </div>
      </div>
	  <div className='container-fluid'>
      <div className='row'>
      
        <div className="col-md-2 dash_menu">
        <div className="left_menu">
        <ul><li><a>Dashboard </a></li>
            <li className='active_dash'><a>Create Request</a></li>
            <li><a>Pending Requests</a></li>
            <li><a>Active Requests</a></li>
            <li><a>Closed Requests</a></li>
            <li><a>Logout</a></li>
        </ul>
        </div>
        </div>
		<div className='col-md-10 menu-right'>
      <div className="dashboard-right">
        <h1>Create a Request</h1>

        <form noValidate onSubmit={this.onSubmit} className="request form" encType="multipart/form-data">
          <div className="card-box">
            <h4>Professional Information</h4>
            <div className="row form-group">

              <label className="form-label col-md-12">What Service do you Required?<span>*</span></label>

              <div className="form-check col-md-12 form-check-radio">
                <div className='check-box'>
                  <input type="radio" name="specialisation" className="form-check-input" value="Plumbing Services" /><label className="form-check-label" >Plumbing Services</label>
                </div>
              </div>
              <div className="form-check col-md-12 form-check-radio">
                <div className='check-box'>
                  <input type="radio" name="specialisation" className="form-check-input" value="Carpenter Services" /><label className="form-check-label" >Carpenter Services</label>
                </div>
              </div>

              <div className="form-check col-md-12 form-check-radio">
                <div className='check-box'>
                  <input type="radio" name="specialisation" className="form-check-input" value="Pest Control Services" /><label className="form-check-label" >Pest Control Services</label>
                </div>
              </div>
              <div className="form-check col-md-12 form-check-radio">
                <div className='check-box'>
                  <input type="radio" name="specialisation" className="form-check-input" value="Roofing Services" /><label className="form-check-label" >Roofing Services</label>
                </div>
              </div>
              <div className="form-check col-md-12 form-check-radio">
                <div className='check-box'>
                  <input type="radio" name="specialisation" className="form-check-input" value="AC Repair and Services" /><label className="form-check-label" >AC Repair and Services</label>
                </div>
              </div>
              <div className="form-check col-md-12 form-check-radio">
                <div className='check-box'>
                  <input type="radio" name="specialisation" className="form-check-input" value="Electrician Services" /><label className="form-check-label" >Electrician Services</label>
                </div>
              </div>
              <div className="form-check col-md-12 form-check-radio">
                <div className='check-box'>
                  <input type="radio" name="specialisation" className="form-check-input" value="Cleaning and Disinfection Services" /><label className="form-check-label" >Cleaning and Disinfection Services</label>
                </div>
              </div>
              <div className="form-check col-md-12 form-check-radio">
                <div className='check-box'>
                  <input type="radio" name="specialisation" className="form-check-input" value="Electrical Appliance Repair" /><label className="form-check-label" >Electrical Appliance Repair</label>
                </div>
              </div>

            </div>
            
            <div className="row">
              
              <div className="form-group col-md-12">
                <label className="form-label">Explain in Brief What You Needs To Be Repaired?<span>*</span></label>
                <textarea className="form-control" name="repair_explanation" placeholder="Type here" value={this.state.repair_explanation} onChange={this.onChange}></textarea>
              </div>
            </div>
            
            <div className="row form-group">

              <label className="form-label col-md-12">Do you Need the Repair Immediately?<span>*</span></label>

              <div className="form-check col-md-12 form-check-radio">
                <div className='check-box'>
                  <input type="radio" name="repair_immediately" className="form-check-input" /><label className="form-check-label" >Yes</label>
                </div>
                <div className='check-box'>
                  <input type="radio" name="repair_immediately" className="form-check-input" /><label className="form-check-label" >No</label>
                </div>
              </div>
              </div>
            
          </div>
          <div className="card-box">
            <h4>Address</h4>

            <div className="row">
              <div className="col-md-12 form-group">
                <label className="form-label">Address 1</label>
                <input className="form-control" type="text" name="address_1" placeholder="Type Address 1" value={this.state.address_1} onChange={this.onChange} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <label className="form-label">Address 2</label>
                <input className="form-control" type="text" name="address_2" placeholder="Type Address 2" value={this.state.address_2} onChange={this.onChange} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label className="form-label">Country<span>*</span></label>
                <select className="form-control" name="country"  >
                  <option value={this.state.country} onChange={this.onChangeCountry}>Canada</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label className="form-label">Province<span>*</span></label>
                <select className="form-control" name="state_or_province" value={this.state.state_or_province} onChange={this.onChange} >
                <option value="Alberta">Alberta</option>
	<option value="British Columbia">British Columbia</option>
	<option value="Manitoba">Manitoba</option>
	<option value="New Brunswick">New Brunswick</option>
	<option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
	<option value="Northwest Territories">Northwest Territories</option>
	<option value="Nova Scotia">Nova Scotia</option>
	<option value="Nunavut">Nunavut</option>
	<option value="Ontario">Ontario</option>
	<option value="Prince Edward Island">Prince Edward Island</option>
	<option value="Quebec">Quebec</option>
	<option value="Saskatchewan">Saskatchewan</option>
	<option value="Yukon">Yukon</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label className="form-label">City<span>*</span></label>
                <input className="form-control" type="text" name="city" placeholder="Type Here" value={this.state.city} onChange={this.onChange} />
              </div>
              <div className="col-md-6 form-group">
                <label className="form-label">Postal Code<span>*</span></label>
                <input className="form-control" type="text" name="zipcode" placeholder="Type Here" value={this.state.zipcode} onChange={this.onChange} />
              </div>
            </div>
            
            <input className="form-control" name="submit" value="Create Request" type="submit" className="button-nav" />
          </div>
          
          
        </form>

      </div>
</div>
</div>
</div>
</div>

      


    );
  }
}

export default Request;