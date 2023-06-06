<!--<template>-->
<!--  <div>-->
<!--    <div v-for="(data,card_id) in data_list">-->
<!--      <div class="card bg-light mb-3">-->
<!--        <div class="card-body">-->
<!--          <div class="mb-3 mt-4 side-button-view d-flex title">-->
<!--            <button class="btn btn-sm border-0 mb-3" id="side_btn">-->
<!--              <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg"-->
<!--                   class="move-svg">-->
<!--                <circle cx="2.48257" cy="1.61538" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                <circle cx="8.86734" cy="1.61538" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                <circle cx="2.48257" cy="6.9982" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                <circle cx="8.86734" cy="6.9982" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                <circle cx="2.48257" cy="12.3849" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                <circle cx="8.86734" cy="12.3849" r="1.61538" fill="#BDBDBD"></circle>-->
<!--              </svg>-->
<!--            </button>-->
<!--            <button class="btn btn-sm border-0 mb-3" id="side_btn">-->
<!--              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path-->
<!--                  d="M14.8672 1.41L13.4572 0L7.86719 5.59L2.27719 0L0.867188 1.41L6.45719 7L0.867188 12.59L2.27719 14L7.86719 8.41L13.4572 14L14.8672 12.59L9.27719 7L14.8672 1.41Z"-->
<!--                  fill="#BDBDBD"></path>-->
<!--              </svg>-->
<!--            </button>-->
<!--            <input type="text" class="h1 title-input" v-model="data.value"-->
<!--                   oninput="this.style.width = ((this.value.length * 14) + 25) + 'px';">-->
<!--          </div>-->
<!--          <div>-->
<!--            <div v-for="(item, i) in items"-->
<!--                 :class="item.haveSubItems?'list d-flex flex-wrap':'list item-row d-flex flex-wrap'">-->
<!--              <transition-group name="flip-list" tag="div">-->
<!--                <div-->
<!--                  @dragover="(e) => onDragOver(item, i, e)"-->
<!--                  @dragend="(e) => finishDrag(item, i, e)"-->
<!--                  @dragstart="(e) => startDrag(item, i, e)"-->
<!--                  class="item"-->
<!--                  :class="{over: (item === over.item && item !== dragFrom), [over.dir]: (item === over.item && item !== dragFrom) }"-->
<!--                  draggable="true"-->
<!--                  :key="item">-->
<!--                  <div v-if="item.type === 'text-input' && item.parent_id === (card_id + 1)"-->
<!--                       class="mb-2">-->
<!--                    <div class="side-button-view">-->
<!--                      <button class="btn btn-sm border-0 mb-1" id="side_btn">-->
<!--                        <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg"-->
<!--                             class="move-svg">-->
<!--                          <circle cx="2.48257" cy="1.61538" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                          <circle cx="8.86734" cy="1.61538" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                          <circle cx="2.48257" cy="6.9982" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                          <circle cx="8.86734" cy="6.9982" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                          <circle cx="2.48257" cy="12.3849" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                          <circle cx="8.86734" cy="12.3849" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                        </svg>-->
<!--                      </button>-->
<!--                      <button class="btn btn-sm border-0 mb-1" id="side_btn">-->
<!--                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                          <path-->
<!--                            d="M14.8672 1.41L13.4572 0L7.86719 5.59L2.27719 0L0.867188 1.41L6.45719 7L0.867188 12.59L2.27719 14L7.86719 8.41L13.4572 14L14.8672 12.59L9.27719 7L14.8672 1.41Z"-->
<!--                            fill="#BDBDBD"></path>-->
<!--                        </svg>-->
<!--                      </button>-->
<!--                      <input type="text" class="lead border-0 item-input" v-model="item.key"-->
<!--                             oninput="this.style.width = ((this.value.length * 6.5) + 25) + 'px';">-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div v-else-if="item.type === 'button' && item.parent_id === (card_id + 1)">-->
<!--                    <div class="mb-2">-->
<!--                      <div class="side-button-view">-->
<!--                        <button class="btn btn-sm border-0" id="side_btn">-->
<!--                          <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg"-->
<!--                               class="move-svg">-->
<!--                            <circle cx="2.48257" cy="1.61538" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                            <circle cx="8.86734" cy="1.61538" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                            <circle cx="2.48257" cy="6.9982" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                            <circle cx="8.86734" cy="6.9982" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                            <circle cx="2.48257" cy="12.3849" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                            <circle cx="8.86734" cy="12.3849" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                          </svg>-->
<!--                        </button>-->
<!--                        <button class="btn btn-sm border-0" id="side_btn">-->
<!--                          <svg width="15" height="14" viewBox="0 0 15 14" fill="none"-->
<!--                               xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path-->
<!--                              d="M14.8672 1.41L13.4572 0L7.86719 5.59L2.27719 0L0.867188 1.41L6.45719 7L0.867188 12.59L2.27719 14L7.86719 8.41L13.4572 14L14.8672 12.59L9.27719 7L14.8672 1.41Z"-->
<!--                              fill="#BDBDBD"></path>-->
<!--                          </svg>-->
<!--                        </button>-->
<!--                        <button class="btn btn-transparent text-blue " id="select_location_btn">-->
<!--                          <div class="select_location_text">-->
<!--                            {{ item.key }}-->
<!--                          </div>-->
<!--                        </button>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </transition-group>-->
<!--              <div v-if="item.type === 'text-input' && item.parent_id === (card_id + 1)"-->
<!--                   class="d-flex flex-wrap flex-row item-options">-->
<!--                <div v-for="itemValue in item.values">-->
<!--                  <div v-if="itemValue.content_type === 'sub-item'" class="item-row">-->
<!--                    <ul>-->
<!--                      <li class="d-flex sub-item-values">-->

<!--                        <div class="side-button-view">-->
<!--                          <button class="btn btn-sm border-0" id="side_btn">-->
<!--                            <svg width="11" height="14" viewBox="0 0 11 14" fill="none"-->
<!--                                 xmlns="http://www.w3.org/2000/svg"-->
<!--                                 class="move-svg">-->
<!--                              <circle cx="2.48257" cy="1.61538" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                              <circle cx="8.86734" cy="1.61538" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                              <circle cx="2.48257" cy="6.9982" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                              <circle cx="8.86734" cy="6.9982" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                              <circle cx="2.48257" cy="12.3849" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                              <circle cx="8.86734" cy="12.3849" r="1.61538" fill="#BDBDBD"></circle>-->
<!--                            </svg>-->
<!--                          </button>-->
<!--                          <button class="btn btn-sm border-0" id="side_btn">-->
<!--                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none"-->
<!--                                 xmlns="http://www.w3.org/2000/svg">-->
<!--                              <path-->
<!--                                d="M14.8672 1.41L13.4572 0L7.86719 5.59L2.27719 0L0.867188 1.41L6.45719 7L0.867188 12.59L2.27719 14L7.86719 8.41L13.4572 14L14.8672 12.59L9.27719 7L14.8672 1.41Z"-->
<!--                                fill="#BDBDBD"></path>-->
<!--                            </svg>-->
<!--                          </button>-->
<!--                          <input type="text" class="lead border-0 item-input" v-model="itemValue.key"-->
<!--                                 oninput="this.style.width = ((this.value.length * 6.5) + 25) + 'px';">-->
<!--                        </div>-->
<!--                        <div v-if="itemValue.values.length !== 0" v-for="subItemValue in itemValue.values">-->
<!--                          <div>-->
<!--                            <button type="button"-->
<!--                                    :class="subItemValue.id % 2 === 1?'btn btn-sm  btn-rounded  item-values mx-2':'btn btn-sm  btn-rounded  item-values'"-->
<!--                                    @click="selectOptionFromItemValues(item.id, item.parent_id, subItemValue.key, itemValue.id)">-->
<!--                              {{ subItemValue.key }}-->
<!--                            </button>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                        <button v-if="itemValue.values.length !== 0" class="btn btn-sm btn-transparent border-0"-->
<!--                                @click="addNewOption(item.id, item.parent_id, itemValue.id)">-->
<!--                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="24"-->
<!--                               height="24"-->
<!--                               viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none"-->
<!--                               stroke-linecap="round"-->
<!--                               stroke-linejoin="round">-->
<!--                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>-->
<!--                            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>-->
<!--                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>-->
<!--                            <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>-->
<!--                          </svg>-->
<!--                        </button>-->

<!--                        <div v-if="itemValue.values.length === 0" class="options_list_show"-->
<!--                             @mouseenter="showOptionsList(item.id, item.parent_id, itemValue.id)"-->
<!--                             @mouseleave="clearOptionList">-->
<!--                          <button class="lead save_new_option_input">-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg"-->
<!--                                 class="icon icon-tabler icon-tabler-circle-chevron-down" width="24" height="24"-->
<!--                                 viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"-->
<!--                                 stroke-linecap="round" stroke-linejoin="round">-->
<!--                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>-->
<!--                              <path d="M15 11l-3 3l-3 -3"></path>-->
<!--                              <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z"></path>-->
<!--                            </svg>-->
<!--                          </button>-->
<!--                          <div class="project-picker-component">-->
<!--                            <OptionPicker-->
<!--                              @selectAllOptions="selectAllOptions(item.id, item.parent_id,itemValue.id)"-->
<!--                              @unselectAllOptions="unselectAllOptions(item.id, item.parent_id, itemValue.id)"-->
<!--                              @addNewOption="addNewOptionToList(item.id, item.parent_id, itemValue.id)"-->
<!--                              @selectValue="selectValue"-->
<!--                              @deleteValue="deleteValue(item.id, item.parent_id, itemValue.id)"-->
<!--                              @deleteAllValues="deleteAllValues(item.id, item.parent_id, itemValue.id)"-->
<!--                              v-if=""-->
<!--                              class="project-picker-container"-->
<!--                              :selectedOptions="selectedOptions"-->
<!--                              :allOptions="allOptions"-->
<!--                              :style="{ position: 'absolute', top: '100%', left: '0', zIndex: 9999 }">-->
<!--                            </OptionPicker>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                        <div v-if="itemValue.otherOptions[0].length !== 0"-->
<!--                             v-for="(option,i) in itemValue.otherOptions[0]">-->
<!--                          <button type="button"-->
<!--                                  :class="i % 2 === 0?'btn btn-sm  btn-rounded  options_list mx-2 disabled':'btn btn-sm  btn-rounded  options_list disabled'"-->
<!--                                  @click="">-->
<!--                            {{ option }}-->
<!--                          </button>-->
<!--                        </div>-->
<!--                        <form @submit.prevent="handleSubmitNewOption(item.id, item.parent_id, itemValue.id )">-->
<!--                          <input v-if="itemValue.values.length === 0" type="text" class="lead add_new_option_input"-->
<!--                                 oninput="this.style.width = ((this.value.length * 6.5) + 25) + 'px';"-->
<!--                                 v-model="form.newOption">-->
<!--                          <button v-if="itemValue.values.length === 0" type="submit" class="lead save_new_option_input">-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark"-->
<!--                                 width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"-->
<!--                                 fill="none" stroke-linecap="round" stroke-linejoin="round">-->
<!--                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>-->
<!--                              <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>-->
<!--                            </svg>-->
<!--                          </button>-->
<!--                        </form>-->
<!--                      </li>-->
<!--                    </ul>-->
<!--                  </div>-->
<!--                  <div v-else-if="itemValue.content_type === 'item-values'">-->
<!--                    <button type="button"-->
<!--                            :class="itemValue.id % 2 === 1 ? 'btn btn-sm  btn-rounded  item-values mx-2':'btn btn-sm  btn-rounded  item-values'"-->
<!--                            @click="selectOptionFromItemValues(item.id, item.parent_id, itemValue.key)">-->
<!--                      {{ itemValue.key }}-->
<!--                    </button>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <button v-if="item.values.length !== 0" class="btn btn-sm btn-transparent border-0"-->
<!--                        @click="addNewOption(item.id, item.parent_id)">-->
<!--                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="24"-->
<!--                       height="24"-->
<!--                       viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none"-->
<!--                       stroke-linecap="round"-->
<!--                       stroke-linejoin="round">-->
<!--                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>-->
<!--                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>-->
<!--                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>-->
<!--                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>-->
<!--                  </svg>-->
<!--                </button>-->
<!--                <div v-if="item.values.length === 0" class="options_list_show"-->
<!--                     @mouseenter="showOptionsList(item.id, item.parent_id)" @mouseleave="clearOptionList">-->
<!--                  <button class="lead save_new_option_input">-->
<!--                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-chevron-down"-->
<!--                         width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"-->
<!--                         stroke-linecap="round" stroke-linejoin="round">-->
<!--                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>-->
<!--                      <path d="M15 11l-3 3l-3 -3"></path>-->
<!--                      <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z"></path>-->
<!--                    </svg>-->
<!--                  </button>-->
<!--                  <div class="project-picker-component">-->
<!--                    <OptionPicker-->
<!--                      @selectAllOptions="selectAllOptions(item.id, item.parent_id)"-->
<!--                      @unselectAllOptions="unselectAllOptions(item.id, item.parent_id)"-->
<!--                      @addNewOption="addNewOptionToList(item.id, item.parent_id)"-->
<!--                      @selectValue="selectValue"-->
<!--                      @deleteValue="deleteValue(item.id, item.parent_id)"-->
<!--                      @deleteAllValues="deleteAllValues(item.id, item.parent_id)"-->
<!--                      v-if=""-->
<!--                      class="project-picker-container"-->
<!--                      :selectedOptions="selectedOptions"-->
<!--                      :allOptions="allOptions"-->
<!--                      :style="{ position: 'absolute', top: '100%', left: '0', zIndex: 9999 }">-->
<!--                    </OptionPicker>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div v-if="item.otherOptions[0].length !== 0" v-for="(option,i) in item.otherOptions[0]">-->
<!--                  <button type="button"-->
<!--                          :class="i % 2 === 0?'btn btn-sm  btn-rounded  options_list mx-2 disabled':'btn btn-sm  btn-rounded  options_list disabled'"-->
<!--                          @click="">-->
<!--                    {{ option }}-->
<!--                  </button>-->
<!--                </div>-->
<!--                <form @submit.prevent="handleSubmitNewOption(item.id, item.parent_id)">-->
<!--                  <input v-if="item.values.length === 0" type="text" class="lead add_new_option_input"-->
<!--                         oninput="this.style.width = ((this.value.length * 6.5) + 25) + 'px';" v-model="form.newOption">-->
<!--                  <button v-if="item.values.length === 0" type="submit" class="lead save_new_option_input">-->
<!--                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="40"-->
<!--                         height="40" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"-->
<!--                         stroke-linecap="round" stroke-linejoin="round">-->
<!--                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>-->
<!--                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>-->
<!--                    </svg>-->
<!--                  </button>-->
<!--                </form>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="mb-4">-->
<!--            <input type="text" class=" lead text-muted border-0 item-input" placeholder="Type here..."-->
<!--                   oninput="this.style.width = ((this.value.length * 6.5) + 25) + 'px';">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import Repository from '~/repository/repository'-->

<!--export default {-->

<!--  name: "CardComponent",-->
<!--  data: function () {-->
<!--    return {-->
<!--      selectedOptions: [],-->
<!--      allOptions: [],-->
<!--      data_list: [],-->
<!--      over: {},-->
<!--      startLoc: 0,-->
<!--      dragging: false,-->
<!--      dragFrom: {},-->
<!--      items: [],-->
<!--      subItems: [],-->
<!--      form: {-->
<!--        newOption: "",-->
<!--      },-->
<!--      optionPicker: {-->
<!--        selectValue: ""-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  async mounted() {-->
<!--    await this.getDataFromRepository()-->
<!--    await this.getAllItems()-->
<!--    await this.getAllSubItems()-->
<!--  },-->
<!--  methods: {-->
<!--    deleteAllValues(id, parent_id, sub_item_id) {-->
<!--      let itemList = this.items-->
<!--      if (sub_item_id === undefined) {-->
<!--        for (let i = 0; i < itemList.length; i++) {-->
<!--          if (itemList[i].id === id && itemList[i].parent_id === parent_id) {-->
<!--            itemList[i].otherOptions[0] = []-->
<!--            itemList[i].otherOptions[1] = []-->
<!--          }-->
<!--        }-->
<!--      } else {-->
<!--        for (let i = 0; i < itemList.length; i++) {-->
<!--          if (itemList[i].id === id && itemList[i].parent_id === parent_id) {-->
<!--            for (let j = 0; j < itemList[i].values.length; j++) {-->
<!--              if (itemList[i].values[j].id === sub_item_id) {-->
<!--                itemList[i].values[j].otherOptions[0] = []-->
<!--                itemList[i].values[j].otherOptions[1] = []-->
<!--              }-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--      this.items = itemList-->
<!--    },-->
<!--    selectValue(value) {-->
<!--      this.optionPicker.selectValue = value-->
<!--    },-->
<!--    deleteValue(id, parent_id, sub_item_id) {-->
<!--      let itemList = this.items-->
<!--      if (sub_item_id === undefined) {-->
<!--        for (let i = 0; i < itemList.length; i++) {-->
<!--          if (itemList[i].id === id && itemList[i].parent_id === parent_id) {-->
<!--            if (itemList[i].otherOptions[0].includes(this.optionPicker.selectValue)) {-->
<!--              const index2 = itemList[i].otherOptions[0].indexOf(this.optionPicker.selectValue);-->
<!--              if (index2 > -1) {-->
<!--                itemList[i].otherOptions[0].splice(index2, 1);-->
<!--              }-->
<!--            }-->
<!--            const index2 = itemList[i].otherOptions[1].indexOf(this.optionPicker.selectValue);-->
<!--            if (index2 > -1) {-->
<!--              itemList[i].otherOptions[1].splice(index2, 1);-->
<!--            }-->
<!--            this.optionPicker.selectValue = ""-->

<!--          }-->
<!--        }-->
<!--      } else {-->
<!--        for (let i = 0; i < itemList.length; i++) {-->
<!--          if (itemList[i].id === id && itemList[i].parent_id === parent_id) {-->
<!--            for (let j = 0; j < itemList[i].values.length; j++) {-->
<!--              if (itemList[i].values[j].id === sub_item_id) {-->
<!--                if (itemList[i].values[j].otherOptions[0].includes(this.optionPicker.selectValue)) {-->
<!--                  const index2 = itemList[i].values[j].otherOptions[0].indexOf(this.optionPicker.selectValue);-->
<!--                  if (index2 > -1) {-->
<!--                    itemList[i].values[j].otherOptions[0].splice(index2, 1);-->
<!--                  }-->
<!--                }-->
<!--                const index2 = itemList[i].values[j].otherOptions[1].indexOf(this.optionPicker.selectValue);-->
<!--                if (index2 > -1) {-->
<!--                  itemList[i].values[j].otherOptions[1].splice(index2, 1);-->
<!--                }-->
<!--                this.optionPicker.selectValue = ""-->
<!--              }-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--      this.items = itemList-->
<!--    },-->
<!--    addNewOptionToList(id, parent_id, sub_item_id) {-->
<!--      let itemList = this.items-->
<!--      if (sub_item_id === undefined) {-->
<!--        for (let i = 0; i < itemList.length; i++) {-->
<!--          if (itemList[i].id === id && itemList[i].parent_id === parent_id) {-->

<!--            if (!itemList[i].otherOptions[0].includes(this.optionPicker.selectValue)) {-->
<!--              // this.selectedOptions.push(this.optionPicker.selectValue)-->
<!--              itemList[i].otherOptions[0].push(this.optionPicker.selectValue)-->
<!--              this.optionPicker.selectValue = ""-->
<!--            } else {-->
<!--              const index = this.selectedOptions.indexOf(this.optionPicker.selectValue);-->
<!--              if (index > -1) {-->
<!--                this.selectedOptions.splice(index, 1);-->
<!--              }-->
<!--              const index2 = itemList[i].otherOptions[0].indexOf(this.optionPicker.selectValue);-->
<!--              if (index2 > -1) {-->
<!--                itemList[i].otherOptions[0].splice(index2, 1);-->
<!--              }-->
<!--              this.optionPicker.selectValue = ""-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--      } else {-->
<!--        for (let i = 0; i < itemList.length; i++) {-->
<!--          if (itemList[i].id === id && itemList[i].parent_id === parent_id) {-->
<!--            for (let j = 0; j < itemList[i].values.length; j++) {-->
<!--              if (itemList[i].values[j].id === sub_item_id) {-->

<!--                if (!itemList[i].values[j].otherOptions[0].includes(this.optionPicker.selectValue)) {-->
<!--                  // this.selectedOptions.push(this.optionPicker.selectValue)-->
<!--                  itemList[i].values[j].otherOptions[0].push(this.optionPicker.selectValue)-->
<!--                  this.optionPicker.selectValue = ""-->
<!--                } else {-->
<!--                  const index = this.selectedOptions.indexOf(this.optionPicker.selectValue);-->
<!--                  if (index > -1) {-->
<!--                    this.selectedOptions.splice(index, 1);-->
<!--                  }-->
<!--                  const index2 = itemList[i].values[j].otherOptions[0].indexOf(this.optionPicker.selectValue);-->
<!--                  if (index2 > -1) {-->
<!--                    itemList[i].values[j].otherOptions[0].splice(index2, 1);-->
<!--                  }-->
<!--                  this.optionPicker.selectValue = ""-->
<!--                }-->


<!--              }-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--      this.items = itemList-->
<!--    },-->
<!--    selectAllOptions(id, parent_id, sub_item_id) {-->
<!--      let itemList = this.items-->
<!--      if (sub_item_id === undefined) {-->
<!--        for (let i = 0; i < itemList.length; i++) {-->
<!--          if (itemList[i].id === id && itemList[i].parent_id === parent_id) {-->
<!--            this.selectedOptions = itemList[i].otherOptions[1]-->
<!--            itemList[i].otherOptions[0] = itemList[i].otherOptions[1]-->
<!--          }-->
<!--        }-->
<!--      } else {-->
<!--        for (let i = 0; i < itemList.length; i++) {-->
<!--          if (itemList[i].id === id && itemList[i].parent_id === parent_id) {-->
<!--            for (let j = 0; j < itemList[i].values.length; j++) {-->
<!--              if (itemList[i].values[j].id === sub_item_id) {-->
<!--                this.selectedOptions = itemList[i].values[j].otherOptions[1]-->
<!--                itemList[i].values[j].otherOptions[0] = itemList[i].values[j].otherOptions[1]-->
<!--              }-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--      this.items = itemList-->
<!--    },-->
<!--    unselectAllOptions(id, parent_id, sub_item_id) {-->
<!--      let itemList = this.items-->
<!--      if (sub_item_id === undefined) {-->
<!--        for (let i = 0; i < itemList.length; i++) {-->
<!--          if (itemList[i].id === id && itemList[i].parent_id === parent_id) {-->
<!--            this.selectedOptions = []-->
<!--            itemList[i].otherOptions[0] = []-->
<!--          }-->
<!--        }-->
<!--      } else {-->
<!--        for (let i = 0; i < itemList.length; i++) {-->
<!--          if (itemList[i].id === id && itemList[i].parent_id === parent_id) {-->
<!--            for (let j = 0; j < itemList[i].values.length; j++) {-->
<!--              if (itemList[i].values[j].id === sub_item_id) {-->
<!--                this.selectedOptions = []-->
<!--                itemList[i].values[j].otherOptions[0] = []-->
<!--              }-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--      this.items = itemList-->
<!--    },-->
<!--    clearOptionList() {-->
<!--      this.selectedOptions = []-->
<!--      this.allOptions = []-->
<!--    },-->
<!--    async showOptionsList(id, parent_id, sub_item_id) {-->
<!--      let itemList = this.items-->
<!--      if (sub_item_id === undefined) {-->
<!--        for (let i = 0; i < itemList.length; i++) {-->
<!--          if (itemList[i].id === id && itemList[i].parent_id === parent_id) {-->
<!--            this.selectedOptions = itemList[i].otherOptions[0]-->
<!--            this.allOptions = itemList[i].otherOptions[1]-->
<!--          }-->
<!--        }-->
<!--      } else {-->
<!--        for (let i = 0; i < itemList.length; i++) {-->
<!--          if (itemList[i].id === id && itemList[i].parent_id === parent_id) {-->
<!--            for (let j = 0; j < itemList[i].values.length; j++) {-->
<!--              if (itemList[i].values[j].id === sub_item_id) {-->
<!--                this.selectedOptions = itemList[i].values[j].otherOptions[0]-->
<!--                this.allOptions = itemList[i].values[j].otherOptions[1]-->
<!--              }-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--      this.items = itemList-->
<!--    },-->
<!--    selectOptionFromItemValues(id, parent_id, selectOptionValue, sub_item_id) {-->
<!--      let itemList = this.items-->
<!--      if (sub_item_id === undefined) {-->
<!--        for (let i = 0; i < itemList.length; i++) {-->
<!--          if (itemList[i].id === id && itemList[i].parent_id === parent_id) {-->
<!--            itemList[i].otherOptions[0].push(selectOptionValue)-->
<!--            itemList[i].values.forEach((item) => {-->
<!--              itemList[i].otherOptions[1].push(item.key)-->
<!--            })-->
<!--            itemList[i].values = []-->
<!--          }-->
<!--        }-->
<!--      } else {-->
<!--        for (let i = 0; i < itemList.length; i++) {-->
<!--          if (itemList[i].id === id && itemList[i].parent_id === parent_id) {-->
<!--            for (let j = 0; j < itemList[i].values.length; j++) {-->
<!--              if (itemList[i].values[j].id === sub_item_id) {-->
<!--                itemList[i].values[j].otherOptions[0].push(selectOptionValue)-->
<!--                itemList[i].values[j].values.forEach((item) => {-->
<!--                  itemList[i].values[j].otherOptions[1].push(item.key)-->
<!--                })-->
<!--                itemList[i].values[j].values = []-->
<!--              }-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--      this.items = itemList-->
<!--    },-->
<!--    handleSubmitNewOption(id, parent_id, sub_item_id) {-->
<!--      let itemList = this.items-->
<!--      if (sub_item_id === undefined) {-->
<!--        for (let i = 0; i < itemList.length; i++) {-->
<!--          if (itemList[i].id === id && itemList[i].parent_id === parent_id) {-->
<!--            itemList[i].otherOptions[0].push(this.form.newOption)-->
<!--            itemList[i].otherOptions[1].push(this.form.newOption)-->
<!--            this.form.newOption = ""-->
<!--          }-->
<!--        }-->
<!--      } else {-->
<!--        for (let i = 0; i < itemList.length; i++) {-->
<!--          if (itemList[i].id === id && itemList[i].parent_id === parent_id) {-->
<!--            for (let j = 0; j < itemList[i].values.length; j++) {-->
<!--              if (itemList[i].values[j].id === sub_item_id) {-->
<!--                itemList[i].values[j].otherOptions[0].push(this.form.newOption)-->
<!--                itemList[i].values[j].otherOptions[1].push(this.form.newOption)-->
<!--                this.form.newOption = ""-->
<!--              }-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--      this.items = itemList-->
<!--    },-->
<!--    addNewOption(id, parent_id, sub_item_id) {-->
<!--      let itemList = this.items-->
<!--      if (sub_item_id === undefined) {-->
<!--        for (let i = 0; i < itemList.length; i++) {-->
<!--          if (itemList[i].id === id && itemList[i].parent_id === parent_id) {-->
<!--            itemList[i].values.forEach((item) => {-->
<!--              itemList[i].otherOptions[1].push(item.key)-->
<!--            })-->
<!--            itemList[i].values = []-->
<!--          }-->
<!--        }-->
<!--      } else {-->
<!--        for (let i = 0; i < itemList.length; i++) {-->
<!--          if (itemList[i].id === id && itemList[i].parent_id === parent_id) {-->
<!--            for (let j = 0; j < itemList[i].values.length; j++) {-->
<!--              if (itemList[i].values[j].id === sub_item_id) {-->
<!--                itemList[i].values[j].values.forEach((item) => {-->
<!--                  itemList[i].values[j].otherOptions[1].push(item.key)-->
<!--                })-->
<!--                itemList[i].values[j].values = []-->
<!--              }-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--      this.items = itemList-->
<!--    },-->
<!--    getAllItems() {-->
<!--      for (let i = 0; i < this.data_list.length; i++) {-->
<!--        for (let j = 0; j < this.data_list[i].items.length; j++) {-->
<!--          this.items.push(this.data_list[i].items[j])-->
<!--        }-->
<!--      }-->
<!--    },-->
<!--    getAllSubItems() {-->
<!--      for (let i = 0; i < this.items.length; i++) {-->
<!--        if (this.items[i].content_type === "sub-item") {-->
<!--          for (let value in this.items[i].values) {-->
<!--            this.subItems.push(this.items[i].values[value])-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--    },-->
<!--    getDataFromRepository() {-->
<!--      this.data_list = Repository.data_list-->
<!--    },-->
<!--    startDrag(item, i, e) {-->
<!--      this.startLoc = e.clientY;-->
<!--      this.dragging = true;-->
<!--      this.dragFrom = item;-->
<!--      console.log(this.dragFrom);-->
<!--    },-->
<!--    finishDrag(item, pos) {-->
<!--      if (this.items[pos].parent_id === this.items[this.over.pos].parent_id) {-->
<!--        this.items.splice(pos, 1)-->
<!--        this.items.splice(this.over.pos, 0, item);-->
<!--        this.over = {}-->
<!--      }-->
<!--      this.over = {}-->
<!--    },-->
<!--    onDragOver(item, pos, e) {-->
<!--      const dir = (this.startLoc < e.clientY) ? 'down' : 'up';-->
<!--      setTimeout(() => {-->
<!--        this.over = {item, pos, dir};-->
<!--      }, 50)-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--.options_list_show:hover .project-picker-component {-->
<!--  display: inline;-->
<!--}-->

<!--.project-picker-component {-->
<!--  display: none;-->
<!--}-->

<!--.project-picker-container {-->

<!--  position: absolute;-->
<!--  z-index: 999;-->
<!--  top: calc(100% + 5px);-->
<!--  left: 0;-->
<!--  background-color: white;-->
<!--  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);-->
<!--  padding: 10px;-->
<!--  border-radius: 5px;-->

<!--}-->

<!--.item-row {-->
<!--  position: relative;-->
<!--}-->

<!--.project-picker-container {-->
<!--  display: block;-->
<!--}-->

<!--.options_list {-->
<!--  margin-left: 8px;-->
<!--  border-radius: 5px;-->
<!--  border: none;-->
<!--  background-color: rgb(221, 252, 218);-->
<!--  font-size: 14px;-->
<!--}-->

<!--.item-row {-->
<!--  width: auto;-->
<!--}-->

<!--.item-row:hover .add_new_option_input {-->
<!--  display: inline-block;-->
<!--}-->

<!--.item-row:hover .save_new_option_input {-->
<!--  display: inline-block;-->
<!--}-->


<!--.add_new_option_input {-->
<!--  border-color: #1ab7ea;-->
<!--  border-width: thin;-->
<!--  width: 20px;-->
<!--  height: 25px;-->
<!--  border-radius: 6px;-->
<!--  display: none;-->
<!--  margin-left: 8px;-->

<!--}-->

<!--.save_new_option_input {-->
<!--  background-color: white;-->
<!--  border: none;-->
<!--  width: 20px;-->
<!--  height: 25px;-->
<!--  display: none;-->
<!--  margin-left: 0px;-->
<!--}-->

<!--.card {-->
<!--  border-radius: 15px;-->
<!--  box-shadow: 8px 8px 16px 2px #d4c5e5-->
<!--}-->

<!--.sub-item-values {-->
<!--  width: 1000px;-->
<!--}-->

<!--.card-body {-->
<!--  margin-left: 60px;-->
<!--}-->


<!--.item-values:hover {-->
<!--  background-color: rgb(177 182 235);-->
<!--}-->

<!--#side_btn {-->
<!--  display: none;-->
<!--}-->

<!--.side-button-view:hover #side_btn {-->
<!--  display: inline-block;-->
<!--}-->

<!--.item-values {-->
<!--  border-radius: 5px;-->
<!--  border: none;-->
<!--  background-color: rgb(218, 221, 252);-->
<!--  font-size: 14px;-->

<!--}-->

<!--.select_location_text {-->
<!--  background-color: white;-->
<!--  border-radius: 6px;-->
<!--  padding: 8px;-->
<!--}-->

<!--#select_location_btn {-->
<!--  border-radius: 8px;-->
<!--  font-size: medium;-->
<!--  padding: 2px;-->
<!--  text-align: center;-->
<!--  background: linear-gradient(to right, #ce68ce, #835cd0, #6886e7);-->
<!--  border: none;-->
<!--}-->

<!--.title-input {-->
<!--  border-radius: 8px;-->
<!--  /*border: 2px solid #6886e7;*/-->
<!--  border: none;-->


<!--}-->

<!--.item-input {-->
<!--  padding-right: 0;-->
<!--  font-size: 14px;-->
<!--}-->

<!--/*drag and drop*/-->
<!--.list > div {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--}-->

<!--.flip-list-move {-->
<!--  transition: transform .2s;-->
<!--}-->

<!--.over {-->
<!--  opacity: .6;-->
<!--}-->

<!--.down {-->
<!--}-->
<!--.up {-->
<!--}-->
<!--</style>-->
