import type { Data, PaginationType, Tab } from '@/types'
import { formatData, getUrl } from './utils'

export const fetchData = async (pageData: PaginationType, tab: Tab) => {
  const result: { data: Data[]; total: number;} = {
    data: [],
    total: 0,
    }
    let loading = true
  await fetch(getUrl(pageData.currentPage, pageData.pageSize, tab))
    .then((res) => res.json())
    .then((data) => {
      result.data = formatData(data)
      result.total = data.total
        loading = false
    })

  return {loading, result}
}
