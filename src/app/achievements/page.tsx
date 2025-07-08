import React from 'react';
import Link from 'next/link';

export default function Achievements() {
  const achievements = [
    { id: 1, title: 'First Upload', description: 'Upload your first piece of content', icon: '🎬', earned: true, rarity: 'Common' },
    { id: 2, title: 'Viral Velocity', description: 'Get 100K views in first hour', icon: '⚡', earned: true, rarity: 'Epic' },
    { id: 3, title: 'Content Creator', description: 'Upload 10 pieces of content', icon: '📱', earned: true, rarity: 'Rare' },
    { id: 4, title: 'Engagement Master', description: 'Get 1000 total likes', icon: '❤️', earned: true, rarity: 'Rare' },
    { id: 5, title: 'Viral Phenomenon', description: 'Get 1M total views', icon: '🌟', earned: false, rarity: 'Legendary' },
    { id: 6, title: 'Speed Creator', description: 'Upload 5 posts in one day', icon: '🚀', earned: true, rarity: 'Uncommon' },
    { id: 7, title: 'Platform Master', description: 'Go viral on all 3 platforms', icon: '🏆', earned: false, rarity: 'Epic' },
    { id: 8, title: 'Consistency King', description: 'Upload daily for 30 days', icon: '📅', earned: false, rarity: 'Rare' },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'bg-gray-100 text-gray-700';
      case 'Uncommon': return 'bg-green-100 text-green-700';
      case 'Rare': return 'bg-blue-100 text-blue-700';
      case 'Epic': return 'bg-purple-100 text-purple-700';
      case 'Legendary': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VDU</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Viral Dental Universe</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
              <Link href="/leaderboard" className="text-gray-600 hover:text-gray-900">Leaderboard</Link>
              <Link href="/achievements" className="text-blue-600 font-medium">Achievements</Link>
              <Link href="/create" className="text-gray-600 hover:text-gray-900">Create</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link href="/auth/signin" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Achievements</h1>
          <p className="text-gray-600">Track your progress and unlock rewards</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Achievements Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement) => (
                <div 
                  key={achievement.id} 
                  className={`bg-white rounded-lg shadow-sm border p-6 ${
                    achievement.earned ? 'border-green-200 bg-green-50' : 'border-gray-200 opacity-60'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      achievement.earned ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      <span className="text-2xl">{achievement.icon}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(achievement.rarity)}`}>
                      {achievement.rarity}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{achievement.description}</p>
                  
                  {achievement.earned ? (
                    <div className="flex items-center text-green-600">
                      <span className="text-sm font-medium">✓ Earned</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-gray-400">
                      <span className="text-sm">Not earned yet</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Summary */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Progress Summary</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Achievements Earned</span>
                    <span>5/8</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '62.5%' }}></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">5</p>
                    <p className="text-sm text-gray-600">Earned</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">3</p>
                    <p className="text-sm text-gray-600">Remaining</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Achievement */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Next Achievement</h2>
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🏆</span>
                  <p className="font-medium text-blue-900">Platform Master</p>
                </div>
                <p className="text-sm text-blue-700">Go viral on all 3 platforms</p>
                <p className="text-xs text-blue-600 mt-2">Progress: 2/3 platforms</p>
              </div>
            </div>

            {/* Rarity Breakdown */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Rarity Breakdown</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Common</span>
                  <span className="text-gray-900 font-medium">1/1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-600">Uncommon</span>
                  <span className="text-gray-900 font-medium">1/1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600">Rare</span>
                  <span className="text-gray-900 font-medium">2/3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-600">Epic</span>
                  <span className="text-gray-900 font-medium">1/2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600">Legendary</span>
                  <span className="text-gray-900 font-medium">0/1</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link href="/create" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-center block">
                  Create Content
                </Link>
                <Link href="/dashboard" className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors text-center block">
                  View Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}