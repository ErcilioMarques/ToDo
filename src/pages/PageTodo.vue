<template>
  <q-page class="q-pa-md">
    <q-list v-if="Object.keys(tasks).length" separator bordered>
      <task v-for="(task, key) in tasks" :key="key" :task="task" :id="key">
      </task>
    </q-list>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn round color="primary" size="24px" icon="add" @click="showAddTask=true"/>
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask=false"></add-task>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      showAddTask: false
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasks"])
  },
  components: {
    "task": require("components/Tasks/Task.vue").default,
    "add-task": require("components/Tasks/Modals/addTask.vue").default
  }
};
</script>
