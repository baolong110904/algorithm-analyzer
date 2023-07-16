
bool isValidAlgorithm(string algorithm_name) {
    return (
        algorithm_name == "selection-sort" || algorithm_name == "insertion-sort" || algorithm_name == "bubble-sort" ||
        algorithm_name == "shaker-sort" || algorithm_name == "shell-sort" || algorithm_name == "heap-sort" ||
        algorithm_name == "merge-sort" || algorithm_name == "quick-sort" || algorithm_name == "counting-sort" ||
        algorithm_name == "radix-sort" || algorithm_name == "lash-sort"
    );
}

bool isValidInputOrder(string input_order) {
    return (input_order == "-rand" || input_order == "-nsorted" || input_order == "-sorted" || input_order == "-rev");
}

bool isValidOutputParameter(string output_parameter) {
    return (output_parameter == "-time" || output_parameter == "-comp" || output_parameter == "-both");
}