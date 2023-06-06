<template>

  <div class="card card-view">
    <div class="cl-dropdown-menu ng-star-inserted">
      <section  class="cl-relative" style="display: block;">
            <div class="option_picker_tittle_list" style="background-color: #e6daf3 ;border-top-left-radius: 20px;border-top-right-radius: 20px">
                <div class="cl-dropdown-menu-header d-flex m-lg-3">
                  <div>
                    <h3 class="mt-1">{{selectedOptions.length}}/{{allOptions.length}}</h3>
                  </div>
                  <div>
                    <button class="btn border-0 rounded text-azure" @click="selectOrUnselectAll">{{selectedOptions.length===allOptions.length?'Deselect all':'Select all'}}</button>
                  </div>
                </div>
                <div class="option_picker_list d-flex" v-for="option in allOptions" >
                  <div>
                    <button class="btn border-0 button-lg" style="font-size: medium" @click="selectValue(option,'add')" ><b>{{option}}</b></button>
                    <button class="btn border-0" @click="selectValue(option,'delete')">
                      <svg style="margin-bottom: 5px" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="red" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 7l16 0"></path>
                        <path d="M10 11l0 6"></path>
                        <path d="M14 11l0 6"></path>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
            </div>
            <div class="cl-dropdown-section-wrapper ng-star-inserted border-1 card-footer mt-3 mb-3" style="height: 70px;
                                                                            background-color: #9a9f9a;border-bottom-left-radius: 20px;border-bottom-right-radius: 20px">
              <button class="btn border-0" @click="deleteAllValues">
                <svg style="margin-bottom: 15px; margin-right: 10px" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.8672 1.41L13.4572 0L7.86719 5.59L2.27719 0L0.867188 1.41L6.45719 7L0.867188 12.59L2.27719 14L7.86719 8.41L13.4572 14L14.8672 12.59L9.27719 7L14.8672 1.41Z"
                    fill="#BDBDBD"></path>
                </svg>
                <p class="text-light">Skip options to add new or freewrite</p>
              </button>
            </div>
    </section>
    </div>
  </div>

</template>

<script>
export default {
  name: "OptionPicker",
  props: {
    selectedOptions: {
      type: Array,
      required: true
    },
    allOptions: {
      type: Array,
      required: true
    }
  },

  mounted() {

  },
  data(){
      return{

      }
  },
  methods:{
    deleteAllValues(){
      this.$emit('deleteAllValues')
      this.selectedOptions = []
      this.allOptions = []
    },
    selectValue(value, state){
      if(state === 'add'){
        this.$emit('selectValue', value)
        this.$emit('addNewOption')
      }else if(state === 'delete'){
        this.$emit('selectValue', value)
        this.$emit('deleteValue')
      }

    },
    selectOrUnselectAll(){
      let status = this.selectedOptions.length===this.allOptions.length?'Deselect all':'Select all'
      if(status === 'Select all'){
        this.$emit('selectAllOptions',status)
      }else{
        this.$emit('unselectAllOptions',status)
      }
    },

  }

}
</script>

<style scoped>
.option_picker_tittle_list{
  overflow-y: scroll;
  white-space: nowrap;
  width: 100%;
  height: 20vh;
}

.card-view {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
}
.cl-dropdown-menu {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 20px;
  width: auto;
  min-width: 360px;
  max-width: 1576px;
  z-index: 1031;
}
.cl-dropdown-menu-header {
  margin-bottom: 20px;
}
.cl-dropdown-item {
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  padding-bottom: 10px;
}

</style>
