import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { CheckCircle, XCircle, Award, PartyPopper } from "lucide-react";
import confetti from "canvas-confetti";
import { TriviaPopup } from "../components/TriviaPopup";

export function Activities() {
  const [act1Answer, setAct1Answer] = useState("");
  const [act1Result, setAct1Result] = useState<boolean | null>(null);

  const [act2Order, setAct2Order] = useState("");
  const [act2Result, setAct2Result] = useState<boolean | null>(null);

  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const checkAct1 = () => {
    setAct1Result(act1Answer.trim() === "2");
  };

  const checkAct2 = () => {
    const cleanOrder = act2Order.replace(/[\s,]/g, "");
    setAct2Result(cleanOrder === "3142");
  };

  const quizQuestions = [
    {
      q: "1. Is a text compounded by several sentences written consecutively, managing to address the same topic.",
      options: ["Essay", "Paragraph", "Statement", "Article"],
      answer: "Paragraph",
      explanation: {
        correct: "Correct! A paragraph is precisely a group of consecutive sentences about one topic.",
        incorrect: "Not quite. An essay or article contains many paragraphs, but a paragraph itself is the basic unit describing a single topic."
      }
    },
    {
      q: "2. How many sentences does a paragraph MUST contain?",
      options: ["1 only", "None", "More than 1", "It depends on the context"],
      answer: "More than 1",
      explanation: {
        correct: "Correct! You need more than one sentence to fit a topic sentence, details, and a conclusion.",
        incorrect: "Incorrect. A single sentence cannot form a complete paragraph structure (topic + details + conclusion)."
      }
    },
    {
      q: "3. The perfect paragraph always starts with?",
      options: ["Topic Sentence", "Details", "Title", "Concluding Sentence"],
      answer: "Topic Sentence",
      explanation: {
        correct: "Correct! The topic sentence introduces the main idea right at the start.",
        incorrect: "Incorrect. Details come in the middle, and the concluding sentence is at the end."
      }
    },
    {
      q: "4. What is described as the “Backbone” of effective writing?",
      options: ["Perfect Grammar", "Vocabulary Choices", "Organization", "Paragraph Length"],
      answer: "Organization",
      explanation: {
        correct: "Correct! Organization provides the structure and logical flow for your ideas.",
        incorrect: "Incorrect. While grammar and vocabulary are important, organization is the structural backbone that holds ideas together."
      }
    },
    {
      q: "5. These are the information or facts that tell you about the main idea.",
      options: ["Conclusion", "Article details", "Abbreviated details", "Supporting details"],
      answer: "Supporting details",
      explanation: {
        correct: "Correct! Supporting details give facts and information about the main idea.",
        incorrect: "Incorrect. Supporting details are specifically the facts or evidence that explain the main idea."
      }
    }
  ];

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
    const score = getQuizScore();
    if (score === quizQuestions.length) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4f46e5', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444']
      });
    }
  };

  const getQuizScore = () => {
    let score = 0;
    quizQuestions.forEach((q, i) => {
      if (quizAnswers[i] === q.answer) score++;
    });
    return score;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-12 pb-24"
    >
      <TriviaPopup 
        title="Challenge Time!"
        content="Don't worry if you get something wrong. Making mistakes is a crucial part of learning how to write perfectly!"
        color="emerald"
      />

      <section className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-200/50 h-[300px] group">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nfGVufDF8fHx8MTc3OTM3MjgxNHww&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Students Studying" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-indigo-900/60 to-transparent flex items-end justify-center p-12 text-center">
          <div>
            <h1 className="text-5xl font-black text-white tracking-tight mb-4 drop-shadow-lg">Activities & Assessment</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto font-medium">
              Test your knowledge and practice what you've learned.
            </p>
          </div>
        </div>
      </section>

      {/* Activity 1 */}
      <section className="bg-white p-8 rounded-3xl shadow-xl shadow-blue-100/50 border-t-8 border-blue-500">
        <h2 className="text-3xl font-black text-gray-900 mb-4 flex items-center gap-3">
          <span className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-xl shadow-lg">1</span>
          Identify the Topic Sentence
        </h2>
        <p className="text-gray-600 text-lg mb-6 font-medium">Read the paragraph below carefully. Identify which sentence acts as the Topic Sentence.</p>
        
        <div className="bg-blue-50/50 p-6 rounded-2xl text-gray-800 leading-relaxed mb-6 border border-blue-100 font-medium text-lg">
          <strong className="text-blue-600">[1]</strong> You need to pack fresh water, high-energy snacks, a sturdy map, and a basic first-aid kit. <br/><br/>
          <strong className="text-blue-600">[2]</strong> Preparing a reliable survival pack is essential before heading out on any wilderness hiking trip. <br/><br/>
          <strong className="text-blue-600">[3]</strong> A knife or multi-tool can also help you handle unexpected mechanical issues or clear small branches on the trail. <br/><br/>
          <strong className="text-blue-600">[4]</strong> Finally, matches stored in a waterproof container ensure you can build a fire if the temperature drops at night.
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <label className="font-bold text-gray-700 text-lg">Your Answer (Sentence #):</label>
          <div className="flex items-center gap-3">
            <input 
              type="number" 
              min="1" max="4"
              value={act1Answer}
              onChange={(e) => {
                setAct1Answer(e.target.value);
                setAct1Result(null);
              }}
              className="w-24 px-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all font-bold text-center"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={checkAct1}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors text-lg"
            >
              Check
            </motion.button>
          </div>
        </div>
          
        <AnimatePresence>
          {act1Result !== null && (
            <motion.div 
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 24 }}
              className={`p-5 rounded-2xl border-2 ${act1Result ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}
            >
              <div className={`flex items-center gap-2 font-black text-xl mb-2 ${act1Result ? 'text-green-600' : 'text-red-600'}`}>
                {act1Result ? <><CheckCircle size={24} /> Correct!</> : <><XCircle size={24} /> Try again.</>}
              </div>
              <p className={`font-medium ${act1Result ? 'text-green-800' : 'text-red-800'}`}>
                {act1Result 
                  ? "Right! Sentence 2 states the main idea which is about preparing a survival pack. The other sentences list specific items (details)."
                  : "Incorrect. This sentence is a supporting detail providing an example of what to pack, not the main idea."}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Activity 2 */}
      <section className="bg-white p-8 rounded-3xl shadow-xl shadow-purple-100/50 border-t-8 border-purple-500">
        <h2 className="text-3xl font-black text-gray-900 mb-4 flex items-center gap-3">
          <span className="bg-purple-500 text-white w-10 h-10 flex items-center justify-center rounded-xl shadow-lg">2</span>
          Arrange The Sentence
        </h2>
        <p className="text-gray-600 text-lg mb-6 font-medium">The following sentences are scrambled. Order them by number so they form a logically organized paragraph.</p>
        
        <div className="space-y-4 mb-8">
          <motion.div whileHover={{ scale: 1.01 }} className="p-4 bg-white border-2 border-purple-100 rounded-2xl shadow-sm text-lg font-medium"><strong className="text-purple-600 bg-purple-50 px-2 py-1 rounded mr-2">[1]</strong> For instance, a 2022 study published in the Journal of Education revealed that schools utilizing interactive digital modules saw a 15% increase in student retention rates.</motion.div>
          <motion.div whileHover={{ scale: 1.01 }} className="p-4 bg-white border-2 border-purple-100 rounded-2xl shadow-sm text-lg font-medium"><strong className="text-purple-600 bg-purple-50 px-2 py-1 rounded mr-2">[2]</strong> In conclusion, incorporating multimedia tools into modern lessons is a highly effective strategy for boosting student engagement.</motion.div>
          <motion.div whileHover={{ scale: 1.01 }} className="p-4 bg-white border-2 border-purple-100 rounded-2xl shadow-sm text-lg font-medium"><strong className="text-purple-600 bg-purple-50 px-2 py-1 rounded mr-2">[3]</strong> Classrooms that integrate dynamic multimedia elements create a significantly more stimulating learning environment for students.</motion.div>
          <motion.div whileHover={{ scale: 1.01 }} className="p-4 bg-white border-2 border-purple-100 rounded-2xl shadow-sm text-lg font-medium"><strong className="text-purple-600 bg-purple-50 px-2 py-1 rounded mr-2">[4]</strong> On top of that, digital resources allow teachers to instantly adapt visual materials to fit different learning speeds and student needs.</motion.div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <label className="font-bold text-gray-700 text-lg">Correct Order (e.g., 1,2,3,4):</label>
          <div className="flex items-center gap-3">
            <input 
              type="text" 
              value={act2Order}
              onChange={(e) => {
                setAct2Order(e.target.value);
                setAct2Result(null);
              }}
              placeholder="_, _, _, _"
              className="w-40 px-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all font-bold text-center tracking-widest"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={checkAct2}
              className="bg-purple-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-purple-200 hover:bg-purple-700 transition-colors text-lg"
            >
              Check
            </motion.button>
          </div>
        </div>
          
        <AnimatePresence>
          {act2Result !== null && (
            <motion.div 
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 24 }}
              className={`p-5 rounded-2xl border-2 ${act2Result ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}
            >
              <div className={`flex items-center gap-2 font-black text-xl mb-2 ${act2Result ? 'text-green-600' : 'text-red-600'}`}>
                {act2Result ? <><CheckCircle size={24} /> Correct!</> : <><XCircle size={24} /> Try again.</>}
              </div>
              <p className={`font-medium ${act2Result ? 'text-green-800' : 'text-red-800'}`}>
                {act2Result 
                  ? "Right! Sentence 3 introduces the topic of multimedia. 1 gives a specific example. 4 adds another benefit. 2 concludes the thought."
                  : "Not quite. Remember: start with the general topic (3), provide examples/evidence (1, 4), and finish with a conclusion (2)."}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Multiple Choice Assessment */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 p-10 rounded-[2.5rem] shadow-xl border border-white/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-50 -z-10" />
        
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-indigo-600 p-3 rounded-2xl text-white shadow-lg shadow-indigo-200">
            <Award size={36} />
          </div>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">Final Assessment</h2>
        </div>
        
        <div className="space-y-8 relative z-10">
          {quizQuestions.map((q, qIndex) => (
            <motion.div 
              key={qIndex} 
              whileHover={!quizSubmitted ? { y: -2 } : {}}
              className="bg-white p-8 rounded-3xl shadow-md border border-gray-100"
            >
              <h3 className="font-black text-xl text-gray-900 mb-6">{q.q}</h3>
              <div className="space-y-3">
                {q.options.map((opt, optIndex) => {
                  const isSelected = quizAnswers[qIndex] === opt;
                  const isCorrectAnswer = opt === q.answer;
                  const showCorrect = quizSubmitted && isCorrectAnswer;
                  const showWrong = quizSubmitted && isSelected && !isCorrectAnswer;
                  
                  return (
                    <label key={optIndex} className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer border-2 transition-all duration-300
                      ${isSelected && !quizSubmitted ? 'bg-indigo-50 border-indigo-500 shadow-sm' : 'hover:bg-gray-50 border-gray-100'}
                      ${showCorrect ? 'bg-green-50 border-green-500 shadow-sm' : ''}
                      ${showWrong ? 'bg-red-50 border-red-500 shadow-sm' : ''}
                      ${quizSubmitted && !isSelected && !isCorrectAnswer ? 'opacity-50 grayscale' : ''}
                    `}>
                      <input 
                        type="radio" 
                        name={`q-${qIndex}`} 
                        value={opt}
                        checked={isSelected}
                        onChange={() => {
                          if (!quizSubmitted) {
                            setQuizAnswers({...quizAnswers, [qIndex]: opt});
                          }
                        }}
                        disabled={quizSubmitted}
                        className="w-5 h-5 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      />
                      <span className={`text-lg font-medium ${showCorrect ? 'text-green-800' : showWrong ? 'text-red-800' : 'text-gray-700'}`}>
                        {opt}
                      </span>
                      {showCorrect && <CheckCircle size={24} className="text-green-600 ml-auto" />}
                      {showWrong && <XCircle size={24} className="text-red-600 ml-auto" />}
                    </label>
                  );
                })}
              </div>

              <AnimatePresence>
                {quizSubmitted && quizAnswers[qIndex] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                    className={`p-5 rounded-2xl ${quizAnswers[qIndex] === q.answer ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
                  >
                    <p className="font-medium text-lg">
                      {quizAnswers[qIndex] === q.answer ? q.explanation?.correct : q.explanation?.incorrect}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center relative z-10">
          {!quizSubmitted ? (
            <motion.button 
              whileHover={{ scale: Object.keys(quizAnswers).length < quizQuestions.length ? 1 : 1.05 }}
              whileTap={{ scale: Object.keys(quizAnswers).length < quizQuestions.length ? 1 : 0.95 }}
              onClick={handleQuizSubmit}
              disabled={Object.keys(quizAnswers).length < quizQuestions.length}
              className="bg-indigo-600 text-white px-10 py-4 rounded-2xl text-xl font-black shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Assessment
            </motion.button>
          ) : (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white p-10 rounded-[2rem] inline-block border-4 border-indigo-100 shadow-2xl relative overflow-hidden"
            >
              {getQuizScore() === quizQuestions.length && (
                <div className="absolute -top-4 -left-4 text-yellow-400 rotate-[-15deg] opacity-20">
                  <PartyPopper size={120} />
                </div>
              )}
              <h3 className="text-3xl font-black text-gray-900 mb-4 relative z-10">Your Final Score</h3>
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4 relative z-10">
                {getQuizScore()} <span className="text-4xl text-gray-400">/ {quizQuestions.length}</span>
              </div>
              <p className="text-xl text-gray-600 font-medium mb-8 relative z-10 max-w-sm">
                {getQuizScore() === quizQuestions.length ? "Absolutely Perfect! You're an official Paragraph Master! 🎉" : "Great effort! Review the materials and try again to get a perfect score! 💪"}
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setQuizSubmitted(false);
                  setQuizAnswers({});
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-gray-800 transition-colors relative z-10"
              >
                Retake Quiz
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
