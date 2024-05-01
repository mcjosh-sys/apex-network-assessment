import type { APIResponse, Data, Tab } from '@/types'

export function getPaymentStatus(date: string): string {
  const expectedDate = new Date(date)
  const currentDate = new Date()
  if (currentDate < expectedDate) return 'unpaid'
  return 'overdue'
}

export function getUrl(page: number, pageSize: number, tab: Tab): string {
  if (tab === 'all')
    return `https://apex-payments-eca4dc83534e.herokuapp.com/api/transactions?page=${page}&per_page=${pageSize}`
  return `https://apex-payments-eca4dc83534e.herokuapp.com/api/transactions?page=${page}&per_page=${pageSize}&state=${tab}`
}

export function formatData(res: APIResponse): Data[] {
  return res.data.map((d) => ({
    ...d,
    payment_status: d.payment_made_at ? 'paid' : getPaymentStatus(d.payment_expected_at),
    payment_expected_at: new Date(d.payment_expected_at),
    payment_made_at: d.payment_made_at && new Date(d.payment_made_at),
    created_at: new Date(d.created_at),
    updated_at: new Date(d.updated_at),
    user: {
      ...d.user,
      email_verified_at: new Date(d.user.email_verified_at),
      last_login_at: new Date(d.user.last_login_at),
      created_at: new Date(d.user.created_at),
      updated_at: new Date(d.user.updated_at)
    }
  }))
}

export function formatDate(date: Date) {
    const dateString = date.toDateString().split(' ')
    const formatedDate = dateString[2]+' '+dateString[1]+', '+dateString[3]
    return formatedDate
}
