// Time
void quickSort_time(int arr[], int first, int last, double &count_time) {
    double time_start = clock();
    
    int pivot = arr[(first + last) / 2];
    int indexFromLeft = first, indexFromRight = last;

    do {
        while (arr[indexFromLeft] < pivot) {
            indexFromLeft++;
        }
        while (arr[indexFromRight] > pivot) {
            indexFromRight--;
        }
        if (indexFromLeft <= indexFromRight) {
            swap(arr[indexFromLeft], arr[indexFromRight]);
            indexFromLeft++; indexFromRight--;
        }
    } while (indexFromLeft <= indexFromRight);

    if (first < indexFromRight) {
        quickSort_time(arr, first, indexFromRight, count_time);
    }
    if (indexFromLeft < last) {
        quickSort_time(arr, indexFromLeft, last, count_time);
    }

    double time_end = clock();
    count_time = (time_end - time_start) / CLOCKS_PER_SEC;
}

// Comparation
void quickSort_compare(int arr[], int first, int last, long long int &count_compare) {
    int pivot = arr[(first + last) / 2];
    int indexFromLeft = first, indexFromRight = last;

    do {
        while (++count_compare && arr[indexFromLeft] < pivot) {
            indexFromLeft++;
        }
        while (++count_compare && arr[indexFromRight] > pivot) {
            indexFromRight--;
        }
        if (++count_compare && indexFromLeft <= indexFromRight) {
            swap(arr[indexFromLeft], arr[indexFromRight]);
            indexFromLeft++; indexFromRight--;
        }
    } while (++count_compare && indexFromLeft <= indexFromRight);

    if (++count_compare && first < indexFromRight) {
        quickSort_compare(arr, first, indexFromRight, count_compare);
    }
    if (++count_compare && indexFromLeft < last) {
        quickSort_compare(arr, indexFromLeft, last, count_compare);
    }
}


/*
    Idea: Pick an element as pivot, put all smaller elements to the left of the pivot, and all greater elements to the right of the pivot.
    Then recursively sort each side of the pivot

    Step-by-step:
        Step 1: pick the middle element as pivot
        Step 2: indexFromLeft = first and indexFromRight = last 
        Step 3: if arr[indexFromLeft] < pivot then continue, else go to step 5
        Step 4: increase indexFromLeft by 1, go back to step 3
        Step 5: if arr[indexFromRight] > pivot then continue, else go to step 6
        Step 6: decrease indexFromRight by 1, go back to step 5
        Step 7: if indexFromLeft < indexFromRight then swap arr[indexFromRight] with arr[indexFromRight], indexFromLeft++, indexFromRight--
        Step 8: if indexFromLeft <= indexFromRight, go back to step 3
        Step 9: if first < indexFromRight, go back to step 1 with new first = first and new last = indexFromRight
        Step 9: if indexFromLeft < last, go back to step 1 with new first = indexFromLeft and new last = last
        
    Time complexity:
        Best case, average case and worst case: https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/analysis-of-quicksort
    Space complexity:
        No need extra space => O(1)

    Variants:
        Multi-pivot quicksort: 
            + Instead of partitioning into two subarrays using a single pivot, multi-pivot quicksort partitions its input into some s number of subarrays using s − 1 pivots
        3-Way Radix Quicksort:
            + Pick an element from the array (the pivot) and consider the first character (key) of the string (multikey).
            + Partition the remaining elements into three sets: those whose corresponding character is less than, equal to, and greater than the pivot's character.
            + Recursively sort the "less than" and "greater than" partitions on the same character. Recursively sort the "equal to" partition by the next character (key). 

    References: 
        https://www.geeksforgeeks.org/quick-sort/
        https://en.wikipedia.org/wiki/Quicksort
        https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/analysis-of-quicksort
*/