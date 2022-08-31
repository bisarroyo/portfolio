import { useState } from 'react'

// import components
import Input from '../components/Input'
import Button from '../components/Button'
import TextArea from '../components/TextArea'

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
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
        <form className='flex-column'>
          <Input label='Name' name='name' type='text' placeholder='Name' value={contactData.name} onChange={handleChange} />
          <Input label='Email' name='email' type='email' placeholder='you@mail.com' value={contactData.email} onChange={handleChange} />
          <TextArea label='Message' name='message' type='text' placeholder='Please write your message' value={contactData.message} onChange={handleChange} />
          <div className='flex-column'>
            <Button className='btn-secondary' text='Send!' onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact
