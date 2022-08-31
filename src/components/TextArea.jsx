const TextArea = (props) => {
  const { label, name, type, placeholder, value, onChange } = props
  return (
    <div className='flex-column'>
      <label className='input-label' htmlFor={name}>{label}</label>
      <textarea
        rows='3'
        className='input-text'
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default TextArea
