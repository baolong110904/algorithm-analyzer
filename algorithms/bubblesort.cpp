// O(n^2)

// Calculating time function
void bubbleSort_time(int *array, int size)
{
    double start = clock();
    for (int i = 1; i <= size - 1; i++)
        for (int j = size - 1; j >= i; j--)
            if (array[j - 1] > array[j])
                swap(array[j - 1], array[j]);

    double end = clock();
    double time = (end - start) / CLOCKS_PER_SEC;

    cout << "Time of bubble sort taken: " << time << endl;
}
// Calculating total comparison
void bubbleSort_comparison(int *array, int size)
{
    int count = 0;
    for (int i = 0; i <= size - 1; i++)
        for (int j = size - 1; j >= i; j--)
            if (count++ && array[j - 1] > array[j])
                swap(array[j - 1], array[j]);

    cout << "Total comparison of bubble sort: " << count << endl;
}

/*
Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles
in sparkling water. The bubbles represents the elements of the data structure.

The bigger bubbles reach the top faster than smaller bubbles, and this algorithm
works in the same way. It iterates through the data structureand for each cycle 
compares the current element with the next one, swapping them if they are in the wrong order.


- Average Complexity: O(n2)
- Best Case: O(n)
- Worst Case: O(n2)
- Space Complexity:	O(1)
*/