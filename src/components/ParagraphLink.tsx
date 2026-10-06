import React from "react";

interface ParagraphLinkProps {
  href: string;
  children: React.ReactNode;
}

const ParagraphLink = ({ href, children }: ParagraphLinkProps) => {
  const isExternal = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className="underline"
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
};

export default ParagraphLink;
