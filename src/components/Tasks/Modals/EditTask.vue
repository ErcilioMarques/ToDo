<template>
  <q-card>
    <modal-header>Edit Task</modal-header>
    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <modal-task-name
          :name.sync="taskToSubmit.name"
          ref="modalTaskName"
        ></modal-task-name>

        <modal-task-due-date
          @clear="clearDueDate"
          :dueDate.sync="taskToSubmit.dueDate"
        ></modal-task-due-date>
        <modal-task-due-time
          v-if="taskToSubmit.dueDate"
          :dueTime.sync="taskToSubmit.dueTime"
        ></modal-task-due-time>
      </q-card-section>

      <modal-task-buttons></modal-task-buttons>
    </form>
  </q-card>
</template>
<script>
import Vue from "vue";
import { mapActions } from "vuex";
export default {
  props: ["task", "id"],
  data() {
    return {
      taskToSubmit: {}
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),

    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },

    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      });
      this.$emit("close");
      console.log("updated");
    },

    clearDueDate() {
      this.taskToSubmit.dueDate = "";
      this.taskToSubmit.dueTime = "";
    }
  },
  components: {
    "modal-header": require("./Shared/ModalHeader").default,
    "modal-task-name": require("./Shared/ModalTaskName").default,
    "modal-task-due-date": require("./Shared/ModalTaskDueDate").default,
    "modal-task-due-time": require("./Shared/ModalTaskDueTime").default,
    "modal-task-buttons": require("./Shared/ModalButtons").default
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task);
  }
};
</script>

<style></style>
