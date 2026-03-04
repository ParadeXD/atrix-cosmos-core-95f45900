import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Atrix Nodes" className="w-8 h-8 rounded-lg" />
              <span className="font-display font-bold text-foreground tracking-wide">ATRIX NODES</span>
            </div>
            <p className="text-sm text-muted-foreground">Powering Your Digital Universe</p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-3 text-sm">Services</h4>
            <div className="flex flex-col gap-2">
              <Link to="/minecraft" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Minecraft Hosting</Link>
              <Link to="/vps" className="text-sm text-muted-foreground hover:text-foreground transition-colors">VPS Hosting</Link>
              <Link to="/bot-hosting" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Bot Hosting</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-3 text-sm">Links</h4>
            <div className="flex flex-col gap-2">
              <a href="https://uptime.atrixnodes.in" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Uptime Status</a>
              <a href="https://gp.atrixnodes.in" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Game Panel</a>
              <a href="https://discord.gg/9Dhjwy3g" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Discord</a>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Sales</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-3 text-sm">IST Time</h4>
            <p className="font-mono text-primary text-lg">{istTime}</p>
            <p className="text-xs text-muted-foreground mt-1">India Standard Time</p>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">© 2026 Atrix Nodes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
