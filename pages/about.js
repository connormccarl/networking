import React from 'react'
import Image from 'next/image'

export default function about() {
  return (
    <main className='container py-4'>
        <div className="row pb-4">
            <div className="col-md-7">
              <h2 className="about-heading fw-normal lh-1">Joe Mcknight <span className="text-body-secondary">Co-Founder</span></h2>
              <p className="lead">Desc. goes here.</p>
            </div>
            <div className="col-md-5">
                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 order-md-2">
              <h2 className="about-heading fw-normal lh-1">Connor McCarl <span className="text-body-secondary">Co-Founder</span></h2>
              <p className="lead">Connor S. McCarl, a specialist in multifamily real estate investments, brings a wealth of experience to the real estate industry. Before venturing into real estate, Connor established himself as a seasoned entrepreneur, successfully founding and exiting a software development and IT outsourcing company, a digital marketing firm, and a telecommunications company.</p>
            </div>
            <div className="col-md-5 order-md-1">
                <Image 
                    src="/ConnorMcCarl.png"
                    width={500}
                    height={500}
                    alt="Picture of Connor McCarl"
                    className='featurette-image img-fluid mx-auto'
                />
            </div>
          </div>
    </main>
  )
}
