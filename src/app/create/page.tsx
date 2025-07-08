import React from 'react';
import Link from 'next/link';

export default function Create() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PCS</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Dr. Pedro's Content Studio</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
              <Link href="/leaderboard" className="text-gray-600 hover:text-gray-900">Leaderboard</Link>
              <Link href="/achievements" className="text-gray-600 hover:text-gray-900">Achievements</Link>
              <Link href="/create" className="text-blue-600 font-medium">Create</Link>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Content</h1>
          <p className="text-gray-600">Upload your professional content and compete for points</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Upload New Content</h2>
              
              <form className="space-y-6">
                {/* Platform Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
                  <div className="grid grid-cols-3 gap-3">
                    <button type="button" className="flex items-center justify-center p-3 border-2 border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
                      <span className="text-2xl mr-2">📱</span>
                      <span className="font-medium">TikTok</span>
                    </button>
                    <button type="button" className="flex items-center justify-center p-3 border-2 border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
                      <span className="text-2xl mr-2">📸</span>
                      <span className="font-medium">Instagram</span>
                    </button>
                    <button type="button" className="flex items-center justify-center p-3 border-2 border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
                      <span className="text-2xl mr-2">🎬</span>
                      <span className="font-medium">YouTube</span>
                    </button>
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Video</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
                    <div className="mx-auto w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-gray-400 text-2xl">📁</span>
                    </div>
                    <p className="text-gray-600 mb-2">Drag and drop your video here, or click to browse</p>
                    <p className="text-sm text-gray-500">MP4, MOV up to 100MB</p>
                    <input type="file" className="hidden" accept="video/*" />
                  </div>
                </div>

                {/* Content Details */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter a catchy title for your content"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe your content and include relevant hashtags"
                  ></textarea>
                </div>

                {/* Character Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Character Style</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button type="button" className="flex items-center p-3 border-2 border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
                      <span className="text-2xl mr-3">🌟</span>
                      <div className="text-left">
                        <p className="font-medium">Nova</p>
                        <p className="text-sm text-gray-600">Trendy & Energetic</p>
                      </div>
                    </button>
                    <button type="button" className="flex items-center p-3 border-2 border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
                      <span className="text-2xl mr-3">🧠</span>
                      <div className="text-left">
                        <p className="font-medium">Sage</p>
                        <p className="text-sm text-gray-600">Educational & Wise</p>
                      </div>
                    </button>
                    <button type="button" className="flex items-center p-3 border-2 border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
                      <span className="text-2xl mr-3">🏔️</span>
                      <div className="text-left">
                        <p className="font-medium">Atlas</p>
                        <p className="text-sm text-gray-600">Transformational</p>
                      </div>
                    </button>
                    <button type="button" className="flex items-center p-3 border-2 border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
                      <span className="text-2xl mr-3">🌈</span>
                      <div className="text-left">
                        <p className="font-medium">Prism</p>
                        <p className="text-sm text-gray-600">Creative & Artistic</p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button 
                    type="submit" 
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Upload Content
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Viral Velocity Tips */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Engagement Excellence Tips</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">⚡</span>
                  <p className="text-sm text-gray-700">Post during peak hours for 10x multiplier</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">🎯</span>
                  <p className="text-sm text-gray-700">Use trending hashtags and sounds</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">🔥</span>
                  <p className="text-sm text-gray-700">Create engaging thumbnails</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">📈</span>
                  <p className="text-sm text-gray-700">Focus on first 3 seconds</p>
                </div>
              </div>
            </div>

            {/* Current Challenge */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Current Challenge</h2>
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <p className="font-medium text-blue-900">Smile Transformation Monday</p>
                <p className="text-sm text-blue-700">Create before/after dental content</p>
                <p className="text-xs text-blue-600 mt-2">Bonus: +500 points for challenge participation</p>
              </div>
            </div>

            {/* Scoring System */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">How Points Work</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Base Upload</span>
                  <span className="font-medium">10 points</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Views × 0.3</span>
                  <span className="font-medium">Variable</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shares × 5</span>
                  <span className="font-medium">Variable</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saves × 10</span>
                  <span className="font-medium">Variable</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between">
                    <span className="text-blue-600 font-medium">First Hour</span>
                    <span className="text-blue-600 font-medium">10x Multiplier</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Uploads */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Uploads</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-lg mr-2">📱</span>
                    <div>
                      <p className="font-medium text-gray-900">TikTok Post</p>
                      <p className="text-xs text-gray-600">2 hours ago</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-medium">+890</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-lg mr-2">📸</span>
                    <div>
                      <p className="font-medium text-gray-900">Instagram Reel</p>
                      <p className="text-xs text-gray-600">5 hours ago</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-medium">+1,240</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}