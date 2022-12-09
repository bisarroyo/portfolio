import React from 'react'
import PropTypes from 'prop-types'

const TextArea = React.forwardRef((props, ref) => {
  const { rows, className, label, type, placeholder } = props
  return (
    <div className='flex-column'>
      <label className='input-label'>{label}</label>
      <textarea
        rows={rows}
        className={className}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
})

export default TextArea

TextArea.propTypes = {
  rows: PropTypes.string,
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

TextArea.defaultProps = {
  row: '3',
  className: 'input-text',
  label: 'Input',
  placeholder: 'Input',
  type: 'text'
}
