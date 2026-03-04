import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Shield, Globe, Gamepad2, Server, Bot, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import FeatureCard from "@/components/FeatureCard";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Gamepad2,
    title: "Minecraft Hosting",
    desc: "Ultra-low latency game servers with Pterodactyl panel, instant setup, and DDoS protection.",
    to: "/minecraft",
    price: "Starting ₹50/mo",
  },
  {
    icon: Server,
    title: "VPS Hosting",
    desc: "Dedicated Intel Xeon resources, full root access, NVMe SSD, and easy scalability.",
    to: "/vps",
    price: "Starting ₹250/mo",
  },
  {
    icon: Bot,
    title: "Bot Hosting",
    desc: "24/7 uptime for Discord bots with reliable performance and affordable pricing.",
    to: "/bot-hosting",
    price: "Starting ₹35/mo",
  },
];

const features = [
  { icon: Zap, title: "Instant Setup", description: "Your server is ready in seconds, not hours." },
  { icon: Gamepad2, title: "Pterodactyl Panel", description: "Full-featured game panel for easy management." },
  { icon: Globe, title: "Multi-Location", description: "India, Singapore & USA server locations." },
  { icon: Shield, title: "Enterprise Security", description: "Advanced DDoS protection on all plans." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-shimmer font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Powering Your Digital Universe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            High-performance Minecraft, VPS & Bot hosting with enterprise-grade infrastructure. Starting at just ₹35/month.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              to="/minecraft"
              className="glow-button bg-primary text-primary-foreground font-display font-semibold px-8 py-3.5 rounded-2xl text-sm"
            >
              Explore Plans
            </Link>
            <a
              href="https://discord.gg/9Dhjwy3g"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel-hover px-8 py-3.5 rounded-2xl text-sm font-display font-semibold text-foreground"
            >
              Join Discord
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading title="Our Services" subtitle="Everything you need to build, host & scale." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={s.to} className="glass-panel-hover p-6 block group h-full">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-display font-semibold text-sm">{s.price}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading title="Why Atrix Nodes?" subtitle="Built for performance, designed for reliability." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </section>

      {/* Locations */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading title="Global Locations" subtitle="Low ping. High uptime. Worldwide performance." />
        <div className="flex flex-wrap justify-center gap-6">
          {["🇮🇳 India", "🇺🇸 United States", "🇸🇬 Singapore"].map((loc, i) => (
            <motion.div
              key={loc}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-panel px-8 py-4 text-center"
            >
              <span className="font-display font-semibold text-foreground">{loc}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-10"
        >
          <h2 className="text-shimmer font-display text-3xl font-bold mb-4">Ready to Launch?</h2>
          <p className="text-muted-foreground mb-8">Deploy your server in minutes with enterprise-grade infrastructure.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/minecraft"
              className="glow-button bg-primary text-primary-foreground font-display font-semibold px-8 py-3 rounded-2xl text-sm"
            >
              Get Started
            </Link>
            <Link
              to="/contact"
              className="glass-panel-hover px-8 py-3 rounded-2xl text-sm font-display font-semibold text-foreground"
            >
              Contact Sales
            </Link>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
