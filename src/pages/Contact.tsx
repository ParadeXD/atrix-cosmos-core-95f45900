import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", category: "general", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-6 py-16">
        <SectionHeading title="Contact & Support" subtitle="Get in touch with our team or open a support ticket." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-6"
          >
            <h3 className="font-display font-bold text-foreground text-lg mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" /> Contact Sales / Open Ticket
            </h3>

            {submitted ? (
              <div className="text-center py-10">
                <div className="text-4xl mb-4">✅</div>
                <h4 className="font-display font-bold text-foreground text-lg mb-2">Message Sent!</h4>
                <p className="text-muted-foreground text-sm">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Contact Sales</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing</option>
                    <option value="custom">Custom Plan Request</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="glow-button bg-primary text-primary-foreground font-display font-semibold px-6 py-2.5 rounded-xl text-sm flex items-center gap-2 w-full justify-center"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <a
              href="https://discord.gg/9Dhjwy3g"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel-hover p-6 flex items-center gap-4 block"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground">Discord Support</h4>
                <p className="text-sm text-muted-foreground">Fastest way to get help — open a ticket on Discord.</p>
              </div>
            </a>

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
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
