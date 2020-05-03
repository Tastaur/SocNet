import React from 'react'
import classes from './FormsControl.module.css'


const Element = Element => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
      <div className={ classes.formControl + " " + (hasError ? classes.error : "") }>
        <Element {...input} {...props} />
        <div>
          { hasError && <span> { meta.error } </span> }
        </div>
      </div>
  );
};
export const Textarea = Element('textarea')

export const Input = Element('input')


