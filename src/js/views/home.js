
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext"
export const Home = () => {
  const { store, actions } = useContext(Context)
  useEffect(() => {
    actions.loadSomeData()
  }, [])
  console.log(store.contacts)
  return (
    <div className="text-center mt-5">
      <h1>Agenda Cesar</h1>
      {store.contacts.map((item, index) => (
        <div key={index} className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="data:image/png;base64,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" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"><i className="fa-solid fa-envelope"></i> {item.email}</p>
                <p className="card-text"><i className="fa-solid fa-location-dot"></i> {item.address}</p>
                <p className="card-text"><i className="fa-solid fa-phone"></i> {item.phone}</p>
                <Link to={`/editar/${item.id}`}>
                <button type="button" class="btn btn-primary btn-lg" ><i className="fa-solid fa-pen-to-square"></i></button>
                </Link>
                <button type="button" class="btn btn-secondary btn-lg" onClick={()=>actions.deleteContact(item.id)}><i className="fa-solid fa-trash"></i></button>
                
                
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>)

};
