// O(n^2)
void InsertionSort_comparison(int a[], int n, int &count_compare) {
    count_compare = 0;

    for (int i = 1; i < n; i++) {
        int key = a[i];
        int j = i - 1;
        while (++count_compare && j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }
}

void InsertionSort_timetaken(int a[], int n) {
    clock_t startTime = clock();  // Start the timer

    for (int i = 1; i < n; i++) {
        int key = a[i];
        int j = i - 1;
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }

    clock_t endTime = clock();  // Stop the timer
    double timeTaken = double(endTime - startTime) / CLOCKS_PER_SEC;  // Calculate the elapsed time in seconds
    std::cout << "Time taken: " << timeTaken << " seconds" << std::endl;
}
