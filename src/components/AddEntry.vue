<template>
  <form @submit.prevent="handleSubmit">
    <h3>Something I'm grateful for:</h3>

    <textarea
      rows="3"
      name="entry" 
      v-model="entry" 
      required></textarea>

    <button class="add-entry">Add Entry</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composables/getUser'

// firebase imports
import { db } from '../firebase/config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

export default {
  setup() {
    const { user } = getUser()
    const entry = ref('')

    const handleSubmit = async () => {
      const colRef = collection(db, 'entries')

      await addDoc(colRef, {
        entry: entry.value,
        likes: 1,
        userUid: user.value.uid,
        created: serverTimestamp()
      })

      // reset the form
      entry.value = ''
    } 

    return { 
      handleSubmit, 
      entry
    }
  }
}
</script>

<style>
form {
  background: #555;
  padding: 1.5rem;
  /* margin-top: 10px; */
  border: 1px dashed #c3c8ce;
}

h3 {
  margin-top: 0;
  margin-bottom: 1rem;
}

textarea {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 1rem;
}

.add-entry:hover {
  box-shadow: 3px 2px 2px cyan;
}

@media (min-width: 480px) {
  form {
    /* padding-left: 1.5rem; */
  }
}
</style>