<template>
  <div>
    <Todos />
  </div>
</template>

<script>
import { Bloc } from '../bloc/todos/bloc';
import Todos from './Todos';

export default {
  components: { Todos },
  provide: {
    todosBloc: new Bloc()
  }
}
</script>