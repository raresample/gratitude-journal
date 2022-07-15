<template>
  <form @submit.prevent="handleSubmit">
    <h3>Add a New Entry</h3>

    <input
      type="text" 
      name="entry" 
      v-model="entry" 
      required>

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
        isFav: false,
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
  padding: 2rem 0.5rem;
  margin-top: 10px;
  border: 1px dashed #c3c8ce;
}

.api-error {
  color: lightcoral;
}

.shrink {
  margin-bottom: 0;
}

.add-entry:hover {
  box-shadow: 3px 2px 2px lawngreen;
}

@media (min-width: 480px) {
  form {
    padding-left: 1.5rem;
  }
}
</style>