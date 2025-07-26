<script setup>
import Modal from "@/Components/Modal.vue";
import {useTeamStore} from "@/stores/TeamStore";
import { ref } from "vue";
let showModal = ref(false);
let team = useTeamStore();

// let loaded = ref(false);
// setTimeout(() =>{
//   loaded.value = true;
//
// }, 2000);
</script>

<template>
  <button
    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
    :disabled="! team.spotRemaining"
    @click="showModal = true"
  >Add Member ({{ team.spotRemaining }} Spots Left)</button>

  <!--  // Teleport to move the tag like modal for the bottom of page-->
  <!--  ## to body means bottom of body tag-->

  <Teleport to="body">
    <!--  this is passing data for child modal from parent throw :show-->
    <Modal :show="showModal" @close="showModal = false">
      <template #default>
        <p>Need to add a new member to your team?</p>

        <form class="mt-6">
          <div class="flex gap-2">
            <input type="email" placeholder="Email Address..." class="flex-1">
            <button>Add</button>
          </div>
        </form>
      </template>
    </Modal>
  </Teleport>
</template>
