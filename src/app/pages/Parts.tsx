import { motion } from "motion/react";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import { TriviaPopup } from "../components/TriviaPopup";

export function Parts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-12"
    >
      <TriviaPopup 
        title="Word Origin!"
        content="The word 'paragraph' comes from the Greek word 'paragraphos', which literally means 'written beside'!"
        color="orange"
      />

      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 tracking-tight pb-2">Parts & Organization</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
          Learn the three main parts of a paragraph and discover different ways to organize your writing.
        </p>
      </section>

      {/* The Burger Metaphor */}
      <section className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-orange-100/50 border border-orange-50 flex flex-col md:flex-row gap-10 items-center overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl -z-10" />
        <div className="flex-1 space-y-6 relative z-10">
          <h2 className="text-4xl font-black text-gray-900">The Burger Metaphor 🍔</h2>
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            To make this easier to understand, think of a paragraph like a delicious burger:
          </p>
          <ul className="space-y-4">
            <motion.li whileHover={{ x: 10 }} className="flex items-center gap-3 bg-orange-50 p-3 rounded-xl">
              <span className="bg-orange-500 text-white p-1.5 rounded-lg"><CheckCircle2 size={20} /></span>
              <span className="text-gray-800 text-lg"><strong>Top Bun:</strong> Topic Sentence</span>
            </motion.li>
            <motion.li whileHover={{ x: 10 }} className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
              <span className="bg-green-500 text-white p-1.5 rounded-lg"><CheckCircle2 size={20} /></span>
              <span className="text-gray-800 text-lg"><strong>Filling:</strong> Supporting Sentences</span>
            </motion.li>
            <motion.li whileHover={{ x: 10 }} className="flex items-center gap-3 bg-amber-50 p-3 rounded-xl">
              <span className="bg-amber-500 text-white p-1.5 rounded-lg"><CheckCircle2 size={20} /></span>
              <span className="text-gray-800 text-lg"><strong>Bottom Bun:</strong> Concluding Sentence</span>
            </motion.li>
          </ul>
        </div>
        <motion.div 
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", bounce: 0.6 }}
          className="flex-1 w-full max-w-sm relative z-10"
        >
          <img 
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXJ8ZW58MXx8fHwxNzc5NTE4MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Delicious burger showing layers" 
            className="w-full h-auto rounded-3xl shadow-2xl object-cover aspect-square border-4 border-white"
          />
        </motion.div>
      </section>

      {/* The 3 Parts Detail */}
      <section className="space-y-8">
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
          <h3 className="text-2xl font-bold text-orange-900 mb-3">1. Topic Sentence</h3>
          <p className="text-orange-800 mb-4">
            The topic sentence is usually the first sentence. It introduces the main idea, and every other sentence must support it. It contains:
          </p>
          <ul className="list-disc pl-5 text-orange-800 space-y-2 mb-4">
            <li><strong>Topic:</strong> The main subject matter or idea.</li>
            <li><strong>Controlling idea:</strong> This focuses the topic by providing direction to the composition.</li>
          </ul>
          <div className="bg-white/60 p-4 rounded-lg text-sm text-orange-900 border border-orange-200">
            <strong>Example:</strong> "Reading daily improves language skills." <br/>
            <strong>Topic Sentence:</strong> Reading daily <br/>
            <strong>Controlling Idea:</strong> improves language skills.
          </div>
        </div>

        <div className="flex justify-center text-gray-300">
          <ArrowDown size={32} />
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
          <h3 className="text-2xl font-bold text-green-900 mb-3">2. Supporting Sentences</h3>
          <p className="text-green-800 mb-4">
            They come after the topic sentence and make up the body of a paragraph. They provide details that develop and support the main idea.
          </p>
          <div className="bg-white/60 p-4 rounded-lg border border-green-200 mb-4">
            <h4 className="font-bold text-green-900 mb-2">Common Sources of Supporting Details:</h4>
            <div className="space-y-4 text-sm text-green-900">
              <div>
                <strong>• Statistics, polls, percentages:</strong>
                <p className="mt-1 opacity-90">Ex: Recent studies show that children exposed to structured learning activities outside the home are better able to adapt...</p>
              </div>
              <div>
                <strong>• Facts, details, reasons, examples:</strong>
                <p className="mt-1 opacity-90">Ex: Washington, D.C., has some of the most interesting landmarks and tourist spots, such as the Lincoln Memorial...</p>
              </div>
              <div>
                <strong>• Personal experience, stories, anecdotes:</strong>
                <p className="mt-1 opacity-90">Ex: My favorite dish is pasta with fresh vegetables. The pasta is cooked just right...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center text-gray-300">
          <ArrowDown size={32} />
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
          <h3 className="text-2xl font-bold text-amber-900 mb-3">3. Closing Sentences</h3>
          <p className="text-amber-800 mb-4">
            The concluding sentence is the last sentence. It signals that the paragraph is ending.
          </p>
          <ul className="list-disc pl-5 text-amber-800 space-y-2 mb-4">
            <li>Restates the main idea using different words.</li>
            <li>Summarizes the paragraph without repeating the exact same words.</li>
            <li>Gives the reader something to think about.</li>
          </ul>
          <div className="bg-white/60 p-4 rounded-lg text-sm text-amber-900 border border-amber-200">
            <strong>Example:</strong> <br/>
            <strong>Topic Sentence:</strong> Good time management helps students become more productive. <br/>
            <strong>Concluding Sentence:</strong> As a result, managing time properly can help students achieve better academic success and reduce stress.
          </div>
        </div>
      </section>

      {/* Organizing Ideas */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Organizing Ideas</h2>
        <p className="text-gray-700 mb-8">
          Organizing ideas is arranging information in a clear and logical order so the reader can easily understand the message. There are different ways to organize paragraphs depending on the purpose:
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: "Classification", desc: "Grouping similar things into categories. Each group shares common features." },
            { title: "Chronological Sequence", desc: "Organizes ideas based on time order. Events arranged from first to last." },
            { title: "Evidence and Illustration", desc: "Uses facts, examples, or details to support a main idea." },
            { title: "Comparison and Contrast", desc: "Shows how two or more things are alike or different." },
            { title: "Cause and Effect", desc: "Explains why something happens (cause) and what happens as a result (effect)." },
          ].map((item, idx) => (
            <div key={idx} className="p-5 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-indigo-700 mb-2">{idx + 1}. {item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
