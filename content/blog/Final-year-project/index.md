---
title: Final Year Project
date: '2023-06-28T12:00:00.00Z'
description: 'Generating high-coverage test suite for RISC-V'
---

## Abstract

RISC-V is an open standard instruction set architecture that has gained attraction from developers and manufacturers recently. Early verification of RISC-V implementations is crucial since hidden bugs would become harder to recover later in the development cycle. It incentivizes advanced techniques for generating massive test cases. Therefore, this project aims to take inspiration from coverage-guided fuzzing and fuzzing by proxy to generate a high-coverage test suite that can expose defects in the RISC-V implementations.
In this project, we have successfully developed a RISC-V fuzzer with Spike by first making Spike fuzz-friendly and integrating it with libFuzzer. Then, we created two variations of the RISC- V custom mutator that perform type-aware mutations. Lastly, we performed fuzzing by proxy with the fuzzer-generated test suite to test three other RISC-V implementations: RVEMU, FORVIS and SAIL-RISCV.
We have provided a quantitative analysis of the performance of different variations of fuzzer. The fuzzer with the advanced custom mutator outperforms other variations in most areas. In addition, we have compared the code coverage of Spike with the official RISC-V ISA test suite. The result shows our test suite could provide unique coverage of Spike that could lead to 13.4% increase in total branch coverage and 10% increase in total line coverage. We have also discovered a floating point instruction bug in RVEMU.

![Thesis](./MEng_Project.pdf)



