import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

import styles from '@/styles/Events.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUser,
  faLongArrowAltRight
} from "@fortawesome/free-solid-svg-icons";

export default function Events() {
    const [lock, setLock] = useState(false)
    const [password, setPassword] = useState("")

    const handleChange = (e) => {
        setPassword(e.target.value)
    }

    const unlockScreen = (e) => {
        e.preventDefault()
        
        if(password === "password"){
            setLock(false)
        }
    }

  return (
    <>
    {lock ? (
    <main>
        <div className='row justify-content-center'>
            <div className='col-md-6'>
                <div className='card border-0'>
                    <div className='card-body'>
                        <h3 className='py-3'>Private</h3>
                        <h6>You need to be invited to see the events.</h6>
                        <p className='text-muted mb-4'>Reach out to use via our contact page if you want to join this networking group.</p>

                        <form>
                            <div className='form-group pb-2'>
                                <label htmlFor='lockPassword'>Enter Password to See</label>
                                <input type="password" value={password} onChange={handleChange} className='form-control' id='lockPassword' />
                            </div>
                            <button type="submit" className='btn btn-primary' onClick={unlockScreen}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
    ) : (
    <main className='container py-4'>
        <div className="row align-items-center shadow py-2">
            <div className="col-lg-5 col-sm-12">
                <div className="position-relative">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="450" height="280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 450x280" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">450x280</text></svg>
                    <div className={styles.eventsDate}>
                        <div className={styles.eventDateDay}>17</div>
                        <div className={styles.eventDateMonth}>Jan</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 col-sm-12">
                <div className="p-2 p-sm-1 px-md-3 px-3">
                    <h5 className="fw-bold">Poker Tournament</h5>
                    <ul className="my-2">
                        <li className='d-inline me-3'><FontAwesomeIcon icon={faClock} /> 06:00 PM - 09:00 PM</li>
                        <li className='d-inline'><FontAwesomeIcon icon={faUser} /> Location: <a target="_blank" href="https://www.google.com/maps?saddr=My+Location&daddr=Muldoon%27s+Irish+Pub,+202+Newport+Center+Dr,+Newport+Beach,+CA+92660">Muldoon&apos;s Irish Pub</a></li>
                    </ul>
                    <p>Come have an exciting night of Poker and Networking.</p>
                    <button className="btn btn-link text-decoration-none" href="#">RSVP <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                </div>
            </div>
        </div>
    </main>
    )
    }
    </>
  )
}
