
bool isValidAlgorithm(string algorithm_name) {
    return (
        algorithm_name == "selection-sort" || algorithm_name == "insertion-sort" || algorithm_name == "bubble-sort" ||
        algorithm_name == "shaker-sort" || algorithm_name == "shell-sort" || algorithm_name == "heap-sort" ||
        algorithm_name == "merge-sort" || algorithm_name == "quick-sort" || algorithm_name == "counting-sort" ||
        algorithm_name == "radix-sort" || algorithm_name == "flash-sort"
    );
}

bool isValidInputOrder(string input_order) {
    return (input_order == "-rand" || input_order == "-nsorted" || input_order == "-sorted" || input_order == "-rev");
}

bool isValidOutputParameter(string output_parameter) {
    return (output_parameter == "-time" || output_parameter == "-comp" || output_parameter == "-both");
}

void todoCommand1(string algorithm_name, string input_file, string output_parameter) {
    ifstream ifs(input_file);
    if (ifs.is_open()) {
        // Read file
        int n;
        ifs >> n;
        int* arr = new int [n];
        for (int i=0; i<n; i++) {
            ifs >> arr[i];
        }
        // Print info
        cout << "ALGORITHM MODE" << endl;
        cout << "Algorithm: " << algorithm_name << endl;
        cout << "Input file: " << input_file << endl;
        cout << "Input size: " << n << endl;
        // Run sort
        double count_time;
        long long int count_compare;
        sort(algorithm_name, output_parameter, arr, n, count_time, count_compare);
        cout << endl << "--------------------" << endl;
        if (output_parameter == "-time" || output_parameter == "-both") {
            cout << "Running time: " << count_time << endl;
        }
        if (output_parameter == "-comp" || output_parameter == "-both") {
            cout << "Comparisions: " << count_compare << endl;
        }
        // Write to output file
        ofstream ofs("store/output.txt");
        ofs << n << endl;
        for (int i=0; i<n; i++) {
            ofs << arr[i] << " ";
        }
        // Clear
        delete [] arr;
    } else {
        cout << "Cannot open file";
    }
}

void todoCommand2(string algorithm_name, string input_size, string input_order, string output_parameter) {
    int n = stoi(input_size);
    int dataType;
    if (string(input_order) == "-rand") {
        dataType = 0;
    } else if (string(input_order) == "-sorted") {
        dataType = 1;
    } else if (string(input_order) == "-rev") {
        dataType = 2;
    } else {
        dataType = 3;
    }
    // Generate array 
    int* arr = new int [n];
    GenerateData(arr, n, dataType);
    // Write to input file
    ofstream ofs("store/input.txt");
    ofs << n << endl;
    for (int i=0; i<n; i++) {
        ofs << arr[i] << " ";
    }
    // Print info
    cout << "ALGORITHM MODE" << endl;
    cout << "Algorithm: " << algorithm_name << endl;
    cout << "Input size: " << input_size << endl;
    cout << "Input order: " << input_order << endl;
    // Run sort
    double count_time;
    long long int count_compare;
    sort(algorithm_name, output_parameter, arr, n, count_time, count_compare);
    cout << endl << "--------------------" << endl;
    if (output_parameter == "-time" || output_parameter == "-both") {
        cout << "Running time: " << count_time << endl;
    }
    if (output_parameter == "-comp" || output_parameter == "-both") {
        cout << "Comparisions: " << count_compare << endl;
    }
    // Clear
    delete [] arr;
}

void todoCommand3(string algorithm_name, string input_size, string output_parameter) {
    int n = stoi(input_size);
    // Generate array 
    int* arr_rand = new int [n];
    int* arr_sorted = new int [n];
    int* arr_rev = new int [n];
    int* arr_nsorted = new int [n];
    GenerateData(arr_rand, n, 0);
    GenerateData(arr_sorted, n, 1);
    GenerateData(arr_rev, n, 2);
    GenerateData(arr_nsorted, n, 3);
    // Write to output file
    ofstream ofs_rand("store/input_1.txt");
    ofstream ofs_nsorted("store/input_2.txt");
    ofstream ofs_sorted("store/input_3.txt");
    ofstream ofs_rev("store/input_4.txt");
    ofs_rand << n << endl;
    ofs_nsorted << n << endl;
    ofs_sorted << n << endl;
    ofs_rev << n << endl;
    for (int i=0; i<n; i++) {
        ofs_rand << arr_rand[i] << " ";
        ofs_nsorted << arr_nsorted[i] << " ";
        ofs_sorted << arr_sorted[i] << " ";
        ofs_rev << arr_rev[i] << " ";
    }
    // Print info
    cout << "ALGORITHM MODE" << endl;
    cout << "Algorithm: " << algorithm_name << endl;
    cout << "Input size: " << input_size << endl;
    // Run sort
    double count_time;
    long long int count_compare;
    // Rand
    cout << endl << "Input order: Randomize" << endl;
    sort(algorithm_name, output_parameter, arr_rand, n, count_time, count_compare);
    cout << "--------------------" << endl;
    if (output_parameter == "-time" || output_parameter == "-both") {
        cout << "Running time: " << count_time << endl;
    }
    if (output_parameter == "-comp" || output_parameter == "-both") {
        cout << "Comparisions: " << count_compare << endl;
    }
    // Nsorted
    cout << endl << "Input order: Nearly sorted" << endl;
    sort(algorithm_name, output_parameter, arr_nsorted, n, count_time, count_compare);
    cout << "--------------------" << endl;
    if (output_parameter == "-time" || output_parameter == "-both") {
        cout << "Running time: " << count_time << endl;
    }
    if (output_parameter == "-comp" || output_parameter == "-both") {
        cout << "Comparisions: " << count_compare << endl;
    }
    // Sorted
    cout << endl << "Input order: Sorted" << endl;
    sort(algorithm_name, output_parameter, arr_sorted, n, count_time, count_compare);
    cout << "--------------------" << endl;
    if (output_parameter == "-time" || output_parameter == "-both") {
        cout << "Running time: " << count_time << endl;
    }
    if (output_parameter == "-comp" || output_parameter == "-both") {
        cout << "Comparisions: " << count_compare << endl;
    }
    // Rev
    cout << endl << "Input order: Reversed" << endl;
    sort(algorithm_name, output_parameter, arr_rev, n, count_time, count_compare);
    cout << "--------------------" << endl;
    if (output_parameter == "-time" || output_parameter == "-both") {
        cout << "Running time: " << count_time << endl;
    }
    if (output_parameter == "-comp" || output_parameter == "-both") {
        cout << "Comparisions: " << count_compare << endl;
    }
    // Clear
    delete [] arr_rand;
    delete [] arr_nsorted;
    delete [] arr_sorted;
    delete [] arr_rev;
}

void todoCommand4(string algorithm_name_1, string algorithm_name_2, string file_name) {
    ifstream ifs(file_name);
    if (ifs.is_open()) {
        // Read file
        int n;
        ifs >> n;
        int* arr_1 = new int [n];
        int* arr_2 = new int [n];
        for (int i=0; i<n; i++) {
            ifs >> arr_1[i] >> arr_2[i];
        }
        // Print info
        cout << "ALGORITHM MODE" << endl;
        cout << "Algorithm: " << algorithm_name_1 << " | " << algorithm_name_2 << endl;
        cout << "Input file: " << file_name << endl;
        cout << "Input size: " << n << endl;
        // Run sort
        double count_time_1, count_time_2;
        long long int count_compare_1, count_compare_2;
        sort(algorithm_name_1, "-both", arr_1, n, count_time_1, count_compare_1);
        sort(algorithm_name_2, "-both", arr_2, n, count_time_2, count_compare_2);
        cout << endl << "--------------------" << endl;
        cout << "Running time: " << count_time_1 << " | " << count_time_2 << endl;
        cout << "Comparisions: " << count_compare_1 << " | " << count_compare_2 << endl;
        // Write to output file
        ofstream ofs("store/output.txt");
        ofs << n << endl;
        for (int i=0; i<n; i++) {
            ofs << arr_1[i] << " ";
        }
        // Clear
        delete [] arr_1;
        delete [] arr_2;
    } else {
        cout << "Cannot open file";
    }
}

void todoCommand5(string algorithm_name_1, string algorithm_name_2, string input_size, string input_order) {
    int n = stoi(input_size);
    int dataType;
    if (string(input_order) == "-rand") {
        dataType = 0;
    } else if (string(input_order) == "-sorted") {
        dataType = 1;
    } else if (string(input_order) == "-rev") {
        dataType = 2;
    } else {
        dataType = 3;
    }
    // Generate array 
    int* arr_1 = new int [n];
    int* arr_2 = new int [n];
    GenerateData(arr_1, n, dataType);
    for (int i=0; i<n; i++) {
        arr_2[i] = arr_1[i];
    }
    // Write to input file
    ofstream ofs("store/input.txt");
    ofs << n << endl;
    for (int i=0; i<n; i++) {
        ofs << arr_1[i] << " ";
    }
    // Print info
    cout << "ALGORITHM MODE" << endl;
    cout << "Algorithm: " << algorithm_name_1 << " | " << algorithm_name_2 << endl;
    cout << "Input size: " << input_size << endl;
    cout << "Input order: " << input_order << endl;
    // Run sort
    double count_time_1, count_time_2;
    long long int count_compare_1, count_compare_2;
    sort(algorithm_name_1, "-both", arr_1, n, count_time_1, count_compare_1);
    sort(algorithm_name_2, "-both", arr_2, n, count_time_2, count_compare_2);
    cout << endl << "--------------------" << endl;
    cout << "Running time: " << count_time_1 << " | " << count_time_2 << endl;
    cout << "Comparisions: " << count_compare_1 << " | " << count_compare_2 << endl;
    // Clear
    delete [] arr_1;
    delete [] arr_2;
}