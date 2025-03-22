<script setup lang="ts">
import {createTodoCommand} from "~/DTOs/CreateTodoCommand";
const { todos, addTodo, deleteTodo, toggleStatus } = useTodo();
const title = ref("");
const description = ref("");

const createtodo = () => {
  addTodo(new createTodoCommand(title.value, description.value));
  title.value = "";
  description.value = "";
}
</script>

<template>
  <head>
    <title>Todo</title>
  </head>
  <div class="mt-5">
    <h1>Todo</h1>
    <hr>
    <form @submit.prevent="createtodo">
      <label for="title">Title : </label>
      <input type="text" class="mx-5" v-model="title"></input>
      <label for="description">Description : </label>
      <input type="text" class="mx-5" v-model="description"></input>
      <button class="btn btn-success" type="submit">Confirm</button>
    </form>
    <hr>
    <table class="text-center table-bordered table">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="item in todos" :key="item.id">
        <td v-text="item.id"></td>
        <td v-text="item.title"></td>
        <td v-text="item.description"></td>
        <td v-text="item.status"></td>
        <td>
          <button class="btn btn-primary" @click="toggleStatus(item.id)">Change Status</button>
          <button class="btn btn-danger mx-2" @click="deleteTodo(item.id)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>