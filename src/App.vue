<template>
  <nav>
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>
    </div>
    <router-link to="/">{{ $t('common.title.home') }}</router-link
    >&nbsp;
    <router-link to="/about">{{ $t('common.title.about') }}</router-link>
  </nav>
  <router-view />
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
