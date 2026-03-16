import Layout from "@/components/Layout";
import PageHeroBanner from "@/components/PageHeroBanner";
import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

const sections = [
  {
    icon: "⏱️",
    title: "12-Hour Refund Window",
    items: [
      "You may request a full refund within 12 hours of your purchase — no questions asked.",
      "Refund requests submitted after the 12-hour window will not be processed.",
      "The 12-hour clock starts from the moment the payment is confirmed.",
    ],
  },
  {
    icon: "🔄",
    title: "After the Refund Window",
    items: [
      "No monetary refunds are available once the 12-hour period has expired.",
      "If a service issue is caused by our infrastructure (e.g., prolonged downtime, data loss), you may receive a service credit or replacement at management's discretion.",
      "Partial refunds or pro-rated credits are not offered.",
    ],
  },
  {
    icon: "🚨",
    title: "Conditions That Void Eligibility",
    items: [
      "Any violation of our Terms of Service immediately voids refund eligibility.",
      "Abuse, exploitation, or intentional damage to infrastructure will disqualify your account from all refund requests.",
      "Filing a chargeback or payment dispute results in permanent termination — no exceptions.",
    ],
  },
  {
    icon: "📨",
    title: "How to Request a Refund",
    items: [
      "Open a support ticket on our Discord server within the 12-hour window.",
      "Include your Order ID, payment method, and reason for the request.",
      "Our team will review and respond within 24 hours.",
    ],
  },
];

const RefundPolicy = () => (
  <Layout>
    <PageHeroBanner
      image={heroBg}
      title="Refund Policy"
      subtitle="Transparent & Fair — Clear Rules, No Confusion"
    />

    <section className="max-w-3xl mx-auto px-6 pb-16">
      <div className="space-y-6">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="glass-panel p-6"
          >
            <h3 className="font-display font-bold text-foreground text-lg mb-4 flex items-center gap-2">
              <span>{section.icon}</span> {section.title}
            </h3>
            <ul className="space-y-2.5">
              {section.items.map((item, j) => (
                <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground">⚡ EB Nodes — Powering Your Digital Universe</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default RefundPolicy;
