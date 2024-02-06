export interface CheckboxProps {
  label: string;
}

export const Checkbox = ({ label }: CheckboxProps) => {
  return (
    <div>
      <label>{label}</label>
      <input type="checkbox" aria-label="checkbox" />
    </div>
  );
};

Checkbox.displayName = 'Checkbox';
