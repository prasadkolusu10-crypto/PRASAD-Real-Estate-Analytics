document.addEventListener('DOMContentLoaded', function () {
  const scrollButton = document.createElement('button');
  scrollButton.innerText = '⬆ Back to Top';
  scrollButton.classList.add('scroll-top');
  scrollButton.style.display = 'none'; 
  document.body.appendChild(scrollButton);

  scrollButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });

  const style = document.createElement('style');
  style.innerHTML = `
    .scroll-top {
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 10px 20px;
      background-color: #4502f0ff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1.1em;
      z-index: 1000;
      box-shadow: 0 4px 6px rgba(0,0,0,0.2);
      transition: opacity 0.3s ease;
    }
    .scroll-top:hover {
      background-color: #45a049;
    }
  `;
  document.head.appendChild(style);
});

document.addEventListener('DOMContentLoaded', function () {
  const totalProperties = 0;
  const totalTransactions = 0;
  const avgSalePrice = 0;

  const ctx = document.getElementById('realEstateChart').getContext('2d');

  const realEstateChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Total Properties', 'Transactions', 'Avg Sale Price (₹)'],
      datasets: [{
        label: 'Real Estate Analytics',
        data: [totalProperties, totalTransactions, avgSalePrice],
        backgroundColor: [
          'rgba(54, 162, 235, 0.7)', 
          'rgba(255, 206, 86, 0.7)', 
          'rgba(75, 192, 192, 0.7)'  
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1,
        borderRadius: 6,
        maxBarThickness: 70,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(context) {
              if (context.dataIndex === 2) {
                return '₹' + context.formattedValue;
              }
              return context.formattedValue;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              if (value >= 1000) {
                return '₹' + value.toLocaleString();
              }
              return value;
            }
          }
        }
      }
    }
  });
});