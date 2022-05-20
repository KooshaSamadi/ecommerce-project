import "./formInput.styles.scss";

function FormInput({ label, ...otherInfo }) {
  return (
    <div className="form-field">
      {/* I moved input from under the label to here in order to let this combinator "~" works */}
      <input {...otherInfo} className="form-input" />
      {/* if there is no label then do not render this code */}
      {label && (
        <label
          htmlFor={otherInfo.id}
          className={`${
            otherInfo.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
