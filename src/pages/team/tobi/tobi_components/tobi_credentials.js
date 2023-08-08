import React from 'react'

const TobiCredentials = () => (
    <div>
		
    <details className="content-block__accordion" >
          <summary className="content-block__accordion-title headline">Credentials</summary>								
          <div className="content-block__accordion-description">
              <ul>
                <li>LL.M., American Law, Boston University (2014)</li>
                <li>LL.M, Criminal Law, Universidad de Buenos Aires (2009)</li>
                <li>LL.B., Universidad Iberoamericana, <em>Summa Cum Laude</em> (2005)</li>
             </ul>
            </div>
    </details>
<details className="content-block__accordion">
  <summary className="content-block__accordion-title headline">Bar Admissions</summary>								
  <div className="content-block__accordion-description">
    <ul>
        <li>Commonwealth of Massachusetts (2015)</li>
            <li>Dominican Republic (2006)</li>
    </ul>
    </div>
</details>
<details className="content-block__accordion">
    <summary className="content-block__accordion-title headline">Professional Affiliations</summary>								
    <div className="content-block__accordion-description">
        <ul>
            <li>Massachusetts Association of Criminal Defense Lawyers</li>
                <li>Massachusetts Association of Hispanic Attorneys</li>
                    <li>Massachusetts Bar Association</li>
                        <li>Women’s Bar Association</li>
        </ul>
    </div>
    </details>
  </div>
)

export default TobiCredentials