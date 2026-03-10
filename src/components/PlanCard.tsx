import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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
      whileHover={{ y: -8, scale: 1.02 }}
      className={`glass-panel flex flex-col relative overflow-hidden group transition-all duration-500 ${
        popular ? "ring-1 ring-primary/30 shadow-glow" : ""
      }`}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      
      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-primary/20" />

      {/* Category image header */}
      {image && (
        <div className="relative h-32 overflow-hidden">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
          {popular && (
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: index * 0.08 + 0.3 }}
              className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" /> Popular
            </motion.span>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col flex-1 relative z-10">
        {!image && popular && (
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: index * 0.08 + 0.3 }}
            className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3" /> Popular
          </motion.span>
        )}
        {iconImg && (
          <motion.img
            src={iconImg}
            alt={name}
            className="w-10 h-10 object-contain mb-2"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        )}
        <h3 className="font-display font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">{name}</h3>
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
          <span className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">{price}</span>
          <span className="text-muted-foreground text-sm"> / month</span>
        </div>

        <motion.a
          href="https://discord.com/invite/WWtU88AHfd"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-4 block text-center py-2.5 rounded-xl bg-primary/10 text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Order Now
        </motion.a>
      </div>
    </motion.div>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between group/row hover:bg-secondary/30 rounded-lg px-2 py-1 -mx-2 transition-colors duration-200">
    <span className="text-muted-foreground">{label}</span>
    <span className="text-foreground font-medium">{value}</span>
  </div>
);

export default PlanCard;
