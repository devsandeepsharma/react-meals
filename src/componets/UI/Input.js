import './Input.css';

const Input = (props, ref) => {
  return (
    <div className="input">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;