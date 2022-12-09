import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'

// import containers
import Loader from '../components/Loader'

// import components
import Button from '../components/Button'
import Input from '../components/Input'
import TextArea from '../components/TextArea'

const Contact = () => {
  const form = useRef()
  // const refInputOne = React.createRef()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const [contactData, setContactData] = useState({
    button: 'Let´s go!',
    error: null,
    loading: false
  })
  const { loading, button, error } = contactData

  const sendEmail = (e) => {
    setContactData({
      ...contactData,
      loading: true
    })
    emailjs.sendForm('service_5qlkffn', 'template_4do2mlk', form.current, 'user_6jm6KpxJVyCrP322EtqhO')
      .then((result) => {
        setContactData({
          button: 'Message Sent!',
          loading: false
        })
      }, (err) => {
        setContactData({
          ...contactData,
          error: 'Message not sent, please try again'
        })
        console.log(err)
      })
  }
  return (
    <>
      <div className='contact-container flex-column'>
        <h2>Talk about projects!</h2>
        <form className='flex-column' ref={form} onSubmit={handleSubmit(sendEmail)}>
          <Input
            className='input-text'
            type='text'
            label='Name'
            placeholder='Name'
            // ref={refInputOne}
            {...register('fullName', { required: true })}
          />
          {errors.fullName && <span>Name is required</span>}
          <Input
            className='input-text'
            type='email'
            label='E-mail'
            placeholder='you@mail.com'
            {...register('email', { required: true })}
          />
          {errors.email && <span>Email is required</span>}
          <TextArea
            className='input-text'
            label='Message'
            type='text'
            placeholder='Please write your message'
            {...register('message', { required: true })}
          />
          {errors.message && <span>Message is required</span>}
          <div className='flex-column'>
            <Button
              className='btn-secondary'
              text={loading ? <Loader /> : button}
            />
          </div>
        </form>
        <div>
          <p>{error}</p>
        </div>
      </div>
    </>
  )
}

export default Contact
