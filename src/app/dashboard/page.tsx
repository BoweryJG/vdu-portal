import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
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
              <Link href="/dashboard" className="text-blue-600 font-medium">Dashboard</Link>
              <Link href="/leaderboard" className="text-gray-600 hover:text-gray-900">Leaderboard</Link>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome to your content creation command center</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-xl">📈</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">Total Points</p>
                    <p className="text-2xl font-bold text-gray-900">2,847</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-xl">🎬</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">Content Created</p>
                    <p className="text-2xl font-bold text-gray-900">42</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 text-xl">🏆</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">Rank</p>
                    <p className="text-2xl font-bold text-gray-900">#2</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-sm">🎬</span>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">TikTok: Dental Transformation</p>
                      <p className="text-sm text-gray-600">2 hours ago • 1,247 views</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-medium">+890 points</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 text-sm">📸</span>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">Instagram: Behind the Scenes</p>
                      <p className="text-sm text-gray-600">5 hours ago • 2,341 views</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-medium">+1,240 points</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Challenges */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Active Challenges</h2>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <p className="font-medium text-blue-900">Smile Transformation Monday</p>
                  <p className="text-sm text-blue-700">Create before/after content</p>
                  <p className="text-xs text-blue-600 mt-1">Ends in 2 days</p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                  <p className="font-medium text-green-900">Viral Velocity Challenge</p>
                  <p className="text-sm text-green-700">Get 10K views in first hour</p>
                  <p className="text-xs text-green-600 mt-1">Ends in 5 days</p>
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
                <Link href="/leaderboard" className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors text-center block">
                  View Leaderboard
                </Link>
                <Link href="/achievements" className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors text-center block">
                  My Achievements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}