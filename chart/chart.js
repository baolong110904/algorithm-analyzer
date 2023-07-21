// Fetch
fetch('./chart/data.json')
.then(res => res.json())
.then (json => {
    var fields = ['time', 'comp']
    var orders = ['rand', 'nsorted', 'sorted', 'rev']
    var algos = ['nn', 'nlogn', 'n']

    var algoSets = [
        ['Selection Sort', 'Insertion Sort', 'Bubble Sort', 'Shaker Sort'],
        ['Shell Sort', 'Heap Sort','Merge Sort', 'Quick Sort'],
        ['Counting Sort', 'Radix Sort','Flash Sort']
    ]
    var sizeSet = ['10,000', '30,000', '50,000', '100,000', '300,000', '500,000']

    // Table
    var tables = document.querySelector('.tables')
    var tableHTML = tables.innerHTML

    orders.forEach(order => {
        tableHTML += '<table>'
        tableHTML += `<tr><td colspan="14">Data order: -${order}</td></tr>`
        tableHTML += '<tr><td colspan="2">Data size</td><td colspan="2">10,000</td><td colspan="2">30,000</td><td colspan="2">50,000</td><td colspan="2">100,000</td><td colspan="2">300,000</td><td colspan="2">500,000</td></tr>'
        tableHTML += '<tr><td colspan="2">Resulting statics </td><td>Running time</td><td>Comparision</td><td>Running time</td><td>Comparision</td><td>Running time</td><td>Comparision</td><td>Running time</td><td>Comparision</td><td>Running time</td><td>Comparision</td><td>Running time</td><td>Comparision</td></tr>'  

        algos.forEach((algo, algoIdx) => {
            algoSets[algoIdx].forEach(algoName => {
                tableHTML += `<tr><td colspan="2">${algoName}</td>`
                sizeSet.forEach((size, sizeIdx) => {
                    fields.forEach(field => {
                        tableHTML += `<td>${json[field][order][algo][algoName.toLocaleLowerCase().split(' ')[0]][sizeIdx]}</td>`
                    })
                })
                tableHTML += '</tr>'
            })
        })
        tableHTML += '</table>'
    })

    tables.innerHTML = tableHTML

    // Charts
    fields.forEach((field, fieldIdx) => {
        orders.forEach((order, orderIdx) => {
            algos.forEach((algo, algoIdx) => {
                const chart = document.getElementById(`${field}-${order}-${algo}`);
                if (field == 'time') {
                    var datasets = []
                    algoSets[algoIdx].forEach(algoName => {
                        datasets.push({
                            label: algoName,
                            data: json[field][order][algo][algoName.toLocaleLowerCase().split(' ')[0]],
                            borderWidth: 4
                        })
                    })
                    new Chart(chart, {
                        type: 'line',
                        data: {
                            labels: sizeSet,
                            datasets: datasets
                        },
                        options: {
                            scales: {
                                y: {
                                    title: {
                                        display: true,
                                        text: 'RUNNING TIME IN SECONDS'
                                    }
                                },
                                x: {
                                    title: {
                                        display: true,
                                        text: 'INPUT SIZE'
                                    }
                                }
                            }
                        }
                    })
                } else {
                    var datasets = []
                    sizeSet.forEach((size, index) => {
                        var data = []
                        algoSets[algoIdx].forEach(algoName => {
                            data.push(json[field][order][algo][algoName.toLocaleLowerCase().split(' ')[0]][index])
                        })
                        datasets.push({
                            label: size,
                            data: data
                        })
                    })
                    new Chart(chart, {
                        type: 'bar',
                        data: {
                            labels: algoSets[algoIdx],
                            datasets: datasets
                        },
                        options: {
                            scales: {
                                y: {
                                    title: {
                                        display: true,
                                        text: 'NUMBER OF COMPARISIONS'
                                    }
                                },
                                x: {
                                    title: {
                                        display: true,
                                        text: 'ALGORITHMS'
                                    }
                                }
                            }
                        }
                    })
                }
            })
        })
    })
})
