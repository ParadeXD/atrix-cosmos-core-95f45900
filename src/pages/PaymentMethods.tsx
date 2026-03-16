import Layout from "@/components/Layout";
import PageHeroBanner from "@/components/PageHeroBanner";
import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

const methods = [
  { icon: "💳", label: "UPI", description: "Google Pay, PhonePe, Paytm & all UPI apps" },
  { icon: "🪙", label: "Cryptocurrency", description: "Bitcoin, Ethereum, USDT & other major coins" },
  { icon: "📱", label: "Digital Wallets", description: "Paytm Wallet, PhonePe Wallet & more" },
  { icon: "🏦", label: "Bank Transfer", description: "Direct NEFT / IMPS / RTGS transfers" },
  { icon: "🇳🇵", label: "NPR (Nepali Rupee)", description: "We accept payments in Nepali currency" },
];

const PaymentMethods = () => (
  <Layout>
    <PageHeroBanner
      image={heroBg}
      title="Payment Methods"
      subtitle="Secure & Flexible — Multiple Ways to Pay"
    />

    <section className="max-w-3xl mx-auto px-6 pb-16">
      <div className="glass-panel p-8">
        <h3 className="font-display font-bold text-foreground text-xl mb-6">Accepted Payment Options</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {methods.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="glass-panel px-5 py-4 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="text-2xl">{m.icon}</span>
                <span className="font-display font-semibold text-foreground">{m.label}</span>
              </div>
              <p className="text-xs text-muted-foreground ml-10">{m.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-border pt-6 space-y-4">
          <h4 className="font-display font-bold text-foreground text-lg">📌 Before You Pay</h4>
          <ul className="space-y-3">
            {[
              "Payments are processed automatically via our billing system.",
              "Always include your Order ID or Username in the payment reference.",
              "For manual or offline payments, open a support ticket on Discord after completing the transfer.",
              "Refunds follow our 12-hour refund policy — check the Refund Policy page for details.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </Layout>
);

export default PaymentMethods;
