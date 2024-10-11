const ctx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024'], // Yıllık etiketler
        datasets: [
            {
                label: 'Ödenen Prim',
                data: [12000, 15000, 11000, 18000, 20000, 18500], // Yıllık gelir verisi
                backgroundColor: 'blue',
                hoverBackgroundColor: 'rgba(0, 123, 255, 0.7)',
                borderRadius: 5
            },
            {
                label: 'Hasar',
                data: [8000, 9000, 7000, 10000, 12000, 11500], // Yıllık harcama verisi
                backgroundColor: 'lightblue',
                hoverBackgroundColor: 'rgba(173, 216, 230, 0.7)',
                borderRadius: 5
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    // Sol taraftaki ölçekte dolar işareti ekleyelim
                    callback: function(value) {
                        return '$' + value;
                    }
                },
                max: 25000, // Y eksenini maksimum 25,000 dolara ayarladım, ihtiyaca göre artırılabilir
               
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return context.dataset.label + ': $' + context.raw; // Tooltip'e dolar işareti ekliyoruz
                    }
                }
            }
        }
    }
});
const ctxMonthly = document.getElementById('barChartMonthly').getContext('2d');
const barChartMonthly = new Chart(ctxMonthly, {
  type: 'bar',
  data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], // 12 aylık etiketler
      datasets: [
          {
              label: 'Ödenen Prim',
              data: [1000, 1200, 1300, 1400, 1600, 1550, 1800, 1900, 1750, 1600, 1700, 1650], // Aylık gelir verisi
              backgroundColor: 'green',
              hoverBackgroundColor: 'rgba(0, 128, 0, 0.7)',
              borderRadius: 5
          },
          {
              label: 'Hasar',
              data: [700, 800, 750, 900, 1000, 950, 1100, 1050, 950, 900, 1000, 950], // Aylık harcama verisi
              backgroundColor: 'lightgreen',
              hoverBackgroundColor: 'rgba(144, 238, 144, 0.7)',
              borderRadius: 5
          }
      ]
  },
  options: {
      responsive: true,
      scales: {
          y: {
              beginAtZero: true,
              ticks: {
                  // Sol taraftaki ölçekte dolar işareti ekleyelim
                  callback: function(value) {
                      return '$' + value;
                  }
              },
              max: 2500, // Y eksenini maksimum 2,500 dolara ayarladım, aylık verilere uygun şekilde
          }
      },
      plugins: {
          tooltip: {
              callbacks: {
                  label: function (context) {
                      return context.dataset.label + ': $' + context.raw; // Tooltip'e dolar işareti ekliyoruz
                  }
              }
          }
      }
  }
});