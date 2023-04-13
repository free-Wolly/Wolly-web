const SingleInput = ({
  label,
  formData,
  setFormData,
  validateInput,
  validationMessage,
  inputName,
  inputType,
}: any) => {
  const handleChange = (e: React.ChangeEvent<any>, field: string) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <>
      <label>{label}</label>
      <input
        type={inputType}
        onChange={(e) => handleChange(e, inputName)}
        onBlur={() => validateInput()}
      />
      <div className="text-red-900 font-bold">
        {validationMessage[inputName]}
      </div>
    </>
  );
};

export default SingleInput;
