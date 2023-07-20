// Time
void insertionSort_time(int arr[], int n, double &count_time) {
    double time_start = clock();

    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }

    double time_end = clock();
    count_time = (time_end - time_start) / CLOCKS_PER_SEC;
}

// Comparation
void insertionSort_compare(int arr[], int n, long long int &count_compare) {
    for (int i = 1; ++count_compare && i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while ((++count_compare && j >= 0) && (++count_compare && arr[j] > key)) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}