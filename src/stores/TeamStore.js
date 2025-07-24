import { defineStore } from 'pinia';

// here we will declare [state for data] && [actions for methods] && [getters for computed property]
export let useTeamStore = defineStore('team',{

  // arrow function
  // state: () => {}
  // this approach which jeffrey recommended
  state: () =>  ({

      name: '',
      spots: 0,
      members: []

  }),


  actions:{
    // init() or handle() or fill() or seed()
    // fill() is very common so we will stick with it
    // this could be ajax call or simple import from team.json file
    async fill(){
    let r= await import('@/team.json')
      console.log(r.default);
      this.$state = r.default


      // let data = r.default;
      // الطريقة (1) الاولى لتثبيت/لتحديث البيانات في ال state بعد ان قمنا باستدعائها
      // this.name = data.name;
      // this.spots = data.spots;
      // this.members = data.members;

      // <===============فاصل===============>
      // الطريقة (2) الثانية لتحديث ال states مرة واحدة بعد الاستدعاء
      // this.$patch({
      //   name: data.name,
      //   spots: data.spots,
      //   members: data.members
      // });

      // <===============فاصل===============>
      // الطريقة (3) الثالثة لتحديث ال states فورا باستبدال الstates تماما بالبيانات
      // ## لازم نحط كومنت على المتغير data ماله داعي بهذه التعليمة line 23

    },

    grow(spots){
      this.spots = spots
    }

  },

  getters: {
    spotRemaining(){
      return this.spots - this.members.length;
    },




  },



});
