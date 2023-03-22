import React from 'react'

function Pans() {
  return (
    <div className='row main'>
      <div className='col-6'>
        <img src="/img/bg.png" class="img-fluid" width='100%' alt="" />
      </div>
      <div className='col-6 right-sidebar'>
        <div className='heading-container'>
          <h1>Create account</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipuscaip elit.</h2>
        </div>

        <form className='form'>
          <div className='form-group'>
            <label className='form-label'>Full name</label>
            <input className='form-control' placeholder='Paul Elliott' />
          </div>
          <div className='form-group'>
            <label className='form-label'>Email address</label>
            <input className='form-control' placeholder='pauo.elliott@fakemail.com' />
          </div>
          <div className='form-group'>
            <label className='form-label'>Phone Number</label>
            <input className='form-control' placeholder='219 - 666 - 0114' />
          </div>
          <div className='form-group'>
            <label className='form-label'>Country</label>
            <select className='form-select'>
              <option>United States of America</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Cameroon</option>
              <option>Cameroon</option>
              <option>Nigeria</option>
            </select>
          </div>
          <div className='form-group'>
            <label className='form-label'>Password</label>
            <input className='form-control' type='password' placeholder='*******' />
          </div>
          <div className='row action-buttons'>
            <div className='col-6 pl-0'><button className='btn btn-block w-100 btn-outline-primary'>Sign in</button></div>
            <div className='col-6 pr-0'><button className='btn btn-block w-100 btn-primary'>Create an Account</button></div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Pans