<template>
  <q-layout view="lhh Lpr fFf">
    <q-header elevated class="bg-light-blue-12 text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          <q-avatar square color="gray">
            <img src="~assets/logo-dark.svg" />
          </q-avatar>
          Power Up
        </q-toolbar-title>
        <q-space />
        <member-toolbar-buttons />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      side="left"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          <img alt="Power Up logo" src="~assets/logo-clear.svg" width="64" />
          Power Up
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-drawer
      v-model="rightDrawerOpen"
      show-if-above
      side="right"
      bordered
      content-class="bg-amber-3"
    >
      <q-scroll-area class="fit">
        <div class="q-pa-sm">
          <h4>Sidebar</h4>
          <div v-for="n in 10" :key="n">
            Put something interesting here based on the main context.
          </div>
        </div>
        <img alt="Power Up logo" src="~assets/logo-clear.svg" width="64" />
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar square color="gray">
            <img src="~assets/logo-dark.svg" />
          </q-avatar>
          Power Up
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import MemberToolbarButtons from 'components/MemberToolbarButtons.vue'

const linksData = [
  {
    title: 'Home',
    caption: 'Home Page',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Profile',
    caption: 'Your member profile (login required)',
    icon: 'person',
    link: '/profile',
  },
  {
    title: 'Administration',
    caption: 'Manage members and controls',
    icon: 'admin_panel_settings',
    link: '/admin/members',
  },
]

export default {
  name: 'MainLayout',
  components: { EssentialLink, MemberToolbarButtons },
  data() {
    return {
      leftDrawerOpen: false,
      rightDrawerOpen: true,
      essentialLinks: linksData,
    }
  },
}
</script>
