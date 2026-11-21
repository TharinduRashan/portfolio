import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { footer, personal } = portfolioData;

  return (
    <footer className="footer container">
      <Link className="wordmark" href="/">
        {footer.wordmark}
        <span>.</span>
      </Link>
      <span>{footer.tagline}</span>
      <span>© {new Date().getFullYear()} {personal.name}</span>
      <a href="#home" className="back-top">
        {footer.backToTopLabel}
      </a>
    </footer>
  );
}
