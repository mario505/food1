export default function Button({ children, textOnly, className, ...props }) {
  let ccsClasses = textOnly ? "text-button" : "button";
  ccsClasses += " " + className;
  return (
    <button className={ccsClasses} {...props}>
      {children}
    </button>
  );
}
