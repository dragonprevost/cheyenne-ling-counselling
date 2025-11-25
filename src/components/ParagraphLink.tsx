import React from "react";

interface ParagraphLinkProps {
  href: string;
  children: React.ReactNode;
}

const ParagraphLink = ({ href, children }: ParagraphLinkProps) => {
  return (
    <a href={href} className="underline">
      {children}
    </a>
  );
};

export default ParagraphLink;
