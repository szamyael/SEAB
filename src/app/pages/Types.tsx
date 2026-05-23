import { motion } from "motion/react";
import { BookOpen, Edit3, CheckSquare, Send, Shuffle, Sparkles, Navigation } from "lucide-react";
import { TriviaPopup } from "../components/TriviaPopup";

export function Types() {
  const steps = [
    { icon: <Sparkles />, title: "Prewriting", desc: "The process of thinking about your topic and organizing your thoughts before writing them down. Find your ideas; build on them; plan and structure." },
    { icon: <Edit3 />, title: "Drafting", desc: "The process of putting your ideas down on paper without worrying about word count, structure, or grammar." },
    { icon: <Shuffle />, title: "Revising", desc: "The process of refining, adding to or taking away, and reorganizing your writing to make it stronger." },
    { icon: <CheckSquare />, title: "Editing", desc: "The process of fixing any grammatical and spelling errors in your writing. Check word count." },
    { icon: <Send />, title: "Publish", desc: "The process of preparing and sharing your finished copy of your essay with those it was targeted for." }
  ];

  const types = [
    {
      title: "Descriptive Paragraph",
      desc: "A piece of writing in which the writer enlightens the reader with details on a specific topic. The author employs vivid imagery to entice the reader's senses. It makes it easier for the reader to envision themselves existing in the environment that the author depicts.",
      example: '"The lights grow brighter as the earth lurches away from the sun, and now the orchestra is playing yellow cocktail music, and the opera of voices pitches a key higher..." (F. Scott Fitzgerald)',
      color: "blue"
    },
    {
      title: "Expository Paragraph",
      desc: "Provides an explanation and guidance. It may also explain how to do something and lead the reader through each step. This kind of paragraph needs a lot of research by the writer.",
      example: '"All toilet flush tanks work about the same. When the toilet is flushed, the trip handle lifts the tank ball, opening the outlet and letting water flow into the bowl..."',
      color: "emerald"
    },
    {
      title: "Narrative Paragraph",
      desc: "Contributes to the narrative and ensures that the plot continues to progress. Paragraphs that tell a story will have action, incidents, and intriguing phrases. It provides background information.",
      example: '"It’s been almost ten years since I first ran for political office. I was thirty-five at the time, four years out of law school, recently married, and generally impatient with life..." (Barack Obama)',
      color: "purple"
    },
    {
      title: "Persuasive Paragraph",
      desc: "Attracts the reader's attention or makes them comprehend and embrace your perspective. These are rhetorical passages that use factual details to support the discussion and make it more credible. The author intends to sway the audience's perspectives.",
      example: '"If you choose to use your position and influence to raise your voice on behalf of those who have no voice; if you choose to point not only to the powerful, but also to the weak... we have the power to think better." (Anon Writer)',
      color: "rose"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-12"
    >
      <TriviaPopup 
        title="Take Note!"
        content="Different writing needs different paragraphs! If you want to tell a story, use Narrative. If you want to argue a point, use Persuasive!"
        color="purple"
      />

      {/* Header with Image */}
      <section className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-purple-200/50 h-[350px] group">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBld3JpdGVyfGVufDF8fHx8MTc3OTUyNzMyNXww&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Vintage Typewriter" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent flex items-end justify-center p-12 text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-lg">Types & Process</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-medium">
              Explore the different styles of paragraphs and the 5-step writing process.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Paragraphs */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-purple-600" size={32} />
          <h2 className="text-4xl font-black text-gray-900">Types of Paragraphs</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {types.map((type, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -8, scale: 1.02 }}
              className={`bg-white p-8 rounded-3xl border-t-8 shadow-lg flex flex-col relative overflow-hidden group
              ${type.color === 'blue' ? 'border-blue-500 shadow-blue-100' : ''}
              ${type.color === 'emerald' ? 'border-emerald-500 shadow-emerald-100' : ''}
              ${type.color === 'purple' ? 'border-purple-500 shadow-purple-100' : ''}
              ${type.color === 'rose' ? 'border-rose-500 shadow-rose-100' : ''}
            `}>
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 -z-10 group-hover:scale-150 transition-transform duration-500
                ${type.color === 'blue' ? 'bg-blue-500' : ''}
                ${type.color === 'emerald' ? 'bg-emerald-500' : ''}
                ${type.color === 'purple' ? 'bg-purple-500' : ''}
                ${type.color === 'rose' ? 'bg-rose-500' : ''}
              `} />
              <h3 className="text-2xl font-black text-gray-900 mb-4">{type.title}</h3>
              <p className="text-gray-600 text-base mb-6 flex-grow font-medium leading-relaxed">{type.desc}</p>
              <div className="bg-gray-50/80 backdrop-blur-sm p-5 rounded-2xl text-sm text-gray-800 italic border border-gray-100 relative z-10">
                <strong className="text-indigo-600 font-bold block mb-1">Example:</strong> {type.example}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Writing Process */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100 shadow-sm">
        <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">The 5-Step Writing Process</h2>
        
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-300 before:to-transparent">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {step.icon}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl shadow-sm bg-white border border-gray-100">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-lg text-indigo-700">Step {idx + 1}: {step.title}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

