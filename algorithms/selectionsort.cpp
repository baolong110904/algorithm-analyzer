void SelectionSort_comparison(int a[], int n, long long& count_compare) {
    count_compare = 0;
    for (int i = 0; i < n; i++) {
        int minPos = i;
        for (int j = i + 1; count_compare++ && j < n; j++) {
            if (a[j] < a[minPos]) {
                minPos = j;
            }
        }
        if (minPos != i) {
            swap(a[minPos], a[i]);
        }
    }
}

void SelectionSort_timetaken(int a[], int n) {
    clock_t start = clock();  // Start the timer

    for (int i = 1; i < n; i++) {
        int key = a[i];
        int j = i - 1;
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }

    clock_t end = clock();  // Stop the timer
    long long timeTaken = double(end - start) / CLOCKS_PER_SEC;  // Calculate the elapsed time in seconds
    cout << "Time taken: " << timeTaken << " seconds" << endl;
}