# Sorting Algorithms Analyzer

## How to download
From your command line:

Clone the repo
```sh
git clone https://github.com/baolong110904/algorithm-analyzer.git
```
Go into the repo
```sh
cd algorithm-analyzer
```
Open VS Code
```sh
code .
```

## How to run
From the repo folder command line

Command 1
```sh
./main.exe -a sort_name input_file_name -output_type
```
Command 2
```sh
./main.exe -a sort_name input_size -input_order -output_type
```
Command 3
```sh
./main.exe -a sort_name input_size -output_type
```
Command 4
```sh
./main.exe -c sort_name_1 sort_name_2 input_file_name
```
Command 5
```sh
./main.exe -c sort_name_1 sort_name_2 input_size -input_order
```
**sort_name**: selection-sort, insertion-sort, bubble-sort, shaker-sort, shell-sort, heap-sort, merge-sort, quick-sort, counting-sort, radix-sort, and flash-sort

**-input_order**: **-rand**: randomized, **-nsorted**: nearly sorted,  **-sorted**: sorted, **-rev**: reverse sorted

**-output_type**: **-time**: algorithms’s running time, **-comp**: number of comparisions, **-both**: both above options
## Stages
### Stage 1
Inside **algorithms folder** create a file **algorithmName.cpp**  that includes 2 version of algorithms (running time analyzer & compare analyzer)

Include the file in **algorithms.h**

Note the details of the algorithm (idea, big O, bla bla...) at the end of file (comment)

**Deadline: Sat July 15**

### Stage 2
**Bao:** completing code

**Long:** starting writing report

**Dung & Quan:** finding how to draw chart & trying drawing some charts (no need accurate data)

**Deadline: Thu July 20**

### Stage 3
**All member:** checking & running code, designing code to draw charts automatically (using javascript), finishing report

**Deadline: Tue July 25**

## Materials
**Report Latex link:** https://www.overleaf.com/read/wgzjmtxrzhqm

**Charts page:** https://baolong110904.github.io/algorithm-analyzer/