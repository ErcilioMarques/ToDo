<template>
  <q-item
    clickable
    :class="!task.completed ? 'bg-amber-1' : 'bg-light-green-1'"
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox v-model="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strikethrough': task.completed }"
        >{{ task.name }}
      </q-item-label>
    </q-item-section>

    <q-item-section v-if="task.dueDate" side>
      <div class="row">
        <div class="column justify-center">
          <q-icon size="18px" name="event" class="q-mr-xs" />
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>{{
            task.dueDate
          }}</q-item-label>
          <q-item-label class="row justify-end" caption
            ><small>{{ task.dueTime }}</small></q-item-label
          >
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <q-btn @click.stop="promptToDelete(id)" flat round color="red" icon="delete" />
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["task", "id"],

  methods: {
    ...mapActions("tasks", ['updateTask','deleteTask']),
    promptToDelete(id){
           this.$q.dialog({
        title: 'Confirm',
        message: 'Really delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
         this.deleteTask(id)
      })
    }
  }
};
</script>
<style lang="stylus" scoped></style>
