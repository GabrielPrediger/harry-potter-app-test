import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.div
      className="relative w-full h-screen flex items-center justify-center bg-primary overflow-hidden"
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: "0%" }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-1 bg-primary">
        <div className="h-full flex flex-col items-center justify-center">
          <h1 className="font-rakkas sm:text-2xl text-4xl">Welcome to the</h1>
          <p className="sm:text-center sm:text-3xl pt-6 font-harry uppercase tablet-mm:text-6xl">Harry Potter Api</p>
          <Link to="/characters" className="text-yellow-600 hover:underline">
            <button className="mt-5 text-base font-medium px-8 py-2 w-max h-max border-2 border-yellow-600 rounded-xl duration-75 ease-in-out hover:opacity-85">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
