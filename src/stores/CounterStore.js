import {defineStore}  from 'pinia';

// defineStore('name')
export let useCounterStore = defineStore('counter',{
  // obj to declare state or any action/ getter or comouted property

  // state for data
  state(){
    return{
      count: 0
    };
  },
  // methods
  actions: {
    increment(){
      if(this.count <10) {
        this.count++;
      }
    }
  },
  // computed properties is called in pinia getters
  // getters computed property
  getters: {
    remaining (){
      return 10 -this.count;
    }
  }
});
