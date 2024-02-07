export interface CheckboxProps {
  label: string;
}

export const Checkbox = ({ label }: CheckboxProps) => {
  return (
    <div>
      <p>hdahdawhdahd</p>
      <label>{label}</label>
      <input type="checkbox" aria-label="checkbox" />
      <p>test</p>dwad
      <p>check</p>dwadwa
    </div>
  );
};

Checkbox.displayName = 'Checkbox';
