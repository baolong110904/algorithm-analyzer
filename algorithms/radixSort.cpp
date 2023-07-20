// Time
void radixSort_time(int arr[], int n, double &count_time) {
    double time_start = clock();

    int max_val = arr[0];
    for (int i = 0; i < n; i++) {
        if (arr[i] > max_val) {
            max_val = arr[i];
        }
    }

    int digits = 0, div;
    do {
        digits++;
        div = max_val / pow(10, digits);
    } while (div > 0);

    int *tempArr[10];
    for (int i = 0; i < 10; i++) {
        tempArr[i] = new int[n];
    }
    int tempCount[10];

    for (int i = 0; i < digits; i++) {
        int exp = pow(10, i);
        for (int j = 0; j < 10; j++) {
            tempCount[j] = 0;
        }
        for (int j = 0; j < n; j++) {
            int idx = (arr[j] / exp) % 10;
            tempArr[idx][tempCount[idx]++] = arr[j];
        }

        int idx = 0;
        for (int j = 0; j < 10; j++) {
            for (int k = 0; k < tempCount[j]; ++k) {
                arr[idx++] = tempArr[j][k];
            }
        }
    }

    double time_end = clock();
    count_time = (time_end - time_start) / CLOCKS_PER_SEC;
}

// Compare
void radixSort_compare(int arr[], int n, long long int &count_compare) {
    int max_val = arr[0];
    for (int i = 0; ++count_compare && i < n; i++) {
        if (++count_compare && arr[i] > max_val) {
            max_val = arr[i];
        }
    }
    int digits = 0, div;
    do {
        digits++;
        div = max_val / pow(10, digits);
    } while (++count_compare && div > 0);

    int *tempArr[10];
    for (int i = 0; ++count_compare && i < 10; i++) {
        tempArr[i] = new int[n];
    }
    int tempCount[10];

    for (int i = 0; ++count_compare && i < digits; i++) {
        int exp = pow(10, i);
        for (int j = 0; ++count_compare && j < 10; j++) {
            tempCount[j] = 0;
        }
        for (int j = 0; ++count_compare && j < n; j++) {
            int idx = (arr[j] / exp) % 10;
            tempArr[idx][tempCount[idx]++] = arr[j];
        }

        int idx = 0;
        for (int j = 0; ++count_compare && j < 10; j++) {
            for (int k = 0; ++count_compare && k < tempCount[j]; ++k) {
                arr[idx++] = tempArr[j][k];
            }
        }
    }
}

/*
1. Idea: The idea of Radix Sort is to do digit-by-digit sorting starting from the least significant digit to the most significant digit.

2. The algorithm can be described as follows:
    2.1 Take the array. Check whether the number of digits in every array element is the same. If it is not the same, make it the same by using 0 before MSB.
    2.2 Find how many buckets are needed. Now, if you are given a decimal number, the digit will fall in the range of 0 to 9, so take 10 buckets. If you are given a string, then characters will fall in the range a-z (26 alphabets), so consider 0 – 25 buckets.
    2.3 Begin with the LSB (leftmost bit/character) and place the number based on the LSB in the appropriate bucket number. (Do not sort within the buckets). Just concatenate from the buckets and append the numbers in an empty array.
    2.4 Once it is done with one’s place (LSB), follow step 3 again for ten’s place, the hundred’s place, and so on until the MSB is reached.
    2.5 The last output will be the resultant sorted array.

3. Time complexity: O(n).


4. Reference: https://www.geeksforgeeks.org/radix-sort-vs-bucket-sort/?ref=gcse
*/
