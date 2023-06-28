module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Yan Hoi Puk (Philip)',
    // Main Site Title
    title: `Yan Hoi Puk | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Final Year Electronic and Information Engineering student`,
    // Optional: Github account URL
    github: `https://github.com/philippuk`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/yan-hoi-puk`,
    // Content of the About Me section
    about: `Hi, I am Philip, a Final Year Electronic and Information Engineering student from Imperial College London. I am interested in Software Development, Computer Architecture and Machine Learning.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Final Year Project - Generating high-coverage RISC-V test suite',
        description:
          'Utilize coverage-guided fuzzing and fuzzing by proxy to generate RISC-V test suite with libFuzzer',
      },
      {
        name: 'Deep Learning',
        description:
          'Built a convoluational network, variational autoencoder and generative adversarial network using Pytorch',
      },
      {
        name: 'Scheduling and Resource Allocation',
        description:
          'Develop a branch and bound algorithm to schedule image processing tasks with dependencies and constrains using Python',
      },
      {
        name: 'Hardware and Software Verification',
        description:
          'Built a verification suite for AHBLite Peripherals, VGA and GPIO using Questasim and JasperGold. Verify functions and mathematic theorems with dafny and Isabelle',
      },
      {
        name: 'Embedded System - Demetris and Music Synthesizer',
        description:
          'Demetris - An agriculture IOT device for monitoring the status of crops using Raspberry Pi and Python. Music Synthesizer - A digital piano with various functionalities, built on STM32 with C++',
      },
      {
        name: 'F# - ISSIE',
        description:
          'Adding new features to Interactive Schematic Simulator with Integrated Editor (ISSIE). Built with F#',
      },
      {
        name: 'Machine Learning - Decision Tree and Mini Neural Network Library',
        description:
          'Built a decision tree model and mini neural network library with Python',
      },
      {
        name: 'Computer Architecture - CPU Model investigation and CPU Profiling',
        description:
          'CPU Model Investigation - Investigate the lowest energy consuming CPU model with Simplescalar simulator. CPU Profling - Profile a Arm CPU running an FFT algorithm with matrix operations using perf',
      },
      {
        name: 'Computer Architecture - MIPS CPU and C-to-MIPS compiler',
        description:
          'MIPS CPU - A functional MIPS CPU and testbench built with Verilog. C-to-MIPS compiler - A functional C-to-MIPS compiler built with lex, yacc, bison and C++',
      },
      {
        name: 'Robotics - Robotics Simulation',
        description:
          'A series of robotics simulation practicals learning different methods of controlling and localisation the robot (Monte Carlo, SLAM) using CoppeliaSim',
      },
      {
        name: 'Pong Game',
        description:
          'A online real-time Pong Game built with FPGA, AWS and Python',
      },
      {
        name: '2nd Year Project - Mars Rover',
        description:
          'Responsible for the Command Module of the \'Mars Rover\'. Built a control panel that remote control the Rover to navigate an area autonomously using Python and A* algorithm',
      },
      {
        name: '1st Year Project - Circuit Simulator',
        description:
          'Built a circuit simulator similar to LTSpice using C++',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Arm',
        description: 'Part Time Undergraduate, Software Engineer at Fast Model Team, Responsible for Arm v8/v9-A PMU Architecture Update for the Fast Model, April 2022 - April 2023',
        link: 'https://www.arm.com/',
      },
      {
        name: 'Accenture HK',
        description: 'Digital Business Analyst Internship, Responsible for SIT/UAT of an mobile application, August 2021 - October 2021',
        link: 'https://www.accenture.com/hk-en',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming Languages',
        description:
          'Python, C++, SQL, JavaScript, HTML, PHP, F#, dafny',
      },
      {
        name: 'Other Skills',
        description: 'Matlab, Verilog, TCP/UDP, Agile, Git, Pytorch, libFuzzer, Questasim, Jaspergold, Isabelle',
      },
      {
        name: 'Language',
        description: 'English - Fluent, Cantonese - Native, Mandarin - Fluent',
      },
    ],
    education: [
      {
        name: 'Imperial College London',
        description:
          'MEng Electronic and Information Engineering, 2019 - 2023',
        link: 'https://www.imperial.ac.uk/',
      },
      {
        name: 'Diocesan Boys\' School',
        description: 'International Baccalaureate Diploma Program, 2015 - 2019, 41/45, Mathematics HL - 7, Physics HL - 7, Economics HL - 7',
        link: 'https://www.dbs.edu.hk/',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
