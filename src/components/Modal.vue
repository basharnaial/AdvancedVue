<script setup >


// This is the child component. It receives the 'show' prop from the parent (TeamView)
// to control whether the modal should be displayed or not.
defineProps({
  show: Boolean,
})
</script>


<template>

<!--  | Directive            | Meaning                                                                  |-->
<!--  | &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; | &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; |-->
<!--  | `enter-from-class`   | The starting class when the element **enters** (hidden: `opacity-0`).    |-->
<!--  | `enter-to-class`     | The final class after enter transition (fully visible: `opacity-100`).   |-->
<!--  | `enter-active-class` | The **duration and transition** settings for enter (300ms).              |-->
<!--  | `leave-from-class`   | The starting class when the element **leaves** (visible: `opacity-100`). |-->
<!--  | `leave-to-class`     | The ending class after leave transition (hidden: `opacity-0`).           |-->
<!--  | `leave-active-class` | The **duration and transition** settings for leave (200ms).              |-->
<!-- $$ (( Opacity enter with 0 - 100 then leave with the opposite 100 - 0 )) $$-->
  <transition
  enter-from-class="opacity-0 scale-125"
  enter-to-class="opacity-100 scale-100"
  enter-active-class="transition duration-300"
  leave-active-class="transition duration-200"
  leave-from-class="opacity-100 scale-100"
  leave-to-class="opacity-0 scale-125"

  name="modal"
  >
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
  </transition>

</template>


<style>
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .6);
  display: grid;
  place-items: center;
}
.modal-container {
  background: white;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 7px;
}
.modal-footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding-top: 0.5rem;
  font-size: .8rem;
}
#footer button {
  background: #ddd;
  padding: .25rem .75rem;
  border-radius: 20px;
}
#footer button:hover {
  background: #c8c8c8;
}
</style>


<!--if you want to use css rather than tailwind for transitions-->
<!--<style>-->
<!--.modal-enter-from {-->
<!--  opacity: 0;-->
<!--}-->
<!--.modal-enter-to {-->
<!--  opacity: 1;-->
<!--}-->
<!--.modal-enter-active {-->
<!--  transition: opacity 0.3s ease;-->
<!--}-->
<!--.modal-leave-from {-->
<!--  opacity: 1;-->
<!--}-->
<!--.modal-leave-to {-->
<!--  opacity: 0;-->
<!--}-->
<!--.modal-leave-active {-->
<!--  transition: opacity 0.2s ease;-->
<!--}-->

<!--</style>-->
