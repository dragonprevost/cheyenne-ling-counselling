import React from "react";

interface ParagraphLinkProps {
  href: string;
  children: React.ReactNode;
}

const ParagraphLink = ({ href, children }: ParagraphLinkProps) => {
  return (
    <a href={href} className="underline" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ParagraphLink;
