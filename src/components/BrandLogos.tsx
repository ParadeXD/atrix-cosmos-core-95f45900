import { motion } from "framer-motion";

const brands = [
  { name: "Cloudflare", icon: "☁️" },
  { name: "Oracle", icon: "🔴" },
  { name: "AWS", icon: "🟠" },
  { name: "Intel", icon: "🔷" },
  { name: "AMD", icon: "🟩" },
  { name: "NVIDIA", icon: "💚" },
  { name: "Vultr", icon: "🌐" },
  { name: "Hetzner", icon: "🏢" },
];

const BrandLogos = () => (
  <section className="max-w-6xl mx-auto px-6 py-16">
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8"
    >
      Powered by industry-leading technology
    </motion.p>
    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
      {brands.map((b, i) => (
        <motion.div
          key={b.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="flex flex-col items-center gap-2 group"
        >
          <span className="text-2xl md:text-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-300">
            {b.icon}
          </span>
          <span className="text-[10px] text-muted-foreground font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {b.name}
          </span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default BrandLogos;
