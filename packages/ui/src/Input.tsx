export interface InputProps {
  label: string;
}

export const Input = ({ label }: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input />
    </div>
  );
};

Input.displayName = 'Input';
