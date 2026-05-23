import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lightbulb, X } from "lucide-react";

interface TriviaProps {
  title: string;
  content: string;
  color?: "blue" | "purple" | "orange" | "rose" | "emerald";
}

export function TriviaPopup({ title, content, color = "purple" }: TriviaProps) {
  const [isOpen, setIsOpen] = useState(false);

  const colors = {
    blue: "bg-blue-500 hover:bg-blue-600",
    purple: "bg-purple-500 hover:bg-purple-600",
    orange: "bg-orange-500 hover:bg-orange-600",
    rose: "bg-rose-500 hover:bg-rose-600",
    emerald: "bg-emerald-500 hover:bg-emerald-600",
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 flex items-center justify-center w-16 h-16 rounded-full text-white shadow-xl ${colors[color]} animate-bounce`}
      >
        <Lightbulb size={32} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-3 ${colors[color]}`} />
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full p-2"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-4 mb-4 mt-2">
                <div className={`p-3 rounded-2xl text-white ${colors[color]}`}>
                  <Lightbulb size={32} />
                </div>
                <h3 className="text-2xl font-black text-gray-800">{title}</h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                {content}
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className={`mt-8 w-full py-3 rounded-xl text-white font-bold text-lg shadow-lg ${colors[color]}`}
              >
                Got it!
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
