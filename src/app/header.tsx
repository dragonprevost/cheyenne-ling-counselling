"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // You can use another icon if you prefer

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-backgroundDark font-cooper">
      <div className="px-6 mx-auto flex items-center justify-between py-4 ">
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
            <Link href="/">
              Cheyenne Ling
              <br />
              Counselling
            </Link>
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
  const bookingLayout = vertical
    ? "bg-primary text-surface"
    : "bg-foreground text-primary ";
  return (
    <>
      <Link href="/about" className={`${baseClass} ${layout}`}>
        About
      </Link>
      <Link href="/focus" className={`${baseClass} ${layout}`}>
        Areas of focus
      </Link>
      <Link href="/services" className={`${baseClass} ${layout}`}>
        Services
      </Link>
      <Link href="/faqs" className={`${baseClass} ${layout}`}>
        FAQs
      </Link>
      <Link href="/contact" className={`${baseClass} ${layout}`}>
        Contact
      </Link>
      <Link href="/blog" className={`${baseClass} ${layout}`}>
        Blog
      </Link>
      <Link
        href="/book"
        className={`inline-block px-4 py-2 rounded-md text-primary transition-colors ${layout} ${bookingLayout}`}
      >
        Book now
      </Link>
    </>
  );
};

export default Header;
