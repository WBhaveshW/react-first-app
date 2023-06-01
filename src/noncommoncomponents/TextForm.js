import React, {useState} from 'react'
import PropTypes from 'prop-types';

function capitalizeWords(arr) {
  return arr.map((word) => {
    // console.log(word);
    const capitalizedFirst = word.charAt(0).toUpperCase();
    const rest = word.slice(1).toLowerCase();
    return capitalizedFirst + rest;
  }).join(' ');
}

function TextForm(props) {
  const uNameOnChange = (event) => {
    let user_name = event.target.value;
    user_name = user_name.toUpperCase();
    setUserName(user_name);
  }
  const uAddressOnChange = (event) => {
    let user_address = event.target.value;
    user_address = user_address.toUpperCase();
    setUserAddress(user_address);
  }
  const [user_name, setUserName] = useState("");
  const [user_address, setUserAddress] = useState("");

  const clearUserForm = (event) => {
    setUserAddress("");
    setUserName("");
  }

  const userFormAllCaptilize = ()=>{
    let user_name_arr = user_name.split(" ");
    setUserName(capitalizeWords(user_name_arr));
    let user_address_arr = user_address.split(" ");
    setUserAddress(capitalizeWords(user_address_arr));
  }
  return (
    <>
      <div className="mb-3">
      <label htmlFor="user_name" className="form-label">{props.user_name_lable}</label>
      <input type="email" className="form-control" value={user_name} onChange={uNameOnChange} id="user_name" placeholder="name@example.com"/>
    </div>
    <div className="mb-3">
      <label htmlFor="user_address" className="form-label">{props.user_address_lable}</label>
      <textarea className="form-control" id="user_address" value={user_address} onChange={uAddressOnChange} rows="3"></textarea>
    </div>
    <div className="mb-3">
    <button type="button" className="btn btn-outline-secondary" onClick={userFormAllCaptilize}>Capitilize</button>&nbsp;
    <button type="button" className="btn btn-outline-dark" onClick={clearUserForm}>Clear</button>
    </div>
    <div className="mb-3">
    <label htmlFor="preview" className="form-label">Preview :</label>
    <p id="preview">
      User Name: {user_name}<br/>
      User Address: {user_address}<br/>
      </p>
    </div>
    </>
  );
}


TextForm.propTypes = {
  user_name_lable:PropTypes.string.isRequired,
  user_address_lable:PropTypes.string.isRequired,
}

TextForm.defaultProps = {
  user_name_lable: 'Enter User Name',
  user_address_lable : 'Enter User Address'
};

export default TextForm;

