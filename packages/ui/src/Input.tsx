export interface InputProps {
  label: string;
}

export const Input = ({ label }: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input />
      <p>error:</p>
    </div>
  );
};

Input.displayName = 'Input';
