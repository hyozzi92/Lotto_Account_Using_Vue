<template>
  <div class="tabContent1Wrap">
    <div class="tabContent1Left">
      <ul class="list">
        <li>  김효성 고객님 환영합니다. 🖐 </li>
        <li> <img style="width:30px; margin-right: 10px" src="https://cdn-icons-png.flaticon.com/512/3007/3007303.png"/> 로또 구매 금액 : 1670000 </li>
        <li> <img style="width:30px; margin-right: 10px" src="https://cdn-icons-png.flaticon.com/512/2374/2374909.png"/>로또 당첨 횟수 : 1번 </li>
        <li> <img style="width:30px; margin-right: 10px" src="https://cdn-icons-png.flaticon.com/512/2053/2053445.png"/> 로또 최고 수익률 : 730000 </li>
        <li> <img style="width:30px; margin-right: 10px" src="https://cdn-icons-png.flaticon.com/512/1041/1041158.png"/> 로또 최고 순위 : 3등 </li>
        <li> <img style="width:30px; margin-right: 10px" src="https://cdn-icons-png.flaticon.com/512/2953/2953536.png"/> 로또 누적 금액 : 550000 </li>
      </ul>
          </div>
    <LineChart/>
  </div>

</template>

<script>
import LineChart from '@/Tabs/TabContent/LineChart'



export default {
  name: "TabContent1",
  components : {
    LineChart,
  }
}
</script>

<style scoped>
.tabContent1Wrap{
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  width : 100%;
  padding: 30px;
}
.tabContent1Left{
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  height : 800px;

}
.list {
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  height : 100%
}
 li {
   list-style: none;
 }
</style>