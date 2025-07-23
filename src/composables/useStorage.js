import { ref, watch } from "vue";

export function useStorage(key, data = null) {

  let storedData = read();

  if (storedData) {
    console.log('we have stored data')

    data = ref(storedData);
  } else {
    console.log('we have not stored data so we will put default')
    data = ref(data);
    write();
  }

  // // watch for anything changed
  watch(data, write, { deep: true });


  // change data without watch above will not working IN LocalStorage reactively
  // setTimeout(() =>{
  //   data.value = '002'
  // },2000);


  function read() {
    return localStorage.getItem(key);
  }

  function write() {
    if (data.value === null || data.value === '') {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, data.value);
    }
  }

  return data;
}
