import type { ComponentProps } from "react";

type Color = "primary" | "secondary";
type Variant = "contained" | "outlined";
type Size = "lg" | "md" | "sm";
interface Props extends ComponentProps<"button"> {
  color?: Color;
  variant?: Variant;
  size?: Size;
}
const Button = (props: Props) => {
  const {
    color = "primary",
    variant = "contained",
    size = "md",
    className = "",
    children,
    ...rest
  } = props;

  const classes: Record<Color, Record<Variant, string>> = {
    primary: {
      contained:
        "border border-primary bg-primary text-primary-foreground hover:border hover:border-primary hover:bg-transparent hover:text-primary",
      outlined:
        "border border-primary bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground",
    },
    secondary: {
      contained:
        "border border-secondary bg-secondary text-secondary-foreground hover:border hover:bg-transparent hover:border-secondary hover:text-secondary",
      outlined:
        "border border-secondary bg-secondary-foreground text-secondary hover:bg-secondary hover:text-secondary-foreground",
    },
  };

  const sizes: Record<Size, string> = {
    lg: "",
    sm: "",
    md: "",
  };

  return (
    <button
      {...rest}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0  px-4 py-1 rounded-3xl font-[700] transition-shadow w-fit hover:shadow-lg flex flex-row items-center gap-x-1 cursor-pointer ${classes[color][variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
