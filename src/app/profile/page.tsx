'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { LoadingState } from '@/components/ui/LoadingSpinner'
import { mockUser } from '@/data/mock'
import { formatNumber, getInitials } from '@/lib/utils'
import { Settings } from '@/types'
import { 
  UserIcon,
  CogIcon,
  BellIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  EyeIcon,
  PencilIcon,
  CameraIcon,
  TrashIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline'

export default function ProfilePage() {
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')
  const [isEditing, setIsEditing] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  
  const user = mockUser

  const [profileData, setProfileData] = useState({
    name: user.name,
    email: user.email,
    bio: 'Content creator passionate about storytelling and visual arts. Love to inspire others through creative expression.',
    website: 'https://alexjohnson.com',
    location: 'San Francisco, CA',
    twitter: '@alexjohnson',
    instagram: '@alexjohnson_creates'
  })

  const [settings, setSettings] = useState<Settings>({
    theme: 'light',
    notifications: {
      achievements: true,
      challenges: true,
      social: true,
      system: false
    },
    privacy: {
      profileVisibility: 'public',
      statsVisibility: 'public',
      activityVisibility: 'friends'
    },
    preferences: {
      language: 'en',
      timezone: 'America/Los_Angeles',
      emailUpdates: true
    }
  })

  const tabs = [
    { id: 'profile', label: 'Profile', icon: UserIcon },
    { id: 'account', label: 'Account', icon: CogIcon },
    { id: 'notifications', label: 'Notifications', icon: BellIcon },
    { id: 'privacy', label: 'Privacy', icon: ShieldCheckIcon },
    { id: 'preferences', label: 'Preferences', icon: GlobeAltIcon }
  ]

  const handleSave = async () => {
    setLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLoading(false)
    setIsEditing(false)
  }

  const handleSettingsChange = (section: keyof Settings, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }))
  }

  const profileStats = [
    { label: 'Videos', value: user.stats.totalVideos },
    { label: 'Views', value: formatNumber(user.stats.totalViews) },
    { label: 'Followers', value: '1.2K' },
    { label: 'Following', value: '234' }
  ]

  return (
    <LoadingState loading={loading}>
      <div className="min-h-screen bg-gray-50">
        <Header user={user} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Profile & Settings
              </h1>
              <p className="text-gray-600">
                Manage your account, privacy settings, and preferences
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="relative inline-block">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center mb-3">
                          <span className="text-white font-bold text-xl">
                            {getInitials(user.name)}
                          </span>
                        </div>
                        <button className="absolute bottom-0 right-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                          <CameraIcon className="w-3 h-3 text-white" />
                        </button>
                      </div>
                      <h3 className="font-semibold text-gray-900">{user.name}</h3>
                      <p className="text-sm text-gray-600">Level {user.level}</p>
                      <Badge variant="primary" size="sm" className="mt-2">
                        {formatNumber(user.totalPoints)} points
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      {profileStats.map((stat, index) => (
                        <div key={stat.label}>
                          <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                          <p className="text-sm text-gray-600">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <nav className="space-y-1">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            activeTab === tab.id
                              ? 'bg-primary-100 text-primary-600'
                              : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                          }`}
                        >
                          <tab.icon className="w-4 h-4" />
                          <span>{tab.label}</span>
                        </button>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === 'profile' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card>
                    <CardHeader 
                      title="Profile Information" 
                      action={
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setIsEditing(!isEditing)}
                          icon={<PencilIcon className="w-4 h-4" />}
                        >
                          {isEditing ? 'Cancel' : 'Edit'}
                        </Button>
                      }
                    />
                    <CardContent>
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Full Name
                            </label>
                            {isEditing ? (
                              <input
                                type="text"
                                value={profileData.name}
                                onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              />
                            ) : (
                              <p className="text-gray-900">{profileData.name}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Email
                            </label>
                            {isEditing ? (
                              <input
                                type="email"
                                value={profileData.email}
                                onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              />
                            ) : (
                              <p className="text-gray-900">{profileData.email}</p>
                            )}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Bio
                          </label>
                          {isEditing ? (
                            <textarea
                              value={profileData.bio}
                              onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                              rows={3}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              placeholder="Tell us about yourself..."
                            />
                          ) : (
                            <p className="text-gray-900">{profileData.bio}</p>
                          )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Website
                            </label>
                            {isEditing ? (
                              <input
                                type="url"
                                value={profileData.website}
                                onChange={(e) => setProfileData(prev => ({ ...prev, website: e.target.value }))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              />
                            ) : (
                              <p className="text-gray-900">{profileData.website}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Location
                            </label>
                            {isEditing ? (
                              <input
                                type="text"
                                value={profileData.location}
                                onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              />
                            ) : (
                              <p className="text-gray-900">{profileData.location}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Twitter
                            </label>
                            {isEditing ? (
                              <input
                                type="text"
                                value={profileData.twitter}
                                onChange={(e) => setProfileData(prev => ({ ...prev, twitter: e.target.value }))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              />
                            ) : (
                              <p className="text-gray-900">{profileData.twitter}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Instagram
                            </label>
                            {isEditing ? (
                              <input
                                type="text"
                                value={profileData.instagram}
                                onChange={(e) => setProfileData(prev => ({ ...prev, instagram: e.target.value }))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              />
                            ) : (
                              <p className="text-gray-900">{profileData.instagram}</p>
                            )}
                          </div>
                        </div>

                        {isEditing && (
                          <div className="flex justify-end space-x-3">
                            <Button
                              variant="outline"
                              onClick={() => setIsEditing(false)}
                            >
                              Cancel
                            </Button>
                            <Button
                              onClick={handleSave}
                              loading={loading}
                            >
                              Save Changes
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {activeTab === 'notifications' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card>
                    <CardHeader title="Notification Settings" />
                    <CardContent>
                      <div className="space-y-6">
                        {Object.entries(settings.notifications).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-gray-900 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {key === 'achievements' && 'Get notified when you unlock new achievements'}
                                {key === 'challenges' && 'Receive updates about new challenges and deadlines'}
                                {key === 'social' && 'Notifications for likes, comments, and follows'}
                                {key === 'system' && 'Important system updates and announcements'}
                              </p>
                            </div>
                            <button
                              onClick={() => handleSettingsChange('notifications', key, !value)}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                value ? 'bg-primary-600' : 'bg-gray-200'
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  value ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {activeTab === 'privacy' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card>
                    <CardHeader title="Privacy Settings" />
                    <CardContent>
                      <div className="space-y-6">
                        {Object.entries(settings.privacy).map(([key, value]) => (
                          <div key={key}>
                            <h4 className="font-medium text-gray-900 mb-2 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </h4>
                            <select
                              value={value}
                              onChange={(e) => handleSettingsChange('privacy', key, e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            >
                              <option value="public">Public</option>
                              <option value="friends">Friends Only</option>
                              <option value="private">Private</option>
                            </select>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {activeTab === 'preferences' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card>
                    <CardHeader title="Preferences" />
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Theme
                          </label>
                          <select
                            value={settings.theme}
                            onChange={(e) => setSettings(prev => ({ ...prev, theme: e.target.value as any }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="system">System</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Language
                          </label>
                          <select
                            value={settings.preferences.language}
                            onChange={(e) => handleSettingsChange('preferences', 'language', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          >
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Timezone
                          </label>
                          <select
                            value={settings.preferences.timezone}
                            onChange={(e) => handleSettingsChange('preferences', 'timezone', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          >
                            <option value="America/Los_Angeles">Pacific Time</option>
                            <option value="America/Denver">Mountain Time</option>
                            <option value="America/Chicago">Central Time</option>
                            <option value="America/New_York">Eastern Time</option>
                          </select>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900">Email Updates</h4>
                            <p className="text-sm text-gray-600">
                              Receive weekly summaries and updates via email
                            </p>
                          </div>
                          <button
                            onClick={() => handleSettingsChange('preferences', 'emailUpdates', !settings.preferences.emailUpdates)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              settings.preferences.emailUpdates ? 'bg-primary-600' : 'bg-gray-200'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                settings.preferences.emailUpdates ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {activeTab === 'account' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <Card>
                    <CardHeader title="Account Security" />
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <CheckCircleIcon className="w-5 h-5 text-green-500" />
                            <div>
                              <p className="font-medium text-green-900">Two-Factor Authentication</p>
                              <p className="text-sm text-green-700">Your account is protected</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </div>

                        <Button variant="outline" className="w-full">
                          Change Password
                        </Button>

                        <Button variant="outline" className="w-full">
                          Download Account Data
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader title="Danger Zone" />
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-red-50 rounded-lg">
                          <div className="flex items-start space-x-3">
                            <ExclamationTriangleIcon className="w-5 h-5 text-red-500 mt-0.5" />
                            <div>
                              <p className="font-medium text-red-900">Delete Account</p>
                              <p className="text-sm text-red-700">
                                This action cannot be undone. All your data will be permanently deleted.
                              </p>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="danger"
                          onClick={() => setShowDeleteModal(true)}
                          icon={<TrashIcon className="w-4 h-4" />}
                        >
                          Delete Account
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          </div>
        </main>

        {/* Delete Account Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <div className="flex items-center space-x-3 mb-4">
                <ExclamationTriangleIcon className="w-6 h-6 text-red-500" />
                <h3 className="text-lg font-semibold text-gray-900">Delete Account</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently deleted.
              </p>
              <div className="flex justify-end space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="danger"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Delete Account
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </LoadingState>
  )
}