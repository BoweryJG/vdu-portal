import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen dental-gradient-bg">
      <header className="dental-header-gradient shadow-sm">
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
              <Link href="/leaderboard" className="text-gray-600 hover:text-gray-900">Leaderboard</Link>
              <Link href="/achievements" className="text-gray-600 hover:text-gray-900">Achievements</Link>
              <Link href="/create" className="text-gray-600 hover:text-gray-900">Create</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link href="/auth/signin" className="dental-button">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">{`Dr. Pedro's Content Studio`}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional content creation platform for dental practice excellence. Create engaging content, track performance, and build your career in healthcare marketing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create" className="dental-button text-lg px-8 py-3">
              Start Creating
            </Link>
            <Link href="/leaderboard" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors text-lg font-semibold text-center">
              View Leaderboard
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="dental-card dental-fade-in p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-blue-600 text-2xl">🎬</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Create Content</h3>
            <p className="text-gray-600">Upload professional content across platforms to engage patients and build practice reputation.</p>
          </div>

          <div className="dental-card dental-fade-in p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-purple-600 text-2xl">🏆</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Compete & Win</h3>
            <p className="text-gray-600">Earn points through the Performance Excellence System and climb the leaderboard.</p>
          </div>

          <div className="dental-card dental-fade-in p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Maximize Impact</h3>
            <p className="text-gray-600">10x points in the first hour! Speed to engagement is everything.</p>
          </div>
        </div>

        <div className="dental-card p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            The Performance Excellence System™
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
            Join the excellence program and become a Content Professional
          </p>
          <Link href="/auth/signin" className="dental-button text-lg px-8 py-3">
            Get Started Now
          </Link>
        </div>
      </main>
      
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 {`Dr. Pedro's Content Studio`}. Built for Professional Dental Excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}