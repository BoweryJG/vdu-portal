import React from 'react';
import Link from 'next/link';

export default function Leaderboard() {
  const leaderboardData = [
    { rank: 1, name: 'Nova Chen', character: 'Nova', points: 4250, avatar: '🌟' },
    { rank: 2, name: 'Marcus Rodriguez', character: 'Atlas', points: 3890, avatar: '🏔️' },
    { rank: 3, name: 'Sarah Kim', character: 'Prism', points: 3420, avatar: '🌈' },
    { rank: 4, name: 'Alex Thompson', character: 'Sage', points: 2847, avatar: '🧠' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PCS</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">{`Dr. Pedro's Content Studio`}</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
              <Link href="/leaderboard" className="text-blue-600 font-medium">Leaderboard</Link>
              <Link href="/achievements" className="text-gray-600 hover:text-gray-900">Achievements</Link>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Leaderboard</h1>
          <p className="text-gray-600">See how you stack up against other content professionals</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Leaderboard */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold text-gray-900">Current Rankings</h2>
              </div>
              
              <div className="divide-y">
                {leaderboardData.map((user) => (
                  <div key={user.rank} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                        user.rank === 1 ? 'bg-yellow-500' : 
                        user.rank === 2 ? 'bg-gray-400' : 
                        user.rank === 3 ? 'bg-orange-500' : 'bg-gray-300'
                      }`}>
                        {user.rank}
                      </div>
                      
                      <div className="ml-4">
                        <div className="flex items-center">
                          <span className="text-2xl mr-2">{user.avatar}</span>
                          <div>
                            <p className="font-medium text-gray-900">{user.name}</p>
                            <p className="text-sm text-gray-600">Character: {user.character}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">{user.points.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">points</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Current Competition */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Current Competition</h2>
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <p className="font-medium text-blue-900">Weekly Battle #12</p>
                <p className="text-sm text-blue-700">Most engaging content wins $50</p>
                <p className="text-xs text-blue-600 mt-2">Ends in 3 days, 14 hours</p>
              </div>
            </div>

            {/* This Week&apos;s Top Performer */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">This Week&apos;s Champion</h2>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl">🌟</span>
                </div>
                <p className="font-bold text-gray-900">Nova Chen</p>
                <p className="text-sm text-gray-600">1,250 points this week</p>
                <p className="text-xs text-green-600 mt-1">+45% from last week</p>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Achievements</h2>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-xl mr-3">🏆</span>
                  <div>
                    <p className="font-medium text-gray-900">Engagement Excellence</p>
                    <p className="text-xs text-gray-600">100K views in 1 hour</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-xl mr-3">⚡</span>
                  <div>
                    <p className="font-medium text-gray-900">Speed Creator</p>
                    <p className="text-xs text-gray-600">5 posts in one day</p>
                  </div>
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