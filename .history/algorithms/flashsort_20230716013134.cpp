// Comparision
void flashSort(int a[], int n, int &comparision)
{
    comparision = 0;
    int minVal = a[0];
    int max = 0;
    int m = int(0.45 * n);
    int *l = new int[m];
    for (int i = 0; i < m; i++)
        l[i] = 0;
    for (int i = 1; ++comparision && i < n; i++)
    {
        if (++comparision && (a[i] < minVal))
            minVal = a[i];
        if (++comparision && (a[i] > a[max]))
            max = i;
    }
    if (++comparision && (a[max] == minVal))
        return;
    double c1 = (double)(m - 1) / (a[max] - minVal);
    for (int i = 0; ++comparision && i < n; i++)
    {
        int k = int(c1 * (a[i] - minVal));
        ++l[k];
    }
    for (int i = 1; ++comparision && i < m; i++)
        l[i] += l[i - 1];

    swap(a[max], a[0]);
    int nmove = 0;
    int j = 0;
    int k = m - 1;
    int t = 0;
    int flash;
    while (++comparision && (nmove < n - 1))
    {
        while (++comparision && (j > l[k] - 1))
        {
            j++;
            k = int(c1 * (a[j] - minVal));
        }
        flash = a[j];
        if (++comparision && k < 0)
            break;
        while (++comparision && j != l[k])
        {
            k = int(c1 * (flash - minVal));
            int hold = a[t = --l[k]];
            a[t] = flash;
            flash = hold;
            ++nmove;
        }
    }
    delete[] l;
    insertionSort(a, n);
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

3. Time 
4. Reference
https://github.com/HaiDuc0147/sortingAlgorithm
*/