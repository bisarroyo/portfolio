const Button = (props) => {
  const { text, type, disabled, onClick, className } = props
  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
export default Button
