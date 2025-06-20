"use client";
import { useState } from "react";
// import Image from "next/image";
import { Menu, X } from "lucide-react"; // You can use another icon if you prefer
// import logoImg from "../../public/logo-tree.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-backgroundDark font-cooper">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="ml-3 text-xl font-semibold text-primary">
            Cheyenne Ling
            <br />
            Counselling
          </span>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-secondary hover:text-secondaryDark"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <NavLinks />
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-background">
          <NavLinks vertical />
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ vertical = false }: { vertical?: boolean }) => {
  const baseClass = "text-primary hover:text-primaryDark";
  const layout = vertical ? "block" : "";
  if (true) {
    return <></>;
  }
  return (
    <>
      <a href="/about" className={`${baseClass} ${layout}`}>
        About
      </a>
      <a href="/contact" className={`${baseClass} ${layout}`}>
        Contact
      </a>
      <a href="/faqs" className={`${baseClass} ${layout}`}>
        FAQs
      </a>
      <a href="/focus" className={`${baseClass} ${layout}`}>
        Areas of focus
      </a>
      <a href="/offerings" className={`${baseClass} ${layout}`}>
        Offerings
      </a>
      <a
        href="/book"
        className={`inline-block px-4 py-2 rounded-md text-primary bg-foreground transition-colors ${layout}`}
      >
        Book now
      </a>
    </>
  );
};

export default Header;
