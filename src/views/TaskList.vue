<template>
  <main>
    <div class="task" v-for="task in list">
      <div class="task__id">{{task.id}}</div>
      <div class="task__title">{{task.title}}</div>
      <div>{{task.description}}</div>
      <div>{{`${task.is_archived}`}}</div>
      <div>{{task.user_id}}</div>
    </div>
  </main>
</template>

<script lang="ts">
import { getList}  from '@/api/tasks';

export default {
  data() {
    return {
      list: [],
    }
  },

  created() {
    getList().then(data => {
        this.list = data;
    });
  }
}
</script>

<style>
.task {
  border: 1px solid gray;
  margin-bottom: 24px;
  padding: 8px;
}
</style>