// Time
void flashSort_time(int arr[], int n, double &count_time) {
    double time_start = clock();

    int minVal = arr[0];
    int max = 0;
    int m = int(0.45 * n);
    int *l = new int[m];
    for (int i = 0; i < m; i++) {
        l[i] = 0;
    }
    for (int i = 1; i < n; i++) {
        if ((arr[i] < minVal)) {
            minVal = arr[i];
        }
        if ((arr[i] > arr[max])) {
            max = i;
        }
    }
    if ((arr[max] == minVal)) {
        return;
    }
    double c1 = (double)(m - 1) / (arr[max] - minVal);
    for (int i = 0; i < n; i++) {
        int k = int(c1 * (arr[i] - minVal));
        ++l[k];
    }
    for (int i = 1; i < m; i++) {
        l[i] += l[i - 1];
    }

    swap(arr[max], arr[0]);
    int nmove = 0;
    int j = 0;
    int k = m - 1;
    int t = 0;
    int flash;
    while ((nmove < n - 1)) {
        while ((j > l[k] - 1)) {
            j++;
            k = int(c1 * (arr[j] - minVal));
        }
        flash = arr[j];
        if (k < 0) {
            break;
        }
        while (j != l[k]) {
            k = int(c1 * (flash - minVal));
            int hold = arr[t = --l[k]];
            arr[t] = flash;
            flash = hold;
            ++nmove;
        }
    }
    delete[] l;

    double time_end = clock();
    count_time += (time_end - time_start) / CLOCKS_PER_SEC;

    double temp_count_time = 0;
    insertionSort_time(arr, n, temp_count_time);
    count_time += temp_count_time;
}

// Compare
void flashSort_compare(int arr[], int n, long long int &count_compare) {
    int minVal = arr[0];
    int max = 0;
    int m = int(0.45 * n);
    int *l = new int[m];
    for (int i = 0; i < m; i++) {
        l[i] = 0;
    }
    for (int i = 1; ++count_compare && i < n; i++) {
        if (++count_compare && (arr[i] < minVal)) {
            minVal = arr[i];
        }
        if (++count_compare && (arr[i] > arr[max])) {
            max = i;
        }
    }
    if (++count_compare && (arr[max] == minVal)) {
        return;
    }
    double c1 = (double)(m - 1) / (arr[max] - minVal);
    for (int i = 0; ++count_compare && i < n; i++) {
        int k = int(c1 * (arr[i] - minVal));
        ++l[k];
    }
    for (int i = 1; ++count_compare && i < m; i++) {
        l[i] += l[i - 1];
    }

    swap(arr[max], arr[0]);
    int nmove = 0;
    int j = 0;
    int k = m - 1;
    int t = 0;
    int flash;
    while (++count_compare && (nmove < n - 1)) {
        while (++count_compare && (j > l[k] - 1)) {
            j++;
            k = int(c1 * (arr[j] - minVal));
        }
        flash = arr[j];
        if (++count_compare && k < 0) {
            break;
        }
        while (++count_compare && j != l[k]) {
            k = int(c1 * (flash - minVal));
            int hold = arr[t = --l[k]];
            arr[t] = flash;
            flash = hold;
            ++nmove;
        }
    }
    delete[] l;

    long long int temp_count_compare = 0;
    insertionSort_compare(arr, n, temp_count_compare);

    count_compare += temp_count_compare;
}

/*
1. Idea:
    Flashsort is an efficient in-place implementation of histogram sort, itself a type of bucket sort. It assigns each of the n input elements to one of m buckets, efficiently rearranges the input to place the buckets in the correct order, then sorts each bucket.
2.
    2.1 Using a first pass over the input or a priori knowledge, find the minimum and maximum sort keys.
    2.2 Linearly divide the range [Amin, Amax] into m buckets.
    2.3 Make one pass over the input, counting the number of elements Ai which fall into each bucket. (Neubert calls the buckets "classes" and the assignment of elements to their buckets "classification".)
    2.4 Convert the counts of elements in each bucket to a prefix sum, where Lb is the number of elements Ai in bucket b or less. (L0 = 0 and Lm = n.)
    2.5 an efficient O(n) in-place algorithm for collecting the elements of each bucket together in the correct relative order using only m words of additional memory.
    2.6 Sort each bucket using insertion sort.

3. Time complexity:
    3.1 best: n
    3.2 ave: n + r
    3.3 worst: n*n
4. Reference
https://github.com/HaiDuc0147/sortingAlgorithm
*/