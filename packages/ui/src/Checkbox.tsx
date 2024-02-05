export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = (): CheckboxProps => {
  return <input type="checkbox" />;
};

Checkbox.displayName = 'Checkbox';
