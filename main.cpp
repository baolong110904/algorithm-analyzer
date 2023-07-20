#include <iostream>
#include <math.h>
#include <time.h>
#include <string>
#include <cstring>
#include <fstream>

#define MAX_SIZE 1000000

using namespace std;

#include "algorithms/algorithms.h"
#include "tools/dataGenerator.cpp"
#include "tools/cmd.cpp"

int main(int argc, char *argv[]) {

    if (argc == 5 || argc == 6) {
        if (string(argv[1]) == "-a") {
            // Command 1 2 3
            if (isValidAlgorithm(argv[2])) {
                if (strrchr(argv[3], '.') != NULL && string(strrchr(argv[3], '.')) == ".txt") {
                    // Command 1
                    if (isValidOutputParameter(argv[4])) {
                        // To do command 1
                        todoCommand1(argv[2], argv[3], argv[4]);
                    } else {
                        cout << "Invalid output parameter";
                    }
                } else if (atoi(argv[3]) != 0 && atoi(argv[3]) <= MAX_SIZE) {
                    // Command 2 3
                    if (isValidInputOrder(argv[4])) {
                        // Command 2
                        if (argc == 6 && isValidOutputParameter(argv[5])) {
                            // To do command 2
                            todoCommand2(argv[2], argv[3], argv[4], argv[5]);
                        } else {
                            cout << "Invalid output parameter";
                        }
                    } else if (isValidOutputParameter(argv[4])) {
                        // Command 3
                        // To do command 3
                        todoCommand3(argv[2], argv[3], argv[4]);
                    } else {
                        cout << "Invalid input order";
                    }
                } else {
                    cout << "Invalid input";
                }
            } else {
                cout << "Invalid algorithm";
            }
        } else if (string(argv[1]) == "-c") {
            // Command 4 5
            if (isValidAlgorithm(argv[2]) && isValidAlgorithm(argv[3])) {
                if (strrchr(argv[4], '.') != NULL && string(strrchr(argv[4], '.')) == ".txt") {
                    // Command 4
                    // To do command 4
                    todoCommand4(argv[2], argv[3], argv[4]);
                }  else if (argc == 6 && atoi(argv[4]) != 0 && atoi(argv[4]) <= MAX_SIZE) {
                    // Command 5
                    if (isValidInputOrder(argv[5])) {
                        // To do command 5
                        todoCommand5(argv[2], argv[3], argv[4], argv[5]);
                    } else {
                        cout << "Invalid input order";
                    }
                } else {
                    cout << "Invalid input";
                }
            }
        } else {
            cout << "Invalid mode";
        }
    } else {
        cout << "Invalid command";
    }

    return 0;
}