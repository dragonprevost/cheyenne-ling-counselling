interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Tailwind max-w-* class. Kept as its own prop (rather than folded into
   * className) so callers can't accidentally stack two conflicting max-w
   * classes, which Tailwind doesn't resolve predictably by source order. */
  maxWidth?: string;
}

/**
 * The standard page shell: consistent max-width and padding so pages don't
 * each pick their own container/padding combination (container mx-auto p-6
 * vs. px-4 sm:px-8 md:px-16 lg:px-20 py-8, etc.).
 */
export default function PageContainer({
  children,
  className = "",
  maxWidth = "max-w-5xl",
}: PageContainerProps) {
  return (
    <div className={`container mx-auto ${maxWidth} px-6 py-12 ${className}`}>
      {children}
    </div>
  );
}
