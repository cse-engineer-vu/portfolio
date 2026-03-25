import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="flex items-center">
            <span className="font-bold text-lg text-white">Md. Sojib Sarker</span>
          </div>

          <nav className="flex gap-6 text-sm text-muted-foreground">
            {["About", "Skills", "Projects", "Experience", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex gap-6">
            <a href="https://github.com/sojibsjoy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mdsojibsarker/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:cse.engineer.vu@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="text-center md:text-left text-sm text-muted-foreground border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Md. Sojib Sarker. All rights reserved.</p>
          <p>Designed & Built with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
