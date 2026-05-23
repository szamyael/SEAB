import { motion } from "motion/react";
import { PenTool, Target, AlignLeft, Lightbulb, Layers, Sparkles } from "lucide-react";
import { useState } from "react";
import { TriviaPopup } from "../components/TriviaPopup";

export function Home() {
  const [mainIdea, setMainIdea] = useState("");
  const [details, setDetails] = useState(["", "", ""]);

  const handleDetailChange = (index: number, value: string) => {
    const newDetails = [...details];
    newDetails[index] = value;
    setDetails(newDetails);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-12"
    >
      <TriviaPopup 
        title="Did you know?"
        content="The longest paragraph in a novel is in Les Misérables by Victor Hugo... it's over 800 words long! That's one huge paragraph."
        color="blue"
      />

      {/* Hero Section */}
      <motion.section 
        whileHover={{ scale: 1.01 }}
        className="text-center space-y-6 bg-gradient-to-br from-indigo-50 to-blue-50 p-10 rounded-[2.5rem] shadow-sm border border-white/50 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 -mt-16 -mr-16 text-indigo-100 opacity-50 pointer-events-none group-hover:rotate-12 transition-transform duration-700">
          <AlignLeft size={256} />
        </div>
        <div className="absolute bottom-10 left-10 text-blue-200 opacity-40 pointer-events-none animate-pulse">
          <Sparkles size={64} />
        </div>
        <div className="relative z-10">
          <motion.h1 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight"
          >
            Mastering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Paragraph</span>
          </motion.h1>
          <p className="text-2xl text-gray-700 max-w-2xl mx-auto mt-6 leading-relaxed font-medium">
            Letters form words, words form sentences, and sentences form what we call paragraphs. Let's learn how to structure them perfectly!
          </p>
        </div>
      </motion.section>

      {/* What is a Paragraph */}
      <section className="grid md:grid-cols-2 gap-8">
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white p-8 rounded-3xl shadow-lg shadow-blue-100/50 border border-blue-50 flex flex-col justify-center relative overflow-hidden"
        >
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full blur-2xl" />
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="bg-blue-500 p-3 rounded-2xl text-white shadow-lg shadow-blue-200">
              <PenTool size={28} />
            </div>
            <h2 className="text-3xl font-black text-gray-900">What is it?</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium relative z-10">
            A paragraph is a text compounded by several sentences written consecutively, managing to address the same topic. What you are reading right now is a paragraph!
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl text-base text-blue-900 font-medium relative z-10">
            They always start with a capital letter. A paragraph ends when the idea has been fully developed.
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white p-8 rounded-3xl shadow-lg shadow-purple-100/50 border border-purple-50 flex flex-col justify-center relative overflow-hidden"
        >
          <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-purple-50 rounded-full blur-3xl" />
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="bg-purple-500 p-3 rounded-2xl text-white shadow-lg shadow-purple-200">
              <Target size={28} />
            </div>
            <h2 className="text-3xl font-black text-gray-900">Another Look</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium relative z-10">
            A Paragraph is a distinct section of a writing covering one topic. A paragraph will usually contain <strong>more than one sentence</strong>. 
          </p>
          <div className="bg-purple-50 p-5 rounded-xl text-base text-purple-900 font-medium relative z-10">
            A typical paragraph consists of 5-7 sentences, but the length depends entirely on the topic and content!
          </div>
        </motion.div>
      </section>

      {/* Meet The Team */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Meet the Team</h2>
          <p className="text-center text-gray-600 mb-8">Our team behind ParagraphMaster.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center">
              <img src="/lib/Irish.jpg" alt="Irish" className="w-32 h-32 rounded-full object-cover" />
              <div className="mt-4 text-center">
                <p className="font-bold text-lg text-gray-900">Irish Jane Cantara</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center">
              <img src="/lib/Jenelyn.jpg" alt="Jenelyn" className="w-32 h-32 rounded-full object-cover" />
              <div className="mt-4 text-center">
                <p className="font-bold text-lg text-gray-900">Jenelyn Cagayat</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center">
              <img src="/lib/Julius.jpg" alt="Julius" className="w-32 h-32 rounded-full object-cover" />
              <div className="mt-4 text-center">
                <p className="font-bold text-lg text-gray-900">Julius Marco Llamoso</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center">
              <img src="/lib/Lycka.jpg" alt="Lycka" className="w-32 h-32 rounded-full object-cover" />
              <div className="mt-4 text-center">
                <p className="font-bold text-lg text-gray-900">Lycka Marie Yasoña</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center">
              <img src="/lib/Sean.jpg" alt="Sean" className="w-32 h-32 rounded-full object-cover" />
              <div className="mt-4 text-center">
                <p className="font-bold text-lg text-gray-900">Sean Vincent Balota</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center">
              <img src="/lib/Sheve.jpg" alt="Sheve" className="w-32 h-32 rounded-full object-cover" />
              <div className="mt-4 text-center">
                <p className="font-bold text-lg text-gray-900">Sheve Aron Gabane</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Perfect Paragraph Example */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Perfect Paragraph</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          It will start with a topic sentence. It will have detailed sentences in the middle and end with a concluding sentence. It only covers one topic from start to finish.
        </p>

        <div className="max-w-5xl mx-auto border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-gray-900 text-white font-bold p-3 text-center">
            "The Perfect Paragraph"
          </div>
          <div className="p-8">
            <div className="mb-4 text-center text-sm text-gray-600">
              Examples broken into Topic, Details, and Conclusion — each column contains three cards for clarity.
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Topic column */}
              <div>
                <h4 className="text-green-700 font-bold mb-4 uppercase tracking-wide">Topic</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl border-l-4 border-green-500">
                    <p className="text-gray-800 font-semibold">Sharks are a group of fish characterized by a cartilaginous skeleton, five to seven gills, and pectoral fins that are not fused to the head.</p>
                  </div>
                </div>
              </div>

              {/* Details column */}
              <div>
                <h4 className="text-blue-700 font-bold mb-4 uppercase tracking-wide">Details</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl border-l-4 border-blue-500">
                    <p className="text-gray-700">Today's sharks are classified with the Selachimorpha clade, a sister group to the rays. The term has also been used for some extinct relatives.</p>
                  </div>

                </div>
              </div>

              {/* Conclusion column */}
              <div>
                <h4 className="text-red-700 font-bold mb-4 uppercase tracking-wide">Conclusion</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl border-l-4 border-red-500">
                    <p className="text-gray-800 font-semibold text-red-800">Under a broad definition, the earliest known sharks date from more than 420 million years ago.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization, Main Idea, Supporting Details */}
      <section className="space-y-8">
        <div className="bg-indigo-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">Organization in Writing</h2>
          <p className="text-indigo-800 leading-relaxed">
            Organization is the backbone of any well-written piece. It provides structure, coherence, and a logical flow that guides readers from the beginning to the end. For readers to understand your paragraph, you need to make sure your sentences are organized.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="text-amber-500" />
              <h3 className="text-xl font-bold text-gray-900">Main Idea</h3>
            </div>
            <p className="text-gray-700 mb-4">The "main idea" is the topic or most important point of a writing, picture, or conversation.</p>
            <div className="bg-amber-50 text-amber-800 p-3 rounded-lg font-medium text-center">
              Main Idea = What it's about
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="text-emerald-500" />
              <h3 className="text-xl font-bold text-gray-900">Supporting Details</h3>
            </div>
            <p className="text-gray-700 mb-4">The "supporting details" of the text, picture, or conversation are the facts that tell you about the main idea.</p>
            <div className="bg-emerald-50 text-emerald-800 p-3 rounded-lg font-medium text-center">
              Supporting Details = Information about the Topic
            </div>
          </div>
        </div>

        {/* Zoo Example */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Sample Text Analysis</h3>
          <div className="p-4 bg-gray-50 rounded-lg text-gray-800 leading-relaxed mb-4">
            <span className="font-bold underline">The zoo is the best place to go for a field trip.</span> The zoo has many different animals that you can observe in their natural habitats. You can learn a lot about the animals at the zoo. There is also food at the zoo in case you get hungry while you are there. The zoo is big so there is plenty of room to move and play. <span className="italic">We should go to the zoo on field trips more often.</span>
          </div>
          <p className="text-gray-600 text-sm italic text-center">
            The main idea is that the zoo is the best place to go, and the sentences after are the evidence or reasons that support the main idea.
          </p>
        </div>
      </section>
    </motion.div>
  );
}
