// O(n^2)
void InsertionSort_operations(int a[], int n, long long& operations) {
    for (int i = 1; i < n; i++) {
        int key = a[i];
        int j = i - 1;
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j--;
            operations += 2;  // Count the assignment and comparison operations
        }
        a[j + 1] = key;
        operations++;  // Count the assignment operation
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
