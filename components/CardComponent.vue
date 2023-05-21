<template>
  <div class="card bg-light mb-3">
    <div class="card-body" v-for="data in data_list">
      <div class="mb-3 mt-4 item-row">
        <button class="btn btn-sm border-0" id="side_btn">
          <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg"
               class="move-svg">
            <circle cx="2.48257" cy="1.61538" r="1.61538" fill="#BDBDBD"></circle>
            <circle cx="8.86734" cy="1.61538" r="1.61538" fill="#BDBDBD"></circle>
            <circle cx="2.48257" cy="6.9982" r="1.61538" fill="#BDBDBD"></circle>
            <circle cx="8.86734" cy="6.9982" r="1.61538" fill="#BDBDBD"></circle>
            <circle cx="2.48257" cy="12.3849" r="1.61538" fill="#BDBDBD"></circle>
            <circle cx="8.86734" cy="12.3849" r="1.61538" fill="#BDBDBD"></circle>
          </svg>
        </button>
        <button class="btn btn-sm border-0" id="side_btn">
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.8672 1.41L13.4572 0L7.86719 5.59L2.27719 0L0.867188 1.41L6.45719 7L0.867188 12.59L2.27719 14L7.86719 8.41L13.4572 14L14.8672 12.59L9.27719 7L14.8672 1.41Z"
              fill="#BDBDBD"></path>
          </svg>
        </button>
        <input type="text" class="h1 title-input" v-model="data.value"
               oninput="this.style.width = ((this.value.length * 14) + 25) + 'px';">
      </div>
      <div v-for="item in data.items">
        <div v-if="item.type === 'text-input'" class="mb-2 item-row d-flex flex-wrap">
          <button class="btn btn-sm border-0" id="side_btn">
            <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                 class="move-svg">
              <circle cx="2.48257" cy="1.61538" r="1.61538" fill="#BDBDBD"></circle>
              <circle cx="8.86734" cy="1.61538" r="1.61538" fill="#BDBDBD"></circle>
              <circle cx="2.48257" cy="6.9982" r="1.61538" fill="#BDBDBD"></circle>
              <circle cx="8.86734" cy="6.9982" r="1.61538" fill="#BDBDBD"></circle>
              <circle cx="2.48257" cy="12.3849" r="1.61538" fill="#BDBDBD"></circle>
              <circle cx="8.86734" cy="12.3849" r="1.61538" fill="#BDBDBD"></circle>
            </svg>
          </button>
          <button class="btn btn-sm border-0" id="side_btn">
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.8672 1.41L13.4572 0L7.86719 5.59L2.27719 0L0.867188 1.41L6.45719 7L0.867188 12.59L2.27719 14L7.86719 8.41L13.4572 14L14.8672 12.59L9.27719 7L14.8672 1.41Z"
                fill="#BDBDBD"></path>
            </svg>
          </button>
          <input type="text" class="lead border-0 item-input" v-model="item.key"
                 oninput="this.style.width = ((this.value.length * 6.5) + 25) + 'px';">
          <div v-for="itemValue in item.values">
            <div v-if="itemValue.content_type === 'sub-item'">
              <ul>
                <li class="d-flex sub-item-values">
                  <button class="btn btn-sm border-0" id="sub_item_side_btn">
                    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                         class="move-svg">
                      <circle cx="2.48257" cy="1.61538" r="1.61538" fill="#BDBDBD"></circle>
                      <circle cx="8.86734" cy="1.61538" r="1.61538" fill="#BDBDBD"></circle>
                      <circle cx="2.48257" cy="6.9982" r="1.61538" fill="#BDBDBD"></circle>
                      <circle cx="8.86734" cy="6.9982" r="1.61538" fill="#BDBDBD"></circle>
                      <circle cx="2.48257" cy="12.3849" r="1.61538" fill="#BDBDBD"></circle>
                      <circle cx="8.86734" cy="12.3849" r="1.61538" fill="#BDBDBD"></circle>
                    </svg>
                  </button>
                  <button class="btn btn-sm border-0" id="sub_item_side_btn">
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.8672 1.41L13.4572 0L7.86719 5.59L2.27719 0L0.867188 1.41L6.45719 7L0.867188 12.59L2.27719 14L7.86719 8.41L13.4572 14L14.8672 12.59L9.27719 7L14.8672 1.41Z"
                        fill="#BDBDBD"></path>
                    </svg>
                  </button>
                  <input type="text" class="lead border-0 item-input" v-model="itemValue.key"
                         oninput="this.style.width = ((this.value.length * 6.5) + 25) + 'px';">
                  <div v-for="subItemValue in itemValue.values">
                    <div>
                      <button v-if="subItemValue.id % 2 === 1" type="button"
                              class="btn btn-sm  btn-rounded  item-values mx-2">{{ subItemValue.key }}
                      </button>
                      <button v-else type="button" class="btn btn-sm  btn-rounded  item-values">{{ subItemValue.key }}
                      </button>
                    </div>
                  </div>
                  <button v-if="itemValue.values.length !== 0" class="btn btn-sm btn-transparent border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="24"
                         height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none"
                         stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                      <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <div v-else-if="itemValue.content_type === 'item-values'">
              <button v-if="itemValue.id % 2 === 1" type="button" class="btn btn-sm  btn-rounded  item-values mx-2">
                {{ itemValue.key }}
              </button>
              <button v-else type="button" class="btn btn-sm  btn-rounded  item-values">{{ itemValue.key }}</button>
            </div>
          </div>
          <button v-if="item.values.length !== 0" class="btn btn-sm btn-transparent border-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="24" height="24"
                 viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round"
                 stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            </svg>
          </button>
        </div>
        <div v-else-if="item.type === 'button'">
          <div class="mb-2 item-row">
            <button class="btn btn-sm border-0" id="side_btn">
              <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                   class="move-svg">
                <circle cx="2.48257" cy="1.61538" r="1.61538" fill="#BDBDBD"></circle>
                <circle cx="8.86734" cy="1.61538" r="1.61538" fill="#BDBDBD"></circle>
                <circle cx="2.48257" cy="6.9982" r="1.61538" fill="#BDBDBD"></circle>
                <circle cx="8.86734" cy="6.9982" r="1.61538" fill="#BDBDBD"></circle>
                <circle cx="2.48257" cy="12.3849" r="1.61538" fill="#BDBDBD"></circle>
                <circle cx="8.86734" cy="12.3849" r="1.61538" fill="#BDBDBD"></circle>
              </svg>
            </button>
            <button class="btn btn-sm border-0" id="side_btn">
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.8672 1.41L13.4572 0L7.86719 5.59L2.27719 0L0.867188 1.41L6.45719 7L0.867188 12.59L2.27719 14L7.86719 8.41L13.4572 14L14.8672 12.59L9.27719 7L14.8672 1.41Z"
                  fill="#BDBDBD"></path>
              </svg>
            </button>
            <button class="btn btn-transparent text-blue " id="select_location_btn">
              <div class="select_location_text">
                {{ item.key }}
              </div>
            </button>
          </div>
        </div>
        <div v-else-if="item.type === 'text-input-with-placeHolder'" class="mb-4">
          <input type="text" class=" lead text-muted border-0 item-input" placeholder="Type here..."
                 oninput="this.style.width = ((this.value.length * 6.5) + 25) + 'px';">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Repository from '~/repository/repository'

export default {
  name: "CardComponent",
  data() {
    return {
      data_list: []
    }
  },
  mounted() {
    this.getDataFromRepository()
  },
  methods: {
    getDataFromRepository() {
      this.data_list = Repository.data_list
    }
  }
}
</script>

<style scoped>

.sub-item-values {
  width: 1000px;
}

.card-body {
  margin-left: 60px;
}

.sub-item-values #sub_item_side_btn {
  display: none;
}

.item-row #side_btn {
  display: none;
}

.sub-item-values:hover #sub_item_side_btn {
  display: inline-block;
}


.item-row:hover #side_btn {
  display: inline-block;
}

.item-values {
  border-radius: 5px;
  border: none;
  background-color: rgb(218, 221, 252);
  font-size: 14px;

}

.select_location_text {
  background-color: white;
  border-radius: 6px;
  padding: 8px;
}

#select_location_btn {

  border-radius: 8px;
  font-size: medium;
  padding: 2px;
  text-align: center;
  background: linear-gradient(to right, #ce68ce, #835cd0, #6886e7);
  border: none;

}

.title-input {
  border-radius: 8px;
  /*border: 2px solid #6886e7;*/
  border: none;
  /*background-color: #e6daf3;*/

}

.item-input {
  padding-right: 0;
  font-size: 14px;
}


</style>
