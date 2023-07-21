//bar chart
const ctxBar = document.getElementById('barChart');
        new Chart(ctxBar, {
            type: 'bar', // Set the type of chart here
            data: {
                labels: ['Selection Sort', 'Insertion Sort', 'Bubble Sort', 'Shaker Sort', 'Shell Sort', 'Heap Sort', 'Merge Sort', 'Quick Sort', 'Counting Sort', 'Radix Sort', 'Flash Sort'],
                datasets: [{
                    label: '10, 000', //1
                    data: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000],
                    backgroundColor: 'tomato',
                    borderColor: '#333',
                    borderWidth: 3
                },
                {
                    label: '30,000', //2
                    data: [2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000],
                    backgroundColor: 'Cyan',
                    borderColor: '#333',
                    borderWidth: 3
                },
                {
                    label: '50,000', //3
                    data: [3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000],
                    backgroundColor: 'Lime',
                    borderColor: '#333',
                    borderWidth: 3
                },
                {
                    label: '100,000', //4
                    data: [4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000],
                    backgroundColor: 'Magenta',
                    borderColor: '#333',
                    borderWidth: 3
                },
                {
                    label: '300,000', //5
                    data: [5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000],
                    backgroundColor: 'Olive',
                    borderColor: '#333',
                    borderWidth: 3
                },
                {
                    label: '500,000', //6
                    data: [7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000],
                    backgroundColor: 'Yellow',
                    borderColor: '#333',
                    borderWidth: 3
                },
            ]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'ALGORITHM'
                        }
                    },
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: 'NUMBERS OF COMPARISONS'
                        }
                    }
                }
            }
        }); 

//line chart
        const ctxLine = document.getElementById('lineChart');
        new Chart(ctxLine, {
            type: 'line', // Set the type of chart here
            data: {
                labels: ['10,000', '30,000', '50,000', '100,000', '300,000', '500,000'],
                datasets: [{
                    label: 'Bubble Sort', //1
                    data: [1000, 2000, 3000, 4000, 5000, 6000],
                    borderColor: 'red',
                    borderWidth: 3
                },
                {
                    label: 'Insertion Sort', //2
                    data: [2000, 3000, 4000, 5000, 6000, 7000],
                    borderColor: 'blue',
                    borderWidth: 3
                },
                {
                    label: 'Selection Sort', //3
                    data: [3000, 4000, 5000, 6000, 7000, 8000],
                    borderColor: 'green',
                    borderWidth: 3
                },
                {
                    label: 'Shaker Sort', //4
                    data: [4000, 5000, 6000, 7000, 8000, 9000],
                    borderColor: 'purple',
                    borderWidth: 3
                },
                {
                    label: 'Quick Sort', //5
                    data: [5000, 6000, 7000, 8000, 9000, 10000],
                    borderColor: 'orange',
                    borderWidth: 3
                },
                {
                    label: 'Heap Sort', //6
                    data: [7000, 8000, 9000, 10000, 11000, 12000],
                    borderColor: 'teal',
                    borderWidth: 3
                },
                {
                    label: 'Shell Sort', //7
                    data: [7500, 8500, 9500, 10500, 11500, 12500],
                    borderColor: 'navy',
                    borderWidth: 3
                },
                {
                    label: 'Merge Sort', //8
                    data: [8000, 9000, 10000, 11000, 12000, 13000],
                    borderColor: 'magenta',
                    borderWidth: 3
                },
                {
                    label: 'Counting Sort', //9
                    data: [9000, 10000, 11000, 12000, 13000, 14000],
                    borderColor: 'maroon',
                    borderWidth: 3
                },
                {
                    label: 'Radix Sort', //10
                    data: [10000, 11000, 12000, 13000, 14000, 15000],
                    borderColor: 'brown',   
                    borderWidth: 3
                },
                {
                    label: 'Flash Sort', //11
                    data: [11000, 12000, 13000, 14000, 15000, 16000],
                    borderColor: 'olive',
                    borderWidth: 3
                },
            ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
        });
