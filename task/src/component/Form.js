import React from 'react'
import './Form.css'

export const Form=(props)=>{
  const keys = Object.keys(props.empData)
  const {empData:data}=props
  return(
    <div>
    <h1 className="heading1">Form</h1>
    <div className="form-container">
      <form className="form-color" onSubmit={event=>props.submit(event)}>
        {keys.map(name=>{
          return(
            <div>
              <input className="form-input" type="text" placeholder={name} name={name} defaultValue={data[name]}
              onChange={e=>props.changeHandler(e)}
              required />
            </div>
          )
        })}
        <button className="submit-btn" type="submit" value="submit">Submit</button>
      </form>
      </div>
      </div>
  )
}