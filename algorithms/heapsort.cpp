// O(n x logn)

// Calculating time function
void heapify_time(int *array, int size, int index)
{
    int left = 2 * index + 1;
    int right = 2 * index + 2;
    int largest = index;

    if (left < size && array[left] > array[largest])
        largest = left;
    if (right < size && array[right] > array[largest])
        largest = right;

    if (largest != index)
    {
        swap(array[largest], array[index]);
        heapify_time(array, size, largest);
    }
}

void heapSort_time(int *array, int size)
{
    double start = clock(); // Start the timer

    for (int i = size / 2 - 1; i >= 0; i--)
        heapify_time(array, size, i);
    for (int i = size - 1; i > 0; i--)
    {
        swap(array[0], array[i]);
        heapify_time(array, i, 0);
    }

    double end = clock();
    double time = (end - start) / CLOCKS_PER_SEC;
    std::cout << "Time of heap sort taken: " << time << " seconds" << std::endl;
}

// Calculating total comparison
void heapify_comparison(int *array, int size, int index, int &count)
{
    int left = 2 * index + 1;
    int right = 2 * index + 2;
    int largest = index;

    if ((count++ && left < size) && (count++ && array[left] > array[largest]))
        largest = left;
    if ((count++ && right < size) && (count++ && array[right] > array[largest]))
        largest = right;

    if (count++ && largest != index)
    {
        swap(array[largest], array[index]);
        heapify_comparison(array, size, largest, count);
    }
}

void heapSort_comparison(int *array, int size)
{
    int count = 0;
    for (int i = size / 2 - 1; i >= 0; i--)
        heapify_comparison(array, size, i, count);
    for (int i = size - 1; i > 0; i--)
    {
        swap(array[0], array[i]);
        heapify_comparison(array, i, 0, count);
    }

    cout << "Total comparison: " << count << endl;
}

/*
Heap Sort is an in-place iterative sorting algorithm based on auxiliary 
data structures called heap. It's less efficient than algorithm with the 
same time complexity and it's not suitable for data structures with few elements.

The heap is a data structure representable as a binary tree, where each node 
has a value bigger or equal to its children. Consequently, the root will hold the maximum value.

- Average Complexity: O(n × log n)
- Best Case:	O(n × log n)
- Worst Case: O(n × log n)
- Space Complexity: O(1)
*/