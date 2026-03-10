import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const DiscordBanner = () => (
  <section className="max-w-6xl mx-auto px-6 py-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl"
    >
      <div className="bg-gradient-to-r from-[hsl(235,70%,55%)] to-[hsl(255,60%,50%)] p-8 md:p-10">
        {/* Floating Discord icons */}
        <motion.div
          className="absolute top-4 right-8 text-6xl opacity-10"
          animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          💬
        </motion.div>
        <motion.div
          className="absolute bottom-4 left-8 text-5xl opacity-10"
          animate={{ y: [0, 6, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          🎮
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-1/4 text-4xl opacity-5"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🤖
        </motion.div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
              Join Our <span className="text-cyan-300">Discord</span>
            </h3>
            <p className="text-white/70 text-sm">
              Connect with our community of gamers and developers.
            </p>
            <p className="text-white/50 text-xs mt-1">
              Get instant support, share experiences, and stay updated with the latest news.
            </p>
          </div>
          <a
            href="https://discord.com/invite/WWtU88AHfd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-display font-semibold px-8 py-3.5 rounded-2xl text-sm transition-all duration-300 hover:-translate-y-0.5 flex-shrink-0"
          >
            <MessageSquare className="w-5 h-5" />
            Join Us on Discord
          </a>
        </div>
      </div>
    </motion.div>
  </section>
);

export default DiscordBanner;
