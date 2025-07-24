import { reactive } from 'vue'

export let counter = reactive({
  // state
  count:0,

  // action
  increment(){
  // for debug
  // console.log(this.count)
  if(this.count >= 10){
    return;
  }

  this.count++;
  }

});
