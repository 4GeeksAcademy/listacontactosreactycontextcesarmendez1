import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Editar = () => {
	const { store, actions } = useContext(Context);
    const {id}=useParams()
	const [data,setData]=useState({
		name:"",email:"",phone:"",address:""
	})
	const Save=(event)=>{
		event.preventDefault()
		actions.editcontact(data,id)
	}
	const Info=(event)=>{
		setData({
			...data,[event.target.name]:event.target.value
		})
	}

	return (
		<div className="container">
			<form className="row g-3">
				<div className="col-md-6">
					<label htmlFor="inputEmail4" className="form-label">Email</label>
					<input type="email" className="form-control" id="inputEmail4" onChange={Info} name="email" value={data.email}/>
				</div>
				<div className="col-md-6">
					<label htmlFor="inputPassword4" className="form-label">Name</label>
					<input type="text" className="form-control" id="inputPassword4" onChange={Info} name="name" value={data.name} />
				</div>
				<div className="col-12">
					<label htmlFor="inputAddress" className="form-label">Address</label>
					<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={Info} name="address" value={data.address} />
				</div>
				<div className="col-12">
					<label htmlFor="inputAddress2" className="form-label">Phone</label>
					<input type="text" className="form-control" id="inputAddress2" onChange={Info} name="phone" value={data.phone}/>
				</div>
			
				
				
			
				<div className="col-12">
					<button type="submit" className="btn btn-primary " onClick={Save}>Save</button>
				</div>
			</form>


























			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
