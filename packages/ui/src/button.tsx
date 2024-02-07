export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

export function Button({
  children,
  type = 'button',
  ...other
}: ButtonProps): JSX.Element {
  return (
    <button type={type} {...other}>
      {children}
      dwadwadawdaw
    </button>
  );
}

Button.displayName = 'Button';
