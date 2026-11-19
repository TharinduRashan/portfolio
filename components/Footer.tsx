import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { footer, personal } = portfolioData;

  return (
    <footer className="footer container">
      <a className="wordmark" href="#home">
        {footer.wordmark}
        <span>.</span>
      </a>
      <span>{footer.tagline}</span>
      <span>© {new Date().getFullYear()} {personal.name}</span>
      <a href="#home" className="back-top">
        {footer.backToTopLabel}
      </a>
    </footer>
  );
}
