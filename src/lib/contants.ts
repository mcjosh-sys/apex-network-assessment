import type { BadgeVariant} from "@/types";
import { getPaymentStatus } from "./utils";

export const COLOR: {[key in string]:BadgeVariant} = {
  paid: 'purple',
  unpaid: 'yellow',
  overdue: 'red',
  active: 'green',
  inactive: 'orange'
}
export const TEXT: {[key in string]:string} = {
  paid: 'Paid on',
  unpaid: 'Dues on',
  overdue: 'Dued on',
}

export const PAGESIZES: number[] = [
  5,10,15,20,25,30
]


export const exampleData = [
  {
    id: 6,
    user_id: 3,
    amount: 3429,
    currency: 'USD',
    payment_expected_at: '2024-04-21 14:54:41',
    payment_made_at: '2024-04-23 14:54:41',
    created_at: '2024-04-13T11:54:41.000000Z',
    updated_at: '2024-04-25T11:54:41.000000Z',
    user: {
      id: 3,
      name: 'Mrs. Halie Mohr',
      email: 'hbauch@example.com',
      email_verified_at: '2024-04-25T11:54:41.000000Z',
      status: 'active',
      last_login_at: '2024-04-25 09:54:41',
      created_at: '2024-04-25T11:54:41.000000Z',
      updated_at: '2024-04-25T11:54:41.000000Z'
    }
  },
  {
    id: 7,
    user_id: 12,
    amount: 4034,
    currency: 'USD',
    payment_expected_at: '2024-04-11 16:54:41',
    payment_made_at: '2024-04-13 16:54:41',
    created_at: '2024-04-09T11:54:41.000000Z',
    updated_at: '2024-04-25T11:54:41.000000Z',
    user: {
      id: 12,
      name: 'Guiseppe Hessel',
      email: 'thalia58@example.org',
      email_verified_at: '2024-04-25T11:54:41.000000Z',
      status: 'active',
      last_login_at: '2024-04-24 21:54:41',
      created_at: '2024-04-25T11:54:41.000000Z',
      updated_at: '2024-04-25T11:54:41.000000Z'
    }
  },
  {
    id: 46,
    user_id: 11,
    amount: 2596,
    currency: 'USD',
    payment_expected_at: '2024-04-14 22:54:41',
    payment_made_at: null,
    created_at: '2024-04-12T11:54:41.000000Z',
    updated_at: '2024-04-25T11:54:41.000000Z',
    user: {
      id: 11,
      name: 'Jairo Krajcik',
      email: 'leann30@example.net',
      email_verified_at: '2024-04-25T11:54:41.000000Z',
      status: 'active',
      last_login_at: '2024-04-25 20:54:41',
      created_at: '2024-04-25T11:54:41.000000Z',
      updated_at: '2024-04-25T11:54:41.000000Z'
    }
  },
  {
    id: 9,
    user_id: 7,
    amount: 4298,
    currency: 'USD',
    payment_expected_at: '2024-06-22 11:54:41',
    payment_made_at: '2024-04-30 09:31:03',
    created_at: '2024-04-12T11:54:41.000000Z',
    updated_at: '2024-04-30T09:31:03.000000Z',
    user: {
      id: 7,
      name: 'Mr. Cicero Cummings',
      email: 'gregorio.kunde@example.net',
      email_verified_at: '2024-04-25T11:54:41.000000Z',
      status: 'active',
      last_login_at: '2024-04-25 22:54:41',
      created_at: '2024-04-25T11:54:41.000000Z',
      updated_at: '2024-04-25T11:54:41.000000Z'
    }
  },
  {
    id: 811,
    user_id: 9,
    amount: 4134,
    currency: 'USD',
    payment_expected_at: '2024-11-05 12:20:58',
    payment_made_at: null,
    created_at: '2024-04-11T12:20:58.000000Z',
    updated_at: '2024-04-25T12:20:58.000000Z',
    user: {
      id: 9,
      name: 'Elfrieda Strosin',
      email: 'braden38@example.net',
      email_verified_at: '2024-04-25T11:54:41.000000Z',
      status: 'active',
      last_login_at: '2024-04-25 12:54:41',
      created_at: '2024-04-25T11:54:41.000000Z',
      updated_at: '2024-04-25T11:54:41.000000Z'
    }
  },
  {
    id: 821,
    user_id: 5,
    amount: 2524,
    currency: 'USD',
    payment_expected_at: '2024-09-05 12:20:58',
    payment_made_at: null,
    created_at: '2024-04-14T12:20:58.000000Z',
    updated_at: '2024-04-25T12:20:59.000000Z',
    user: {
      id: 5,
      name: 'Boyd Smith',
      email: 'green.salvatore@example.org',
      email_verified_at: '2024-04-25T11:54:41.000000Z',
      status: 'active',
      last_login_at: '2024-04-25 15:54:41',
      created_at: '2024-04-25T11:54:41.000000Z',
      updated_at: '2024-04-25T11:54:41.000000Z'
    }
  },
  {
    id: 4,
    user_id: 3,
    amount: 1244,
    currency: 'USD',
    payment_expected_at: '2024-05-25 11:54:41',
    payment_made_at: '2024-04-29 20:33:28',
    created_at: '2024-04-06T11:54:41.000000Z',
    updated_at: '2024-04-29T20:33:28.000000Z',
    user: {
      id: 3,
      name: 'Mrs. Halie Mohr',
      email: 'hbauch@example.com',
      email_verified_at: '2024-04-25T11:54:41.000000Z',
      status: 'active',
      last_login_at: '2024-04-25 09:54:41',
      created_at: '2024-04-25T11:54:41.000000Z',
      updated_at: '2024-04-25T11:54:41.000000Z'
    }
  },
  {
    id: 823,
    user_id: 4,
    amount: 1483,
    currency: 'USD',
    payment_expected_at: '2024-06-04 12:20:58',
    payment_made_at: null,
    created_at: '2024-04-05T12:20:58.000000Z',
    updated_at: '2024-04-25T12:20:59.000000Z',
    user: {
      id: 4,
      name: 'Maurine Satterfield',
      email: 'stiedemann.karine@example.net',
      email_verified_at: '2024-04-25T11:54:41.000000Z',
      status: 'inactive',
      last_login_at: '2024-04-26 06:54:41',
      created_at: '2024-04-25T11:54:41.000000Z',
      updated_at: '2024-04-25T11:54:41.000000Z'
    }
  },
  {
    id: 58,
    user_id: 9,
    amount: 4893,
    currency: 'USD',
    payment_expected_at: '2024-04-17 05:54:41',
    payment_made_at: null,
    created_at: '2024-04-13T11:54:41.000000Z',
    updated_at: '2024-04-25T11:54:41.000000Z',
    user: {
      id: 9,
      name: 'Elfrieda Strosin',
      email: 'braden38@example.net',
      email_verified_at: '2024-04-25T11:54:41.000000Z',
      status: 'active',
      last_login_at: '2024-04-25 12:54:41',
      created_at: '2024-04-25T11:54:41.000000Z',
      updated_at: '2024-04-25T11:54:41.000000Z'
    }
  },
  {
    id: 827,
    user_id: 9,
    amount: 2413,
    currency: 'USD',
    payment_expected_at: '2024-08-14 12:20:58',
    payment_made_at: null,
    created_at: '2024-04-05T12:20:58.000000Z',
    updated_at: '2024-04-25T12:20:59.000000Z',
    user: {
      id: 9,
      name: 'Elfrieda Strosin',
      email: 'braden38@example.net',
      email_verified_at: '2024-04-25T11:54:41.000000Z',
      status: 'active',
      last_login_at: '2024-04-25 12:54:41',
      created_at: '2024-04-25T11:54:41.000000Z',
      updated_at: '2024-04-25T11:54:41.000000Z'
    }
  }
].map((data) => ({
  ...data,
  payment_status: data.payment_made_at ? 'paid' : getPaymentStatus(data.payment_expected_at)
}))
// ].map((data) => ({
//   ...data,
//   payment_expected_at: new Date(`${data.payment_expected_at.split(' ').join('T')}.000000Z`),
//   payment_made_at: data.payment_made_at && new Date(`${(data.payment_made_at).split('').join('T')}.000000Z`),
//   created_at: new Date(data.created_at),
//   updated_at: new Date(data.updated_at),
//   user: {
//     ...data.user,
//     email_verified_at: new Date(data.user.email_verified_at),
//     last_login_at: new Date(data.user.last_login_at),
//     created_at: new Date(data.user.created_at),
//     updated_at: new Date(data.user.updated_at)
//   }
// }))