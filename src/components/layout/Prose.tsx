interface ProseProps {
  children: React.ReactNode;
  className?: string;
  /** Set false inside a column that's already narrower than the ~65ch
   * prose measure (e.g. a half-width card), so Prose doesn't add its own
   * conflicting max-width/centering on top of the parent's. */
  constrain?: boolean;
}

/**
 * Caps long-form text at a readable line length (~65ch) and sets a
 * comfortable body size/line-height. Use for blog post bodies and other
 * multi-paragraph copy — without this, text stretches to the full
 * container width and lines get too long to read comfortably.
 */
export default function Prose({
  children,
  className = "",
  constrain = true,
}: ProseProps) {
  // A fixed pixel-based measure rather than Tailwind's ch-based max-w-prose:
  // ch is resolved against the element's active font, and this site loads
  // custom webfonts (Souvenir/Cooper Black) asynchronously, so a ch-based
  // width would silently reflow (and could overflow) once those fonts load.
  const widthClasses = constrain ? "max-w-2xl mx-auto" : "";
  return (
    <div
      className={`${widthClasses} space-y-4 text-lg leading-relaxed ${className}`}
    >
      {children}
    </div>
  );
}
