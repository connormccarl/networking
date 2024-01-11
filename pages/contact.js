import React from 'react'
import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    const [fields, setFields] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [showMessage, setShowMessage] = useState({
        display: false,
        message: "",
        success: "Message successfully sent!",
        error: "Error sending message."
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFields((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(fields)

        // add formData
        const formData = new FormData()
        formData.append("name", fields.name)
        formData.append("email", fields.email)
        formData.append("subject", fields.subject)
        formData.append("message", fields.message)

        // call api
        await fetch('api/contact', {
            method: 'POST',
            body: formData
        })
        .then (() => {
            //reset page
            setFields({
                name: "",
                email: "",
                subject: "",
                message: ""
            })
            setShowMessage({
                ...showMessage,
                display: true,
                message: "success"
            })
        })
        .catch((e) => {
            setShowMessage({
                ...showMessage,
                display: true,
                message: "error"
            })
        })


    }

  return (
    <main className="container mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
        <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
            a matter of hours to help you.</p>
        <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <label htmlFor="name" className="">Your name</label>
                                <input type="text" id="name" value={fields.name} onChange={handleChange} name="name" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <label htmlFor="email" className="">Your email</label>
                                <input type="text" id="email" value={fields.email} onChange={handleChange} name="email" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-12">
                            <div className="md-form mb-0">
                                <label htmlFor="subject" className="">Subject</label>
                                <input type="text" id="subject" value={fields.subject} onChange={handleChange} name="subject" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-12">

                            <div className="md-form">
                                <label htmlFor="message">Your message</label>
                                <textarea type="text" id="message" value={fields.message} onChange={handleChange} name="message" rows="2" className="form-control md-textarea"></textarea>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="text-center text-md-left">
                    <a className="btn btn-primary mt-2" onClick={handleSubmit}>Send</a>
                </div>
                <div className="status"></div>
            </div>
            <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                    <li><FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
                        <p>Newport Beach, CA 92660, USA</p>
                    </li>

                    <li><FontAwesomeIcon icon={faPhone} size="2x" />
                        <p>+ 01 234 567 89</p>
                    </li>

                    <li><FontAwesomeIcon icon={faEnvelope} size="2x" />
                        <p>contact@example.com</p>
                    </li>
                </ul>
            </div>
        </div>
        {showMessage.display && (
            <div className={`alert ${showMessage.message == "success" ? "alert-success" : "alert-danger"} mt-3`} role="alert">
                {showMessage.message == "success"
                    ? showMessage.success    
                    : showMessage.error
                }
            </div>
        )}
    </main>
  )
}
