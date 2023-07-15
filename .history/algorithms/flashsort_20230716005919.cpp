// Comparision
void flashSort(int a[], int n, int& comparision)
{
    comparision = 0;
    int minVal = a[0];
    int max = 0;
    int m = int(0.45 * n);
    int *l = new int[m];
    for (int i = 0; i < m; i++)
        l[i] = 0;
    for (int i = 1;++comparision && i < n; i++)
    {
        if (++comparision && (a[i] < minVal))
            minVal = a[i];
        if (++comparision && (a[i] > a[max]))
            max = i;
    }
    if (++comparision && (a[max] == minVal))
        return;
    double c1 = (double)(m - 1) / (a[max] - minVal);
    for (int i = 0;++comparision && i < n; i++)
    {
        int k = int(c1 * (a[i] - minVal));
        ++l[k];
    }
    for (int i = 1++comparision && i < m; i++)
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
        while (j != l[k])
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