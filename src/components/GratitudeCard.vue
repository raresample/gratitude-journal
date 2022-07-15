<template>
  <div class="entry" v-if="entry">
    {{ entry }}
    <div class="info">
      <div class="author">
        by {{ author }}
      </div>
      <div class="date">
        {{ date.toDate().toLocaleDateString('en-us', options) }} 
        <!-- at
        {{ date.toDate().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) }} -->
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    entry: String,
    author: String,
    date: String
  },
  setup() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return { options }
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
  height: 7.5rem;
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