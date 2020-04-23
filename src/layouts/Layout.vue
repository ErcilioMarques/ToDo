<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

  <q-footer elevated>
   <q-tabs>
    <q-route-tab
       v-for="nav in navs"
       :key="nav.title"
       :icon="nav.icon" 
       :label="nav.title"
       :to="nav.link" />
   </q-tabs>   
  </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="767"
      bordered
      content-class="bg-primary"
    >
      <q-list dark="">
        <q-item-label
          header
          class="text-grey-4"
        >
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in navs"
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
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          title: 'Todo',
          icon: 'list',
          link:"/"
        },
         {
          title: 'Settings',
          icon: 'settings',
          link:"/settings"
        },
      
      ]
    }
  }
}
</script>
<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer{
    display: none;
  }
}
  .q-drawer {
    .q-router-link--exact-active{
    color: white !important
  }
}
</style>