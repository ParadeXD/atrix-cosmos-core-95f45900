import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Gamepad2, Server, Bot, Users, Activity, ExternalLink, MessageSquare, ChevronRight } from "lucide-react";
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
  { label: "Uptime Status", href: "https://believe.ebnodes.in", icon: Activity },
  { label: "Game Panel", href: "https://gp.ebnodes.in/", icon: ExternalLink },
  { label: "Discord", href: "https://discord.com/invite/WWtU88AHfd", icon: MessageSquare },
];

const SidebarNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Floating trigger button - hamburger */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        onClick={() => setOpen(true)}
        className="fixed top-5 left-5 z-50 glass-panel p-3 rounded-xl hover:bg-glass-hover hover:shadow-glow transition-all duration-300 group"
        aria-label="Open navigation"
      >
        <Menu className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
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
            initial={{ x: "-100%", opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0.5 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-72 z-[70] bg-card/95 backdrop-blur-2xl border-r border-border rounded-none flex flex-col shadow-[20px_0_60px_-15px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="p-5 flex items-center justify-between border-b border-border">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3 group">
                <motion.img
                  src={logo}
                  alt="EB Nodes"
                  className="w-9 h-9"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <div>
                  <span className="font-display font-bold text-foreground text-sm tracking-wide block group-hover:text-primary transition-colors">EB NODES</span>
                  <span className="text-[10px] text-muted-foreground">Powering Your Digital Universe</span>
                </div>
              </Link>
              <motion.button
                onClick={() => setOpen(false)}
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </motion.button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 px-3">Navigation</p>
              {navItems.map((item, i) => {
                const isActive = location.pathname === item.to;
                return (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group/link relative overflow-hidden ${
                        isActive
                          ? "bg-primary/15 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-primary rounded-full"
                        />
                      )}
                      <item.icon className="w-4 h-4 transition-transform duration-200 group-hover/link:scale-110" />
                      <span className="flex-1">{item.label}</span>
                      <ChevronRight className={`w-3 h-3 transition-all duration-200 ${isActive ? "opacity-100 text-primary" : "opacity-0 group-hover/link:opacity-50"}`} />
                    </Link>
                  </motion.div>
                );
              })}

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
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300 group/link"
                    >
                      <item.icon className="w-4 h-4 transition-transform duration-200 group-hover/link:scale-110" />
                      <span className="flex-1">{item.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-50 transition-opacity duration-200" />
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
