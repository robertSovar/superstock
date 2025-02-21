type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

const Button = (props: Props) => {
  return <button {...props} className=" bg-customGreen p-[8px] rounded-md" />;
};

export default Button;
