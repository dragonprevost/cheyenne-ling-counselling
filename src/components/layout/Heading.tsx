interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

interface H1Props extends HeadingProps {
  /** "default" for a full page title (hero/banner-width context). "compact"
   * for an H1 inside a narrower container like a card, where the default
   * scale would overflow. */
  size?: "default" | "compact";
}

/**
 * Shared type scale so every page's H1/H2/H3 is sized consistently instead
 * of each page picking its own arbitrary text-Nxl value. Pass `className`
 * only for layout concerns (text-center, mb-4, etc.) — not to override size.
 */

const H1_SIZES = {
  default: "text-4xl font-bold sm:text-5xl md:text-6xl",
  compact: "text-2xl font-bold sm:text-3xl md:text-4xl",
};

export const H1 = ({ children, className = "", size = "default" }: H1Props) => (
  <h1 className={`font-cooper ${H1_SIZES[size]} ${className}`}>{children}</h1>
);

export const H2 = ({ children, className = "" }: HeadingProps) => (
  <h2
    className={`font-cooper text-2xl font-light sm:text-3xl md:text-4xl ${className}`}
  >
    {children}
  </h2>
);

export const H3 = ({ children, className = "" }: HeadingProps) => (
  <h3 className={`text-xl font-semibold sm:text-2xl ${className}`}>
    {children}
  </h3>
);
