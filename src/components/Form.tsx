import React, { useEffect } from 'react'
import './Form.css'
import axios from 'axios'

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import { useAppSelector, useAppDispatch } from '../store/hooks';
import { changedNameValue, changedEmailValue, changedTelValue, updateDataDB } from '../store/ducks/forms/actions';

function Form() {
  const dispatch = useAppDispatch()
  const formData = useAppSelector(state => state.forms.dataDB)
  const inputData = useAppSelector(state => state.forms)

  useEffect(() => {
    axios.get('http://localhost:5000/api/users/').then((e) => {
      dispatch(updateDataDB(e.data))
    })

  }, [dispatch])

  const handleChangeName = (e: any) => {
    dispatch(changedNameValue(e.target.value))
  }

  const handleChangeEmail = (e: any) => {
    dispatch(changedEmailValue(e.target.value))
  }

  const handleChangeTel = (e: any) => {
    dispatch(changedTelValue(e.target.value))
  }

  const handleSubmitForm = (e: any) => {
    e.preventDefault()

    axios.post('http://localhost:5000/api/users/', {
      name: inputData.name,
      email: inputData.email,
      tel: inputData.tel
    }).then(() => {
      alert('Usuário cadastrado!')

      window.location.reload()
    }).catch((err) => {
      alert(err)
    })
  }

  const deleteUserForm = (id: any) => {
    axios.delete(`http://localhost:5000/api/users/${id}`).then(() => {
      alert('Usuário deletado!')

      window.location.reload()
    }).catch((err) => {
      alert(err)
    })
  }

  const updateUserForm = (id: any) => {
    axios.put(`http://localhost:5000/api/users/${id}`, {
      name: inputData.name,
      email: inputData.email,
      tel: inputData.tel
    }).then(() => {
      alert('Usuário alterado!')

      window.location.reload()
    }).catch((err) => {
      alert(err)
    })
  }

  return (
    <div className="form_container bg-white rounded shadow">
      <div className="row h-100 w-100 m-0 p-0">
        <div className="border-right col-6 p-0 bg-info">
          <Carousel className='h-100'>
            {formData.length !== 0 && formData.map((form, index) => {
              return <Carousel.Item key={index} className="h-100">
                <div className="d-flex flex-column justify-content-center aling-items-center h-100">
                  <div className="d-flex flex-column my-5">
                    <p className="text-white h2 text-center">{form.name}</p>

                    <p className="text-white h2 text-center">{form.email}</p>

                    <p className="text-white h2 text-center">{form.tel}</p>
                  </div>

                  <div className="d-flex justify-content-center">
                    <Button onClick={(e, id = form._id) => { deleteUserForm(id) }} className='btn-custom mx-2'>Deletar</Button>

                    <Button onClick={(e, id = form._id) => { updateUserForm(id)}} className='btn-custom mx-2'>Atualizar</Button>
                  </div>
                </div>
              </Carousel.Item>
            })}
          </Carousel>
        </div>

        <div className="col-6 p-0 d-flex flex-column justify-content-center align-items-center">

          <h2 className='h4'>Insira o Seu Contato!</h2>

          <form onSubmit={handleSubmitForm} className='d-flex flex-column w-75'>
            <div className="d-flex flex-column my-3">
              <label>Nome: *</label>
              <input onChange={handleChangeName} className='input-custom p-1 px-2' type="text" placeholder='Digite seu nome...' />
              <label>E-mail: *</label>
              <input onChange={handleChangeEmail} className='input-custom p-1 px-2' type="text" placeholder='Digite seu e-mail...' />
              <label>Telefone: *</label>
              <input onChange={handleChangeTel} className='input-custom p-1 px-2' type="text" placeholder='Digite seu telefone...' />
            </div>

            <Button className='my-3' variant="primary" type="submit"> Submit </Button>
          </form>

        </div>
      </div>
    </div>

  )
}

export default Form

