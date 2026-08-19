export default function GoldButton({
  children,
  href = "#",
  variant = "filled",
  className = "",
}) {
  const base =
    "inline-block font-inter tracking-wide text-sm sm:text-5xl px-8 py-3 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 rounded-lg shadow-md hover:shadow-lg";

  const styles = {
    filled: "bg-[#A77631] text-white hover:bg-gold-700",
    inverted: "bg-cream-50 text-gold-700 hover:bg-cream-100",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </a>
  );
}
