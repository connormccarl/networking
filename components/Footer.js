import React from 'react'

export default function Footer() {
    const showModal = (e) => {
        const { Modal } = require("bootstrap")
        const myModal = new Modal("#pageModal")

        if(e.target.innerHTML === "Code of Conduct"){
            const modalTitle = document.getElementById("pageModalLabel")
            const modalDesc = document.getElementById("pageModalBody")

            // set title and body
            modalTitle.innerHTML = "Code of Conduct"

            modalDesc.innerHTML = "<p>The goal of [NETWORKING GROUP] is to provide an environment for like-minded people to develop professional relationships and explore business opportunities.  [NETWORKING GROUP]’S objective is to be a positive catalyst for each member in business networking, sales performance, and professional capabilities.</p><p>This Code is designed to inspire and guide the ethical conduct of all [NETWORKING GROUP] members. Additionally, the Code serves as a basis for remediation for violations. The Code includes principles formulated as statements of responsibility, based on the understanding that member comfort, success, and satisfaction is the primary consideration of all actions.</p>"

            modalDesc.innerHTML += "<h3>1. GENERAL ETHICAL PRINCIPLES</h3>"
            modalDesc.innerHTML += "<h4>1.1 All members must act ethically</h4>"
            modalDesc.innerHTML += "<p>This principle, which concerns the quality of member interaction, affirms an obligation of [NETWORKING GROUP] members, both individually and collectively, to use their experience and connections for the benefit of all members. Member interaction must display the highest principles of honesty, courtesy, fair practice, and professional decorum. Members will attend meetings to conduct business relevant to their professions and exemplify high professional behavior standards in their fields of work. [NETWORKING GROUP] members should consider whether the results of their efforts will respect diversity and provide a safe social environment.</p>"

            modalDesc.innerHTML += "<h4>1.2 Avoid harm</h4>"
            modalDesc.innerHTML += "<p>In this document, “harm” means negative consequences, especially when those consequences are significant and unjust. Examples of harm include unjustified physical or mental injury, unjustified destruction or disclosure of information, and unjustified damage to reputation and the environment.</p>"

            modalDesc.innerHTML += "<h4>1.3 Be honest and trustworthy</h4>"
            modalDesc.innerHTML += "<p>[NETWORKING GROUP] members should be honest about their product or service offerings, qualifications, and any limitations in their competence to complete a task. [NETWORKING GROUP] members should be forthright about any circumstances that might lead to either real or perceived conflicts of interest with other members. Furthermore, all commitments should be honored or adjusted to assure mutual member satisfaction.</p>"

            modalDesc.innerHTML += "<h4>1.4 Be fair and act not to discriminate</h4>"
            modalDesc.innerHTML += "<p>The values of equality, tolerance, respect for fellow [NETWORKING GROUP] members, and justice govern this principle. [NETWORKING GROUP] members should foster fair participation of all, including those of underrepresented groups. Prejudicial discrimination based on age, color, disability, ethnicity, family status, gender identity, labor union membership, military or veteran status, nationality, race, religion or belief, sex, sexual orientation, political affiliation or any other inappropriate factor is an explicit violation of the Code.</p>"

            modalDesc.innerHTML += "<h4>1.5 Respect the work required to produce a connection and new ideas</h4>"
            modalDesc.innerHTML += "<p>Members will treat all information concerning the business affairs of other members as strictly confidential. Developing new ideas, inventions, creative works, and computing artifacts create value, and those who expend this effort should expect to gain any value attributable to their work. [NETWORKING GROUP] members should therefore credit the creators of ideas, inventions, work, and artifacts and respect copyrights, patents, trade secrets, license agreements, and other methods of protecting authors’ works. [NETWORKING GROUP] members should not claim private ownership of work that they or others have shared as public resources.</p>"

            modalDesc.innerHTML += "<h4>1.6 Respect privacy</h4>"
            modalDesc.innerHTML += "<p>The responsibility of respecting privacy applies to [NETWORKING GROUP] members in a particularly profound way. Technology enables the collection, monitoring, and exchange of personal information quickly and often without the knowledge of the people affected.  [NETWORKING GROUP] members should only use personal information for legitimate ends and without violating the rights of other members. As an organization, [NETWORKING GROUP], through its member directory, has transparent policies that allow all individuals to understand what data is being collected and how it is being used, to give informed consent for automatic data collection, and to review, obtain, correct inaccuracies in, and delete their personal data.</p>"

            modalDesc.innerHTML += "<h4>1.7 Honor confidentiality</h4>"
            modalDesc.innerHTML += "<p>[NETWORKING GROUP] members are often entrusted with confidential information such as trade secrets, client data, nonpublic business strategies, financial information, research data, pre-publication scholarly articles, and patent applications. [NETWORKING GROUP] members should protect confidentiality except in cases where there is evidence of the violation of law, organizational regulations, or the Code. In these cases, the nature or contents of that information should not be disclosed except to appropriate authorities, or executive management in the case of a Code violation. A [NETWORKING GROUP] member should consider thoughtfully whether such disclosures are consistent with this Code."

            modalDesc.innerHTML += "<h3>2. PROFESSIONAL PRINCIPLES</h3>"
            modalDesc.innerHTML += "<h4>2.1 Maintain high standards of professional</h4>"
            modalDesc.innerHTML += "<p>High-quality member interaction depends on individuals who take responsibility for their professional competence. At [NETWORKING GROUP], we believe professional competence starts with business and technical acumen and requires communication skills, reflective analysis, and recognizing and navigating ethical challenges. Peer [NETWORKING GROUP] members’ success, as defined by stated expectations and goals—including customers, colleagues, and others affected directly or indirectly—should always be the central focus in member interaction, conduct, and ethical practice.</p>"

            modalDesc.innerHTML += "<h4>2.2 Manage resources to enhance the quality of working life</h4>"
            modalDesc.innerHTML += "<p>Members should ensure that they enhance, not degrade, the quality of working life for their peer members. Consideration for all member interaction should include the personal and professional expected outcomes, development, accessibility requirements, physical safety, and psychological well-being.</p>"

            modalDesc.innerHTML += "<h4>2.3 Create opportunities for all members</h4>"
            modalDesc.innerHTML += "<p>Broadly defined, opportunities are essential for all [NETWORKING GROUP] members. The leadership of [NETWORKING GROUP] is committed to ensuring that opportunities are available to [NETWORKING GROUP] members to help them improve their knowledge and skills, networking connections, and overall business performance. [NETWORKING GROUP] members should be aware of oversimplified approaches, the improbability of anticipating every possible condition, and the inevitability of unproductive referrals/connections. There is a balance in setting expectations that result in a positive experience and the actual time and effort to meet commitments. [NETWORKING GROUP] may provide training in networking, communication, and time management to ensure each member is provided with an opportunity to expand their business success.</p>"

            modalDesc.innerHTML += "<h4>2.4 Uphold, promote, and respect the principles of the Code</h4>"
            modalDesc.innerHTML += "<p>The future of [NETWORKING GROUP] depends on professional and ethical excellence. [NETWORKING GROUP] members should adhere to the principles of the Code and contribute to improving them. [NETWORKING GROUP] members who recognize breaches of the Code should take actions to resolve the ethical issues they identify, including, when reasonable, expressing their concern to the person(s) thought to be violating the Code.</p>"

            modalDesc.innerHTML += "<h4>2.5 Treat violations of the Code as inconsistent with membership privilege</h4>"
            modalDesc.innerHTML += "<p>Each [NETWORKING GROUP] member should encourage and support adherence to this Code of Ethics and Professional Conduct.  [NETWORKING GROUP] members who recognize a breach of the Code should consider reporting the violation to the [NETWORKING GROUP] Franchise owner, which may take action that may include, but are not limited to, suspending or terminating membership privileges or access.</p>"
        }

        myModal.show()
    }

  return (
    <>
        <footer className="container">
            <hr className="featurette-divider" />
            <p className="float-end"><a href="#">Back to top</a></p>
            <p>&copy; { new Date().getFullYear() } Networking Group &middot; <button type="button" className="btn btn-link p-0 align-baseline" onClick={showModal}>Code of Conduct</button></p>
        </footer>
        <div className="modal fade" id="pageModal" tabIndex="-1" aria-labelledby="pageModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="pageModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body" id="pageModalBody">
                    ...
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}
