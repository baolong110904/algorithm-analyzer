//Comparision
void flashSort_Comparison(int arr[], int n)
{
    int m = 0.45 * n;
    int *l = new int[m];

    int max = 0;
    int min = arr[0];

    for (int i = 0; i < m; i++)
    {
        l[i] = 0;
    }
    
    for (int i = 1; i < n; i++)
    {
        if (arr[i] < min)
        {
            min = arr[i];
        }
        
    }
    
}