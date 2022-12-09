import PropTypes from 'prop-types'

const Button = (props) => {
  const { disabled, className, text, onClick } = props
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  )
}
export default Button

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}
