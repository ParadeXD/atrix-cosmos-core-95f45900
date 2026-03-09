import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Shield, Globe, Gamepad2, Server, Bot, ChevronRight, Check } from "lucide-react";
import Layout from "@/components/Layout";
import FeatureCard from "@/components/FeatureCard";
import SectionHeading from "@/components/SectionHeading";
import GlobalMap from "@/components/GlobalMap";
import BrandLogos from "@/components/BrandLogos";
import DiscordBanner from "@/components/DiscordBanner";
import heroBg from "@/assets/hero-bg.jpg";
import serverRack from "@/assets/server-rack.jpg";
import minecraftWorld from "@/assets/minecraft-world.jpg";
import vpsNetwork from "@/assets/vps-network.jpg";

const services = [
  {
    icon: Gamepad2,
    title: "Minecraft Hosting",
    desc: "Ultra-low latency game servers with Pterodactyl panel, instant setup, and DDoS protection.",
    to: "/minecraft",
    price: "Starting ₹100/mo",
    image: minecraftWorld,
  },
  {
    icon: Server,
    title: "VPS Hosting",
    desc: "Dedicated Intel Xeon resources, full root access, NVMe SSD, and easy scalability.",
    to: "/vps",
    price: "Starting ₹599/mo",
    image: vpsNetwork,
  },
  {
    icon: Bot,
    title: "Bot Hosting",
    desc: "24/7 uptime for Discord bots with reliable performance and affordable pricing.",
    to: "/bot-hosting",
    price: "Starting ₹35/mo",
    image: serverRack,
  },
];

const features = [
  { icon: Zap, title: "Instant Setup", description: "Your server is ready in seconds, not hours." },
  { icon: Gamepad2, title: "Pterodactyl Panel", description: "Full-featured game panel for easy management." },
  { icon: Globe, title: "Multi-Location", description: "India, Singapore & USA server locations." },
  { icon: Shield, title: "Enterprise Security", description: "Advanced DDoS protection on all plans." },
];

const whyUs = [
  "99.9%+ Uptime Guarantee",
  "Enterprise DDoS Protection",
  "Instant Deployment",
  "Competitive Pricing",
  "Fast & Friendly Support",
  "NVMe SSD Storage",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />

        {/* Floating images */}
        <motion.img
          src={minecraftWorld}
          alt=""
          className="absolute w-48 md:w-64 rounded-2xl opacity-20 blur-sm"
          style={{ top: "15%", right: "5%" }}
          animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src={serverRack}
          alt=""
          className="absolute w-40 md:w-56 rounded-2xl opacity-15 blur-sm"
          style={{ bottom: "20%", left: "3%" }}
          animate={{ y: [0, 12, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-block glass-panel px-4 py-1.5 rounded-full mb-6"
          >
            <span className="text-xs text-primary font-display font-medium">⚡ Now with Global Locations</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-shimmer font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Powering Your
            <br />
            Digital Universe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            High-performance Minecraft, VPS & Bot hosting with enterprise-grade infrastructure. Starting at just ₹35/month.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
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

          {/* Scroll indicator */}
          <motion.div
            className="mt-16"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-5 h-8 border border-muted-foreground/30 rounded-full mx-auto flex justify-center">
              <motion.div
                className="w-1 h-2 bg-primary rounded-full mt-1.5"
                animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Logos */}
      <BrandLogos />

      {/* Server rack showcase */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-shimmer font-display text-3xl md:text-4xl font-bold mb-4">
                Enterprise-Grade Infrastructure
              </h2>
              <p className="text-muted-foreground mb-6">
                Our servers run on high-performance hardware with NVMe SSD storage, ensuring lightning-fast speeds for your applications.
              </p>
              <div className="space-y-3">
                {whyUs.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.img
                src={serverRack}
                alt="Server Infrastructure"
                className="w-full rounded-2xl border border-glass-border"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading title="Our Services" subtitle="Everything you need to build, host & scale." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link to={s.to} className="glass-panel-hover block group h-full overflow-hidden rounded-2xl">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-display font-semibold text-sm">{s.price}</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading title="Why EB Nodes?" subtitle="Built for performance, designed for reliability." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </section>

      {/* Global Map */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading title="Global Server Locations" subtitle="Low ping. High uptime. Worldwide performance." />
        <GlobalMap />
      </section>

      {/* Discord Banner */}
      <DiscordBanner />

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-10 relative overflow-hidden"
        >
          <motion.img
            src={vpsNetwork}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div className="relative z-10">
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
                to="/about"
                className="glass-panel-hover px-8 py-3 rounded-2xl text-sm font-display font-semibold text-foreground"
              >
                About Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
