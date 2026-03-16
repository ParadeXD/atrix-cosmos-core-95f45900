import Layout from "@/components/Layout";
import PlanCard from "@/components/PlanCard";
import SectionHeading from "@/components/SectionHeading";
import PageHeroBanner from "@/components/PageHeroBanner";
import vpsBanner from "@/assets/vps-banner.jpg";
import vpsNetwork from "@/assets/vps-network.jpg";
import { Link } from "react-router-dom";

const plans = [
  { name: "🚀 VPS Nova", tagline: "Clean start. Silent power.", ram: "8 GB DDR4", cpu: "4 vCPU (Intel Xeon)", storage: "50 GB NVMe", bandwidth: "1 TB", price: "₹599", image: vpsNetwork },
  { name: "☁️ VPS Stratos", tagline: "Built to scale with ease.", ram: "16 GB DDR4", cpu: "6 vCPU (Intel Xeon)", storage: "90 GB NVMe", bandwidth: "3 TB", price: "₹999", popular: true, image: vpsNetwork },
  { name: "👑 VPS Dominus", tagline: "Raw muscle for heavy workloads.", ram: "32 GB DDR4", cpu: "12 vCPU (Intel Xeon)", storage: "150 GB NVMe", bandwidth: "5 TB", price: "₹1,980", image: vpsNetwork },
  { name: "⚡ VPS Overdrive", tagline: "Absolute control. Maximum authority.", ram: "64 GB DDR4", cpu: "18 vCPU (Intel Xeon)", storage: "256 GB NVMe", bandwidth: "Unlimited", price: "₹2,999", image: vpsNetwork },
];

const VPSHosting = () => (
  <Layout>
    <PageHeroBanner
      image={vpsBanner}
      title="VPS Hosting"
      subtitle="🖥️ Intel Xeon Power · ⚡ NVMe Speed · 🛡️ DDoS Protected"
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
