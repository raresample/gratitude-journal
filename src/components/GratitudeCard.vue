<template>
  <div class="entry" v-if="entry">
    {{ entry }}
    <div class="info">
      <div class="author">
        {{ author }}
      </div>
      <div class="date">
        {{ displayDate }}
      </div>
    </div>
    <div class="delete">
      <div class="trash" @click="$emit('delete')">
        <span class="material-icons">delete</span>
      </div>
    </div>
  </div>

</template>

<script>
import { computed } from '@vue/reactivity';

export default {
  props: {
    entry: String,
    author: String,
    date: String
  },
  setup(props) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    const displayDate = computed(() => {
      return props.date.toDate().toLocaleDateString('en-us', options)
    })

    return { options, displayDate }
  }
}
</script>

<style>
.entry {
  background: white;
  /* color: #2c3e50; */
  /* border-radius: 5px; */
  /* box-shadow: 0 0 3px rgba(0,0,0,0.25); */
  margin: 1rem 0;
  padding: 1rem;
  display: grid;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  height: 10rem;
  align-items: stretch;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);
}

.material-icons {
  cursor: pointer;
}

.material-icons:hover {
  cursor: pointer;
  color: #f83f5e;
}

@media (min-width: 480px) {
  .main {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>