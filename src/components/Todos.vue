<template>
  <div>
    <button @click="handleLoadTodosClick">Load Todos</button>
    <div v-if="isInitialState">
      Initial State
    </div>
    <div v-if="isLoadingState">
      Loading
    </div>
    <div v-if="isLoadedState">
      <pre v-text="JSON.stringify(todosState.todos, null, 2)" />
    </div>
  </div>
</template>

<script>
import { Load } from '../bloc/todos/event';
import { Initial, Loading, Loaded } from '../bloc/todos/state';

export default {
  inject: ['todosBloc'],
  subscriptions() {
    return {
      todosState: this.todosBloc.observable
    }
  },
  computed: {
    isInitialState() { return this.todosState instanceof Initial },
    isLoadingState() { return this.todosState instanceof Loading },
    isLoadedState() { return this.todosState instanceof Loaded },
  },
  methods: {
    handleLoadTodosClick() {
      this.todosBloc.dispatch(new Load());
    }
  }
}
</script>
