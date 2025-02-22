type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

const Button = ({ className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`bg-customGreen p-[8px] rounded-md ${className}`}
    />
  );
};

export default Button;
