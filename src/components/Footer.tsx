import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30 mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left space-y-2">
          <h3 className="font-serif font-bold text-lg">Ali Sir Academy</h3>
          <p className="text-sm text-muted-foreground">
            Simplifying education. Pre-orders for "NCERT DECODER" begin shipping September 2026.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-medium">
          <Link href="/about-author" className="hover:text-primary transition">About Author</Link>
          <Link href="/about-book" className="hover:text-primary transition">The Book</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact Us</Link>
        </div>
        
        <div className="text-center md:text-right text-sm text-muted-foreground">
          <p>Mob: +91 8726608091</p>
          <p>Email: sabiralijlp5@gmail.com</p>
        </div>
      </div>
      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ali Sir Academy. All rights reserved.
      </div>
    </footer>
  );
}
