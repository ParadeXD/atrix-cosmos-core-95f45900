import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  { name: "India", flag: "🇮🇳", x: 68.5, y: 40, city: "Mumbai" },
  { name: "United States", flag: "🇺🇸", x: 22, y: 35, city: "Dallas" },
  { name: "Singapore", flag: "🇸🇬", x: 76, y: 52, city: "Singapore" },
];

const GlobalMap = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* SVG World Map */}
      <div className="relative glass-panel p-6 md:p-10 overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(217 91% 60%)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Simplified world map outline using SVG */}
        <div className="relative aspect-[2/1] w-full">
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simplified continent outlines */}
            {/* North America */}
            <path
              d="M150,80 L200,60 L260,70 L280,100 L300,120 L280,160 L260,200 L240,220 L200,240 L180,230 L160,200 L140,170 L130,140 L140,100 Z"
              fill="hsl(217 91% 60% / 0.08)"
              stroke="hsl(217 91% 60% / 0.3)"
              strokeWidth="1"
            />
            {/* South America */}
            <path
              d="M240,260 L280,250 L310,280 L320,320 L310,370 L290,400 L260,420 L240,400 L230,360 L220,320 L225,280 Z"
              fill="hsl(217 91% 60% / 0.08)"
              stroke="hsl(217 91% 60% / 0.3)"
              strokeWidth="1"
            />
            {/* Europe */}
            <path
              d="M450,80 L480,70 L520,75 L540,90 L530,120 L510,140 L480,150 L460,140 L440,120 L440,100 Z"
              fill="hsl(217 91% 60% / 0.08)"
              stroke="hsl(217 91% 60% / 0.3)"
              strokeWidth="1"
            />
            {/* Africa */}
            <path
              d="M460,170 L510,160 L540,180 L560,220 L560,280 L540,340 L510,380 L480,370 L460,330 L450,280 L445,230 Z"
              fill="hsl(217 91% 60% / 0.08)"
              stroke="hsl(217 91% 60% / 0.3)"
              strokeWidth="1"
            />
            {/* Asia */}
            <path
              d="M560,60 L620,50 L700,60 L760,80 L800,100 L810,140 L790,180 L750,200 L700,210 L660,200 L620,180 L580,160 L560,130 L550,100 Z"
              fill="hsl(217 91% 60% / 0.08)"
              stroke="hsl(217 91% 60% / 0.3)"
              strokeWidth="1"
            />
            {/* India subcontinent */}
            <path
              d="M660,200 L690,190 L710,210 L700,250 L680,270 L660,260 L650,230 Z"
              fill="hsl(217 91% 60% / 0.12)"
              stroke="hsl(217 91% 60% / 0.4)"
              strokeWidth="1"
            />
            {/* Australia */}
            <path
              d="M770,320 L830,310 L860,330 L860,360 L840,380 L800,390 L770,370 L760,350 Z"
              fill="hsl(217 91% 60% / 0.08)"
              stroke="hsl(217 91% 60% / 0.3)"
              strokeWidth="1"
            />

            {/* Connection lines between locations */}
            <motion.line
              x1="220" y1="175" x2="685" y2="200"
              stroke="hsl(217 91% 60% / 0.2)"
              strokeWidth="1"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.line
              x1="685" y1="200" x2="760" y2="260"
              stroke="hsl(217 91% 60% / 0.2)"
              strokeWidth="1"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1 }}
            />
            <motion.line
              x1="220" y1="175" x2="760" y2="260"
              stroke="hsl(217 91% 60% / 0.15)"
              strokeWidth="1"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1.5 }}
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
              className="absolute group"
              style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: "translate(-50%, -50%)" }}
            >
              {/* Pulsing ring */}
              <motion.div
                className="absolute inset-0 -m-3 rounded-full border border-primary/30"
                animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              />
              {/* Dot */}
              <div className="w-3 h-3 rounded-full bg-primary shadow-glow relative z-10 cursor-pointer" />
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 glass-panel px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-20">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{loc.flag}</span>
                  <div>
                    <p className="text-xs font-display font-semibold text-foreground">{loc.name}</p>
                    <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5" /> {loc.city}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalMap;
