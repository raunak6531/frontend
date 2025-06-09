import { useNavigate } from 'react-router-dom';

const ExercisesSection = () => {
  const navigate = useNavigate();

  // Sample exercises data matching the original design exactly
  const exercises = [
    {
      id: 1,
      title: 'The Web Awakens – Creating Your First HTML Page',
      description: 'Every adventure begins somewhere. This one begins with your first-ever HTML page. Create a complete HTML document with proper structure and add a main heading.',
      technology: 'HTML/CSS',
      difficulty: 'Beginner',
      completed: true,
      progress: 100,
    },
    {
      id: 2,
      title: 'Speak Loud and Clear – Meet the Headings!',
      description: 'Headings are like signboards on the road. They help you organize your ideas and guide your readers. Create headings from big to small (h1 to h6).',
      technology: 'HTML/CSS',
      difficulty: 'Beginner',
      completed: true,
      progress: 100,
    },
    {
      id: 3,
      title: 'The Grocery Scroll – Unleashing Lists',
      description: "It's time to organize your pantry and cooking steps using lists! Create both unordered and ordered lists for a grocery list and sandwich-making steps.",
      technology: 'HTML/CSS',
      difficulty: 'Beginner',
      completed: true,
      progress: 100,
    },
    {
      id: 4,
      title: 'Picture Perfect – Adding an Image',
      description: 'Images speak louder than text sometimes. Time to decorate your webpage with an image of your favorite thing!',
      technology: 'HTML/CSS',
      difficulty: 'Beginner',
      completed: true,
      progress: 100,
    },
    {
      id: 5,
      title: 'The Great Divide – Sections, Classes & Divs',
      description: 'Think of your webpage like rooms in a house. Sections and divs help organize each room. Create sections with classes for better organization.',
      technology: 'HTML/CSS',
      difficulty: 'Beginner',
      completed: true,
      progress: 100,
    },
    {
      id: 6,
      title: 'What is CSS?',
      description: 'Imagine your website is a plain cake — CSS is the frosting and decorations that make it irresistible! Add global styles to make your webpage visually appealing.',
      technology: 'HTML/CSS',
      difficulty: 'Beginner',
      completed: true,
      progress: 100,
    },
  ];

  const handleReviewExercise = (exerciseId) => {
    navigate(`/compiler?id=${exerciseId}`);
  };

  return (
    <div className="exercises-section w-full mb-8">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 flex items-center justify-center">
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24" className="text-blue-400">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white">Frontend Development Exercises</h2>
      </div>

      {/* Exercises Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className="group bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-600/30 backdrop-blur-lg rounded-3xl p-7 relative overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] shadow-[0_4px_16px_rgba(0,0,0,0.3),0_0_8px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.5),0_0_20px_rgba(59,130,246,0.2)] hover:border-blue-500/40"
            style={{ animationDelay: `${exercise.id * 50}ms` }}
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

            {/* Header with badges */}
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium">
                  {exercise.technology}
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium">
                  {exercise.difficulty}
                </span>
              </div>
              {exercise.completed && (
                <div className="flex items-center gap-1 text-emerald-400 text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Completed
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:-translate-y-0.5 group-hover:text-shadow-lg transition-all duration-300 relative z-10">
              {exercise.title}
            </h3>

            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10 group-hover:-translate-y-0.5 group-hover:text-white/95 transition-all duration-300">
              {exercise.description}
            </p>

            {/* Progress Bar */}
            <div className="mb-4 relative z-10">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-slate-400">Progress</span>
                <span className="text-emerald-400 font-medium">{exercise.progress}% Complete</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500 ease-out group-hover:from-emerald-400 group-hover:to-teal-300"
                  style={{ width: `${exercise.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Review Button */}
            <button
              onClick={() => handleReviewExercise(exercise.id)}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/25 relative z-10 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              Review
            </button>


          </div>
        ))}
      </div>
    </div>
  );
};

export default ExercisesSection;