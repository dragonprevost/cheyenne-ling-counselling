"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // You can use another icon if you prefer

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-backgroundDark font-cooper">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          {/*
          <a href="/">
            <Image
              className="dark:invert"
              src={logoImg}
              alt="Company Logo"
              width={40}
              height={40}
            />
          </a>
          */}
          <span className="text-xl font-semibold text-primary">
            <a href="/">
              Cheyenne Ling
              <br />
              Counselling
            </a>
          </span>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-primary"
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

  return (
    <>
      <a href="/about" className={`${baseClass} ${layout}`}>
        About
      </a>
      <a href="/contact" className={`${baseClass} ${layout}`}>
        Contact
      </a>
      <a href="/focus" className={`${baseClass} ${layout}`}>
        Areas of focus
      </a>
      <a href="/services" className={`${baseClass} ${layout}`}>
        Services
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
