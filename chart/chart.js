// Bar chart random
const barChart_rand_nn = document.getElementById('comp-rand-nn');
new Chart(barChart_rand_nn, {
type: 'bar',
    data: {
        labels: ['Selection Sort', 'Insertion Sort', 'Bubble Sort', 'Shaker Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000, 5000],
            backgroundColor: 'rgba(0,255,0, 0.3)',
            borderColor: 'rgba(0,204,0)',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000, 1000],
            backgroundColor: 'rgb(0, 255, 255, 0.6)',
            borderColor: 'rgba(0,153,153)',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000, 2000],
            backgroundColor: 'rgb(255, 153, 51, 0.6)',
            borderColor: 'rgba(255,128,0)',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000,  3000],
            backgroundColor: 'rgb(255, 51, 255, 0.4)',
            borderColor: 'rgb(255, 0, 255, 1)',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgba(102,102,255,0.5)',
            borderColor: 'rgba(0,0,255,0.7)',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgba(255,255,102,0.5)',
            borderColor: 'rgba(153,153,0)',
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'NUMBER OF COMPARISON'
                }
            }
        }
    },
})

const barChart_rand_nlogn = document.getElementById('comp-rand-nlogn');
new Chart(barChart_rand_nlogn, {
    type: 'bar',
    data: {
        labels: ['Shell Sort', 'Heap Sort','Merge Sort', 'Quick Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000, 5000],
            backgroundColor: 'rgba(0,255,0, 0.3)',
            borderColor: 'rgba(0,204,0)',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000, 1000],
            backgroundColor: 'rgb(0, 255, 255, 0.6)',
            borderColor: 'rgba(0,153,153)',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000, 2000],
            backgroundColor: 'rgb(255, 153, 51, 0.6)',
            borderColor: 'rgba(255,128,0)',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000,  3000],
            backgroundColor: 'rgb(255, 51, 255, 0.4)',
            borderColor: 'rgb(255, 0, 255, 1)',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgba(102,102,255,0.5)',
            borderColor: 'rgba(0,0,255,0.7)',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgba(255,255,102,0.5)',
            borderColor: 'rgba(153,153,0)',
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'NUMBER OF COMPARISON'
                }
            }
        }
    },
})

const barChart_rand_n = document.getElementById('comp-rand-n');
new Chart(barChart_rand_n, {
    type: 'bar',
    data: {
        labels: ['Counting Sort', 'Radix Sort','Flash Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgba(0,255,0, 0.3)',
            borderColor: 'rgba(0,204,0)',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(0, 255, 255, 0.6)',
            borderColor: 'rgba(0,153,153)',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 153, 51, 0.6)',
            borderColor: 'rgba(255,128,0)',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000],
            backgroundColor: 'rgb(255, 51, 255, 0.4)',
            borderColor: 'rgb(255, 0, 255, 1)',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgba(102,102,255,0.5)',
            borderColor: 'rgba(0,0,255,0.7)',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgba(255,255,102,0.5)',
            borderColor: 'rgba(153,153,0)',
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'NUMBER OF COMPARISON'
                }
            }
        }
    },
})

// Bar chart nearly sorted
const barChart_nsorted_nn = document.getElementById('comp-nsorted-nn');
new Chart(barChart_nsorted_nn, {
type: 'bar',
    data: {
        labels: ['Selection Sort', 'Insertion Sort', 'Bubble Sort', 'Shaker Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000, 5000],
            backgroundColor: 'rgba(0,255,0, 0.3)',
            borderColor: 'rgba(0,204,0)',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000, 1000],
            backgroundColor: 'rgb(0, 255, 255, 0.6)',
            borderColor: 'rgba(0,153,153)',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000, 2000],
            backgroundColor: 'rgb(255, 153, 51, 0.6)',
            borderColor: 'rgba(255,128,0)',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000,  3000],
            backgroundColor: 'rgb(255, 51, 255, 0.4)',
            borderColor: 'rgb(255, 0, 255, 1)',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgba(102,102,255,0.5)',
            borderColor: 'rgba(0,0,255,0.7)',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgba(255,255,102,0.5)',
            borderColor: 'rgba(153,153,0)',
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'NUMBER OF COMPARISON'
                }
            }
        }
    },
})

const barChart_nsorted_nlogn = document.getElementById('comp-nsorted-nlogn');
new Chart(barChart_nsorted_nlogn, {
    type: 'bar',
    data: {
        labels: ['Shell Sort', 'Heap Sort','Merge Sort', 'Quick Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000, 5000],
            backgroundColor: 'rgba(0,255,0, 0.3)',
            borderColor: 'rgba(0,204,0)',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000, 1000],
            backgroundColor: 'rgb(0, 255, 255, 0.6)',
            borderColor: 'rgba(0,153,153)',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000, 2000],
            backgroundColor: 'rgb(255, 153, 51, 0.6)',
            borderColor: 'rgba(255,128,0)',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000,  3000],
            backgroundColor: 'rgb(255, 51, 255, 0.4)',
            borderColor: 'rgb(255, 0, 255, 1)',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgba(102,102,255,0.5)',
            borderColor: 'rgba(0,0,255,0.7)',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgba(255,255,102,0.5)',
            borderColor: 'rgba(153,153,0)',
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'NUMBER OF COMPARISON'
                }
            }
        }
    },
})

const barChart_nsorted_n = document.getElementById('comp-nsorted-n');
new Chart(barChart_nsorted_n, {
    type: 'bar',
    data: {
        labels: ['Counting Sort', 'Radix Sort','Flash Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgba(0,255,0, 0.3)',
            borderColor: 'rgba(0,204,0)',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(0, 255, 255, 0.6)',
            borderColor: 'rgba(0,153,153)',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 153, 51, 0.6)',
            borderColor: 'rgba(255,128,0)',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000],
            backgroundColor: 'rgb(255, 51, 255, 0.4)',
            borderColor: 'rgb(255, 0, 255, 1)',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgba(102,102,255,0.5)',
            borderColor: 'rgba(0,0,255,0.7)',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgba(255,255,102,0.5)',
            borderColor: 'rgba(153,153,0)',
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'NUMBER OF COMPARISON'
                }
            }
        }
    }
})

// Bar chart sorted
const barChart_sorted_nn = document.getElementById('comp-sorted-nn');
new Chart(barChart_sorted_nn, {
type: 'bar',
    data: {
        labels: ['Selection Sort', 'Insertion Sort', 'Bubble Sort', 'Shaker Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000, 5000],
            backgroundColor: 'rgba(0,255,0, 0.3)',
            borderColor: 'rgba(0,204,0)',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000, 1000],
            backgroundColor: 'rgb(0, 255, 255, 0.6)',
            borderColor: 'rgba(0,153,153)',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000, 2000],
            backgroundColor: 'rgb(255, 153, 51, 0.6)',
            borderColor: 'rgba(255,128,0)',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000,  3000],
            backgroundColor: 'rgb(255, 51, 255, 0.4)',
            borderColor: 'rgb(255, 0, 255, 1)',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgba(102,102,255,0.5)',
            borderColor: 'rgba(0,0,255,0.7)',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgba(255,255,102,0.5)',
            borderColor: 'rgba(153,153,0)',
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'NUMBER OF COMPARISON'
                }
            }
        }
    }
})

const barChart_sorted_nlogn = document.getElementById('comp-sorted-nlogn');
new Chart(barChart_sorted_nlogn, {
    type: 'bar',
    data: {
        labels: ['Shell Sort', 'Heap Sort','Merge Sort', 'Quick Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000, 5000],
            backgroundColor: 'rgba(0,255,0, 0.3)',
            borderColor: 'rgba(0,204,0)',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000, 1000],
            backgroundColor: 'rgb(0, 255, 255, 0.6)',
            borderColor: 'rgba(0,153,153)',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000, 2000],
            backgroundColor: 'rgb(255, 153, 51, 0.6)',
            borderColor: 'rgba(255,128,0)',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000,  3000],
            backgroundColor: 'rgb(255, 51, 255, 0.4)',
            borderColor: 'rgb(255, 0, 255, 1)',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgba(102,102,255,0.5)',
            borderColor: 'rgba(0,0,255,0.7)',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgba(255,255,102,0.5)',
            borderColor: 'rgba(153,153,0)',
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'NUMBER OF COMPARISON'
                }
            }
        }
    }
})

const barChart_sorted_n = document.getElementById('comp-sorted-n');
new Chart(barChart_sorted_n, {
    type: 'bar',
    data: {
        labels: ['Counting Sort', 'Radix Sort','Flash Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgba(0,255,0, 0.3)',
            borderColor: 'rgba(0,204,0)',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(0, 255, 255, 0.6)',
            borderColor: 'rgba(0,153,153)',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 153, 51, 0.6)',
            borderColor: 'rgba(255,128,0)',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000],
            backgroundColor: 'rgb(255, 51, 255, 0.4)',
            borderColor: 'rgb(255, 0, 255, 1)',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgba(102,102,255,0.5)',
            borderColor: 'rgba(0,0,255,0.7)',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgba(255,255,102,0.5)',
            borderColor: 'rgba(153,153,0)',
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'NUMBER OF COMPARISON'
                }
            }
        }
    }
})

// Bar chart reversed sorted
const barChart_rev_nn = document.getElementById('comp-rev-nn');
new Chart(barChart_rev_nn, {
type: 'bar',
    data: {
        labels: ['Selection Sort', 'Insertion Sort', 'Bubble Sort', 'Shaker Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000, 5000],
            backgroundColor: 'rgba(0,255,0, 0.3)',
            borderColor: 'rgba(0,204,0)',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000, 1000],
            backgroundColor: 'rgb(0, 255, 255, 0.6)',
            borderColor: 'rgba(0,153,153)',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000, 2000],
            backgroundColor: 'rgb(255, 153, 51, 0.6)',
            borderColor: 'rgba(255,128,0)',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000,  3000],
            backgroundColor: 'rgb(255, 51, 255, 0.4)',
            borderColor: 'rgb(255, 0, 255, 1)',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgba(102,102,255,0.5)',
            borderColor: 'rgba(0,0,255,0.7)',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgba(255,255,102,0.5)',
            borderColor: 'rgba(153,153,0)',
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'NUMBER OF COMPARISON'
                }
            }
        }
    }
})

const barChart_rev_nlogn = document.getElementById('comp-rev-nlogn');
new Chart(barChart_rev_nlogn, {
    type: 'bar',
    data: {
        labels: ['Shell Sort', 'Heap Sort','Merge Sort', 'Quick Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000, 5000],
            backgroundColor: 'rgba(0,255,0, 0.3)',
            borderColor: 'rgba(0,204,0)',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000, 1000],
            backgroundColor: 'rgb(0, 255, 255, 0.6)',
            borderColor: 'rgba(0,153,153)',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000, 2000],
            backgroundColor: 'rgb(255, 153, 51, 0.6)',
            borderColor: 'rgba(255,128,0)',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000,  3000],
            backgroundColor: 'rgb(255, 51, 255, 0.4)',
            borderColor: 'rgb(255, 0, 255, 1)',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgba(102,102,255,0.5)',
            borderColor: 'rgba(0,0,255,0.7)',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgba(255,255,102,0.5)',
            borderColor: 'rgba(153,153,0)',
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'NUMBER OF COMPARISON'
                }
            }
        }
    },
})

const barChart_rev_n = document.getElementById('comp-rev-n');
new Chart(barChart_rev_n, {
    type: 'bar',
    data: {
        labels: ['Counting Sort', 'Radix Sort','Flash Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgba(0,255,0, 0.3)',
            borderColor: 'rgba(0,204,0)',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(0, 255, 255, 0.6)',
            borderColor: 'rgba(0,153,153)',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 153, 51, 0.6)',
            borderColor: 'rgba(255,128,0)',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000],
            backgroundColor: 'rgb(255, 51, 255, 0.4)',
            borderColor: 'rgb(255, 0, 255, 1)',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgba(102,102,255,0.5)',
            borderColor: 'rgba(0,0,255,0.7)',   
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgba(255,255,102,0.5)',
            borderColor: 'rgba(153,153,0)',
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'NUMBER OF COMPARISON'
                }
            }
        }
    }
})

// Line chart random
const lineChart_rand_nn = document.getElementById('time-rand-nn');
new Chart(lineChart_rand_nn,{
    type: 'line',
    data: {
        labels: ['10,000', '30,000', '50,000', '100,000', '300,000', '500,000'],
        datasets: [{
            label: 'Bubble Sort', //1
            data: [1000, 2000, 3000, 4000, 5000, 6000],
            borderColor: 'red',
            backgroundColor: 'red',
            borderWidth: 3
        },
        {
            label: 'Insertion Sort', //2
            data: [2000, 3000, 4000, 5000, 6000, 7000],
            borderColor: 'blue',
            backgroundColor: 'blue',
            borderWidth: 3
        },
        {
            label: 'Selection Sort', //3
            data: [3000, 4000, 5000, 6000, 7000, 8000],
            borderColor: 'green',
            backgroundColor: 'green',
            borderWidth: 3
        },
        {
            label: 'Shaker Sort', //4
            data: [4000, 5000, 6000, 7000, 8000, 9000],
            borderColor: 'purple',
            backgroundColor: 'purple',
            borderWidth: 3
        },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'RUN TIME IN SECONDS'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'INPUT SIZE'
                }
            }
        }
    },
})

const lineChart_rand_nlogn = document.getElementById('time-rand-nlogn');
new Chart(lineChart_rand_nlogn,{
    type: 'line',
    data: {
        labels: ['10,000', '30,000', '50,000', '100,000', '300,000', '500,000'],
        datasets: [{
            label: 'Quick Sort', //1
            data: [1000, 2000, 3000, 4000, 5000, 6000],
            borderColor: 'orange',
            backgroundColor: 'orange',
            borderWidth: 3
        },
        {
            label: 'Heap Sort', //2
            data: [2000, 3000, 4000, 5000, 6000, 7000],
            borderColor: 'teal',
            backgroundColor: 'teal',
            borderWidth: 3
        },
        {
            label: 'Merge Sort', //3
            data: [3000, 4000, 5000, 6000, 7000, 8000],
            borderColor: 'magenta',
            backgroundColor: 'magenta',
            borderWidth: 3
        },
        {
            label: 'Shell Sort', //4
            data: [4000, 5000, 6000, 7000, 8000, 9000],
            borderColor: 'navy',
            backgroundColor: 'navy',
            borderWidth: 3
        }, 
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'RUN TIME IN SECONDS'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'INPUT SIZE'
                }
            }
        }
    },
})

const lineChart_rand_n = document.getElementById('time-rand-n');
new Chart(lineChart_rand_n,{
    type: 'line',
    data: {
        labels: ['10,000', '30,000', '50,000', '100,000', '300,000', '500,000'],
        datasets: [
        {
            label: 'Counting Sort', //9
            data: [9000, 10000, 11000, 12000, 13000, 14000],
            borderColor: 'cyan',
            backgroundColor: 'cyan',
            borderWidth: 3
        },
        {
            label: 'Radix Sort', //10
            data: [10000, 11000, 12000, 13000, 14000, 15000],
            borderColor: 'brown',
            backgroundColor: 'brown',
            borderWidth: 3
        },
        {
            label: 'Flash Sort', //11
            data: [11000, 12000, 13000, 14000, 15000, 16000],
            borderColor: 'olive',
            backgroundColor: 'olive',
            borderWidth: 3
        },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'RUN TIME IN SECONDS'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'INPUT SIZE'
                }
            }
        }
    },
})

// Line chart nearly sorted
const lineChart_nsorted_nn = document.getElementById('time-nsorted-nn');
new Chart(lineChart_nsorted_nn,{
    type: 'line',
    data: {
        labels: ['10,000', '30,000', '50,000', '100,000', '300,000', '500,000'],
        datasets: [{
            label: 'Bubble Sort', //1
            data: [1000, 2000, 3000, 4000, 5000, 6000],
            borderColor: 'red',
            backgroundColor: 'red',
            borderWidth: 3
        },
        {
            label: 'Insertion Sort', //2
            data: [2000, 3000, 4000, 5000, 6000, 7000],
            borderColor: 'blue',
            backgroundColor: 'blue',
            borderWidth: 3
        },
        {
            label: 'Selection Sort', //3
            data: [3000, 4000, 5000, 6000, 7000, 8000],
            borderColor: 'green',
            backgroundColor: 'green',
            borderWidth: 3
        },
        {
            label: 'Shaker Sort', //4
            data: [4000, 5000, 6000, 7000, 8000, 9000],
            borderColor: 'purple',
            backgroundColor: 'purple',
            borderWidth: 3
        },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'RUN TIME IN SECONDS'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'INPUT SIZE'
                }
            }
        }
    },
})

const lineChart_nsorted_nlogn = document.getElementById('time-nsorted-nlogn');
new Chart(lineChart_nsorted_nlogn,{
    type: 'line',
    data: {
        labels: ['10,000', '30,000', '50,000', '100,000', '300,000', '500,000'],
        datasets: [{
            label: 'Quick Sort', //1
            data: [1000, 2000, 3000, 4000, 5000, 6000],
            borderColor: 'orange',
            backgroundColor: 'orange',
            borderWidth: 3
        },
        {
            label: 'Heap Sort', //2
            data: [2000, 3000, 4000, 5000, 6000, 7000],
            borderColor: 'teal',
            backgroundColor: 'teal',
            borderWidth: 3
        },
        {
            label: 'Merge Sort', //3
            data: [3000, 4000, 5000, 6000, 7000, 8000],
            borderColor: 'magenta',
            backgroundColor: 'magenta',
            borderWidth: 3
        },
        {
            label: 'Shell Sort', //4
            data: [4000, 5000, 6000, 7000, 8000, 9000],
            borderColor: 'navy',
            backgroundColor: 'navy',
            borderWidth: 3
        }, 
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'RUN TIME IN SECONDS'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'INPUT SIZE'
                }
            }
        }
    },
})

const lineChart_nsorted_n = document.getElementById('time-nsorted-n');
new Chart(lineChart_nsorted_n,{
    type: 'line',
    data: {
        labels: ['10,000', '30,000', '50,000', '100,000', '300,000', '500,000'],
        datasets: [
        {
            label: 'Counting Sort', //9
            data: [9000, 10000, 11000, 12000, 13000, 14000],
            borderColor: 'cyan',
            backgroundColor: 'cyan',
            borderWidth: 3
        },
        {
            label: 'Radix Sort', //10
            data: [10000, 11000, 12000, 13000, 14000, 15000],
            borderColor: 'brown',
            backgroundColor: 'brown',
            borderWidth: 3
        },
        {
            label: 'Flash Sort', //11
            data: [11000, 12000, 13000, 14000, 15000, 16000],
            borderColor: 'olive',
            backgroundColor: 'olive',
            borderWidth: 3
        },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'RUN TIME IN SECONDS'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'INPUT SIZE'
                }
            }
        }
    },
})

// Line chart sorted
const lineChart_sorted_nn = document.getElementById('time-sorted-nn');
new Chart(lineChart_sorted_nn,{
    type: 'line',
    data: {
        labels: ['10,000', '30,000', '50,000', '100,000', '300,000', '500,000'],
        datasets: [{
            label: 'Bubble Sort', //1
            data: [1000, 2000, 3000, 4000, 5000, 6000],
            borderColor: 'red',
            backgroundColor: 'red',
            borderWidth: 3
        },
        {
            label: 'Insertion Sort', //2
            data: [2000, 3000, 4000, 5000, 6000, 7000],
            borderColor: 'blue',
            backgroundColor: 'blue',
            borderWidth: 3
        },
        {
            label: 'Selection Sort', //3
            data: [3000, 4000, 5000, 6000, 7000, 8000],
            borderColor: 'green',
            backgroundColor: 'green',
            borderWidth: 3
        },
        {
            label: 'Shaker Sort', //4
            data: [4000, 5000, 6000, 7000, 8000, 9000],
            borderColor: 'purple',
            backgroundColor: 'purple',
            borderWidth: 3
        },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'RUN TIME IN SECONDS'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'INPUT SIZE'
                }
            }
        }
    },
})

const lineChart_sorted_nlogn = document.getElementById('time-sorted-nlogn');
new Chart(lineChart_sorted_nlogn,{
    type: 'line',
    data: {
        labels: ['10,000', '30,000', '50,000', '100,000', '300,000', '500,000'],
        datasets: [{
            label: 'Quick Sort', //1
            data: [1000, 2000, 3000, 4000, 5000, 6000],
            borderColor: 'orange',
            backgroundColor: 'orange',
            borderWidth: 3
        },
        {
            label: 'Heap Sort', //2
            data: [2000, 3000, 4000, 5000, 6000, 7000],
            borderColor: 'teal',
            backgroundColor: 'teal',
            borderWidth: 3
        },
        {
            label: 'Merge Sort', //3
            data: [3000, 4000, 5000, 6000, 7000, 8000],
            borderColor: 'magenta',
            backgroundColor: 'magenta',
            borderWidth: 3
        },
        {
            label: 'Shell Sort', //4
            data: [4000, 5000, 6000, 7000, 8000, 9000],
            borderColor: 'navy',
            backgroundColor: 'navy',
            borderWidth: 3
        }, 
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'RUN TIME IN SECONDS'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'INPUT SIZE'
                }
            }
        }
    },
})

const lineChart_sorted_n = document.getElementById('time-sorted-n');
new Chart(lineChart_sorted_n,{
    type: 'line',
    data: {
        labels: ['10,000', '30,000', '50,000', '100,000', '300,000', '500,000'],
        datasets: [
        {
            label: 'Counting Sort', //9
            data: [9000, 10000, 11000, 12000, 13000, 14000],
            borderColor: 'cyan',
            backgroundColor: 'cyan',
            borderWidth: 3
        },
        {
            label: 'Radix Sort', //10
            data: [10000, 11000, 12000, 13000, 14000, 15000],
            borderColor: 'brown',
            backgroundColor: 'brown',
            borderWidth: 3
        },
        {
            label: 'Flash Sort', //11
            data: [11000, 12000, 13000, 14000, 15000, 16000],
            borderColor: 'olive',
            backgroundColor: 'olive',
            borderWidth: 3
        },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'RUN TIME IN SECONDS'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'INPUT SIZE'
                }
            }
        }
    },
})

// Line chart reversed sorted
const lineChart_rev_nn = document.getElementById('time-rev-nn');
new Chart(lineChart_rev_nn,{
    type: 'line',
    data: {
        labels: ['10,000', '30,000', '50,000', '100,000', '300,000', '500,000'],
        datasets: [{
            label: 'Bubble Sort', //1
            data: [1000, 2000, 3000, 4000, 5000, 6000],
            borderColor: 'red',
            backgroundColor: 'red',
            borderWidth: 3
        },
        {
            label: 'Insertion Sort', //2
            data: [2000, 3000, 4000, 5000, 6000, 7000],
            borderColor: 'blue',
            backgroundColor: 'blue',
            borderWidth: 3
        },
        {
            label: 'Selection Sort', //3
            data: [3000, 4000, 5000, 6000, 7000, 8000],
            borderColor: 'green',
            backgroundColor: 'green',
            borderWidth: 3
        },
        {
            label: 'Shaker Sort', //4
            data: [4000, 5000, 6000, 7000, 8000, 9000],
            borderColor: 'purple',
            backgroundColor: 'purple',
            borderWidth: 3
        },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'RUN TIME IN SECONDS'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'INPUT SIZE'
                }
            }
        }
    },
})

const lineChart_rev_nlogn = document.getElementById('time-rev-nlogn');
new Chart(lineChart_rev_nlogn,{
    type: 'line',
    data: {
        labels: ['10,000', '30,000', '50,000', '100,000', '300,000', '500,000'],
        datasets: [{
            label: 'Quick Sort', //1
            data: [1000, 2000, 3000, 4000, 5000, 6000],
            borderColor: 'orange',
            backgroundColor: 'orange',
            borderWidth: 3
        },
        {
            label: 'Heap Sort', //2
            data: [2000, 3000, 4000, 5000, 6000, 7000],
            borderColor: 'teal',
            backgroundColor: 'teal',
            borderWidth: 3
        },
        {
            label: 'Merge Sort', //3
            data: [3000, 4000, 5000, 6000, 7000, 8000],
            borderColor: 'magenta',
            backgroundColor: 'magenta',
            borderWidth: 3
        },
        {
            label: 'Shell Sort', //4
            data: [4000, 5000, 6000, 7000, 8000, 9000],
            borderColor: 'navy',
            backgroundColor: 'navy',
            borderWidth: 3
        }, 
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'RUN TIME IN SECONDS'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'INPUT SIZE'
                }
            }
        }
    },
})

const lineChart_rev_n = document.getElementById('time-rev-n');
new Chart(lineChart_rev_n,{
    type: 'line',
    data: {
        labels: ['10,000', '30,000', '50,000', '100,000', '300,000', '500,000'],
        datasets: [
        {
            label: 'Counting Sort', //9
            data: [9000, 10000, 11000, 12000, 13000, 14000],
            borderColor: 'cyan',
            backgroundColor: 'cyan',
            borderWidth: 3
        },
        {
            label: 'Radix Sort', //10
            data: [10000, 11000, 12000, 13000, 14000, 15000],
            borderColor: 'brown',
            backgroundColor: 'brown',
            borderWidth: 3
        },
        {
            label: 'Flash Sort', //11
            data: [11000, 12000, 13000, 14000, 15000, 16000],
            borderColor: 'olive',
            backgroundColor: 'olive',
            borderWidth: 3
        },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'RUN TIME IN SECONDS'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'INPUT SIZE'
                }
            }
        }
    },
})