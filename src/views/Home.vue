<template>
  <div class="home">
    <GratitudeCard 
      @delete="handleDelete(entry)"
      @like="handleUpdate(entry)"
      v-for="entry in entries"
      :key="entry.id"
      :entry="entry.entry"
      :likes="entry.likes"
      :author="entry.userEmail"
      :date="entry.created"
    />
    <AddEntry />
  </div>
</template>

<script>
import AddEntry from '@/components/AddEntry'
import GratitudeCard from '../components/GratitudeCard.vue'
import getCollection from '@/composables/getCollection'
import { db } from '../firebase/config'
import { doc, deleteDoc, updateDoc } from 'firebase/firestore'
import getUser from '../composables/getUser'
import { ref } from '@vue/reactivity'

export default {
  name: 'Home',
  components: { AddEntry, GratitudeCard },
  setup() {
    const { user } = getUser()
    const order = ref('asc')

    const { documents: entries } = getCollection(
      'entries',
      ['userUid', '==', user.value.uid],
      order.value
      )

    const handleDelete = (entry) => {
      const docRef = doc(db, 'entries', entry.id)

      deleteDoc(docRef)
    }

    const handleUpdate = (entry) => {
      const docRef = doc(db, 'entries', entry.id)

      updateDoc(docRef, {
        likes: entry.likes + 1
      })
    }

    return { 
      entries,
      handleDelete,
      handleUpdate,
      order 
    }
  }
}
</script>

<style>
.home {
  margin: 0 1rem;
}

@media (min-width: 50em) {
  .home {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
  .card {
    margin: 0;
  }
  .navbar {
    margin-bottom: 1rem;
  }
} 
</style>