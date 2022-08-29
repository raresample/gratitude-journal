<template>
  <div class="card" v-if="entry">
    <div class="entry">
      {{ entry }}
    </div>
    <div class="bottom">
      <div class="info">
        <div class="author">
          by {{ author }}
        </div>
        <div class="date">
          {{ displayDate }}
        </div>
      </div>

      <div class="delete">
        <div class="like">
          <div class="likes">
            <span class="material-icons like-button" @click="$emit('like')">thumb_up</span> Likes: {{ likes }}
          </div>
        </div>
        <div class="trash" @click="$emit('delete')">
          <span class="material-icons delete-button">delete</span>
        </div>
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
    date: String,
    likes: String
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
.card {
  background: white;
  color: #2c3e50;
  /* border-radius: 5px; */
  /* box-shadow: 0 0 3px rgba(0,0,0,0.25); */
  margin: 1rem 0;
  padding: 1.5rem;
  /* display: grid;
  grid-template-rows: repeat(2, minmax(0, 1fr)); */
  min-height: 10rem;
  /* align-items: stretch; wait why? */
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 5px solid pink;
}

.entry {
  font-family: 'Edu NSW ACT Foundation', cursive;
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 3rem;
}

.bottom {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-content: end;
}

.info {
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.info * {
  line-height: 1.5rem;
}

.likes {
  font-size: .875rem;
}

.like-button {
  position: relative;
  top: 4px;
}

.delete {
  text-align: right;
}

.delete-button {
  position: relative;
  top: 4px;
  right: -8px;
  font-size: 1.75rem;
}

.material-icons {
  cursor: pointer;
}

.material-icons:hover {
  cursor: pointer;
  color: #f83f5e;
}

/* @media (min-width: 480px) {
  .main {
    padding-left: 2rem;
    padding-right: 2rem;
  }
} */


</style>