import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Wifi, Clock, Server } from "lucide-react";
import mapBg from "@/assets/global-map-new.avif";

const locations = [
  {
    name: "India",
    flag: "🇮🇳",
    x: 65,
    y: 42,
    city: "Mumbai",
    ping: "12ms",
    uptime: "99.98%",
    servers: 4,
    status: "Operational",
  },
  {
    name: "United States",
    flag: "🇺🇸",
    x: 20,
    y: 32,
    city: "Dallas",
    ping: "45ms",
    uptime: "99.95%",
    servers: 2,
    status: "Operational",
  },
  {
    name: "Singapore",
    flag: "🇸🇬",
    x: 75.5,
    y: 55,
    city: "Singapore",
    ping: "28ms",
    uptime: "99.99%",
    servers: 3,
    status: "Operational",
  },
];

const GlobalMap = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl border border-border/30">
        {/* Map image background */}
        <div className="relative aspect-[2.2/1] w-full">
          <img
            src={mapBg}
            alt="Global server locations"
            className="w-full h-full object-cover"
          />

          {/* Subtle overlay for contrast */}
          <div className="absolute inset-0 bg-background/20" />

          {/* Connection lines SVG overlay */}
          <svg
            viewBox="0 0 1000 455"
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Animated connection arcs */}
            <motion.path
              d="M200,145 Q440,80 650,191"
              fill="none"
              stroke="hsl(200 100% 50% / 0.15)"
              strokeWidth="1"
              strokeDasharray="4 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, delay: 0.5 }}
            />
            <motion.path
              d="M650,191 Q720,210 755,250"
              fill="none"
              stroke="hsl(200 100% 50% / 0.15)"
              strokeWidth="1"
              strokeDasharray="4 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1.2 }}
            />
            <motion.path
              d="M200,145 Q500,300 755,250"
              fill="none"
              stroke="hsl(200 100% 50% / 0.1)"
              strokeWidth="1"
              strokeDasharray="4 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3, delay: 1.8 }}
            />
          </svg>

          {/* Location markers */}
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.3, type: "spring", damping: 12 }}
              className="absolute z-10"
              style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: "translate(-50%, -50%)" }}
            >
              {/* Outer pulse ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border border-cyan-400/30"
                animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.7 }}
              />
              {/* Inner pulse */}
              <motion.div
                className="absolute -inset-2 rounded-full bg-cyan-400/10"
                animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              />

              {/* Clickable dot */}
              <button
                onClick={() => setActive(active === loc.name ? null : loc.name)}
                className="relative w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_3px_rgba(34,211,238,0.5)] cursor-pointer hover:scale-150 transition-transform duration-300 z-20"
                aria-label={`View ${loc.city} server info`}
              />

              {/* Info card popover */}
              <AnimatePresence>
                {active === loc.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.9 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-30 w-56"
                  >
                    <div className="bg-[hsl(220,20%,8%)] border border-border/50 backdrop-blur-2xl rounded-xl p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
                      {/* Header */}
                      <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-border/30">
                        <span className="text-xl">{loc.flag}</span>
                        <div>
                          <p className="text-sm font-display font-bold text-foreground">{loc.city}</p>
                          <p className="text-[10px] text-muted-foreground">{loc.name}</p>
                        </div>
                        <span className="ml-auto flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[10px] text-emerald-400 font-medium">Live</span>
                        </span>
                      </div>

                      {/* Stats */}
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Wifi className="w-3 h-3 text-cyan-400" /> Latency
                          </span>
                          <span className="text-xs font-mono font-bold text-cyan-400">{loc.ping}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3 text-emerald-400" /> Uptime
                          </span>
                          <span className="text-xs font-mono font-bold text-emerald-400">{loc.uptime}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Server className="w-3 h-3 text-violet-400" /> Nodes
                          </span>
                          <span className="text-xs font-mono font-bold text-violet-400">{loc.servers} active</span>
                        </div>
                      </div>

                      {/* Ping bar */}
                      <div className="mt-3 pt-3 border-t border-border/30">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] text-muted-foreground">Network Quality</span>
                          <span className="text-[10px] font-medium text-emerald-400">Excellent</span>
                        </div>
                        <div className="w-full h-1 rounded-full bg-border/30 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                            initial={{ width: 0 }}
                            animate={{ width: "95%" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 bg-[hsl(220,20%,8%)] border-r border-b border-border/50 rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalMap;
