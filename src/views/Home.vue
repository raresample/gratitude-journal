<template>
  <div class="home">
    <GratitudeCard />
    <AddPost />
  </div>
</template>

<script>
import AddPost from '@/components/AddPost'
import GratitudeCard from '../components/GratitudeCard.vue'
import getCollection from '@/composables/getCollection'
import { db } from '../firebase/config'
import { doc, deleteDoc, updateDoc } from 'firebase/firestore'
import getUser from '../composables/getUser'
import { ref } from '@vue/reactivity'

export default {
  name: 'Home',
  components: { AddPost, GratitudeCard },
  setup() {
    const { user } = getUser()
    const order = ref('asc')

    const { documents: cities } = getCollection(
      'cities',
      ['userUid', '==', user.value.uid],
      order.value
      )

    const handleDelete = (city) => {
      const docRef = doc(db, 'cities', city.id)

      deleteDoc(docRef)
    }

    const handleUpdate = (city) => {
      const docRef = doc(db, 'cities', city.id)

      updateDoc(docRef, {
        isFav: !city.isFav
      })
    }

    const capitalizeCity = (str) => {
      return str.replace(
        /\w\S*/g,
        function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      );
    }

    return { 
      cities,
      handleDelete,
      handleUpdate,
      capitalizeCity,
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