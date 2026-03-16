import Layout from "@/components/Layout";
import PageHeroBanner from "@/components/PageHeroBanner";
import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

const sections = [
  {
    icon: "📜",
    title: "1. Acceptable Use",
    items: [
      "All EB Nodes services must be used strictly for lawful purposes.",
      "Hosting, distributing, or facilitating malware, phishing kits, DDoS tools, botnets, RATs, stealers, or any illegal software is strictly prohibited.",
      "No illegal content of any kind — including but not limited to CSAM, gore, or extremist material.",
      "Abuse, misuse, or overuse of allocated resources may result in immediate suspension without refund.",
    ],
  },
  {
    icon: "🔒",
    title: "2. Account Security & Privacy",
    items: [
      "You are solely responsible for safeguarding your panel credentials, SSH/SFTP keys, and API tokens.",
      "Do not share login details with unauthorized individuals.",
      "All activity originating from your account is your responsibility.",
      "Unauthorized access attempts against any EB Nodes infrastructure or other users' servers will result in permanent termination.",
    ],
  },
  {
    icon: "🖥️",
    title: "3. Server Resource Usage",
    items: [
      "Cryptocurrency mining, network scanning, and DDoS attacks are strictly forbidden.",
      "Avoid running processes that degrade shared node performance for other users.",
      "Hosting public VPN endpoints, open proxies, or open mail relays requires prior written approval.",
    ],
  },
  {
    icon: "🚫",
    title: "4. Prohibited Activities",
    items: [
      "DDoS attacks, stress testing, or traffic amplification of any kind.",
      "Hosting cracked, pirated, or unlicensed software and media.",
      "Packet sniffing, ARP spoofing, or man-in-the-middle attacks.",
      "Spam distribution via email, SMS, or any messaging platform.",
      "Intentionally crashing nodes or consuming excessive shared resources.",
      "Operating misleading, fraudulent, or scam websites.",
    ],
  },
  {
    icon: "🎧",
    title: "5. Support & Communication",
    items: [
      "Provide clear, detailed information when submitting support requests.",
      "Do not excessively ping or tag staff members outside of support channels.",
      "Harassment, threats, or abuse directed at staff will result in a permanent ban from all services.",
    ],
  },
  {
    icon: "💰",
    title: "6. Billing & Payments",
    items: [
      "Filing chargebacks or payment disputes will result in immediate and permanent termination of all services.",
      "Refunds are only available within the 12-hour window as outlined in our Refund Policy.",
      "Service subscriptions must be renewed before the expiration date to avoid automatic suspension.",
    ],
  },
  {
    icon: "⚖️",
    title: "7. Fair Usage Policy",
    items: [
      "EB Nodes reserves the right to throttle, limit, or suspend servers causing network degradation or instability.",
      "Shared infrastructure resources must be consumed fairly and responsibly by all users.",
    ],
  },
  {
    icon: "⚠️",
    title: "8. Enforcement & Consequences",
    items: [
      "Violations of any of the above terms may result in progressive enforcement:",
      "① Formal Warning — First offense with documented notice.",
      "② Temporary Suspension — Service access revoked pending review.",
      "③ Permanent Termination — Account and all data permanently removed.",
      "④ Blacklist — Banned from all current and future EB Nodes services.",
    ],
  },
];

const TermsOfService = () => (
  <Layout>
    <PageHeroBanner
      image={heroBg}
      title="Terms of Service"
      subtitle="Rules, Policies & Guidelines — Effective 2026"
    />

    <section className="max-w-3xl mx-auto px-6 pb-16">
      <div className="space-y-6">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
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
          <p className="text-xs text-muted-foreground">By using EB Nodes services, you agree to all terms listed above.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default TermsOfService;
