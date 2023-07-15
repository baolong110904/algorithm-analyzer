// O(n x logn)

// Calculating time function
void shellSort_time(int array[], int size)
{
    double start = clock();

    for (int interval = size / 2; interval > 0; interval /= 2)
    {
        for (int i = interval; i < size; i++)
        {
            int j = i;
            int value = array[i];
            for (j = i; j >= interval && array[j - interval] > value; j -= interval)
            {

                array[j] = array[j - interval];
            }
            array[j] = value;

            value = array[i];
        }
    }

    double end = clock();
    double time = (end - start) / CLOCKS_PER_SEC;

    cout << "Time of shell sort: " << time << endl;
}

// Calculating total comparison
void shellSort_comparison(int *array, int size)
{
    int count = 0;
    for (int interval = size / 2; interval > 0; interval /= 2)
    {
        for (int i = interval; i < size; i++)
        {
            int j = i;
            int value = array[i];
            for (j = i; count++ && j >= interval && array[j - interval] > value; j -= interval)
            {

                array[j] = array[j - interval];
            }
            array[j] = value;
            value = array[i];
        }
    }

    cout << "Total comparison of shell sort: " << count << endl;
}

/*DESCRIPTION
Shell Sort is one of the oldest sorting algorithms and it's an extension of the Insertion Sort.
This algorithm is fast and easy to implement, but it's hard to measure its performances.

Unlike Insertion Sort, Shell Sort starts by comparing the elements distant from each other by a 
certain gap that gets progressively decreased. By starting with the most distant elements, it 
can optimize performances as it's not limited by just comparing two adjacent elements.

- Average Complexity: O(n × log n)
- Best Case: O(n × log n)
- Worst Case: O(n2)
- Space Complexity: O(1)
*/