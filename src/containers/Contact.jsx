import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Loader from '../components/Loader'

// import components
import Input from '../components/Input'
import Button from '../components/Button'
import TextArea from '../components/TextArea'

const Contact = () => {
  const form = useRef()

  const [contactData, setContactData] = useState({
    fullName: '',
    email: '',
    message: '',
    button: 'Send!',
    error: null,
    loading: false
  })
  const { loading, button, error } = contactData

  const sendEmail = (e) => {
    e.preventDefault()
    setContactData({
      ...contactData,
      loading: true
    })
    emailjs.sendForm('service_5qlkffn', 'template_4do2mlk', form.current, 'user_6jm6KpxJVyCrP322EtqhO')
      .then((result) => {
        setContactData({
          fullName: '',
          email: '',
          message: '',
          button: 'Message Sent!',
          loading: false
        })
      }, () => {
        setContactData({
          ...contactData,
          error: 'Message not sent, please try again'
        })
      })
  }
  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
      <div className='contact-container flex-column'>
        <h2>Talk about projects!</h2>
        <form className='flex-column' ref={form}>
          <Input label='Name' name='fullName' type='text' placeholder='Name' value={contactData.fullName} onChange={handleChange} />
          <Input label='Email' name='email' type='email' placeholder='you@mail.com' value={contactData.email} onChange={handleChange} />
          <TextArea label='Message' name='message' type='text' placeholder='Please write your message' value={contactData.message} onChange={handleChange} />
          <div className='flex-column'>
            <Button className='btn-secondary' text={loading ? <Loader /> : button} onClick={sendEmail} />
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
