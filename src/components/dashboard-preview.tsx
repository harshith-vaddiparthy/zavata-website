'use client'

import React from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

export default function DashboardPreview() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden shadow-2xl">
      {/* Dashboard Layout */}
      <div className="flex h-[720px]">
        {/* Sidebar */}
        <div className="bg-white border-r border-gray-200 w-64 flex flex-col">
          {/* Logo */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="font-semibold text-gray-900">Zavata</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            <NavItem icon="📊" label="Dashboard" active />
            <NavItem icon="🤖" label="AI Agents" badge="12" />
            <NavItem icon="📝" label="Campaigns" />
            <NavItem icon="📈" label="Analytics" />
            <NavItem icon="🎯" label="Goals" />
            <NavItem icon="⚙️" label="Settings" />
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
                <p className="text-xs text-gray-500 truncate">Pro Plan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          {/* Header */}
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-500">Welcome back! Here's what's happening.</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                New Campaign
              </button>
            </div>
          </header>

          {/* Dashboard Content */}
          <div className="p-6 overflow-y-auto h-[calc(720px-73px)]">
            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <StatCard
                label="Active Agents"
                value="12"
                change="+3"
                icon="🤖"
                color="blue"
              />
              <StatCard
                label="Campaigns Live"
                value="8"
                change="+2"
                icon="🚀"
                color="green"
              />
              <StatCard
                label="Content Generated"
                value="247"
                change="+48"
                icon="✨"
                color="purple"
              />
              <StatCard
                label="Tasks Completed"
                value="1.2k"
                change="+156"
                icon="✅"
                color="orange"
              />
            </div>

            {/* Active Agents Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Active AI Agents</h2>
                <span className="text-xs text-gray-500">Live updates</span>
              </div>
              <div className="space-y-3">
                <AgentActivity
                  name="Content Generator"
                  task="Creating blog post about AI automation"
                  progress={75}
                  status="running"
                  avatar="📝"
                />
                <AgentActivity
                  name="SEO Optimizer"
                  task="Analyzing keyword opportunities"
                  progress={45}
                  status="running"
                  avatar="🔍"
                />
                <AgentActivity
                  name="Social Media Manager"
                  task="Scheduling posts for next week"
                  progress={90}
                  status="running"
                  avatar="📱"
                />
                <AgentActivity
                  name="Email Campaign"
                  task="Personalizing 500 outreach emails"
                  progress={60}
                  status="running"
                  avatar="📧"
                />
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-3">
                <ActivityItem
                  icon="✅"
                  text="Blog post published: 'Top 10 Marketing Trends'"
                  time="2 min ago"
                  iconColor="text-green-600"
                />
                <ActivityItem
                  icon="📊"
                  text="Analytics report generated for Q4"
                  time="5 min ago"
                  iconColor="text-blue-600"
                />
                <ActivityItem
                  icon="🎯"
                  text="Campaign 'Product Launch' started"
                  time="12 min ago"
                  iconColor="text-purple-600"
                />
                <ActivityItem
                  icon="📝"
                  text="3 new content pieces created"
                  time="18 min ago"
                  iconColor="text-orange-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper Components
function NavItem({ icon, label, active, badge }: { icon: string; label: string; active?: boolean; badge?: string }) {
  return (
    <button
      className={cn(
        'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
        active
          ? 'bg-blue-50 text-blue-600'
          : 'text-gray-700 hover:bg-gray-50'
      )}
    >
      <span className="text-base">{icon}</span>
      <span className="flex-1 text-left">{label}</span>
      {badge && (
        <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
          {badge}
        </span>
      )}
    </button>
  )
}

function StatCard({ label, value, change, icon, color }: { label: string; value: string; change: string; icon: string; color: string }) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-2">
        <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center text-xl', colorClasses[color as keyof typeof colorClasses])}>
          {icon}
        </div>
        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
          {change}
        </span>
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  )
}

function AgentActivity({ name, task, progress, status, avatar }: { name: string; task: string; progress: number; status: string; avatar: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
        {avatar}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-medium text-gray-900">{name}</p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">{progress}%</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
        </div>
        <p className="text-xs text-gray-500 mb-2">{task}</p>
        <div className="w-full bg-gray-100 rounded-full h-1.5">
          <div
            className="bg-blue-600 h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}

function ActivityItem({ icon, text, time, iconColor }: { icon: string; text: string; time: string; iconColor: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className={cn('w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0', iconColor)}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900">{text}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  )
}

