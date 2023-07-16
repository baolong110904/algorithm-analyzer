
// Comparation
void merge_compare(int arr[], int first, int mid, int last, int &count_compare) {
    int temp_count_compare = 0;

    int first1 = first, last1 = mid;
    int first2 = mid + 1, last2 = last;

    int temp[999];
    int idx = first1;

    while ((++temp_count_compare && first1 <= last1) && (++temp_count_compare && first2 <= last2)) {
        temp[idx++] = (++temp_count_compare && arr[first1] <= arr[first2]) ? arr[first1++] : arr[first2++];
    }
    while (++temp_count_compare && first1 <= last1) {
        temp[idx++] = arr[first1++];
    }
    while (++temp_count_compare && first2 <= last2) {
        temp[idx++] = arr[first2++];
    }

    for (idx = first; ++temp_count_compare && idx <= last; ++idx) {
        arr[idx] = temp[idx];
    }

    count_compare += temp_count_compare;
}
void mergeSort_compare(int arr[], int first, int last, int &count_compare) {
    count_compare = 0;

    if (++count_compare && first < last) {
        int mid = (first + last) / 2;
        mergeSort_compare(arr, first, mid, count_compare);
        mergeSort_compare(arr, mid + 1, last, count_compare);
        merge_compare(arr, first, mid, last, count_compare);
    }
}

// Time
void merge_time(int arr[], int first, int mid, int last) {
    int first1 = first, last1 = mid;
    int first2 = mid + 1, last2 = last;

    int temp[999];
    int idx = first1;

    while ((first1 <= last1) && (first2 <= last2)) {
        temp[idx++] = (arr[first1] <= arr[first2]) ? arr[first1++] : arr[first2++];
    }
    while (first1 <= last1) {
        temp[idx++] = arr[first1++];
    }
    while (first2 <= last2) {
        temp[idx++] = arr[first2++];
    }

    for (idx = first; idx <= last; ++idx) {
        arr[idx] = temp[idx];
    }
}
void mergeSort_time(int arr[], int first, int last, double &count_time) {
    double time_start = clock();

    if (first < last) {
        int mid = (first + last) / 2;
        mergeSort_time(arr, first, mid, count_time);
        mergeSort_time(arr, mid + 1, last, count_time);
        merge_time(arr, first, mid, last);
    }

    double time_end = clock();
    count_time = (time_end - time_start) / CLOCKS_PER_SEC;
}


/*
    Idea: Merge sort is a recursive algorithm that continuously splits the array in half until it cannot be further divided,
    the array has only one element left (an array with one element is always sorted).
    Then the sorted subarrays are merged into one sorted array.

    Step-by-step descriptions:
        Step 1: Check if first < last then continue, else stop
        Step 2: Calculate middle postion = (fisrt + last) / 2
        Step 3: Sort the first half (Go to step 1 with new first = first and new last = middle)
        Step 4: Sort the second half (Go to step 1 with new first = middle + 1 and new last = last)
        Step 5: Merge two halves together
            Step 5.1: Calculate 4 positions: first1 = first, last1 = midddle, first2 = middle + 1, last2 = last
            Step 5.2: Create a temp array and an index variable: idx = 0
            Step 5.2: Check if (first1 <= last1) && (first2 <= last2) then continue, else go to step 5.6
            Step 5.3: Between two elements pointed by first1 and first2, find the smaller one and copy to the temp array at position idx
            Step 5.4: Increase idx by 1, depend on which element at first1 or first2 is smaller, increase first1 or first2 by 1
            Step 5.5: Go back to step 5.2
            Step 5.6: Check if first1 <= last1 then continue, else go to step 5.8
            Step 5.7: Copy the element at postion first1 to temp array at position idx then increase idx and first1 by 1
            Step 5.8: Check if first2 <= last2 then continue, else go to step 5.10
            Step 5.9: Copy the element at postion first2 to temp array at position idx then increase idx and first2 by 1
            Step 5.10: Copy all elements form temp array back to the original array

    Time complexity:
        At level 0:
            n-1 comparisons
            n moves to temp array
            n moves back
            => 3n-1 major operations 
        At level m:
            There are 2^m subarrays with n' = n / 2^m
            => 2^m * (3*n/2^m - 1) major operations 
        There are ceil log₂n level
        ==> O(nlog₂n) in all case
    Space complexity:
        An extra array is required for merging n items
        ==> O(n)

    Variants:
        - 3-way Merge Sort:
            + Instead of splitting the array into 2 parts we split it into 3 parts. 
        - In-place merge sort:
            + Maintain two pointers that point to the start of the segments which have to be merged.
            + Compare the elements at which the pointers are present.
            + If element1 < element2 then element1 is at right position, simply increase pointer1.
            + Else shift all the elements between element1 and element2(including element1 but excluding element2) right by 1
            and then place the element2 in the previous place(i.e. before shifting right) of element1. Increment all the pointers by 1.
        - Ping-pong merge sort:
            + Instead of merging two blocks at a time, a ping-pong merge merges four blocks at a time.
            + The four sorted blocks are merged simultaneously to auxiliary space into two sorted blocks
            + Tthen the two sorted blocks are merged back to main memory.
            Doing so omits the copy operation and reduces the total number of moves by half
        

    References: 
        - https://www.geeksforgeeks.org/merge-sort/
        - https://en.wikipedia.org/wiki/Merge_sort
        - https://www.geeksforgeeks.org/in-place-merge-sort/
*/