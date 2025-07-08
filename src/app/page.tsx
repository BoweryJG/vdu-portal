import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Welcome to the <span className="text-blue-600">Viral Dental Universe</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The ultimate content creation platform for Dr. Pedro&apos;s interns. Compete, create, and go viral while building your career in dental marketing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold text-center">
              Start Creating
            </Link>
            <Link href="/leaderboard" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors text-lg font-semibold text-center">
              View Leaderboard
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-blue-600 text-2xl">🎬</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Create Content</h3>
            <p className="text-gray-600">Upload TikToks, Instagram Reels, and YouTube Shorts to compete for viral status.</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-purple-600 text-2xl">🏆</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Compete & Win</h3>
            <p className="text-gray-600">Earn points through the Viral Velocity System and climb the leaderboard.</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Go Viral</h3>
            <p className="text-gray-600">10x points in the first hour! Speed to virality is everything.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            The Viral Velocity System™
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Upload content and get 10 base points
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  First hour performance = 10x multiplier
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Engagement score = Views × 0.3 + Shares × 5 + Saves × 10
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Weekly battles and daily challenges
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rewards</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Weekly: $50 Amazon gift cards
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Monthly: $200 bonus + headshots
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Summer Grand Prize: $1,000 scholarship
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Portfolio rights to your content
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Dental Marketing?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the revolution and become a Viral Architect
          </p>
          <Link href="/auth/signin" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
            Get Started Now
          </Link>
        </div>
      </main>
      
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Viral Dental Universe. Built for Dr. Pedro&apos;s Practice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}