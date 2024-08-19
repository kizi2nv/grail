// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Roll from "react-reveal/Roll"
import './form.scss'
import { Link } from 'gatsby'


function ContactForm() {
  const [state, handleSubmit] = useForm("xzbyydew");
  if (state.succeeded) {
      return( 
        <section>
 <p>Thank !</p>
        
        <Link className="navbar-item" to="/">
       Back to homepage
     </Link>

        </section>
       

      )
  }
  return (
    <div className="contact-form">
      <Roll left>
      <div className="contact__form-title headline__left-border h2 ">
        Request Your Consultation
      </div>
      </Roll>
       <div className="gravity-form-home"> 
        <div className="gf_browser_chrome gform_wrapper gform_legacy_markup_wrapper" id="gform_wrapper_1" >
          <div id="gf_1" className="gform_anchor" tabIndex="-1"> </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data"  id="gform_1" >

              <div className="gform_body gform-body">
                <ul id="gform_fields_1" className="gform_fields top_label form_sublabel_below description_below">
                <li id="field_1_5" className="gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"> 

                    <div className="ginput_complex ginput_container no_prefix has_first_name no_middle_name has_last_name no_suffix gf_name_has_2 ginput_container_name" id="input_1_5">
                      <span id="input_1_5_3_container" className="name_first">
                        <input 
                          type="text" 
                          name="first" 
                          id="input_1_5_3"  
                          aria-label="First name" 
                          aria-required="true"/>

                        <ValidationError 
                           prefix="First Name" 
                           field="first"
                           errors={state.errors}
                        />
                    <label htmlFor="first">First Name: <span></span></label>
                  </span>                
                <span id="input_1_5_6_container" className="name_last">
                     <input 
                      type="text" 
                      name="last" 
                      id="input_1_5_6"   
                      aria-label="Last name" 
                      aria-required="true"/>
                     <ValidationError 
                      prefix="Last name" 
                      field="last"
                      errors={state.errors}
                     />                         
                <label htmlFor="last">Last Name: <span></span> </label>
              </span>                  
            </div>
          </li>
          <li id="field_1_2" className="gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">
            <label className="gfield_label" htmlFor="phone">Phone Number: <span></span></label>
              <div className="ginput_container ginput_container_phone">
                <input 
                  name="phone" 
                  id="phone" 
                  type="tel"   
                  className="medium" 
                  aria-required="true" 
                  aria-invalid="false"/>

                <ValidationError 
                  prefix="Phone Number" 
                  field="phone"
                  errors={state.errors}
                />
              </div>
            </li>
        
             <li id="field_1_3" className="gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">
               <label className="gfield_label" htmlFor="email">Email Address: <span></span></label>
                  <div className="ginput_container ginput_container_email">
                    <input 
                    name="email" 
                    id="email" 
                    type="email" 
                    className="medium" 
                    aria-required="true" 
                    aria-invalid="false"/>

                      <ValidationError 
                          prefix="Email" 
                          field="email"
                          errors={state.errors}
                       />          
                    </div>
                   </li>
                     

                   <li id="field_1_4" className="gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">
                      <label className="gfield_label" htmlFor="message"> How can we help you? <span></span></label>                
                        <div className="ginput_container ginput_container_textarea">
                            <textarea 
                              name="message"  
                              id="message"
                              className="textarea medium" 
                              aria-required="true" 
                              aria-invalid="false" 
                              rows="10" cols="15"/>

                            <ValidationError 
                              prefix="Message" 
                              field="message"
                              errors={state.errors}
                            />
                    </div>
                  </li>

                </ul>
                <div className="butn">
                  <button type="submit"  className="btn btn--form d-block" id="gform_submit_button_1">
                       Let's Talk
                  </button>
                </div>
               </div>
               <div className="gform_footer top_label">  
            <input type="hidden" name="gform_ajax" value="form_id=1&amp;title=&amp;description=&amp;tabindex=0"/>
            <input type="hidden" className="gform_hidden" name="is_submit_1" value="1"/>
            <input type="hidden" className="gform_hidden" name="gform_submit" value="1"/>
            
            <input type="hidden" className="gform_hidden" name="gform_unique_id" value=""/>
            <input type="hidden" className="gform_hidden" name="state_1" value="WyJbXSIsImY1YTIyN2YzNjRlNmI3YjdkOTgzZDUzZjRiYjNhNzJlIl0="/>
            <input type="hidden" className="gform_hidden" name="gform_target_page_number_1" id="gform_target_page_number_1" value="0"/>
            <input type="hidden" className="gform_hidden" name="gform_source_page_number_1" id="gform_source_page_number_1" value="1"/>
            <input type="hidden" name="gform_field_values" value=""/>
            
        </div>
             </form>
          </div>
        </div> 
    </div>
  );
}

 
 
export default ContactForm;







