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

        <div class="q-pl-md q-gutter-sm row no-wrap items-center">
          <q-btn round flat>
            <q-avatar size="42px">
              <img src="~assets/logo-dark.svg" />
            </q-avatar>
          </q-btn>
        </div>
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
          <h4>Hello</h4>
          <div v-for="n in 50" :key="n">Put something interesting here.</div>
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
export default {
  data() {
    return {
      leftDrawerOpen: false,
      rightDrawerOpen: true,
    }
  },
}
</script>
