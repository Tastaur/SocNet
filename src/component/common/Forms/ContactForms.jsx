import React from 'react'
import {Field} from 'redux-form'
import {Input} from './FormsControl'


const ContactForm = ({contact, minLength, service,maxLength}) => {
  return  <div>
    <span>{service}</span>
    <Field component={Input}
           validate={[minLength, maxLength]}
           name={`contacts.${contact}`}
           placeholder= {`Enter your ${service}`}
           type={'text'}

    />
  </div>
}

export default ContactForm
