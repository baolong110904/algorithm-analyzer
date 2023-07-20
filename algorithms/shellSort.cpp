// Time
void shellSort_time(int arr[], int n, double &count_time) {
    double time_start = clock();

    for (int interval = n / 2; interval > 0; interval /= 2) {
        for (int i = interval; i < n; i++) {
            int j = i;
            int value = arr[i];
            for (j = i; j >= interval && arr[j - interval] > value; j -= interval) {
                arr[j] = arr[j - interval];
            }
            arr[j] = value;

            value = arr[i];
        }
    }

    double time_end = clock();
    count_time = (time_end - time_start) / CLOCKS_PER_SEC;
}

// Compare
void shellSort_compare(int arr[], int n, long long int &count_compare) {
    for (int interval = n / 2; ++count_compare && interval > 0; interval /= 2) {
        for (int i = interval; ++count_compare && i < n; i++) {
            int j = i;
            int value = arr[i];
            for (j = i; (++count_compare && j >= interval) && (++count_compare && arr[j - interval] > value); j -= interval) {
                arr[j] = arr[j - interval];
            }
            arr[j] = value;
            value = arr[i];
        }
    }
}


/* DESCRIPTION
Shell Sort is one of the oldest sorting algorithms and it's an extension of the Insertion Sort.
This algorithm is fast and easy to implement, but it's hard to measure its performances.

Unlike Insertion Sort, Shell Sort starts by comparing the elements distant from each other by a
certain gap that gets progressively decreased. By starting with the most distant elements, it
can optimize performances as it's not limited by just comparing two adjacent elements.

- Average Complexity: O(n × log n)
- Best Case: O(n × log n)
- Worst Case: O(n2)
- Space Complexity: O(1)

(source: sortvisualizer.com)
*/