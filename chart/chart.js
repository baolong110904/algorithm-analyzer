
const barChart_rand_nn = document.getElementById('comp-rand-nn');
new Chart(barChart_rand_nn, {
type: 'bar',
    data: {
        labels: ['Selection Sort', 'Insertion Sort', 'Bubble Sort', 'Shaker Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000, 5000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000, 1000],
            backgroundColor: 'rgb(255, 46, 35, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000, 2000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000,  3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        }]
    }
})

const barChart_rand_nlogn = document.getElementById('comp-rand-nlogn');
new Chart(barChart_rand_nlogn, {
    type: 'bar',
    data: {
        labels: ['Shell Sort', 'Heap Sort','Merge Sort', 'Quick Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000, 5000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000, 1000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000, 2000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000,  3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        }]
    }
})

const barChart_rand_n = document.getElementById('comp-rand-n');
new Chart(barChart_rand_n, {
    type: 'bar',
    data: {
        labels: ['Counting Sort', 'Radix Sort','Flash Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        }]
    }
})

const barChart_nsorted_nn = document.getElementById('comp-nsorted-nn');
new Chart(barChart_nsorted_nn, {
type: 'bar',
    data: {
        labels: ['Selection Sort', 'Insertion Sort', 'Bubble Sort', 'Shaker Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000, 5000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000, 1000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000, 2000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000,  3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        }]
    }
})

const barChart_nsorted_nlogn = document.getElementById('comp-nsorted-nlogn');
new Chart(barChart_nsorted_nlogn, {
    type: 'bar',
    data: {
        labels: ['Shell Sort', 'Heap Sort','Merge Sort', 'Quick Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000, 5000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000, 1000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000, 2000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000,  3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        }]
    }
})

const barChart_nsorted_n = document.getElementById('comp-nsorted-n');
new Chart(barChart_nsorted_n, {
    type: 'bar',
    data: {
        labels: ['Counting Sort', 'Radix Sort','Flash Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        }]
    }
})

const barChart_sorted_nn = document.getElementById('comp-sorted-nn');
new Chart(barChart_sorted_nn, {
type: 'bar',
    data: {
        labels: ['Selection Sort', 'Insertion Sort', 'Bubble Sort', 'Shaker Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000, 5000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000, 1000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000, 2000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000,  3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        }]
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
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000, 1000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000, 2000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000,  3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        }]
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
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        }]
    }
})

const barChart_rev_nn = document.getElementById('comp-rev-nn');
new Chart(barChart_rev_nn, {
type: 'bar',
    data: {
        labels: ['Selection Sort', 'Insertion Sort', 'Bubble Sort', 'Shaker Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000, 5000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000, 1000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000, 2000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000,  3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        }]
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
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000, 1000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000, 2000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000,  3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000, 4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        }]
    }
})

const barChart_rev_n = document.getElementById('comp-rev-n');
new Chart(barChart_rev_n, {
    type: 'bar',
    data: {
        labels: ['Counting Sort', 'Radix Sort','Flash Sort'],
        datasets: [{
            label: '10,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '30,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '50,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '100,000',
            data: [1000, 2000,4000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '300,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        },
        {
            label: '500,000',
            data: [1000, 2000, 3000],
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            borderColor: '#333',
            borderWidth: 3
        }]
    }
})