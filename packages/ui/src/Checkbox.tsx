export interface CheckboxProps {
  label: string;
}

export const Checkbox = ({ label }: CheckboxProps) => {
  return (
    <div>
      <label>{label}</label>
      <input type="checkbox" aria-label="checkbox" />
      <p>test</p>
    </div>
  );
};

Checkbox.displayName = 'Checkbox';
