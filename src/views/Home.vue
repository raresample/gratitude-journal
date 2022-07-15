<template>
  <div class="home">
    <GratitudeCard 
      @delete="handleDelete(entry)"
      v-for="entry in entries"
      :key="entry.id"
      :entry="entry.entry"
      :author="entry.userUid"
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
        isFav: !entry.isFav
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
.order-select {
  margin: 0 0 1rem 0;
  display: flex;
  justify-content: end;
}

.order-select span {
  padding-right: 0.5rem;
}
</style>