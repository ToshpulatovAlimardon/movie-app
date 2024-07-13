const Button = ({variant, children}) => {
  return (
    <button className={"btn btn-" + variant}>{children}</button>
  );
};

export default Button;
