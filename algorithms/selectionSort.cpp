// Time
void selectionSort_time(int arr[], int n, double &count_time) {
    double time_start = clock();

    for (int i = 0; i < n; i++) {
        int minPos = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minPos]) {
                minPos = j;
            }
        }
        if (minPos != i) {
            swap(arr[minPos], arr[i]);
        }
    }

    double time_end = clock();
    count_time = (time_end - time_start) / CLOCKS_PER_SEC;
}

// Comparation
void selectionSort_compare(int arr[], int n, long long int &count_compare) {
    for (int i = 0; ++count_compare && i < n; i++) {
        int minPos = i;
        for (int j = i + 1; ++count_compare && j < n; j++) {
            if (++count_compare && arr[j] < arr[minPos]) {
                minPos = j;
            }
        }
        if (++count_compare && minPos != i) {
            swap(arr[minPos], arr[i]);
        }
    }
}