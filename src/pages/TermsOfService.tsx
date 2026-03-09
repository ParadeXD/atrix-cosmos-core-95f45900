import Layout from "@/components/Layout";
import PageHeroBanner from "@/components/PageHeroBanner";
import heroBg from "@/assets/hero-bg.jpg";

const sections = [
  {
    title: "1. General Usage",
    items: [
      "EB Nodes services must only be used for legal purposes.",
      "No hosting or distributing malware, phishing, DDoS tools, botnets, RATs, stealers, or illegal scripts.",
      "No CP, gore, or any illegal content of any kind.",
      "Abuse of resources may lead to suspension without refund.",
    ],
  },
  {
    title: "2. Security & Privacy",
    items: [
      "Do not share your panel login, SSH/SFTP details, or API keys with anyone.",
      "You are responsible for all activity done on your server.",
      "Any attempt to breach another user's server is strictly forbidden.",
    ],
  },
  {
    title: "3. Server Usage",
    items: [
      "No crypto mining, mass scanning, or DDoS attacks using server resources.",
      "Avoid running high-load processes that affect node performance.",
      "Public proxies, VPN nodes, or open relays are not allowed unless approved.",
    ],
  },
  {
    title: "4. Prohibited Activities",
    items: [
      "DDoS attacks or stress testing",
      "Hosting cracked/pirated content",
      "Packet sniffing or ARP spoofing",
      "Spam emails, SMS spam, or mass mailing",
      "Resource hogging or intentionally crashing nodes",
      "Hosting misleading or scam sites",
    ],
  },
  {
    title: "5. Support Rules",
    items: [
      "Provide clear details when requesting support.",
      "Do not ping staff unnecessarily.",
      "Respect staff decisions; harassment or abuse leads to permanent ban.",
    ],
  },
  {
    title: "6. Billing & Payments",
    items: [
      "Chargebacks or PayPal disputes = instant termination.",
      "No refunds unless approved by management.",
      "Subscriptions must be renewed before the due date.",
    ],
  },
  {
    title: "7. Fair Usage",
    items: [
      "We reserve the right to limit or restrict servers causing network issues.",
      "Shared resources must be used fairly and responsibly.",
    ],
  },
  {
    title: "8. Enforcement",
    items: [
      "Breaking any rule may result in:",
      "1. Warning",
      "2. Suspension",
      "3. Termination",
      "4. Blacklist from EB Nodes services",
    ],
  },
];

const TermsOfService = () => (
  <Layout>
    <PageHeroBanner
      image={heroBg}
      title="Terms of Service"
      subtitle="EB Nodes Rules & Policies"
    />

    <section className="max-w-3xl mx-auto px-6 pb-16">
      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title} className="glass-panel p-6">
            <h3 className="font-display font-bold text-foreground text-lg mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default TermsOfService;
