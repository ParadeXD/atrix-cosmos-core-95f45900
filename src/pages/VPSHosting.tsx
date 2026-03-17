import Layout from "@/components/Layout";
import PlanCard from "@/components/PlanCard";
import SectionHeading from "@/components/SectionHeading";
import PageHeroBanner from "@/components/PageHeroBanner";
import vpsBanner from "@/assets/vps-banner.jpg";
import vpsNetwork from "@/assets/vps-network.jpg";
import { Link } from "react-router-dom";

const plans = [
  { name: "🖥️ Standard S", tagline: "Starter power. Unmetered speed.", ram: "8 GB DDR4 ECC", cpu: "2 vCores (Xeon E5-2699 v4)", storage: "90 GB SSD", bandwidth: "1 Gbps Unmetered", price: "₹359", image: vpsNetwork },
  { name: "⚡ Standard M", tagline: "Scale with confidence.", ram: "16 GB DDR4 ECC", cpu: "4 vCores (Xeon E5-2699 v4)", storage: "120 GB SSD", bandwidth: "1 Gbps Unmetered", price: "₹650", popular: true, image: vpsNetwork },
  { name: "🔥 Standard L", tagline: "Heavy workloads, zero compromise.", ram: "32 GB DDR4 ECC", cpu: "6 vCores (Xeon E5-2699 v4)", storage: "150 GB SSD", bandwidth: "1 Gbps Unmetered", price: "₹800", image: vpsNetwork },
  { name: "👑 Standard XL", tagline: "Maximum authority. Full control.", ram: "64 GB DDR4 ECC", cpu: "8 vCores (Xeon E5-2699 v4)", storage: "200 GB SSD", bandwidth: "1 Gbps Unmetered", price: "₹1,650", image: vpsNetwork },
];

const VPSHosting = () => (
  <Layout>
    <PageHeroBanner
      image={vpsBanner}
      title="VPS Hosting"
      subtitle="🖥️ Intel Xeon E5-2696 v4 · 🛡️ Advanced DDoS Mitigation · 🌐 1 Gbps Unmetered"
    />

    <section className="max-w-7xl mx-auto px-6 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((p, i) => (
          <PlanCard key={p.name} {...p} index={i} />
        ))}
      </div>

      <div className="mt-12 text-center glass-panel p-8 max-w-2xl mx-auto">
        <h3 className="font-display font-bold text-foreground text-xl mb-2">🛠️ Need Custom Specs?</h3>
        <p className="text-muted-foreground text-sm mb-4">We can build a VPS plan tailored to your exact requirements — just reach out.</p>
        <a
          href="https://discord.com/invite/WWtU88AHfd"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block glow-button bg-primary text-primary-foreground font-display font-semibold px-8 py-3 rounded-2xl text-sm"
        >
          Request Custom Plan
        </a>
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/amd-vps"
          className="inline-block glass-panel-hover px-8 py-3 rounded-2xl text-sm font-display font-semibold text-primary"
        >
          Looking for AMD EPYC™ VPS? →
        </Link>
      </div>

      <div className="mt-16 max-w-3xl mx-auto text-center">
        <SectionHeading title="🌍 Server Locations" />
        <div className="flex flex-wrap justify-center gap-4">
          {["🇮🇳 India", "🇸🇬 Singapore"].map((loc) => (
            <div key={loc} className="glass-panel px-6 py-3">
              <span className="font-display font-semibold text-foreground">{loc}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {["🔒 Enterprise Security", "⚡ Blazing Performance", "🛡️ Powered by EB Nodes"].map((item) => (
            <div key={item} className="glass-panel px-5 py-2">
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default VPSHosting;
