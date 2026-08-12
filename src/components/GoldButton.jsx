export default function GoldButton({
  children,
  href = "#",
  variant = "filled", // "filled" | "outline-on-gold" (white bg used on gold sections)
  className = "",
}) {
  const base =
    "inline-block font-inter tracking-wide text-sm sm:text-5xl px-8 py-3 transition-colors duration-200 rounded-lg";

  const styles = {
    filled: "bg-[#AE7D38] text-white hover:bg-gold-700",
    inverted: "bg-cream-50 text-gold-700 hover:bg-cream-100",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </a>
  );
}
