export type CheckboxProps = {
  label?: string;
  value: string;
};

export const Checkbox = ({ label = '', value }): CheckboxProps => {
  return (
    <div>
      <label>{label}</label>
      <input type="checkbox" value={value} />
    </div>
  );
};

Checkbox.displayName = 'Checkbox';
