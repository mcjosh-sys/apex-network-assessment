<template>
  <div v-if="loading" class="h-60 flex items-center justify-center text-secondary">
    <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
  </div>
  <div v-else>
    <div class="overflow-auto w-full mt-6">
      <table class="divide-y w-full divide-border">
        <tr class="text-left sticky top-0 bg-white">
          <th>
            <div class="pb-2">Name</div>
          </th>
          <th>
            <div class="pb-2 pr-6">Amount</div>
          </th>
          <th>
            <div class="pb-2 whitespace-nowrap pr-10">User's Status</div>
          </th>
          <th>
            <div class="pb-2 whitespace-nowrap">Payment Status</div>
          </th>
          <th></th>
        </tr>
        <tr>
          <td>
            <div class="flex flex-col items-start py-2 pr-6">
              <input type="text" class="h-14 bg-muted rounded-md px-4 w-full" placeholder="name" />
            </div>
          </td>
          <td>
            <div class="flex flex-col items-start py-2 pr-6">
              <input
                type="text"
                class="h-14 bg-muted rounded-md px-4 table-cell"
                placeholder="amount"
              />
            </div>
          </td>
          <td>
            <div class="flex flex-col items-start py-2 pr-6 w-full">
              <dropdown-menu>
                <template #trigger>
                  <dropdown-trigger v-slot="{ value }">
                    <button
                      class="w-full h-14 bg-muted rounded-md px-4 flex items-center justify-between capitalize"
                    >
                      {{ value || 'All' }}
                      <i class="pi pi-chevron-down text-secondary" style="font-size: 0.8rem"></i>
                    </button>
                  </dropdown-trigger>
                </template>
                <dropdown-content class="w-full p-4">
                  <dropdown-item
                    value="all"
                    class="h-[56px] hover:bg-muted flex items-center pl-4 rounded-xl"
                  >
                    All
                  </dropdown-item>
                  <dropdown-item
                    value="active"
                    class="h-[56px] hover:bg-muted flex items-center pl-4 rounded-xl"
                  >
                    <badge-component :variant="COLOR['active']" text="Active" />
                  </dropdown-item>
                  <dropdown-item
                    value="inactive"
                    class="h-[56px] hover:bg-muted flex items-center pl-4 rounded-xl"
                  >
                    <badge-component :variant="COLOR['inactive']" text="Inactive" />
                  </dropdown-item>
                </dropdown-content>
              </dropdown-menu>
            </div>
          </td>
          <td colspan="2">
            <div class="flex flex-col items-start py-2">
              <dropdown-menu @changed="(val) => (paymentState = val)">
                <template #trigger>
                  <dropdown-trigger>
                    <button
                      class="w-full h-14 bg-muted rounded-md px-4 flex items-center justify-between capitalize"
                    >
                      {{ paymentState }}
                      <i class="pi pi-chevron-down text-secondary" style="font-size: 0.8rem"></i>
                    </button>
                  </dropdown-trigger>
                </template>
                <dropdown-content class="w-full p-4 z-20">
                  <dropdown-item
                    value="all"
                    class="h-[56px] hover:bg-muted flex items-center pl-4 rounded-xl"
                  >
                    All
                  </dropdown-item>
                  <dropdown-item
                    value="paid"
                    class="h-[56px] hover:bg-muted flex items-center pl-4 rounded-xl"
                  >
                    <badge-component :variant="COLOR['paid']" text="Paid" />
                  </dropdown-item>
                  <dropdown-item
                    value="unpaid"
                    class="h-[56px] hover:bg-muted flex items-center pl-4 rounded-xl"
                  >
                    <badge-component :variant="COLOR['unpaid']" text="Unpaid" />
                  </dropdown-item>
                  <dropdown-item
                    value="overdue"
                    class="h-[56px] hover:bg-muted flex items-center pl-4 rounded-xl"
                  >
                    <badge-component :variant="COLOR['overdue']" text="Overdue" />
                  </dropdown-item>
                </dropdown-content>
              </dropdown-menu>
            </div>
          </td>
        </tr>
        <tr v-for="data in paymentData" :key="data?.id">
          <td>
            <div class="flex items-center gap-8 py-2 pr-6">
              <check-box />
              <div>
                <p class="font-semibold">{{ data?.user.name }}</p>
                <span class="text-secondary">{{ data?.user.email }}</span>
              </div>
            </div>
          </td>
          <td>
            <div class="flex flex-col items-start py-2 pr-6">
              <p class="font-semibold">${{ data?.amount }}</p>
              <span class="text-secondary">{{ data?.currency }}</span>
            </div>
          </td>
          <td>
            <div class="flex flex-col py-2 pr-10">
              <badge-component :variant="COLOR[data?.user.status]" :text="data?.user.status" bg />
              <span class="whitespace-nowrap"
                >Last Login: {{ formatDate(data?.user.last_login_at) }}</span
              >
            </div>
          </td>
          <td>
            <div class="flex flex-col py-2 pr-8">
              <badge-component
                :variant="COLOR[data?.payment_status]"
                :text="data?.payment_status"
                bg
              />
              <span class="whitespace-nowrap">{{
                `${TEXT[data?.payment_status]}: ${formatDate(data?.payment_expected_at)}`
              }}</span>
            </div>
          </td>
          <td>
            <div class="flex flex-col py-2">
              <action-group />
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div
      class="mt-14 flex flex-col justify-center items-start gap-4 md:flex-row md:justify-between"
    >
      <div>
        <label for="page-size">Show result: </label>
        <div
          class="ml-4 border border-border w-[68px] h-10 rounded-lg px-3 inline-flex items-center"
        >
          <select
            name="page-size"
            id="page-size"
            :value="pageData.pageSize"
            @change="(e) => (pageData.pageSize = Number((e.target as HTMLSelectElement)?.value))"
            class="w-full"
          >
            <option v-for="size in PAGESIZES" :key="size" :value="size">{{ size }}</option>
          </select>
        </div>
      </div>
      <pagination-component
        :class-name="{
          container: 'flex items-center text-muted-foreground',
          item: 'w-10 h-10 text-sm flex items-center justify-center',
          selected: 'text-green bg-light-green font-semibold rounded-xl'
        }"
        :current-page="pageData.currentPage"
        :total-count="pageData.totalCount"
        :page-size="pageData.pageSize"
        :sibling-count="pageData.siblingCount"
        :key="pageData.totalCount + pageData.currentPage"
        @page-changed="(value) => (pageData.currentPage = value)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { fetchData } from '@/lib/actions'
import { COLOR, PAGESIZES, TEXT } from '@/lib/contants'
import { formatDate } from '@/lib/utils'
import type { Data, PaginationType, Tab } from '@/types'
import { defineComponent, onMounted, reactive, ref, watchEffect, type PropType } from 'vue'
import PaginationComponent from './PaginationComponent.vue'
import BadgeComponent from './ui/BadgeComponent.vue'
import DropdownContent from './ui/DropdownContent.vue'
import DropdownItem from './ui/DropdownItem.vue'
import DropdownMenu from './ui/DropdownMenu.vue'
import DropdownTrigger from './ui/DropdownTrigger.vue'
import CheckBox from './ui/CheckBox.vue'
import ActionGroup from './ActionGroup.vue'

export default defineComponent({
  props: {
    tab: {
      type: String as PropType<Tab>,
      required: true
    }
  },
  components: {
    BadgeComponent,
    PaginationComponent,
    DropdownMenu,
    DropdownContent,
    DropdownTrigger,
    DropdownItem,
    CheckBox,
    ActionGroup
  },
  setup(props) {
    const paymentData = ref<Data[] | null>(null)
    const loading = ref<boolean>(false)
    const pageData = reactive<PaginationType>({
      currentPage: 1,
      totalCount: 0,
      pageSize: 5,
      siblingCount: 2
    })
    const paymentState = ref<Tab>(props.tab)

    onMounted(async () => {
      try {
        loading.value = true
        const { loading: isFinished, result } = await fetchData(pageData, props.tab)
        loading.value = isFinished
        paymentData.value = result.data
        pageData.totalCount = result.total
      } catch (error) {
        console.log(error)
      }
    })

    watchEffect(async () => {
      loading.value = true
      const { loading: isFinished, result } = await fetchData(pageData, paymentState.value)
      loading.value = isFinished
      paymentData.value = result.data
      pageData.totalCount = result.total
    })

    return { paymentData, paymentState, pageData, loading, COLOR, TEXT, PAGESIZES, formatDate }
  }
})
</script>
