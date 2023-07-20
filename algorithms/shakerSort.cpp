
// Comparation
void shakerSort_compare(int arr[], int n, long long int &count_compare) {
    count_compare = 0;

    int left = 1, right = n-1, k = n-1;
    do {
        for (int j = right; ++count_compare && j >= left; --j) {
            if (++count_compare && arr[j - 1] > arr[j]) {
                swap(arr[j - 1], arr[j]);
                k = j;
            }
        }
        left = k + 1;
        for (int j = left; ++count_compare && j <= right; ++j) {
            if (++count_compare && arr[j - 1] > arr[j]) {
                swap(arr[j - 1], arr[j]); 
                k = j;
            }
        }
        right = k - 1;
    } while (++count_compare && left <= right);
}

// Time
void shakerSort_time(int arr[], int n, double &count_time) {
    double time_start = clock();

    int left = 1, right = n-1, k = n-1;
    do {
        for (int j = right; j >= left; --j) {
            if (arr[j - 1] > arr[j]) {
                swap(arr[j - 1], arr[j]);
                k = j;
            }
        }
        left = k + 1;
        for (int j = left; j <= right; ++j) {
            if (arr[j - 1] > arr[j]) {
                swap(arr[j - 1], arr[j]); 
                k = j;
            }
        }
        right = k - 1;
    } while (left <= right);

    double time_end = clock();
    count_time = (time_end - time_start) / CLOCKS_PER_SEC;
}

/*
    Idea:
        + Start from the beginning of the array and compare each adjacent pair of elements. If they are in the wrong order, swap them.
        + Continue iterating through the array in this manner until you reach the end of the array.
        + Then, move in the opposite direction from the end of the array to the beginning, comparing each adjacent pair of elements and swapping them if necessary.
        + Continue iterating through the array in this manner until you reach the beginning of the array.
        + Repeat steps 1-4 until the array is fully sorted.

    Step-by-step:
        Step 1: Let left = 1, right = n-1, k = n-1
        Step 2: Let j = right
        Step 3: If j >= left then continue, else go to step 6
        Step 4: If arr[j - 1] > arr[j] then swap them and let k = j
        Step 5: Decrease j by 1 and go back to step 3
        Step 6: Make left = k + 1
        Step 7: Let j = left    
        Step 8: If j <= right then continue, else go to step 11
        Step 9: If arr[j - 1] > arr[j] then swap them and let k = j
        Step 10: Increase j by 1 and go to step 8
        Step 11: Make right = k - 1
        Step 12: If left <= right then go back to step 2

    Time complexity:
        Best case: O(n)
        Worst case: O(n^2) 
    Space complexity: O(1)

    References: 
        https://www.geeksforgeeks.org/cocktail-sort/
        https://en.wikipedia.org/wiki/Cocktail_shaker_sort
*/