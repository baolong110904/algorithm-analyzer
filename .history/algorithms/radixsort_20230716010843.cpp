// Comparision
void radixSort_Comparision(int arr[], int n, int &comparision)
{
    comparision = 0;

    int max_val = arr[0];
    for (int i = 0; ++comparision && i < n; i++)
    {
        if (++comparision && arr[i] > max_val)
        {
            max_val = arr[i];
        }
    }
    int digits = 0, div;
    do
    {
        digits++;
        div = max_val / pow(10, digits);
    } while (++comparision && div > 0);

    int *tempArr[10];
    for (int i = 0; ++comparision && i < 10; i++)
    {
        tempArr[i] = new int[n];
    }
    int tempCount[10];

    for (int i = 0; ++comparision && i < digits; i++)
    {
        int exp = pow(10, i);
        for (int j = 0; ++comparision && j < 10; j++)
        {
            tempCount[j] = 0;
        }
        for (int j = 0; ++comparision && j < n; j++)
        {
            int idx = (arr[j] / exp) % 10;
            tempArr[idx][tempCount[idx]++] = arr[j];
        }

        int idx = 0;
        for (int j = 0; ++comparision && j < 10; j++)
        {
            for (int k = 0; ++comparision && k < tempCount[j]; ++k)
            {
                arr[idx++] = tempArr[j][k];
            }
        }
    }
}
// Time
void radixSort_Time(int arr[], int n)
{
    clock_t startTime = clock();

    int max_val = arr[0];
    for (int i = 0; i < n; i++)
    {
        if (arr[i] > max_val)
        {
            max_val = arr[i];
        }
    }

    int digits = 0, div;
    do
    {
        digits++;
        div = max_val / pow(10, digits);
    } while (div > 0);

    int *tempArr[10];
    for (int i = 0; i < 10; i++)
    {
        tempArr[i] = new int[n];
    }
    int tempCount[10];

    for (int i = 0; i < digits; i++)
    {
        int exp = pow(10, i);
        for (int j = 0; j < 10; j++)
        {
            tempCount[j] = 0;
        }
        for (int j = 0; j < n; j++)
        {
            int idx = (arr[j] / exp) % 10;
            tempArr[idx][tempCount[idx]++] = arr[j];
        }

        int idx = 0;
        for (int j = 0; j < 10; j++)
        {
            for (int k = 0; k < tempCount[j]; ++k)
            {
                arr[idx++] = tempArr[j][k];
            }
        }
    }

    clock_t endTime = clock();

    double time = double(endTime - startTime) / CLOCKS_PER_SEC;

    std::cout << "Time: " << time << " second" << std::endl;
}

/*
1. Idea: The idea of Radix Sort is to do digit-by-digit sorting starting from the least significant digit to the most significant digit.

2. The algorithm can be described as follows:
    2.1 Take the array. Check whether the number of digits in every array element is the same. If it is not the same, make it the same by using 0 before MSB.
    2.2 Find how many buckets are needed. Now, if you are given a decimal number, the digit will fall in the range of 0 to 9, so take 10 buckets. If you are given a string, then characters will fall in the range a-z (26 alphabets), so consider 0 – 25 buckets.
    2.3 



*/
