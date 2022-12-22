import React, { useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'

// import containers
import Loader from '../components/Loader'

// import components
import Button from '../components/Button'

const schema = yup.object().shape({
  fullName: yup.string().required('Please write your name').min(2, 'Write almost 2 words'),
  email: yup.string().email('Please write a valid email').required('Please write an email'),
  message: yup.string().required('Please write a message')
})

const Contact = () => {
  const form = useRef()
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

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
        reset({
          fullName: '',
          email: '',
          message: ''
        })
      }, (err) => {
        setContactData({
          ...contactData,
          error: 'Message not sent, please try again'
        })
        console.log(err)
      })
  }
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <>
      <div
        className='contact-container flex-column'
        ref={ref}
        style={{
          transform: isInView ? 'none' : 'translateY(50px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
        }}
      >
        <h2>Talk about projects!</h2>
        <form className='flex-column' ref={form} onSubmit={handleSubmit(sendEmail)}>
          <div className='input-container'>
            <input
              className={`input-text ${errors.fullName && 'error'}`}
              type='text'
              placeholder='Name'
              {...register('fullName', { required: true })}
            />
            <div className='error-message'><p>{errors.fullName?.message}</p></div>
          </div>
          <div className='input-container'>
            <input
              className={`input-text ${errors.email && 'error'}`}
              type='text'
              placeholder='you@mail.com'
              {...register('email', { required: true })}
            />
            <div className='error-message'><p>{errors.email?.message}</p></div>
          </div>
          <div className='input-container'>
            <textarea
              className={`input-text ${errors.message && 'error'}`}
              rows='3'
              type='text'
              placeholder='Please write your message'
              {...register('message', { required: true })}
            />
            <div className='error-message'><p>{errors.message?.message}</p></div>
          </div>
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
