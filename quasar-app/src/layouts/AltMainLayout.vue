<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated class="bg-light-blue-12 text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar square color="gray">
            <img src="~assets/logo-dark.svg" />
          </q-avatar>
          Power Up
        </q-toolbar-title>

        <div class="q-pr-lg">
          <img src="~assets/logo-dark.svg" />
        </div>
        <q-space />
        <member-toolbar-buttons />
      </q-toolbar>
      <q-tabs>
        <q-route-tab icon="home" to="/alt" exact label="Guide" />
        <q-route-tab icon="person" to="/alt/profile" label="Profile" />
        <q-route-tab
          icon="admin_panel_settings"
          to="/alt/admin/members"
          label="Admin"
        />
      </q-tabs>
    </q-header>

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
import MemberToolbarButtons from 'components/MemberToolbarButtons.vue'

export default {
  name: 'AltMainLayout',
  components: { MemberToolbarButtons },
  data() {
    return {
      leftDrawerOpen: false,
      rightDrawerOpen: true,
    }
  },
}
</script>
