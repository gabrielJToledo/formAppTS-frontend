import React, { Component } from 'react'
import './Form.css'
import Button from 'react-bootstrap/Button';

import Carousel from 'react-bootstrap/Carousel';

class Form extends Component {

  

  render() {

    return (
      <div className="form_container bg-white rounded shadow">
        <div className="row h-100 w-100 m-0 p-0">
          <div className="border-right col-6 p-0">
            <Carousel>
              <Carousel.Item>
                ola
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="col-6 p-0 d-flex flex-column justify-content-center align-items-center">

            <h2 className='h4'>Insira o Seu Contato!</h2>

            <form className='d-flex flex-column w-75'>
              <div className="d-flex flex-column my-3">
                <label>Nome: *</label>
                <input className='input-custom p-1 px-2' type="text" placeholder='Digite seu nome...' />
                <label>E-mail: *</label>
                <input className='input-custom p-1 px-2' type="text" placeholder='Digite seu e-mail...' />
                <label>Telefone: *</label>
                <input className='input-custom p-1 px-2' type="text" placeholder='Digite seu telefone...' />
              </div>

              <Button className='my-3' variant="primary" type="submit"> Submit </Button>
            </form>

          </div>
        </div>
      </div>
    )
  }
}

export default Form