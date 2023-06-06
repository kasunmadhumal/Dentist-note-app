<template>
    <div class="page">
      <aside v-if="showSidebar" class="navbar navbar-vertical navbar-expand-lg navbar-dark">
        <div class="TreatmentList d-flex flex-column align-content-center">

        <h1 class="m-lg-4">Treatments</h1>
        <div v-for="(data,i) in Repository.data_list" class="list_of_tittles">
            <NuxtLink :to="`/${i}`">
              {{data.name}}
            </NuxtLink>
        </div>


        </div>


      </aside>
        <header class="navbar navbar-expand-sm navbar-light d-print-none">
            <div class="container-xl">
                <button class="side_bar_button" @click="sideBarAction">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-baseline-density-medium" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="white" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="white"></path>
                    <path d="M4 20h16"></path>
                    <path d="M4 12h16"></path>
                    <path d="M4 4h16"></path>
                  </svg>
                </button>
                <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                    <a href="#">
                      <img decoding="async" loading="lazy" width="110" height="17" src="https://www.chairsyde.com/wp-content/uploads/2022/03/Logo-coral-pink.png" alt="" title="Logo - coral pink" srcset="https://www.chairsyde.com/wp-content/uploads/2022/03/Logo-coral-pink.png 1741w, https://www.chairsyde.com/wp-content/uploads/2022/03/Logo-coral-pink-300x43.png 300w, https://www.chairsyde.com/wp-content/uploads/2022/03/Logo-coral-pink-1024x146.png 1024w, https://www.chairsyde.com/wp-content/uploads/2022/03/Logo-coral-pink-768x109.png 768w, https://www.chairsyde.com/wp-content/uploads/2022/03/Logo-coral-pink-1536x219.png 1536w, https://www.chairsyde.com/wp-content/uploads/2022/03/Logo-coral-pink-1080x154.png 1080w, https://www.chairsyde.com/wp-content/uploads/2022/03/Logo-coral-pink-1280x182.png 1280w, https://www.chairsyde.com/wp-content/uploads/2022/03/Logo-coral-pink-980x140.png 980w, https://www.chairsyde.com/wp-content/uploads/2022/03/Logo-coral-pink-480x68.png 480w" sizes="(max-width: 1741px) 100vw, 1741px" class="wp-image-9916">
                    </a>
                </h1>
                <div class="navbar-nav flex-row order-md-last">
                    <div class="nav-item">
                    <a href="#" class="nav-link d-flex lh-1 text-reset p-0">
                        <span class="avatar avatar-sm" style="background-image: url(/samples/avatars/002m.jpg)"></span>
                        <div class="d-none d-xl-block ps-2">
                        <div>john smith</div>
                        <div class="mt-1 small text-muted">UI Designer</div>
                        </div>
                    </a>
                    </div>
                </div>
            </div>
        </header>
        <div class="page-wrapper">
            <div class="page-body">
            <div class="container-xl">
                <div class="row row-deck row-cards">
                <Nuxt />
                </div>
            </div>
            </div>
        </div>
    </div>

</template>

<script>

import Repository from '~/repository/repository'

export default {

  data(){
    return{
      showSidebar: true,
      Repository: Repository
    }
  },
  methods:{
    sideBarAction(){
      this.showSidebar = !this.showSidebar;
    },
    saveSelectOption(value){
      console.log("cale")
      localStorage.setItem("treatmentID", value);
    }

  }
}

</script>

<style scoped>
.list_of_tittles{
  margin-top: 1vw;
  border: 1px solid #ccc;
  margin-left: 1vw;
  border-radius: 10px;
  padding: 7px;
  width: 11vw;

  z-index: 999;
  top: calc(100% + 5px);
  left: 0;
  background-color: white;
  box-shadow: 0px 2px 5px rgb(154, 159, 154);
}
.side_bar_button{
  border: none;
  background-color: white;
}
</style>
