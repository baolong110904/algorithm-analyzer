// Forward declarations
void selectionSort_time(int arr[], int n, double &count_time);
void selectionSort_compare(int arr[], int n, long long int &count_compare);
void insertionSort_time(int arr[], int n, double &count_time);
void insertionSort_compare(int arr[], int n, long long int &count_compare);
void bubbleSort_time(int arr[], int n, double &count_time);
void bubbleSort_compare(int arr[], int n, long long int &count_compare);
void shakerSort_time(int arr[], int n, double &count_time);
void shakerSort_compare(int arr[], int n, long long int &count_compare);
void shellSort_time(int arr[], int n, double &count_time);
void shellSort_compare(int arr[], int n, long long int &count_compare);
void heapify_time(int arr[], int n, int index);
void heapSort_time(int arr[], int n, double &count_time);
void heapify_compare(int arr[], int n, int index, long long int &count_compare);
void heapSort_compare(int arr[], int n, long long int &count_compare);
void merge_time(int arr[], int first, int mid, int last);
void mergeSort_time(int arr[], int first, int last, double &count_time);
void quickSort_time(int arr[], int first, int last, double &count_time);
void quickSort_compare(int arr[], int first, int last, long long int &count_compare);
void countingSort_time(int arr[], int n, double &count_time);
void countingSort_compare(int arr[], int n, long long int &count_compare);
void radixSort_time(int arr[], int n, double &count_time);
void radixSort_compare(int arr[], int n, long long int &count_compare);
void flashSort_compare(int arr[], int n, long long int &count_compare);
void flashSort_time(int arr[], int n, double &count_time);
void sort(string sort_name, string output_type, int arr[], int n, double &count_time, long long int &count_compare);

// Code
#include "selectionSort.cpp"
#include "insertionSort.cpp"
#include "bubbleSort.cpp"
#include "shakerSort.cpp"
#include "shellSort.cpp"
#include "heapSort.cpp"
#include "mergeSort.cpp"
#include "quickSort.cpp"
#include "countingSort.cpp"
#include "radixSort.cpp"
#include "flashSort.cpp"

#include "sort.cpp"