interface FullBleedHeroProps {
  backgroundImage: string;
  children: React.ReactNode;
  className?: string;
  /** Set when the hero sits directly above the footer with no content
   * between them, so its height should also account for footer height.
   * Omit for a hero followed by more page content further down. */
  accountForFooter?: boolean;
}

/**
 * A full-bleed, background-image hero section sized to roughly fill the
 * viewport below the header (and above the footer, when it's the only
 * section on the page). Centralizes the header/footer height math that
 * used to be copy-pasted as HEADER_HEIGHT/FOOTER_HEIGHT constants into
 * every page that wanted this look.
 */
export default function FullBleedHero({
  backgroundImage,
  children,
  className = "",
  accountForFooter = false,
}: FullBleedHeroProps) {
  const minHeight = accountForFooter
    ? "calc(100vh - var(--header-height) - var(--footer-height))"
    : "calc(100vh - var(--header-height))";

  return (
    <div
      className={`bg-cover bg-center px-6 ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight,
      }}
    >
      {children}
    </div>
  );
}
