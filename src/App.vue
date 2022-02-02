<template>
  <v-app>
    <v-app-bar app color="#032541" dark hide-on-scroll>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.svg"
          transition="scale-transition"
          width="200"
        />
      </div>

      <div class="text-center">
        <v-menu open-on-hover v-for="(item, i) of menu_items" :key="i" top offset-x>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text dark v-bind="attrs" v-on="on">{{item.label}}</v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(desc, index) in item.more" :key="index">
              <v-list-item-title>{{ desc }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-spacer></v-spacer>

      <v-btn :href="constant.project_url_git" target="_blank" icon>
        <v-icon size="45">mdi-github</v-icon>
      </v-btn>

       <v-btn :href="constant.linkedin_url" target="_blank" icon>
        <v-icon size="45">mdi-linkedin</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import constants from '@/util/constants';

export default {
  name: 'App',
  data: () => ({
    constant: constants,
    menu_items: constants.menu_items,
  }),
};
</script>
