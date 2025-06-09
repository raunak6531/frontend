const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: '🔥',
      value: '1',
      label: 'DAY STREAK',
      color: 'from-orange-500 to-red-500',
      glowColor: 'orange-500',
      bgGradient: 'from-orange-500/10 to-red-500/10',
      borderColor: 'border-orange-500/20',
    },
    {
      id: 2,
      icon: '⏳',
      value: '0s',
      label: 'LEARNING THIS WEEK',
      color: 'from-blue-400 to-cyan-400',
      glowColor: 'blue-400',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/20',
    },
    {
      id: 3,
      icon: '🎓',
      value: '7',
      label: 'CERTIFICATES EARNED',
      color: 'from-purple-500 to-indigo-500',
      glowColor: 'purple-500',
      bgGradient: 'from-purple-500/10 to-indigo-500/10',
      borderColor: 'border-purple-500/20',
    },
  ];

  return (
    <div className="stats-section flex flex-col lg:flex-row gap-6 mb-12 justify-center flex-wrap">
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className={`group relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-600/30 backdrop-blur-lg rounded-3xl p-8 min-w-[280px] cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] shadow-[0_4px_16px_rgba(0,0,0,0.3)] ${
            stat.id === 1 ? 'hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(251,146,60,0.3),inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-orange-400/50' :
            stat.id === 2 ? 'hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(56,189,248,0.3),inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-blue-400/50' :
            'hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(168,85,247,0.3),inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-purple-400/50'
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Icon Container */}
            <div className="relative mb-6 flex items-center justify-center h-20">
              <div className={`text-5xl transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 relative z-10 ${
                stat.id === 2 ? 'group-hover:animate-hourglassRotate' :
                stat.id === 3 ? 'group-hover:animate-bounce' : ''
              }`}>
                {stat.icon}
              </div>
              {/* Icon Glow - Specific to each card type */}
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-15 h-15 rounded-full opacity-60 group-hover:opacity-90 group-hover:scale-120 transition-all duration-300 ${
                stat.id === 1 ? 'bg-gradient-radial from-orange-400/40 via-yellow-400/20 to-transparent shadow-[0_0_20px_rgba(251,146,60,0.3)]' :
                stat.id === 2 ? 'bg-gradient-radial from-blue-400/40 via-cyan-400/20 to-transparent shadow-[0_0_20px_rgba(56,189,248,0.3)] animate-pulseGlow' :
                'bg-gradient-radial from-purple-400/40 via-indigo-400/20 to-transparent shadow-[0_0_20px_rgba(168,85,247,0.3)]'
              }`}></div>
            </div>

            {/* Value */}
            <div className={`text-5xl font-bold mb-2 transition-all duration-300 group-hover:-translate-y-1 ${
              stat.id === 1 ? 'bg-gradient-to-r from-orange-400 via-yellow-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,146,60,0.3)]' :
              stat.id === 2 ? 'bg-gradient-to-r from-blue-400 via-cyan-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]' :
              'text-purple-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]'
            }`}>
              {stat.value}
            </div>

            {/* Label */}
            <div className="text-slate-400 text-sm font-medium tracking-wider uppercase transition-colors duration-300 group-hover:text-slate-300">
              {stat.label}
            </div>
          </div>

          {/* Special effects for specific cards */}
          {stat.id === 1 && (
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
          )}
          {stat.id === 2 && (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
          )}
          {stat.id === 3 && (
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatsSection;