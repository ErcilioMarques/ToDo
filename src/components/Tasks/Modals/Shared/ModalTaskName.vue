<template>
  <div class="row q-mb-sm">
    <q-input
      autofocus
      :rules="[val => !!val || 'Field is required']"
      ref="name"
      outlined
      @input="$emit('update:name',$event)"
      :value="name"
      label="Task name"
      class="col"
    >
      <template v-slot:append>
        <q-icon
          v-if="name"
          name="close"
          @click="$emit('update:name','')"
          class="cursor-pointer"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
    props:['name']
};
</script>

<style></style>
