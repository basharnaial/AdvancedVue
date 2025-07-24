<script setup>
import team from "@/team.json";
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembersTable from "@/components/Teams/TeamMembers.vue";
// import TeamFooter from "@/components/Teams/TeamFooter.vue";


// console.log(team[0]);
</script>

<template>
<TeamHeader :team="team" />
  <div class="place-self-center flex flex-col gap-y-3">

<TeamMembersTable  :team="team" />

    <p class="text-right text-gray-600 italic" v-show="team.members.length === team.spots">
      There are no remaining team spots. Upgrade to add more.
    </p>
  </div>
  <footer class="mt-12 bg-gray-100 py-4 text-center">
    <h5 class="font-semibold text-lg">{{ team.name }} - {{ team.spots }} Member Team</h5>
  </footer>
</template>
