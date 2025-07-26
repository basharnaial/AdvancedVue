<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembersTable from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import { useTeamStore } from '@/stores/TeamStore';
import modal from '@/components/Modal.vue';
import { ref } from 'vue';
let team = useTeamStore();
team.fill();
// console.log(team[0]);


let showModal = ref(false);
</script>

<template>

<!--  ## here we deal with the emmit sent from TeamHeader ## -->
<!--  $$ listen for "add" event and set showModal = true we you receive anything $$  -->
  <TeamHeader @add="showModal = true" />
  <div class="place-self-center flex flex-col gap-y-3">

<TeamMembersTable />

    <p class="text-right text-gray-600 italic" v-show="team.members.length === team.spots">
      There are no remaining team spots. Upgrade to add more.
    </p>
  </div>
<TeamFooter/>

<!--  this is passing data for child modal from parent throw :show-->
  <modal :show="showModal" @close="showModal = false" >
    <template #header>override header</template>
    <template #default>
<!--      override body-->
    need to add new team member
      <form class="mt-6">
        <div class="flex gap-2 mb-3">
          <input type="email" placeholder="Email" name="email" required />
          <button>add</button>
        </div>
      </form>

    </template>
<!--    <template #footer>override footer</template>-->


  </modal>
</template>
