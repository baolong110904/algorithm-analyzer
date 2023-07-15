// Comparision
void countingSort_Comparision(int arr[], int n, int u, int &comparision)
{
    comparision = 0;

    int *f = new int[u + 1]{0};
    for (int i = 0; ++comparision && i < n; i++)
    {
        f[arr[i]]++;
    }
    for (int i = 1; ++comparision && i <= u; i++)
    {
        f[i] = f[i - 1] + f[i];
    }

    int *b = new int[n];
    for (int i = n - 1; ++comparision && i >= 0; i--)
    {
        b[f[arr[i]] - 1] = arr[i];
        f[arr[i]]--;
    }

    for (int i = 0; ++comparision && i < n; i++)
    {
        arr[i] = b[i];
    }
}

// Time
void countingSort_Time(int arr[], int n, int u)
{
    clock_t startTime = clock();

    int *f = new int[u + 1]{0};
    for (int i = 0; i < n; i++)
    {
        f[arr[i]]++;
    }

    for (int i = 1; i <= u; i++)
    {
        f[i] = f[i - 1] + f[i];
    }

    int *b = new int[n];
    for (int i = n - 1; i >= 0; i--)
    {
        b[f[arr[i]] - 1] = arr[i];
        f[arr[i]]--;
    }

    for (int i = 0; i < n; i++)
    {
        arr[i] = b[i];
    }

    clock_t endTime = clock();
    double time = double(endTime - startTime) / CLOCKS_PER_SEC;
    std::cout << "Time: " << time << " second" << std::endl;
}

/*
1. Idea: Counting sort is a sorting algorithm that sorts the elements of an array by counting the number of occurrences of each unique element in the array. The count is stored in an auxiliary array and the sorting is done by mapping the count as an index of the auxiliary array.
2. Working of Counting Sort
    2.1 Find out the maximum element (let it be max) from the given array
    2.2 Initialize an array of length max+1 with all elements 0. This array is used for storing the count of the elements in the array.
    2.3 Store the count of each element at their respective index in count array
    2.4 Store cumulative sum of the elements of the count array. It helps in placing the elements into the correct index of the sorted array.
    2.5 Find the index of each element of the original array in the count array. This gives the cumulative count
    2.6 After placing each element at its correct position, decrease its count by one.

3. Time complexity: 
    3.1 best: O(n + k)
    3.2 ave:  O(n + k)
    3.3 worst O(n + k)


*/