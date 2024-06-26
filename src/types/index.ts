import type { Component, ComponentOptions } from 'vue'

export interface UserProfile {
  name: string
  company: string
  avatarUrl: string
}

export type ComponentType = ComponentOptions | Component

export type BadgeVariant = 'green' | 'yellow' | 'orange' | 'purple' | 'red'

export type ColorClasses = {
  [key in BadgeVariant]: {
    text: string
    bg: string
  }
}

export type Tab = 'all' | 'paid' | 'unpaid' | 'overdue'

export type ClassType = {
  [key in 'container' | 'item' | 'selected']: string
}

export type PaginationType = {
  totalCount: number
  pageSize: number
  siblingCount: number
  currentPage: number
  className?: ClassType
}

// Generated by https://quicktype.io

// Generated by https://quicktype.io

export interface APIResponse {
  current_page: number
  data: Datum[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: Link[]
  next_page_url: string
  path: string
  per_page: number
  prev_page_url: null
  to: number
  total: number
}

export interface Datum {
  id: number
  user_id: number
  amount: number
  currency: string
  payment_expected_at: string
  payment_made_at: null
  created_at: string
  updated_at: string
  user: UserData
}

export interface Link {
  url: null | string
  label: string
  active: boolean
}

export interface Data {
  id: number
  user_id: number
  amount: number
  currency: string
  payment_status: string
  payment_expected_at: Date
  payment_made_at: Date | null
  created_at: Date
  updated_at: Date
  user: UserData
}

export interface UserData {
  id: number
  name: string
  email: string
  email_verified_at: Date
  status: string
  last_login_at: Date
  created_at: Date
  updated_at: Date
}
