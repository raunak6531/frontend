const LeaderboardSection = () => {
  const topPerformers = [
    {
      id: 1,
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      challenges: 15,
      timeSpent: '8h 30m',
      progress: 95,
      rank: 1,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      challenges: 12,
      timeSpent: '6h 45m',
      progress: 80,
      rank: 2,
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      challenges: 10,
      timeSpent: '5h 20m',
      progress: 70,
      rank: 3,
    },
    {
      id: 4,
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      challenges: 8,
      timeSpent: '4h 15m',
      progress: 60,
      rank: 4,
    },
    {
      id: 5,
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      challenges: 7,
      timeSpent: '3h 50m',
      progress: 50,
      rank: 5,
    },
  ];

  const getRankBadgeClass = (rank) => {
    if (rank === 1) return 'rank-badge gold';
    if (rank === 2) return 'rank-badge silver';
    if (rank === 3) return 'rank-badge bronze';
    return 'rank-badge';
  };

  const getTrophyIcon = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return '';
  };

  const getGlowClass = (rank) => {
    if (rank === 1) return 'gold-glow';
    if (rank === 2) return 'silver-glow';
    if (rank === 3) return 'bronze-glow';
    return '';
  };

  return (
    <div id="leaderboard" className="mb-8 bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-600/30 backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden shadow-2xl">
      <div className="text-center mb-8 relative">
        <h3 className="text-3xl font-bold text-white m-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
          🏆 Top Performers This Week
        </h3>
        <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 w-full h-15 pointer-events-none">
          <div className="absolute left-[20%] text-2xl animate-sparkleFloat">✨</div>
          <div className="absolute left-1/2 text-2xl animate-sparkleFloat [animation-delay:1s]">⭐</div>
          <div className="absolute left-[80%] text-2xl animate-sparkleFloat [animation-delay:2s]">✨</div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {topPerformers.map((performer) => {
          const getGlowEffects = (rank) => {
            switch(rank) {
              case 1:
                return {
                  base: "shadow-[0_4px_20px_rgba(0,0,0,0.3),0_0_15px_rgba(255,215,0,0.1)]",
                  hover: "hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(255,215,0,0.4),0_0_60px_rgba(255,215,0,0.2)] hover:border-yellow-400/50"
                };
              case 2:
                return {
                  base: "shadow-[0_4px_20px_rgba(0,0,0,0.3),0_0_15px_rgba(192,192,192,0.1)]",
                  hover: "hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(192,192,192,0.4),0_0_60px_rgba(192,192,192,0.2)] hover:border-gray-300/50"
                };
              case 3:
                return {
                  base: "shadow-[0_4px_20px_rgba(0,0,0,0.3),0_0_15px_rgba(205,127,50,0.1)]",
                  hover: "hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(205,127,50,0.4),0_0_60px_rgba(205,127,50,0.2)] hover:border-amber-600/50"
                };
              default:
                return {
                  base: "shadow-[0_4px_20px_rgba(0,0,0,0.3),0_0_15px_rgba(59,130,246,0.05)]",
                  hover: "hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(59,130,246,0.3),0_0_60px_rgba(59,130,246,0.1)] hover:border-blue-500/40"
                };
            }
          };

          const glowEffects = getGlowEffects(performer.rank);

          return (
            <div
              key={performer.id}
              className={`group flex items-center p-5 bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-slate-600/30 rounded-2xl relative overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] ${glowEffects.base} ${glowEffects.hover}`}
              data-rank={performer.rank}
            >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

            {/* Rank Badge */}
            <div className={`
              flex flex-col items-center justify-center w-16 h-16 rounded-2xl mr-4 relative transition-all duration-300
              ${performer.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg shadow-yellow-500/30 group-hover:shadow-yellow-500/50 group-hover:scale-110' : ''}
              ${performer.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-400 shadow-lg shadow-gray-400/30 group-hover:shadow-gray-400/50 group-hover:scale-110' : ''}
              ${performer.rank === 3 ? 'bg-gradient-to-br from-amber-600 to-orange-700 shadow-lg shadow-amber-600/30 group-hover:shadow-amber-600/50 group-hover:scale-110' : ''}
              ${performer.rank > 3 ? 'bg-gradient-to-br from-slate-600 to-slate-700 group-hover:scale-110' : ''}
            `}>
              <span className="text-white font-bold text-lg">{performer.rank}</span>
              {performer.rank <= 3 && (
                <div className="text-sm">{getTrophyIcon(performer.rank)}</div>
              )}
            </div>

            {/* Avatar */}
            <div className="relative mr-4">
              <img
                src={performer.avatar}
                alt={performer.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-white/20 relative z-10"
              />
              {performer.rank <= 3 && (
                <div className={`
                  absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  ${performer.rank === 1 ? 'bg-gradient-radial from-yellow-400/40 to-transparent' : ''}
                  ${performer.rank === 2 ? 'bg-gradient-radial from-gray-300/40 to-transparent' : ''}
                  ${performer.rank === 3 ? 'bg-gradient-radial from-amber-600/40 to-transparent' : ''}
                `}></div>
              )}
            </div>

            {/* Performer Info */}
            <div className="flex-1">
              <h4 className="text-white font-semibold text-lg mb-2">{performer.name}</h4>
              <div className="flex gap-4 mb-3 text-sm">
                <span className="text-emerald-400 font-medium">{performer.challenges} Challenges</span>
                <span className="text-blue-400 font-medium">{performer.timeSpent}</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2 mb-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${performer.progress}%` }}
                ></div>
              </div>
              <span className="text-white/70 text-sm">{performer.progress}% Weekly Goal</span>
            </div>

            {/* Confetti for rank 1 */}
            {performer.rank === 1 && (
              <div className="absolute inset-0 pointer-events-none z-10">
                <div className="absolute top-[10%] left-[10%] text-2xl animate-confettiFall">🎉</div>
                <div className="absolute top-[20%] right-[10%] text-2xl animate-confettiFall [animation-delay:2s]">🎊</div>
              </div>
            )}
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeaderboardSection;