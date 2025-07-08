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
            Welcome <span className="text-blue-600">Summer Interns</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {`Welcome to Dr. Pedro's Content Studio! Over the next 12 weeks, you'll create amazing content, develop professional skills, and compete for exciting rewards while helping transform our dental practice's digital presence.`}
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Create & Learn</h3>
            <p className="text-gray-600">Master content creation across TikTok, Instagram, and YouTube while learning professional healthcare marketing.</p>
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Build Your Portfolio</h3>
            <p className="text-gray-600">Keep rights to all your content! Build an impressive portfolio for your future career.</p>
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
                  Create content and earn points for each upload
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Learn from mentorship and weekly workshops
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Track your growth with real-time analytics
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Compete in fun challenges with your fellow interns
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

        {/* Intern Welcome Section */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Meet Your Summer 2024 Intern Team
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="font-semibold text-gray-900">Nova</h3>
              <p className="text-sm text-gray-600">The Trendsetter</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="font-semibold text-gray-900">Sage</h3>
              <p className="text-sm text-gray-600">The Educator</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🏔️</span>
              </div>
              <h3 className="font-semibold text-gray-900">Atlas</h3>
              <p className="text-sm text-gray-600">The Transformer</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🌈</span>
              </div>
              <h3 className="font-semibold text-gray-900">Prism</h3>
              <p className="text-sm text-gray-600">The Creative</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {`Welcome to Dr. Pedro's practice! Each of you brings unique talents and perspectives. 
              Choose your character persona and let your creativity shine as you help us connect with our community.`}
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Summer Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {`Join your fellow interns and make this the most impactful summer of your career!`}
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