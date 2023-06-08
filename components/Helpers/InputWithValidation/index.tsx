import ErrorMessage from "../ErrorMessage";

const InputWithValidation = ({
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
      <input
        placeholder={label}
        className="border-[2px] w-[30%] pl-[1rem]"
        type={inputType}
        onChange={(e) => handleChange(e, inputName)}
        onBlur={() => validateInput && validateInput()}
      />
      <ErrorMessage message={validationMessage[inputName]} />
    </>
  );
};

export default InputWithValidation;
