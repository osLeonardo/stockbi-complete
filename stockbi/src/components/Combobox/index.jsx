import * as Styled from './styled';

export const Combobox = ({ options, name, text, onChange, selectedOption }) => {
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <Styled.Container>
      <label htmlFor={name} >{text}:</label>
      <select onChange={handleOptionChange} value={selectedOption}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </Styled.Container>
  )
}