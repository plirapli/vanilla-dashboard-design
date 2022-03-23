/* Accent Color */
let colorGreen = 'rgb(46, 208, 159)';
let colorBlue = 'rgb(83, 90, 255)';
let colorRed = 'rgb(246, 72, 28)';
let colorGray = 'rgb(186, 186, 186)';

const data = {
  labels: ['Science', 'Technology', 'Engineering', 'Mathematics'],
  datasets: [
    {
      axis: 'y',
      label: 'Points',
      data: [52, 178, 384, 215],
      backgroundColor: [colorGreen, colorBlue, colorRed, colorGray],
    },
  ],
};

const chartConfig = {
  type: 'bar',
  data,
  options: {
    indexAxis: 'y',
  },
};

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, chartConfig);
