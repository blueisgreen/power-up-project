<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Power Up Interactive Magazine </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    caption: 'Home Page',
    icon: 'home',
    link: '#/',
  },
  {
    title: 'Simulations',
    caption: 'Play with nuclear simulations',
    icon: 'power',
    link: '#/sim',
  },
  {
    title: 'Course Catalog',
    caption: 'Discover lessons about nuclear power',
    icon: 'collections',
    link: '#/explore',
  },
  {
    title: 'Drafting Table',
    caption: 'Create and edit content (editor)',
    icon: 'create',
    link: '#/draft',
  },
  {
    title: 'Curator',
    caption: 'Organize and promote content (editor)',
    icon: 'sort',
    link: '#/curate',
  },
  {
    title: 'Profile',
    caption: 'Your member profile (member)',
    icon: 'person',
    link: '#/profile',
  },
  {
    title: 'Site Administration',
    caption: 'Manage members and control access (admin)',
    icon: 'manage_accounts',
    link: '#/admin',
  },
]

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
