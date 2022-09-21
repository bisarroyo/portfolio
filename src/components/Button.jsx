const Button = (props) => {
  const { text, type, disabled, onClick, className } = props
  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  )
}
export default Button
