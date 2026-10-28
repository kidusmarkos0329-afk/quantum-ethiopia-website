import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--bg-secondary)] text-[var(--text-primary)] pt-36 pb-28 lg:py-40 border-b border-[var(--border-color)]"
    >
      {/* Subtle Background Image Layer with Adaptive Light/Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 dark:opacity-35 pointer-events-none"
        style={{ backgroundImage: "url('/quantum-hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-secondary)] via-[var(--bg-secondary)]/90 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column: Crisp Light/Adaptive Editorial Intro */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-3 bg-[var(--insa-badge-bg)] border border-[var(--insa-accent)]/30 text-[var(--insa-badge-text)] px-4 py-1.5 rounded-full text-xs uppercase tracking-[2.5px] font-semibold">
            <img
              src="/Logo_of_Ethiopian_INSA.png"
              alt="INSA"
              className="w-5 h-5 object-contain"
            />
            <span>INSA • Ethiopia&apos;s National Quantum Initiative</span>
          </div>

          <h1 className="font-serif-heading text-5xl sm:text-6xl lg:text-[62px] font-bold leading-[1.15] mt-8 text-[var(--text-primary)]">
            Building Ethiopia&apos;s{" "}
            <span className="block text-[var(--insa-accent)] mt-2">
              Quantum Future
            </span>
          </h1>

          <p className="mt-8 text-[var(--text-secondary)] text-lg sm:text-xl leading-relaxed max-w-2xl">
            Led by the Information Network Security Administration (INSA), this
            national platform connects universities, researchers, government
            institutions, and industry innovators to advance quantum computing,
            post-quantum cryptography, and scientific discovery across Ethiopia.
          </p>

          <div className="flex flex-wrap gap-5 mt-12">
            <Link
              to="/repository"
              className="bg-[var(--btn-primary-bg)] hover:opacity-95 transition px-8 py-4 rounded-lg font-semibold text-white shadow-sm"
            >
              Explore Research Repository
            </Link>

            <Link
              to="/submit-research"
              className="border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--insa-accent)] transition px-8 py-4 rounded-lg font-semibold text-[var(--text-primary)]"
            >
              Submit Research Paper
            </Link>
          </div>
        </div>

        {/* Right Column: Deep INSA Navy Contrast Showcase Panel with Background & INSA Logo */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            className="relative w-full max-w-[440px] aspect-square rounded-2xl bg-[#0a2540] bg-cover bg-center border border-[#1e3a5f] shadow-2xl flex items-center justify-center p-8 overflow-hidden"
            style={{ backgroundImage: "url('/quantum-hero-bg.jpg')" }}
          >
            <div className="absolute inset-0 bg-[#0a2540]/75 backdrop-blur-[2px]" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 24,
                ease: "linear",
              }}
              className="relative z-10 w-[310px] h-[310px] rounded-full border border-[#38bdf8]/40"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 16,
                ease: "linear",
              }}
              className="absolute z-10 w-[220px] h-[220px] rounded-full border border-[#00a8e8]/80"
            />

            {/* Official INSA Logo at the Quantum Core */}
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
              }}
              className="absolute z-20 w-24 h-24 rounded-full bg-white p-3 shadow-[0_0_50px_#00a8e8] flex items-center justify-center"
            >
              <img
                src="/Logo_of_Ethiopian_INSA.png"
                alt="INSA Official Emblem"
                className="w-full h-full object-contain"
              />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
              className="absolute z-10 w-[310px] h-[310px]"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#f59e0b] shadow-md"></div>
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 14,
                ease: "linear",
              }}
              className="absolute z-10 w-[220px] h-[220px]"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white"></div>
            </motion.div>

            <div className="absolute z-20 bottom-5 left-6 right-6 flex items-center justify-between text-[11px] uppercase tracking-[2px] text-slate-200 border-t border-slate-600/80 pt-3">
              <span>INSA Quantum Core</span>
              <span className="text-[#38bdf8] font-mono">FDRE • 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;