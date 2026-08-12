export default function GoldButton({
  children,
  href = "#",
  variant = "filled", // "filled" | "outline-on-gold" (white bg used on gold sections)
  className = "",
}) {
  const base =
    "inline-block font-heading-alt tracking-wide text-sm sm:text-base px-8 py-3 transition-colors duration-200 uppercase";

  const styles = {
    filled: "bg-gold-600 text-cream-50 hover:bg-gold-700",
    inverted: "bg-cream-50 text-gold-700 hover:bg-cream-100",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </a>
  );
}
