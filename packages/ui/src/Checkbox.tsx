type CheckboxProps = {
  label?: string;
};

export const Checkbox = ({ label = '' }): CheckboxProps => {
  return (
    <div>
      <label>{label}</label>
      <input type="checkbox" />
    </div>
  );
};

Checkbox.displayName = 'Checkbox';
