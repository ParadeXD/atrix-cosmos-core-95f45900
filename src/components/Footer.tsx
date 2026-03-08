import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Gamepad2, Server, Bot, Mail, Globe, Shield, ExternalLink, MessageSquare } from "lucide-react";
import logo from "@/assets/atrix-logo.webp";

const Footer = () => {
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setIstTime(now);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="EB Nodes" className="w-8 h-8 rounded-lg" />
              <span className="font-display font-bold text-foreground tracking-wide text-sm">EB NODES</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">Your game, your server, your rules. High-performance hosting for everyone.</p>
            <div className="flex gap-3">
              <a href="https://discord.gg/9Dhjwy3g" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-primary" /> Products
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/minecraft" className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                <Gamepad2 className="w-3 h-3" /> Minecraft Hosting
              </Link>
              <Link to="/vps" className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                <Server className="w-3 h-3" /> VPS Hosting
              </Link>
              <Link to="/bot-hosting" className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                <Bot className="w-3 h-3" /> Bot Hosting
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-primary" /> Company
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                <Mail className="w-3 h-3" /> About Us
              </Link>
              <a href="https://uptime.atrixnodes.in" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                <Shield className="w-3 h-3" /> Status
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5 text-primary" /> Quick Links
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="https://gp.atrixnodes.in" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Game Panel
              </a>
              <a href="https://discord.gg/9Dhjwy3g" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Discord
              </a>
            </div>
          </div>

          {/* IST Time */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm">🕐 IST Time</h4>
            <p className="font-mono text-primary text-lg">{istTime}</p>
            <p className="text-[10px] text-muted-foreground mt-1">India Standard Time</p>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">© 2026 EB Nodes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
