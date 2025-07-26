<script setup >


// This is the child component. It receives the 'show' prop from the parent (TeamView)
// to control whether the modal should be displayed or not.
defineProps({
  show: Boolean,
})
</script>


<template>
<div v-if="show" class="modal-mask">


  <div class="modal-container">
  <header>
    <slot name="header">default header</slot>
  </header>

      <slot>default body</slot>

    <footer id="footer" >
      <slot name="footer">
      <button @click="$emit('close')" style="color:Red;">
        default Close
      </button>
      </slot>
    </footer>

  </div>


</div>
</template>

<style>
.modal-mask{
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
}
.modal-container {
  background-color: #fefefe;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 7px;

}
#footer{
  border-top:1px solid #ddd;
  margin-top: 1rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
}
#footer button{
  display: block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  background: #ddd;
  border-radius: 20px;
}
#footer button:hover{
  display: block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  background: #c8c8c8c8;
  border-radius: 20px;
}
</style>
