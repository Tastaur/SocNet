import React from 'react'
import classes from './ProfileForm.module.css'
import {Input, Textarea} from '../../common/Forms/FormsControl'
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, minLengthCreator} from '../../../utils/validators/validator'
import ContactForm from '../../common/Forms/ContactForms'

const maxLength50 = maxLengthCreator(50)
const maxLength80 = maxLengthCreator(80)
const minLength2 = minLengthCreator(2)


const ProfileForm = ({handleSubmit,profile}) => {
  return (<form className={classes.editForm} onSubmit={handleSubmit}>
    {/*About me*/}
    <div> <b>About me:</b>
      <Field component={Textarea}
             validate={[minLength2,maxLength80]}
             name={'aboutMe'}
             placeholder="About me"
             type={'text'}
      />
    </div>
    {/*lookingForAJob*/}
    <div>
      <span>Need job :</span>
      <Field component={Input} name={'lookingForAJob'} type={'checkbox'}/>
    </div>


    {/*lookingForAJobDescription*/}
    <div> <span>My skills:</span>
      <Field component={Textarea}
             validate={[minLength2,maxLength80]}
             name={'lookingForAJobDescription'}
             placeholder="My skills"
             type={'text'}
      />
    </div>
    <div> <span>My Name:</span>
      <Field component={Input}
             validate={[minLength2,maxLength80]}
             name={'fullName'}
             placeholder="My name"
             type={'text'}

      />
    </div>

    <div>
      <b> Edit contact data</b>
      {Object.keys(profile.contacts).map(key => <ContactForm service={key} contact={key} minLength={minLength2}  maxLength={maxLength50} />)}
    </div>


    <button>Save Change
    </button>
  </form>)
}


const ProfileFormRedux = reduxForm({
  form: 'profileDataStatus',
})(ProfileForm)

export default ProfileFormRedux

