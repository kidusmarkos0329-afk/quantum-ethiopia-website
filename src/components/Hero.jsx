import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white"
    >

      <div className="absolute w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-3xl -top-40 -right-40"></div>

      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl -bottom-40 -left-40"></div>

      <div className="max-w-7xl mx-auto px-8 py-32 grid lg:grid-cols-2 gap-20 items-center relative z-10">

        <div>

          <span className="inline-block bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 px-5 py-2 rounded-full text-sm tracking-wider">
            Ethiopia's National Quantum Initiative
          </span>

          <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight mt-8">

            Building Ethiopia's

            <span className="block text-cyan-400">
              Quantum Future
            </span>

          </h1>

          <p className="mt-8 text-slate-300 text-xl leading-9 max-w-2xl">
            A national platform connecting researchers,
            universities, government institutions,
            industry, innovators, and students to
            accelerate quantum computing research,
            education, and innovation across Ethiopia.
          </p>

          <div className="flex flex-wrap gap-5 mt-12">

            <Link
              to="/repository"
              className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl font-semibold flex items-center gap-3 text-slate-950"
            >
              Explore Repository
              <FaArrowRight />
            </Link>

            <Link
              to="/about"
              className="border border-cyan-500 hover:bg-cyan-500/10 transition px-8 py-4 rounded-xl font-semibold"
            >
              Learn More
            </Link>

          </div>

        </div>


        <div className="flex justify-center">

          <div className="relative w-[500px] h-[500px] flex items-center justify-center">

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 18,
                ease: "linear",
              }}
              className="absolute w-[420px] h-[420px] rounded-full border border-cyan-400/40"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "linear",
              }}
              className="absolute w-[320px] h-[320px] rounded-full border-2 border-cyan-300"
            />

            <motion.div
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="w-28 h-28 rounded-full bg-cyan-400 shadow-[0_0_80px_#22d3ee]"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "linear",
              }}
              className="absolute w-[420px] h-[420px]"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-cyan-300 shadow-lg"></div>
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
              className="absolute w-[320px] h-[320px]"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white"></div>
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 14,
                ease: "linear",
              }}
              className="absolute w-[500px] h-[500px]"
            >
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-5 h-5 rounded-full bg-cyan-500"></div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;