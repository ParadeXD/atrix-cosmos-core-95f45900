import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MoreVertical, X, Home, Gamepad2, Server, Bot, Users, Activity, ExternalLink, MessageSquare } from "lucide-react";
import logo from "@/assets/eb-nodes-logo.png";

import { FileText, CreditCard, Cpu } from "lucide-react";

const navItems = [
  { label: "Home", to: "/", icon: Home },
  { label: "Minecraft Hosting", to: "/minecraft", icon: Gamepad2 },
  { label: "VPS Hosting", to: "/vps", icon: Server },
  { label: "AMD VPS", to: "/amd-vps", icon: Cpu },
  { label: "Bot Hosting", to: "/bot-hosting", icon: Bot },
  { label: "About Us", to: "/about", icon: Users },
  { label: "Payment Methods", to: "/payment-methods", icon: CreditCard },
  { label: "Terms of Service", to: "/terms", icon: FileText },
  { label: "Refund Policy", to: "/refund-policy", icon: FileText },
];

const externalItems = [
  { label: "Uptime Status", href: "https://status.ebnodes.cloud", icon: Activity },
  { label: "Game Panel", href: "https://gp.ebnodes.cloud", icon: ExternalLink },
  { label: "Discord", href: "https://discord.gg/9Dhjwy3g", icon: MessageSquare },
];

const SidebarNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Floating trigger button - 3 dots */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        onClick={() => setOpen(true)}
        className="fixed top-5 left-5 z-50 glass-panel p-2.5 rounded-xl hover:bg-glass-hover transition-all duration-300 group"
        aria-label="Open navigation"
      >
        <MoreVertical className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar panel */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-72 z-[70] glass-panel border-r border-glass-border rounded-none flex flex-col"
          >
            {/* Header */}
            <div className="p-5 flex items-center justify-between border-b border-border">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                <img src={logo} alt="EB Nodes" className="w-9 h-9 rounded-xl" />
                <div>
                  <span className="font-display font-bold text-foreground text-sm tracking-wide block">EB NODES</span>
                  <span className="text-[10px] text-muted-foreground">Powering Your Digital Universe</span>
                </div>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 px-3">Navigation</p>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.3 }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      location.pathname === item.to
                        ? "bg-primary/15 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-4">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 px-3">External</p>
                {externalItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * (i + navItems.length) + 0.1, duration: 0.3 }}
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-border">
              <p className="text-[10px] text-muted-foreground text-center">© 2026 EB Nodes</p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default SidebarNav;
