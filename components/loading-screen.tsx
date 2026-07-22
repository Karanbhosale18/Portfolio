"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-canvas"
        >
          <motion.p
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
            className="font-mono text-sm tracking-[0.3em] text-primary-400"
          >
            {"<KARAN.DEV />"}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
