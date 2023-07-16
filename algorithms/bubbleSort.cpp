
// Compare
void bubbleSort_compare(int arr[], int n, int &count_compare) {
    for (int i = 1; ++count_compare && i <= n - 1; i++) {
        for (int j = n - 1; ++count_compare && j >= i; j--) {
            if (++count_compare && arr[j - 1] > arr[j]) {
                swap(arr[j - 1], arr[j]);
            }
        }
    }
}

// Time
void bubbleSort_time(int arr[], int n, double &count_time) {
    double time_start = clock();

    for (int i = 1; i <= n - 1; i++) {
        for (int j = n - 1; j >= i; j--) {
            if (arr[j - 1] > arr[j]) {
                swap(arr[j - 1], arr[j]);
            }
        }
    }

    double time_end = clock();
    count_time = (time_end - time_start) / CLOCKS_PER_SEC;
}


/* DESCRIPTION
Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles
in sparkling water. The bubbles represents the elements of the data structure.

The bigger bubbles reach the top faster than smaller bubbles, and this algorithm
works in the same way. It iterates through the data structureand for each cycle
compares the current element with the next one, swapping them if they are in the wrong order.


- Average Complexity: O(n2)
- Best Case: O(n)
- Worst Case: O(n2)
- Space Complexity:	O(1)
(source: sortvisualizer.com)
*/