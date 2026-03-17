import Layout from "@/components/Layout";
import PlanCard from "@/components/PlanCard";
import SectionHeading from "@/components/SectionHeading";
import PageHeroBanner from "@/components/PageHeroBanner";
import minecraftBanner from "@/assets/minecraft-banner.jpg";
import minecraftWorld from "@/assets/minecraft-world.jpg";

const plans = [
  { name: "⛏️ Dirt", tagline: "Best for testing & small servers", ram: "2 GB", cpu: "80%", storage: "6 GB NVMe", ports: "1", databases: "1", backups: "1", price: "₹80", image: minecraftWorld },
  { name: "🪨 Stone", tagline: "Smooth gameplay for small communities", ram: "4 GB", cpu: "160%", storage: "12 GB NVMe", ports: "1", databases: "1", backups: "1", price: "₹162", image: minecraftWorld },
  { name: "⚔️ Iron", tagline: "Power + Stability", ram: "6 GB", cpu: "220%", storage: "18 GB NVMe", ports: "2", databases: "1", backups: "2", price: "₹280", image: minecraftWorld },
  { name: "🥇 Gold", tagline: "High performance for growing servers", ram: "8 GB", cpu: "300%", storage: "24 GB NVMe", ports: "2", databases: "2", backups: "2", price: "₹404", popular: true, image: minecraftWorld },
  { name: "💎 Diamond", tagline: "Maximum power for large communities", ram: "16 GB", cpu: "460%", storage: "30 GB NVMe", ports: "5", databases: "3", backups: "3", price: "₹625", image: minecraftWorld },
  { name: "🔥 Netherite", tagline: "Elite performance for serious networks", ram: "24 GB", cpu: "500%", storage: "50 GB NVMe", ports: "8", databases: "5", backups: "5", price: "₹755", image: minecraftWorld },
  { name: "🛡️ Bedrock", tagline: "Ultimate power for massive servers", ram: "32 GB", cpu: "600%", storage: "75 GB NVMe", ports: "10", databases: "8", backups: "8", price: "₹1,599", image: minecraftWorld },
];

const whyEBNodes = [
  "⚡ Instant Setup — Server ready in seconds",
  "🖥️ Full Pterodactyl Panel Access",
  "🎮 Latest Minecraft Versions Supported",
  "🔧 Paper / Purpur / Fabric / Forge Compatible",
  "🌏 India & Singapore Server Locations",
  "🛠️ Custom Plans Available on Request",
];

const MinecraftHosting = () => (
  <Layout>
    <PageHeroBanner
      image={minecraftBanner}
      title="Minecraft Server Hosting"
      subtitle="⚡ NVMe SSD · 🛡️ DDoS Protected · 🎮 High Performance"
    />

    <section className="max-w-7xl mx-auto px-6 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {plans.map((p, i) => (
          <PlanCard key={p.name} {...p} index={i} />
        ))}
      </div>

      <div className="mt-12 text-center glass-panel p-8 max-w-2xl mx-auto">
        <h3 className="font-display font-bold text-foreground text-xl mb-2">🛠️ Need a Custom Configuration?</h3>
        <p className="text-muted-foreground text-sm mb-4">Want different RAM, CPU, or storage? We'll build a plan tailored to your exact requirements.</p>
        <a
          href="https://discord.com/invite/WWtU88AHfd"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block glow-button bg-primary text-primary-foreground font-display font-semibold px-8 py-3 rounded-2xl text-sm"
        >
          Request Custom Plan
        </a>
      </div>

      <div className="mt-16 max-w-3xl mx-auto">
        <SectionHeading title="Why EB Nodes?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {whyEBNodes.map((item) => (
            <div key={item} className="glass-panel px-4 py-3 flex items-center gap-3">
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default MinecraftHosting;
