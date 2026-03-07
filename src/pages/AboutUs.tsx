import { motion } from "framer-motion";
import { Crown, Sword, Users, MessageSquare, Globe, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const founders = [
  {
    name: "Parade",
    role: "Founder",
    icon: Crown,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    description: "Visionary leader behind Atrix Nodes. Passionate about building affordable, high-performance hosting infrastructure for the gaming community.",
  },
  {
    name: "Beast",
    role: "Founder",
    icon: Sword,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    description: "Technical powerhouse driving server architecture and infrastructure. Ensures every server runs at peak performance with zero compromise.",
  },
  {
    name: "Soul Reaper",
    role: "CEO (For Now)",
    icon: Shield,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    description: "Leading Atrix Nodes forward with strategic vision and operational excellence. Committed to delivering world-class hosting experiences.",
  },
];

const stats = [
  { label: "Servers Deployed", value: "50+" },
  { label: "Happy Customers", value: "20+" },
  { label: "Uptime", value: "99.9%" },
  { label: "Global Locations", value: "3" },
];

const AboutUs = () => (
  <Layout>
    <section className="max-w-5xl mx-auto px-6 py-16">
      <SectionHeading title="About Atrix Nodes" subtitle="The team behind your digital infrastructure." />

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-8 mb-16 text-center max-w-3xl mx-auto"
      >
        <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
        <h3 className="font-display font-bold text-foreground text-xl mb-3">Our Mission</h3>
        <p className="text-muted-foreground leading-relaxed">
          At Atrix Nodes, we believe powerful hosting shouldn't break the bank. We provide enterprise-grade
          infrastructure at prices that empower creators, gamers, and developers to build without limits.
          From Minecraft servers to full VPS solutions, we're here to power your digital universe.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="glass-panel p-5 text-center"
          >
            <p className="font-display font-bold text-2xl text-primary">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Founders */}
      <SectionHeading title="Meet The Founders" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {founders.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass-panel-hover p-6 text-center"
          >
            <motion.div
              className={`w-16 h-16 rounded-2xl ${f.bgColor} flex items-center justify-center mx-auto mb-4`}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            >
              <f.icon className={`w-8 h-8 ${f.color}`} />
            </motion.div>
            <h3 className="font-display font-bold text-foreground text-lg">{f.name}</h3>
            <p className={`text-sm font-medium ${f.color} mb-3`}>{f.role}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Discord CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl"
      >
        <div className="bg-gradient-to-r from-[hsl(235,70%,55%)] to-[hsl(255,60%,50%)] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
              Join Our <span className="text-cyan-300">Discord</span>
            </h3>
            <p className="text-white/80 text-sm max-w-md">
              Connect with our community of gamers and developers. Get instant support, share experiences, and stay updated.
            </p>
          </div>
          <a
            href="https://discord.gg/9Dhjwy3g"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-display font-semibold px-8 py-3.5 rounded-2xl text-sm transition-all duration-300 flex-shrink-0"
          >
            <MessageSquare className="w-5 h-5" />
            Join Discord
          </a>
        </div>
      </motion.div>

      {/* Quick Links */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6">
          <h4 className="font-display font-bold text-foreground mb-3">Quick Info</h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Response Time</span>
              <span className="text-foreground">Under 2 hours</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Support Hours</span>
              <span className="text-foreground">24/7</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Uptime Status</span>
              <a href="https://uptime.atrixnodes.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View Status</a>
            </div>
          </div>
        </div>
        <div className="glass-panel p-6">
          <h4 className="font-display font-bold text-foreground mb-3">Panels</h4>
          <div className="space-y-2 text-sm">
            <a href="https://gp.atrixnodes.in" target="_blank" rel="noopener noreferrer" className="flex justify-between text-muted-foreground hover:text-foreground transition-colors">
              <span>Game Panel</span><span className="text-primary">→</span>
            </a>
            <div className="flex justify-between text-muted-foreground">
              <span>VPS Panel</span><span className="text-muted-foreground/50">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutUs;
