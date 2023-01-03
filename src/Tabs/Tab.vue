<template>
  <div class="allWrap">
  <ul  class="tabContainer">
    <li @click="tabNum = i; moveTop()"  v-for="(a,i) in tab" :key="i" class="nav-item">
      <a class="nav-link " aria-current="page" href="#sec-3" >{{a}}</a>
    </li>


  </ul>

<!--  <div class="tab1Content" v-if="tabNum == 0">-->
<!--    <안녕하세요1>-->
<!--  </div>-->
  <div  ></div>
  <div id="tabHeader" class="tabContent" v-if="tabNum == 0">
  <TabContent1 />
  </div>
  <div  class="tab1Content" v-if="tabNum == 1">
    안녕하세요2
  </div>
  <div  class="tab2Content" v-if="tabNum == 2">
    안녕하세요3
  </div>
  <div  class="tab3Content" v-if="tabNum == 3">
    안녕하세요4
  </div>

  </div>

</template>

<script>
import {ref, onMounted, } from 'vue'
import TabContent1 from '@/Tabs/TabContent/TabContent1'




export default {
  name: "TheTab",
  components : {
    TabContent1,
  },

  data(){
    return {tabNum : 0}
  },
  methods : {
  moveTop(){
    const element = document.getElementById('tabHeader')
    element.scrollIntoView(false)
  },
    },
  setup(){
    const tab= ref(['L-Management','EasyScan','HotSpot','Chat'])


  onMounted(()=>{

  })
    return {tab,}
  }
}
</script>

<style scoped>
.allWrap{
  display:flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  width:100%
}
.tabContainer{
  display:flex;
  justify-content: space-between;
  align-items:center;
  width: 500px;
  margin-top:50px;
  list-style: none;
  position:sticky;
  top: 0;
     }
.tabContainer > li {
  padding: 10px;
 color: black;
}
.tabContainer >li:hover{
  border-radius: 5px;
  background-color: lightgrey;
  color: white;
  transition: background-color 1s, color;
}
.tabContent {
  display:flex;
  width: 100%;
  margin-top: 30px;

}



</style>