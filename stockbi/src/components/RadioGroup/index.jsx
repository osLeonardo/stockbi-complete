import * as Styled from './styled'; 

export const RadioGroup = ({ options, selectedOption, onChange, name, text }) => {
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <Styled.Container>
      <label htmlFor={name} >{text}:</label>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name="radioGroup"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          <Styled.RadioText checked={selectedOption === option.value}>
            {option.label}
          </Styled.RadioText>
        </label>
      ))}
    </Styled.Container>
  );
};
