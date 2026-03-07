import { motion } from "framer-motion";

interface PlanCardProps {
  name: string;
  iconImg?: string;
  tagline: string;
  ram: string;
  cpu: string;
  storage: string;
  ports?: string;
  databases?: string;
  backups?: string;
  bandwidth?: string;
  price: string;
  popular?: boolean;
  index: number;
  image?: string;
}

const PlanCard = ({
  name, iconImg, tagline, ram, cpu, storage,
  ports, databases, backups, bandwidth, price, popular, index, image
}: PlanCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`glass-panel-hover flex flex-col relative overflow-hidden ${
        popular ? "ring-1 ring-primary/30 shadow-glow" : ""
      }`}
    >
      {/* Category image header */}
      {image && (
        <div className="relative h-32 overflow-hidden">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
          {popular && (
            <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              Popular
            </span>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {!image && popular && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Popular
          </span>
        )}
        {iconImg && (
          <img src={iconImg} alt={name} className="w-10 h-10 object-contain mb-2" />
        )}
        <h3 className="font-display font-bold text-foreground text-lg">{name}</h3>
        <p className="text-xs text-muted-foreground mb-4">{tagline}</p>

        <div className="space-y-2 flex-1 text-sm">
          <Row label="RAM" value={ram} />
          <Row label="CPU" value={cpu} />
          <Row label="Storage" value={storage} />
          {ports && <Row label="Ports" value={ports} />}
          {databases && <Row label="Databases" value={databases} />}
          {backups && <Row label="Backups" value={backups} />}
          {bandwidth && <Row label="Bandwidth" value={bandwidth} />}
        </div>

        <div className="mt-5 pt-4 border-t border-border">
          <span className="font-display font-bold text-xl text-foreground">{price}</span>
          <span className="text-muted-foreground text-sm"> / month</span>
        </div>

        <a
          href="https://discord.gg/9Dhjwy3g"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block text-center py-2.5 rounded-xl bg-primary/10 text-primary text-sm font-semibold hover:bg-primary/20 transition-all duration-300"
        >
          Order Now
        </a>
      </div>
    </motion.div>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between">
    <span className="text-muted-foreground">{label}</span>
    <span className="text-foreground font-medium">{value}</span>
  </div>
);

export default PlanCard;
