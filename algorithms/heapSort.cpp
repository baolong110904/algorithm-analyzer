// Time
void heapify_time(int arr[], int n, int index) {
    int left = 2 * index + 1;
    int right = 2 * index + 2;
    int largest = index;

    if (left < n && arr[left] > arr[largest])
        largest = left;
    if (right < n && arr[right] > arr[largest])
        largest = right;

    if (largest != index) {
        swap(arr[largest], arr[index]);
        heapify_time(arr, n, largest);
    }
}

void heapSort_time(int arr[], int n, double &count_time) {
    double time_start = clock();

    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify_time(arr, n, i);
    }
    for (int i = n - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        heapify_time(arr, i, 0);
    }

    double time_end = clock();
    count_time = (time_end - time_start) / CLOCKS_PER_SEC;
}

// Compare
void heapify_compare(int arr[], int n, int index, long long int &count_compare) {
    int left = 2 * index + 1;
    int right = 2 * index + 2;
    int largest = index;

    if ((++count_compare && left < n) && (++count_compare && arr[left] > arr[largest])) {
        largest = left;
    }
    if ((++count_compare && right < n) && (++count_compare && arr[right] > arr[largest])) {
        largest = right;
    }
    if (++count_compare && largest != index) {
        swap(arr[largest], arr[index]);
        heapify_compare(arr, n, largest, count_compare);
    }
}

void heapSort_compare(int arr[], int n, long long int &count_compare) {
    for (int i = n / 2 - 1; ++count_compare && i >= 0; i--) {
        heapify_compare(arr, n, i, count_compare);
    }
    for (int i = n - 1; ++count_compare && i > 0; i--) {
        swap(arr[0], arr[i]);
        heapify_compare(arr, i, 0, count_compare);
    }
}


/* DESCRIPTION
Heap Sort is an in-place iterative sorting algorithm based on auxiliary
data structures called heap. It's less efficient than algorithm with the
same time complexity and it's not suitable for data structures with few elements.

The heap is a data structure representable as a binary tree, where each node
has a value bigger or equal to its children. Consequently, the root will hold the maximum value.

- Average Complexity: O(n × log n)
- Best Case:	O(n × log n)
- Worst Case: O(n × log n)
- Space Complexity: O(1)

(source: sortvisualizer.com)
*/