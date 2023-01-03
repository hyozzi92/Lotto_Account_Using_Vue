<template>
<div class="chartWrap">
  <Line  class="chart" :data="chartData" :options="chartOptions"/>
</div>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)



export default {
  name: "TheLineChart",
  components : {
  Line,
  },
  data(){
    return{
      chartData : {
        labels:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        datasets:[{data: [40,20,12]}]
      },
      chartOptions :{
        responsive : true
      }
    }
  },
}
</script>

<style scoped>
.chartWrap{

  width:60%;
}
.chart {
  padding:10px;
}
</style>