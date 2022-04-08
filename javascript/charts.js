const ctx = document.getElementById('stats').getContext('2d');

function createChart(stats) {
    const statsArray = stats.map((item) => item.base_stat);
    const data = {
        labels: [
            'HP',
            'Attack',
            'Deffense',
            ['Special', 'Attack'],
            ['Special', 'Defense'],
            'Speed'
        ],
        datasets: [{
            data: statsArray,
            fill: true,
            backgroundColor: 'rgba(118, 255, 3, 0.9)',
            borderColor: 'rgb(178, 255, 89)',
            pointBackgroundColor: 'rgb(2, 119, 189)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(2, 119, 189)'
        }]
    };

    const config = {
        type: 'radar',
        data: data,
        options: {
            mantainAspectRatio: false,
            elements: {
                line: {
                    borderWidth: 1
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                r: {
                    grid: {
                        color: 'white'
                    },
                    pointLabels: {
                        color: 'white'
                    },
                    angleLines: {
                        color: 'white'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                },
            },
        },
    };

    return new Chart(ctx, config);
}

export {
    createChart
}