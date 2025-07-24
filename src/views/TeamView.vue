<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembersTable from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import { useTeamStore } from '@/stores/TeamStore';

let team = useTeamStore();
team.fill();
// console.log(team[0]);


setTimeout(() => {
  // team.grow(25)
  }, 2000);
</script>

<template>
<TeamHeader/>
  <div class="place-self-center flex flex-col gap-y-3">

<TeamMembersTable />

    <p class="text-right text-gray-600 italic" v-show="team.members.length === team.spots">
      There are no remaining team spots. Upgrade to add more.
    </p>
  </div>
<TeamFooter/>
</template>
