
void sort(string sort_name, string output_type, int arr[], int n, double &count_time, long long int &count_compare) {
    // Dupplicate array
    int* copy_arr = new int [n];
    for (int i=0; i<n; i++) {
        copy_arr[i] = arr[i];
    }

    // Time
    if (output_type == "-time" || output_type == "-both") {
        if (sort_name == "selection-sort") {
            selectionSort_time(arr, n, count_time);
        } else if (sort_name == "insertion-sort") {
            insertionSort_time(arr, n, count_time);
        } else if (sort_name == "bubble-sort") {
            bubbleSort_time(arr, n, count_time);
        } else if (sort_name == "shaker-sort") {
            shakerSort_time(arr, n, count_time);
        } else if (sort_name == "shell-sort") {
            shellSort_time(arr, n, count_time);
        } else if (sort_name == "heap-sort") {
            heapSort_time(arr, n, count_time);
        } else if (sort_name == "merge-sort") {
            mergeSort_time(arr, 0, n-1, count_time);
        } else if (sort_name == "quick-sort") {
            quickSort_time(arr, 0, n-1, count_time);
        } else if (sort_name == "counting-sort") {
            countingSort_time(arr, n, 0, count_time);
        } else if (sort_name == "radix-sort") {
            radixSort_time(arr, n, count_time);
        } else if (sort_name == "flash-sort") {
            flashSort_time(arr, n, count_time);
        }
    }
    // Compare
    if (output_type == "-comp" || output_type == "-both") {
        if (sort_name == "selection-sort") {
            selectionSort_compare(copy_arr, n, count_compare);
        } else if (sort_name == "insertion-sort") {
            insertionSort_compare(copy_arr, n, count_compare);
        } else if (sort_name == "bubble-sort") {
            bubbleSort_compare(copy_arr, n, count_compare);
        } else if (sort_name == "shaker-sort") {
            shakerSort_compare(copy_arr, n, count_compare);
        } else if (sort_name == "shell-sort") {
            shellSort_compare(copy_arr, n, count_compare);
        } else if (sort_name == "heap-sort") {
            heapSort_compare(copy_arr, n, count_compare);
        } else if (sort_name == "merge-sort") {
            mergeSort_compare(copy_arr, 0, n-1, count_compare);
        } else if (sort_name == "quick-sort") {
            quickSort_compare(copy_arr, 0, n-1, count_compare);
        } else if (sort_name == "counting-sort") {
            countingSort_compare(copy_arr, n, 0, count_compare);
        } else if (sort_name == "radix-sort") {
            radixSort_compare(copy_arr, n, count_compare);
        } else if (sort_name == "flash-sort") {
            flashSort_compare(copy_arr, n, count_compare);
        }
    }
    
    // Clear
    delete [] copy_arr;
}