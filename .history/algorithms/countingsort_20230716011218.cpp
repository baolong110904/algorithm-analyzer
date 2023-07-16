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


?