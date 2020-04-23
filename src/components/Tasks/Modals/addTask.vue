<template>
  <q-card>
    <modal-header>Add Task</modal-header>
    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <modal-task-name :name.sync="taskToSubmit.name"></modal-task-name>

     <modal-task-due-date @clear="clearDueDate" :dueDate.sync="taskToSubmit.dueDate"></modal-task-due-date>

        <div v-if="taskToSubmit.dueDate" class="row q-mb-sm">
          <q-input
            class="col"
            outlined
            label="Due time"
            v-model="taskToSubmit.dueTime"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskToSubmit.dueTime"
                name="close"
                @click="taskToSubmit.dueTime = ''"
                class="cursor-pointer"
              />
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.dueTime" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Save" type="submit" color="primary" />
      </q-card-actions>

      <pre>{{ taskToSubmit }}</pre>
    </form>
  </q-card>
</template>
<script>
import Vue from "vue";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false
      }
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),

    submitForm() {
      this.$refs.name.validate();
      if (!this.$refs.name.hasError) {
        this.submitTask();
      }
    },

    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit("close");
    },

    clearDueDate() {
      this.taskToSubmit.dueDate = "";
      this.taskToSubmit.dueTime = "";
    }
  },
  components: {
    "modal-header": require("./Shared/ModalHeader").default,
    "modal-task-name": require("./Shared/ModalTaskName").default,
    "modal-task-due-date": require("./Shared/ModalTaskDueDate").default
  }
};
</script>

<style></style>
