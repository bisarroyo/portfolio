import PropTypes from 'prop-types'
import React from 'react'

const Input = React.forwardRef((props, ref) => {
  const { label, type, placeholder, className } = props
  return (
    <div className='flex-column'>
      <label className='input-label'>{label}</label>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  )
})

export default Input

Input.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

Input.defaultProps = {
  className: 'input-text',
  label: 'Input',
  placeholder: 'Input',
  type: 'input'
}
