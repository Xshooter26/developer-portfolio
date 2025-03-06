import { cn } from "../../lib/utils"; // Adjust path if needed

export const Button = ({ children, className, variant, ...props }) => {
  const baseStyles =
    "px-4 py-2 rounded-lg text-sm font-medium transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
