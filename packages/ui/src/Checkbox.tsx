export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = (): CheckboxProps => {
  return (
    <div>
      <label>Checkbox</label>
      <input type="checkbox" />
    </div>
  );
};

Checkbox.displayName = 'Checkbox';
