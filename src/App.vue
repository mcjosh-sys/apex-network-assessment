<template>
  <div class="font-general">
    <header-component
      title="Table Heading"
      :name="user.name"
      :company="user.company"
      :avatarUrl="user.avatarUrl"
    />
    <tab-component>
      <div class="mx-14 mt-10">
        <div class="flex flex-col-reverse gap-8 md:flex-row md:items-end md:justify-between">
          <div class="flex gap-7 text-[15px] leading-6">
            <tab-trigger
              v-for="tab in tabs"
              :key="tab.name"
              @tab-selected="(name: string) => (selectedTab = name)"
              :name="tab.name"
              :selected="tab.name === selectedTab"
              class="pb-3"
            >
              <button>{{ tab.title }}</button>
            </tab-trigger>
          </div>
          <button class="bg-primary w-64 h-14 rounded-xl text-white text-[1rem] font-semibold">
            Pay Dues
          </button>
        </div>
        <tab-content
          v-for="tab in tabs"
          :key="tab.name"
          :isActive="tab.name === selectedTab"
          class="mt-6 bg-white py-6 px-[29.54px] rounded-2xl flex flex-col"
        >
          <button
            class="self-end bg-background p-4 rounded border border-border text-primary flex gap-2"
          >
            <SettingsIcon class="w-6 h-6" />
            Filters
          </button>
          <!-- <badge-component :icon="DotIcon" text="Inactive" variant="yellow" /> -->
          <!-- <pagination-component
            :class-name="{
              container: 'flex items-center text-muted-foreground',
              item: 'w-10 h-10 text-sm flex items-center justify-center',
              selected: 'text-green bg-light-green font-semibold rounded-xl'
            }"
            :current-page="1"
            :total-count="200"
            :page-size="10"
            :sibling-count="2"
          /> -->
            <data-table :tab="tab.name"/>
        </tab-content>
      </div>
    </tab-component>

    <!-- <dropdown-menu>
      <template #trigger>
        <dropdown-trigger>
          <div class="flex">
            jjjjvkkjd
          </div>
        </dropdown-trigger>
      </template>
      <template #content>
        <dropdown-content name="">
          <div class="flex">
            this is content
          </div>
        </dropdown-content>
      </template>
    </dropdown-menu> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DataTable from './components/DataTable.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import SettingsIcon from './components/icons/SettingsIcon.vue'
import TabComponent from './components/ui/TabComponent.vue'
import TabContent from './components/ui/TabContent.vue'
import TabTrigger from './components/ui/TabTrigger.vue'
import type { Tab, UserProfile } from './types'

const user = ref<UserProfile>({
  name: 'Tynisha Obey',
  company: 'Makostore',
  avatarUrl: './assets/Avatar.png'
})

const tabs = ref<{ title: string; name: Tab; }[]>([
  { title: 'All', name: 'all', },
  { title: 'Paid', name: 'paid', },
  { title: 'Unpaid', name: 'unpaid', },
  { title: 'Overdue', name: 'overdue', }
])

const selectedTab = ref<string>(tabs.value[0].name)
</script>
