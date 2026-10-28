import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#061325] text-white pt-28 pb-24 lg:py-36 border-b border-slate-800"
      style={{
        backgroundImage: "url('/quantum-hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Rich Translucent Overlay so the Quantum Background Shines Through Clearly */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#051020]/90 via-[#07192e]/80 to-[#07192e]/55 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-[#38bdf8]/40 text-[#38bdf8] px-4 py-1.5 rounded-full text-xs uppercase tracking-[2.5px] font-semibold">
            <img
              src="/Logo_of_Ethiopian_INSA.png"
              alt="INSA"
              className="w-5 h-5 object-contain bg-white rounded-full p-0.5"
            />
            <span>INSA • Ethiopia&apos;s National Quantum Initiative</span>
          </div>

          <h1 className="font-serif-heading text-5xl sm:text-6xl lg:text-[64px] font-bold leading-[1.15] mt-8 text-white">
            Building Ethiopia&apos;s{" "}
            <span className="block text-[#38bdf8] mt-2">
              Quantum Future
            </span>
          </h1>

          <p className="mt-8 text-slate-200 text-lg sm:text-xl leading-relaxed max-w-2xl">
            Led by the Information Network Security Administration (INSA), this
            national platform connects universities, researchers, government
            institutions, and industry innovators to advance quantum computing,
            post-quantum cryptography, and scientific discovery across Ethiopia.
          </p>

          <div className="flex flex-wrap gap-5 mt-12">
            <Link
              to="/repository"
              className="bg-[#00a8e8] hover:bg-[#0284c7] transition px-8 py-4 rounded-lg font-semibold text-white shadow-lg"
            >
              Explore Research Repository
            </Link>

            <Link
              to="/submit-research"
              className="border border-white/30 bg-white/10 backdrop-blur-xs hover:border-[#38bdf8] hover:bg-white/15 transition px-8 py-4 rounded-lg font-semibold text-white"
            >
              Submit Research Paper
            </Link>
          </div>
        </div>

        {/* Right Column: Quantum Orbital Core with Official INSA Emblem */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#07192e]/60 backdrop-blur-md border border-[#38bdf8]/30 shadow-[0_0_80px_rgba(0,168,232,0.25)] flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 24,
                ease: "linear",
              }}
              className="absolute w-[310px] h-[310px] rounded-full border border-[#38bdf8]/40"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 16,
                ease: "linear",
              }}
              className="absolute w-[220px] h-[220px] rounded-full border border-[#00a8e8]/80"
            />

            <motion.div
              animate={{
                scale: [1, 1.06, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
              }}
              className="relative z-20 w-24 h-24 rounded-full bg-white p-3 shadow-[0_0_50px_#00a8e8] flex items-center justify-center"
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
              className="absolute w-[310px] h-[310px]"
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
              className="absolute w-[220px] h-[220px]"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;