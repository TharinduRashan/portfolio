import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData, type ContactLink } from "@/data/portfolio";

export default function Contact() {
  const { contact } = portfolioData;

  const renderIcon = (icon: ContactLink["icon"]) => {
    switch (icon) {
      case "github":
        return <Github size={17} />;
      case "linkedin":
        return <Linkedin size={17} />;
      case "mail":
        return <Mail size={17} />;
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <span className="section-kicker">{contact.kicker}</span>
        <h2>
          {contact.heading.main}
          <br />
          <span>{contact.heading.highlight}</span>
        </h2>
        <p>{contact.description}</p>
        <a className="button button-light" href={contact.cta.href}>
          {contact.cta.label} <ArrowUpRight size={17} />
        </a>
        <div className="contact-links">
          {contact.links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {renderIcon(link.icon)} {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
