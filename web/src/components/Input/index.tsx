import { Container, InputStyled } from './style';

interface InputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: Function;
}

export function Input({ label, name, type, value, onChange }: InputProps) {
  return (
    <Container>
      <label>{label}</label>
      <InputStyled
        required
        name={name}
        type={type}
        value={value}
        onChange={ev => {
          onChange((previousState: any) => ({...previousState, [name]: ev.target.value}))
        }}
      />
    </Container>
  );
}
