/**
 * Engineering Roadmap Templates for Indian Students
 * Comprehensive, verified pathways across CSE, IT, AI/ML, Data Science, ECE, EEE, Mechanical, and Civil
 * Career Compass
 */

const RoadmapTemplates = {
  branches: [
    { id: "cse", name: "Computer Science & Engineering (CSE)", icon: "💻", popularRoles: ["swe", "aiml", "devops", "cybersec"] },
    { id: "it", name: "Information Technology (IT)", icon: "🌐", popularRoles: ["swe", "cloud", "fullstack", "devops"] },
    { id: "aiml", name: "AI / Machine Learning & Data Science", icon: "🧠", popularRoles: ["aiml", "datascientist", "nlp_cv", "mlops"] },
    { id: "ece", name: "Electronics & Communication (ECE)", icon: "📡", popularRoles: ["embedded", "vlsi", "iot_robotics", "telecom"] },
    { id: "eee", name: "Electrical & Electronics (EEE)", icon: "⚡", popularRoles: ["power_ev", "embedded", "controls", "vlsi"] },
    { id: "mech", name: "Mechanical Engineering", icon: "⚙️", popularRoles: ["cad_cae", "robotics_automation", "ev_thermal", "manufacturing"] },
    { id: "civil", name: "Civil & Infrastructure Engineering", icon: "🏗️", popularRoles: ["structural_bim", "construction_mgmt", "transportation", "geotech"] },
    { id: "other", name: "Other Disciplines (Robotics, Chemical, Biotech)", icon: "🔬", popularRoles: ["robotics_automation", "biotech_analytics", "process_eng"] }
  ],

  years: [
    { id: "year1", label: "1st Year (Semester 1–2)", desc: "Engineering Physics, Math, Basic C/Python & Logic" },
    { id: "year2", label: "2nd Year (Semester 3–4)", desc: "Core Branch Theory, DSA, Circuits / Mechanics & OOP" },
    { id: "year3", label: "3rd Year (Semester 5–6)", desc: "Applied Systems, Tooling, Internships & Mini-Projects" },
    { id: "year4", label: "4th Year (Semester 7–8)", desc: "Final Capstone, Campus Placements & GATE/Higher Studies" },
    { id: "aspirant", label: "10+2 / Pre-Engineering", desc: "JEE / State CET Aspirant Transitioning to B.Tech" }
  ],

  roles: {
    swe: {
      id: "swe",
      title: "Full-Stack Software Development Engineer (SDE)",
      branchAffinity: ["cse", "it", "aiml", "ece"],
      salary: "₹6,00,000 - ₹24,00,000 / year",
      description: "Builds responsive web applications, high-scale microservices, distributed databases, and automated deployment pipelines.",
      coreSkills: ["C++ / Java / Python", "Data Structures & Algorithms", "JavaScript / TypeScript", "React / Node.js", "SQL & NoSQL", "Git & Docker", "System Design"],
      stages: [
        {
          id: "stage-swe-1",
          stageNumber: 1,
          title: "Programming Foundations & Algorithmic Logic",
          period: "Month 1–2 • 8 Weeks",
          effort: "~10–12 hrs/week (80–100 Total Hours)",
          summary: "Master memory fundamentals, pointer arithmetic, recursion, and object-oriented architecture in C++ or Java.",
          resources: [
            { name: "NPTEL: Programming in C++ (IIT Kharagpur)", url: "https://nptel.ac.in" },
            { name: "FreeCodeCamp: C++ / Java Deep Dive", url: "https://freecodecamp.org" },
            { name: "GeeksforGeeks: Language Syntax & Pointers", url: "https://geeksforgeeks.org" }
          ],
          tasks: [
            { id: "swe-t1", title: "Control Flow, Functions & Memory Model in C++/Java", desc: "Understand stack vs heap memory allocations, pointers/references, and pass-by-value vs reference.", hours: "15h" },
            { id: "swe-t2", title: "Object-Oriented Programming (OOP) Deep Dive", desc: "Implement encapsulation, polymorphism, inheritance, abstraction, and interfaces with UML diagrams.", hours: "20h" },
            { id: "swe-t3", title: "Time & Space Complexity Analysis (Big-O)", desc: "Analyze worst, average, and best cases for iterative and recursive functions.", hours: "12h" },
            { id: "swe-t4", title: "Checkpoint Project: CLI Banking / Student Record System", desc: "Write a modular CLI application with file I/O persistence, error handling, and unit test cases.", hours: "20h" }
          ]
        },
        {
          id: "stage-swe-2",
          stageNumber: 2,
          title: "Data Structures & Competitive Problem Solving",
          period: "Month 3–4 • 8 Weeks",
          effort: "~12–15 hrs/week (100–120 Total Hours)",
          summary: "Solve 100+ standard problems on Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Heaps, and Dynamic Programming.",
          resources: [
            { name: "NeetCode 150 / Striver's SDE Sheet", url: "https://takeuforward.org" },
            { name: "MIT 6.006: Introduction to Algorithms", url: "https://ocw.mit.edu" },
            { name: "LeetCode Practice Arena", url: "https://leetcode.com" }
          ],
          tasks: [
            { id: "swe-t5", title: "Linear Structures: Arrays, Two-Pointers & Sliding Window", desc: "Solve 25+ problems on sub-arrays, prefixes, Dutch National Flag, and 3-sum.", hours: "20h" },
            { id: "swe-t6", title: "Linked Lists, Stacks & Monotonic Queues", desc: "Implement reverse linked lists, LRU Cache, and Next Greater Element problems.", hours: "22h" },
            { id: "swe-t7", title: "Trees, Binary Search Trees & Tries", desc: "Tree traversals (BFS/DFS), diameter, lowest common ancestor, and prefix tries.", hours: "28h" },
            { id: "swe-t8", title: "Graphs & Dynamic Programming Foundations", desc: "Dijkstra, Topological sort, BFS/DFS cycles, 0/1 Knapsack, and Longest Common Subsequence.", hours: "35h" }
          ]
        },
        {
          id: "stage-swe-3",
          stageNumber: 3,
          title: "Modern Full-Stack Web Development & APIs",
          period: "Month 5–6 • 8 Weeks",
          effort: "~12–14 hrs/week (95–110 Total Hours)",
          summary: "Build responsive user interfaces in React and robust RESTful microservice APIs in Node.js / Express with PostgreSQL.",
          resources: [
            { name: "The Odin Project / Full Stack Open (University of Helsinki)", url: "https://fullstackopen.com" },
            { name: "MDN Web Docs: Modern JavaScript & DOM", url: "https://developer.mozilla.org" },
            { name: "PostgreSQL Official Interactive Tutorial", url: "https://www.postgresql.org" }
          ],
          tasks: [
            { id: "swe-t9", title: "Semantic HTML5, Responsive CSS3 & Modern ES6+", desc: "Flexbox, CSS Grid, async/await, closures, fetch API, and component styling.", hours: "20h" },
            { id: "swe-t10", title: "Single Page Applications with React & State Management", desc: "React hooks (useState, useEffect, useMemo), Context API, component modularity.", hours: "25h" },
            { id: "swe-t11", title: "Backend API Engineering with Node.js/Express or FastAPI", desc: "RESTful architecture, JWT authentication, rate limiting, and middleware validation.", hours: "25h" },
            { id: "swe-t12", title: "Relational Database Schema Design & SQL Optimization", desc: "Normalization (3NF), complex joins, foreign keys, indexing, and connection pools.", hours: "25h" }
          ]
        },
        {
          id: "stage-swe-4",
          stageNumber: 4,
          title: "DevOps, Cloud Deployment & Capstone Project",
          period: "Month 7–8 • 8 Weeks",
          effort: "~10–14 hrs/week (80–110 Total Hours)",
          summary: "Containerize applications with Docker, implement GitHub Actions CI/CD, and deploy a full-featured product to the cloud.",
          resources: [
            { name: "Docker & Kubernetes Documentation", url: "https://docs.docker.com" },
            { name: "GitHub Actions Automation Guides", url: "https://docs.github.com/en/actions" },
            { name: "AWS Free Tier / Render / Vercel Cloud Deployments", url: "https://aws.amazon.com/free" }
          ],
          tasks: [
            { id: "swe-t13", title: "Containerization with Docker & Multi-Stage Builds", desc: "Write Dockerfiles for frontend and backend, configure docker-compose for local services.", hours: "18h" },
            { id: "swe-t14", title: "CI/CD Pipelines with GitHub Actions", desc: "Automate linting, unit tests, Docker image building, and automated deployment.", hours: "16h" },
            { id: "swe-t15", title: "Capstone Project: Collaborative Real-Time Task / Code Editor", desc: "WebSockets for real-time collaboration, Redis caching, PostgreSQL, deployed on Render/Vercel.", hours: "40h" },
            { id: "swe-t16", title: "Open-Source Contributions & GitHub Portfolio Polishing", desc: "Star, fork, and submit 2+ documented pull requests to community open-source repositories.", hours: "15h" }
          ]
        },
        {
          id: "stage-swe-5",
          stageNumber: 5,
          title: "Core CS Revisions, System Design & Placement Drives",
          period: "Month 9–10 • 8 Weeks",
          effort: "~14–18 hrs/week (110–140 Total Hours)",
          summary: "Excel in campus recruitment (TCS Digital, Infosys, Amazon, startups) with Low-Level and High-Level Design mastery.",
          resources: [
            { name: "Alex Xu: System Design Interview Primer", url: "https://bytebytego.com" },
            { name: "Gate Smashers: Operating Systems & DBMS YouTube", url: "https://youtube.com" },
            { name: "Pramp / Interviewing.io Mock Technical Interviews", url: "https://pramp.com" }
          ],
          tasks: [
            { id: "swe-t17", title: "Operating Systems, Computer Networks & DBMS Revision", desc: "Processes vs threads, deadlock conditions, TCP/IP vs UDP, ACID transactions, and indexing.", hours: "30h" },
            { id: "swe-t18", title: "Low-Level Design (LLD) & Design Patterns", desc: "Factory, Singleton, Observer, Strategy patterns; Parking Lot / Elevator system design.", hours: "25h" },
            { id: "swe-t19", title: "High-Level Design (HLD) Fundamentals", desc: "Load balancers, CDN, horizontal scaling, caching strategies, and database sharding.", hours: "25h" },
            { id: "swe-t20", title: "Mock Technical & HR Placement Rounds", desc: "Practice behavioral STAR method stories, resume project walk-throughs, and timed coding tests.", hours: "25h" }
          ]
        }
      ]
    },

    aiml: {
      id: "aiml",
      title: "AI / Machine Learning & Data Science Engineer",
      branchAffinity: ["aiml", "cse", "it", "ece"],
      salary: "₹8,00,000 - ₹28,00,000 / year",
      description: "Develops machine learning algorithms, deep neural networks, computer vision, NLP models, and data-driven intelligence systems.",
      coreSkills: ["Python", "Linear Algebra & Probability", "Pandas & NumPy", "Scikit-Learn", "PyTorch / TensorFlow", "Vector Databases", "MLOps"],
      stages: [
        {
          id: "stage-aiml-1",
          stageNumber: 1,
          title: "Mathematical Foundations & Scientific Python",
          period: "Month 1–2 • 8 Weeks",
          effort: "~10–12 hrs/week",
          summary: "Master matrix algebra, multivariate calculus, probability distributions, NumPy, and Pandas data wrangling.",
          resources: [
            { name: "3Blue1Brown: Essence of Linear Algebra", url: "https://youtube.com" },
            { name: "Khan Academy: Multivariable Calculus & Probability", url: "https://khanacademy.org" },
            { name: "Kaggle: Python & Pandas Micro-Courses", url: "https://kaggle.com/learn" }
          ],
          tasks: [
            { id: "aiml-t1", title: "Vectors, Matrices, Eigenvalues & SVD Decomposition", desc: "Matrix operations, dot products, vector spaces, and mathematical intuition.", hours: "20h" },
            { id: "aiml-t2", title: "Multivariate Calculus, Gradients & Chain Rule", desc: "Partial derivatives, gradient descent intuition, Hessian matrices, and convex functions.", hours: "18h" },
            { id: "aiml-t3", title: "Data Wrangling with Pandas, NumPy & Matplotlib", desc: "Handle missing data, group-bys, vectorization, Seaborn plots, and EDA on Indian Census / Crop datasets.", hours: "25h" },
            { id: "aiml-t4", title: "Checkpoint: End-to-End Exploratory Data Analysis (EDA) Report", desc: "Publish an annotated Jupyter Notebook analyzing real-world health or financial data.", hours: "15h" }
          ]
        },
        {
          id: "stage-aiml-2",
          stageNumber: 2,
          title: "Classical Machine Learning & Statistical Modeling",
          period: "Month 3–4 • 8 Weeks",
          effort: "~12–15 hrs/week",
          summary: "Implement regression, decision trees, ensemble learning, clustering, and cross-validation using Scikit-Learn.",
          resources: [
            { name: "Andrew Ng: Machine Learning Specialization (Coursera)", url: "https://coursera.org" },
            { name: "Scikit-Learn Official User Guide", url: "https://scikit-learn.org" },
            { name: "StatQuest with Josh Starmer", url: "https://youtube.com" }
          ],
          tasks: [
            { id: "aiml-t5", title: "Supervised Learning: Linear/Logistic Regression & SVM", desc: "Loss functions, regularization (L1/L2), precision, recall, ROC-AUC curves.", hours: "22h" },
            { id: "aiml-t6", title: "Tree Ensembles: Random Forests & XGBoost / LightGBM", desc: "Information gain, Gini impurity, boosting vs bagging, feature importance interpretation.", hours: "25h" },
            { id: "aiml-t7", title: "Unsupervised Learning: K-Means, DBSCAN & PCA", desc: "Dimensionality reduction, cluster validation metrics, anomaly detection algorithms.", hours: "20h" },
            { id: "aiml-t8", title: "Project Milestone: Predictive Housing / Credit Default System", desc: "Build feature pipeline, train XGBoost model with hyperparameter tuning, achieve >85% F1 score.", hours: "28h" }
          ]
        },
        {
          id: "stage-aiml-3",
          stageNumber: 3,
          title: "Deep Learning, PyTorch & Computer Vision",
          period: "Month 5–6 • 8 Weeks",
          effort: "~14–16 hrs/week",
          summary: "Construct multi-layer perceptrons, convolutional neural networks (CNNs), and transfer learning models with PyTorch.",
          resources: [
            { name: "Fast.ai: Practical Deep Learning for Coders", url: "https://fast.ai" },
            { name: "Stanford CS231n: Deep Learning for Computer Vision", url: "https://cs231n.stanford.edu" },
            { name: "PyTorch Official Tutorials", url: "https://pytorch.org/tutorials" }
          ],
          tasks: [
            { id: "aiml-t9", title: "Neural Network Architecture & Backpropagation from Scratch", desc: "Activation functions (ReLU, GELU), batch normalization, optimizers (Adam, SGD).", hours: "24h" },
            { id: "aiml-t10", title: "CNNs, Residual Networks (ResNet) & Transfer Learning", desc: "Image classification, object detection (YOLOv8), data augmentation pipelines.", hours: "28h" },
            { id: "aiml-t11", title: "Model Checkpointing, GPU Acceleration (CUDA) & TensorBoard", desc: "Monitor loss curves, learning rate scheduling, prevent overfitting using dropout.", hours: "18h" },
            { id: "aiml-t12", title: "Project Milestone: Real-Time Indian Traffic Sign / Plant Disease Classifier", desc: "Train ResNet-50 on Indian dataset, export with ONNX, build interactive Streamlit web UI.", hours: "30h" }
          ]
        },
        {
          id: "stage-aiml-4",
          stageNumber: 4,
          title: "Natural Language Processing, Transformers & GenAI",
          period: "Month 7–8 • 8 Weeks",
          effort: "~12–15 hrs/week",
          summary: "Master tokenization, self-attention, BERT, Large Language Models (LLMs), RAG pipelines, and vector databases.",
          resources: [
            { name: "Hugging Face NLP Course", url: "https://huggingface.co/course" },
            { name: "Jay Alammar: The Illustrated Transformer", url: "https://jalammar.github.io" },
            { name: "LangChain / LlamaIndex Documentation", url: "https://python.langchain.com" }
          ],
          tasks: [
            { id: "aiml-t13", title: "Embeddings, Tokenization & Recurrent Networks", desc: "Word2Vec, Byte-Pair Encoding, sequence-to-sequence models with attention.", hours: "20h" },
            { id: "aiml-t14", title: "The Transformer Architecture & Multi-Head Self-Attention", desc: "Encoder-decoder models, BERT for classification, GPT architectures.", hours: "25h" },
            { id: "aiml-t15", title: "Retrieval-Augmented Generation (RAG) & Vector Stores", desc: "ChromaDB/Pinecone, chunking strategies, semantic similarity, prompt templates.", hours: "28h" },
            { id: "aiml-t16", title: "Capstone Project: AI Academic Question-Answering Assistant", desc: "RAG pipeline on Indian university engineering syllabi using LangChain, FastAPI & React.", hours: "35h" }
          ]
        },
        {
          id: "stage-aiml-5",
          stageNumber: 5,
          title: "MLOps, Model Serving & Placements Preparation",
          period: "Month 9–10 • 8 Weeks",
          effort: "~12–16 hrs/week",
          summary: "Deploy models via FastAPI and Docker, track models with MLflow, and prepare for ML engineer coding & math interviews.",
          resources: [
            { name: "Full Stack Deep Learning: MLOps Course", url: "https://fullstackdeeplearning.com" },
            { name: "Made With ML: Production MLOps", url: "https://madewithml.com" }
          ],
          tasks: [
            { id: "aiml-t17", title: "Model Serving with FastAPI & Dockerized Inference", desc: "Quantization, batch inference endpoints, latency profiling, request validation.", hours: "22h" },
            { id: "aiml-t18", title: "Experiment Tracking & Registry with MLflow / Weights & Biases", desc: "Track metrics, version datasets and model artifacts systematically.", hours: "18h" },
            { id: "aiml-t19", title: "AI/ML Interview Coding & System Design Drills", desc: "Design a YouTube recommendation system, fraud detector, and image search engine.", hours: "25h" },
            { id: "aiml-t20", title: "Kaggle Competitions & Portfolio Presentation", desc: "Participate in an active Kaggle competition and summarize methodologies on LinkedIn.", hours: "25h" }
          ]
        }
      ]
    },

    embedded: {
      id: "embedded",
      title: "Embedded Systems, IoT & VLSI Engineer",
      branchAffinity: ["ece", "eee", "mech"],
      salary: "₹5,50,000 - ₹22,00,000 / year",
      description: "Programs low-level microcontrollers, designs digital ASIC/FPGA circuits, develops firmware, and integrates IoT sensor networks.",
      coreSkills: ["Embedded C / C++", "Microcontrollers (ARM Cortex, ESP32, STM32)", "Verilog / VHDL", "UART / SPI / I2C", "FreeRTOS", "PCB Design"],
      stages: [
        {
          id: "stage-emb-1",
          stageNumber: 1,
          title: "Digital Electronics, Circuit Analysis & C Programming",
          period: "Month 1–2 • 8 Weeks",
          effort: "~10–12 hrs/week",
          summary: "Master Boolean algebra, combinational & sequential logic, pointers, bitwise manipulation, and oscilloscope instrumentation.",
          resources: [
            { name: "NPTEL: Digital Electronic Circuits (IIT Kharagpur)", url: "https://nptel.ac.in" },
            { name: "All About Circuits: Digital Logic Textbook", url: "https://allaboutcircuits.com" }
          ],
          tasks: [
            { id: "emb-t1", title: "Bitwise Operators & Low-Level C Pointer Arithmetic", desc: "Bit masks, shifts, volatile keyword, register memory mapping in C.", hours: "20h" },
            { id: "emb-t2", title: "Combinational & Sequential Circuits: Flip-Flops, MUX & Counters", desc: "State machine diagrams (Mealy/Moore), timing analysis, setup/hold times.", hours: "24h" },
            { id: "emb-t3", title: "Microprocessor Architecture: 8051 & ARM Cortex-M Overview", desc: "Registers, ALUs, memory segmentation, interrupt vectors, and instruction cycles.", hours: "20h" },
            { id: "emb-t4", title: "Checkpoint Lab: Bare-Metal Register Blinky & Timer Interrupts", desc: "Configure timer peripherals and GPIO without vendor HAL libraries on Arduino/STM32.", hours: "18h" }
          ]
        },
        {
          id: "stage-emb-2",
          stageNumber: 2,
          title: "Microcontroller Peripherals & Serial Communication",
          period: "Month 3–4 • 8 Weeks",
          effort: "~12–14 hrs/week",
          summary: "Interface ADC, DAC, PWM, Timers, and serial protocols (UART, SPI, I2C) on STM32 / ESP32 platforms.",
          resources: [
            { name: "FastBit Embedded Brain Academy: ARM Cortex Tutorials", url: "https://udemy.com" },
            { name: "STM32 Reference Manual & HAL User Guide", url: "https://st.com" }
          ],
          tasks: [
            { id: "emb-t5", title: "Serial Communication Protocols: UART, SPI & I2C Drivers", desc: "Bit-banging vs hardware peripherals, baud rate generation, master-slave clocking.", hours: "25h" },
            { id: "emb-t6", title: "Analog Interfacing: ADC Sampling, DMA & PWM Motor Speed", desc: "Direct Memory Access (DMA) transfers, Nyquist sampling, H-Bridge motor controls.", hours: "25h" },
            { id: "emb-t7", title: "Hardware Debugging: Logic Analyzers & JTAG/SWD", desc: "Decode I2C packets using Saleae logic analyzer, set hardware breakpoints in GDB.", hours: "18h" },
            { id: "emb-t8", title: "Project Milestone: Multi-Sensor Environmental Telemetry Station", desc: "Sample temperature/pressure via I2C, log to SPI SD card, transmit telemetry via UART.", hours: "28h" }
          ]
        },
        {
          id: "stage-emb-3",
          stageNumber: 3,
          title: "Real-Time Operating Systems (FreeRTOS) & Wireless IoT",
          period: "Month 5–6 • 8 Weeks",
          effort: "~12–15 hrs/week",
          summary: "Implement deterministic multi-tasking, semaphores, queues, and WiFi/Bluetooth MQTT protocols on ESP32.",
          resources: [
            { name: "FreeRTOS Official Mastering Book", url: "https://freertos.org" },
            { name: "Espressif ESP-IDF Programming Guide", url: "https://docs.espressif.com" }
          ],
          tasks: [
            { id: "emb-t9", title: "RTOS Task Scheduling, Priorities & Context Switching", desc: "Preemptive priority-based scheduling, task states, tick timer interrupts.", hours: "22h" },
            { id: "emb-t10", title: "Inter-Task Communication: Mutexes, Semaphores & Queues", desc: "Prevent race conditions, priority inversion with priority inheritance, event groups.", hours: "25h" },
            { id: "emb-t11", title: "IoT Protocols: MQTT, CoAP & HTTP REST with TLS", desc: "Publish-subscribe architecture over MQTT broker (HiveMQ/Mosquitto) with TLS encryption.", hours: "22h" },
            { id: "emb-t12", title: "Project Milestone: Industrial Smart Energy Monitor with FreeRTOS", desc: "Sample AC voltage/current CT sensors, compute RMS power in task 1, stream to cloud dashboard in task 2.", hours: "32h" }
          ]
        },
        {
          id: "stage-emb-4",
          stageNumber: 4,
          title: "Digital VLSI Design, Verilog & FPGA Synthesis",
          period: "Month 7–8 • 8 Weeks",
          effort: "~12–15 hrs/week",
          summary: "Write synthesizable Verilog, simulate testbenches in ModelSim / Vivado, and program Xilinx/Intel FPGAs.",
          resources: [
            { name: "NPTEL: VLSI Design Verification (IIT Madras)", url: "https://nptel.ac.in" },
            { name: "HDLBits Interactive Verilog Practice", url: "https://hdlbits.01xz.net" },
            { name: "Xilinx Vivado Design Suite Guide", url: "https://xilinx.com" }
          ],
          tasks: [
            { id: "emb-t13", title: "Verilog Hardware Description Language (HDL) Syntax", desc: "Blocking vs non-blocking assignments, always blocks, wire vs reg, behavioral modeling.", hours: "25h" },
            { id: "emb-t14", title: "Finite State Machines (FSM) & Testbench Simulation", desc: "Write self-checking testbenches, assert assertions, analyze waveforms in ModelSim.", hours: "24h" },
            { id: "emb-t15", title: "Static Timing Analysis (STA) & FPGA Constraints", desc: "Clock domain crossing, setup/hold slack, synthesis reports, LUT utilization.", hours: "22h" },
            { id: "emb-t16", title: "Capstone Project: 16-Bit RISC Microprocessor Core in Verilog", desc: "Implement ALU, instruction decoder, program counter, and verify with assembly test program.", hours: "35h" }
          ]
        },
        {
          id: "stage-emb-5",
          stageNumber: 5,
          title: "Hardware Placements (Qualcomm, Intel, TI) & Core Revision",
          period: "Month 9–10 • 8 Weeks",
          effort: "~12–16 hrs/week",
          summary: "Prepare for core electronics campus recruitment and technical interviews in embedded firmware and semiconductor design.",
          resources: [
            { name: "GeeksforGeeks: Embedded C Interview Questions", url: "https://geeksforgeeks.org" },
            { name: "Comprehensive Digital Design by Morris Mano", url: "https://pearson.com" }
          ],
          tasks: [
            { id: "emb-t17", title: "Embedded C Interview Drills & Pointer Puzzles", desc: "Bitwise register operations, volatile/const qualifiers, circular buffer implementation.", hours: "25h" },
            { id: "emb-t18", title: "Digital Logic & Computer Architecture Revisions", desc: "Pipelining hazards, cache memory mapping, setup/hold timing violations.", hours: "25h" },
            { id: "emb-t19", title: "PCB Design Basics in KiCAD / Altium", desc: "Schematic capture, PCB routing, decoupling capacitors, ground planes, and design rules.", hours: "20h" },
            { id: "emb-t20", title: "Mock Technical Rounds & Hardware Portfolio Review", desc: "Demonstrate breadboard circuits, oscilloscope traces, and GitHub Verilog repositories.", hours: "20h" }
          ]
        }
      ]
    },

    mech: {
      id: "mech",
      title: "Mechanical CAD / CAE, EV & Robotics Engineer",
      branchAffinity: ["mech", "eee"],
      salary: "₹4,50,000 - ₹18,00,000 / year",
      description: "Designs mechanical mechanisms, performs Finite Element Analysis (FEA), designs EV battery enclosures, and programs robotic actuators.",
      coreSkills: ["SolidWorks / CATIA", "Ansys FEA & CFD", "Geometric Dimensioning & Tolerancing (GD&T)", "MATLAB / Python", "Manufacturing Processes", "Robotics Kinematics"],
      stages: [
        {
          id: "stage-mech-1",
          stageNumber: 1,
          title: "Engineering Mechanics, Strength of Materials & 3D CAD",
          period: "Month 1–2 • 8 Weeks",
          effort: "~10–12 hrs/week",
          summary: "Statics & dynamics, stress-strain tensors, beam bending, and parametric 3D modeling in SolidWorks.",
          resources: [
            { name: "NPTEL: Strength of Materials (IIT Roorkee)", url: "https://nptel.ac.in" },
            { name: "SolidWorks Official Certification Prep (CSWA)", url: "https://solidworks.com" }
          ],
          tasks: [
            { id: "mech-t1", title: "Bending Moment & Shear Force Diagrams (BMD/SFD)", desc: "Calculate stresses on cantilevers and simply supported beams under point and distributed loads.", hours: "22h" },
            { id: "mech-t2", title: "Parametric 3D Solid Modeling & Assemblies", desc: "Sketches, extrusions, sweeps, lofts, mates, and interference detection in CAD.", hours: "25h" },
            { id: "mech-t3", title: "Drafting, Production Drawings & GD&T Standards", desc: "Datum references, runout, concentricity, tolerances according to ASME Y14.5.", hours: "20h" },
            { id: "mech-t4", title: "Checkpoint Project: Gearbox / IC Engine Mechanism Assembly", desc: "Model a multi-stage spur gearbox assembly with bill of materials (BOM) and exploded views.", hours: "25h" }
          ]
        },
        {
          id: "stage-mech-2",
          stageNumber: 2,
          title: "Finite Element Analysis (FEA) & Structural Simulation",
          period: "Month 3–4 • 8 Weeks",
          effort: "~12–14 hrs/week",
          summary: "Perform linear static, modal, and fatigue simulations in Ansys Workbench.",
          resources: [
            { name: "Cornell University: A Hands-on Introduction to Engineering Simulations", url: "https://edx.org" },
            { name: "Ansys Innovation Courses (Free)", url: "https://innovationspace.ansys.com" }
          ],
          tasks: [
            { id: "mech-t5", title: "Meshing Techniques, Convergence & Boundary Conditions", desc: "Tetrahedral vs hexahedral meshes, aspect ratio, mesh independence studies.", hours: "24h" },
            { id: "mech-t6", title: "Von-Mises Stress Analysis & Factor of Safety (FOS)", desc: "Identify stress concentrations and structural failure criteria for ductile materials.", hours: "25h" },
            { id: "mech-t7", title: "Thermal & Heat Transfer Simulations", desc: "Conduction, convection, and radiation in heat sinks and electronics enclosures.", hours: "20h" },
            { id: "mech-t8", title: "Project Milestone: EV Battery Pack Enclosure Structural & Thermal FEA", desc: "Simulate crash impact and thermal dissipation for a 48V electric vehicle battery module.", hours: "30h" }
          ]
        },
        {
          id: "stage-mech-3",
          stageNumber: 3,
          title: "Robotics Kinematics, Dynamics & Automation",
          period: "Month 5–6 • 8 Weeks",
          effort: "~12–15 hrs/week",
          summary: "Learn forward/inverse kinematics, Denavit-Hartenberg parameters, ROS (Robot Operating System), and PLC logic.",
          resources: [
            { name: "Modern Robotics Course by Northwestern University", url: "https://modernrobotics.org" },
            { name: "ROS 2 Official Tutorials", url: "https://docs.ros.org" }
          ],
          tasks: [
            { id: "mech-t9", title: "Forward & Inverse Kinematics with DH Parameters", desc: "Matrix transformations, joint coordinates, and workspace reachable limits.", hours: "25h" },
            { id: "mech-t10", title: "Robot Operating System (ROS 2) & Gazebo Simulation", desc: "Nodes, topics, URDF robot modeling, sensor simulation in Gazebo.", hours: "28h" },
            { id: "mech-t11", title: "Actuators, Stepper/Servo Motors & PID Control", desc: "Torque-speed curves, gear ratios, closed-loop PID positioning in Python/MATLAB.", hours: "22h" },
            { id: "mech-t12", title: "Project Milestone: 4-DOF Robotic Arm with Computer Vision Pick & Place", desc: "Simulate in Gazebo with OpenCV camera node to detect colored blocks and calculate grip trajectory.", hours: "35h" }
          ]
        },
        {
          id: "stage-mech-4",
          stageNumber: 4,
          title: "Manufacturing, 3D Printing & Capstone Build",
          period: "Month 7–8 • 8 Weeks",
          effort: "~10–14 hrs/week",
          summary: "Design for Manufacturing (DFM), CNC programming, rapid additive prototyping, and fabrication.",
          resources: [
            { name: "MIT OpenCourseWare: Manufacturing Processes", url: "https://ocw.mit.edu" }
          ],
          tasks: [
            { id: "mech-t13", title: "Design for Additive & Subtractive Manufacturing (DFM/DFA)", desc: "Overhangs, draft angles, injection molding wall thickness rules.", hours: "20h" },
            { id: "mech-t14", title: "G-Code Generation & CNC Mill Toolpaths", desc: "Generate CAM toolpaths in Fusion 360, configure feed rates and cut depths.", hours: "20h" },
            { id: "mech-t15", title: "Physical Prototype 3D Printing & Mechanism Assembly", desc: "Print functional parts on FDM printer, install bearings and fasteners.", hours: "25h" },
            { id: "mech-t16", title: "Capstone Project: Autonomous Ground Inspection Rover", desc: "Full mechanical chassis, rocker-bogie suspension, motor drive, and validation testing.", hours: "35h" }
          ]
        },
        {
          id: "stage-mech-5",
          stageNumber: 5,
          title: "GATE Mechanical / Core Campus Placement Preparation",
          period: "Month 9–10 • 8 Weeks",
          effort: "~14–18 hrs/week",
          summary: "Prepare for Tata Motors, L&T, Mahindra, Maruti Suzuki, ISRO/DRDO and GATE examination.",
          resources: [
            { name: "NPTEL GATE Portal & Previous Year Solved Papers", url: "https://gate.iitk.ac.in" },
            { name: "Made Easy / Ace Academy Handbook", url: "https://madeeasy.in" }
          ],
          tasks: [
            { id: "mech-t17", title: "Thermodynamics & Fluid Mechanics Rapid Revision", desc: "Rankine cycle, Otto/Diesel cycles, Bernoulli's equation, boundary layer theory.", hours: "30h" },
            { id: "mech-t18", title: "Theory of Machines & Vibrations Practice", desc: "Governors, balancing of rotating masses, natural frequency of single-DOF systems.", hours: "25h" },
            { id: "mech-t19", title: "Core Engineering Aptitude & Technical Interview Qs", desc: "Material science phase diagrams (Fe-C), welding/casting defects, heat treatment.", hours: "25h" },
            { id: "mech-t20", title: "Portfolio Presentation: CAD Renders & Simulation Reports", desc: "Compile high-resolution CAD renderings, FEA stress plots, and physical build videos into a PDF.", hours: "20h" }
          ]
        }
      ]
    },

    civil: {
      id: "civil",
      title: "Structural Engineering, BIM & Infrastructure Project Specialist",
      branchAffinity: ["civil"],
      salary: "₹4,20,000 - ₹16,00,000 / year",
      description: "Plans reinforced concrete and steel structures, creates 3D Building Information Models (BIM), and supervises civil construction execution.",
      coreSkills: ["AutoCAD Civil 3D", "Revit BIM", "STAAD.Pro / ETABS", "IS 456 / IS 800 Codes", "Quantity Surveying & Estimation", "Project Management (Primavera)"],
      stages: [
        {
          id: "stage-civ-1",
          stageNumber: 1,
          title: "Structural Mechanics, Surveying & 2D Drafting",
          period: "Month 1–2 • 8 Weeks",
          effort: "~10–12 hrs/week",
          summary: "Indeterminate structures, slope-deflection methods, leveling, and architectural drafting in AutoCAD.",
          resources: [
            { name: "NPTEL: Structural Analysis (IIT Kharagpur)", url: "https://nptel.ac.in" },
            { name: "Autodesk AutoCAD Official Essentials", url: "https://autodesk.com" }
          ],
          tasks: [
            { id: "civ-t1", title: "Analysis of Indeterminate Trusses & Frames", desc: "Moment distribution method, Castigliano theorem, sway and non-sway frames.", hours: "24h" },
            { id: "civ-t2", title: "Architectural & Structural Drafting in AutoCAD", desc: "Floor plans, elevations, section views, layer management, dimensioning standards.", hours: "25h" },
            { id: "civ-t3", title: "Total Station Surveying & Contour Mapping", desc: "Traverse computations, reduced levels (RL), horizontal/vertical curve design.", hours: "18h" },
            { id: "civ-t4", title: "Checkpoint Project: Residential G+2 Architectural & Structural Plan", desc: "Produce complete submission drawings complying with local municipal bye-laws.", hours: "25h" }
          ]
        },
        {
          id: "stage-civ-2",
          stageNumber: 2,
          title: "Reinforced Concrete Design & Indian Standards (IS 456)",
          period: "Month 3–4 • 8 Weeks",
          effort: "~12–14 hrs/week",
          summary: "Limit state design of beams, columns, one-way/two-way slabs, and isolated footings according to IS 456:2000.",
          resources: [
            { name: "NPTEL: Design of Reinforced Concrete Structures (IIT Madras)", url: "https://nptel.ac.in" },
            { name: "Bureau of Indian Standards: IS 456:2000 Codebook", url: "https://bis.gov.in" }
          ],
          tasks: [
            { id: "civ-t5", title: "Limit State of Collapse (Flexure, Shear & Torsion)", desc: "Calculate neutral axis depth, moment of resistance, stirrup design for shear.", hours: "25h" },
            { id: "civ-t6", title: "Design of Slabs, Columns & Interaction Charts", desc: "Short/slender columns with biaxial bending, SP-16 design aid charts.", hours: "25h" },
            { id: "civ-t7", title: "Shallow Foundation & Retaining Wall Sizing", desc: "Safe bearing capacity (SBC), soil pressure distribution, cantilever retaining walls.", hours: "22h" },
            { id: "civ-t8", title: "Project Milestone: Manual Calculation Sheet for G+3 Apartment Frame", desc: "Calculate dead/live loads, design critical column-beam junction, draw bar bending schedule (BBS).", hours: "30h" }
          ]
        },
        {
          id: "stage-civ-3",
          stageNumber: 3,
          title: "Computer-Aided Structural Analysis (STAAD.Pro / ETABS)",
          period: "Month 5–6 • 8 Weeks",
          effort: "~12–15 hrs/week",
          summary: "Model 3D multi-story buildings, apply dead, live, wind (IS 875), and seismic (IS 1893) earthquake lateral loads.",
          resources: [
            { name: "Bentley STAAD.Pro Official Training Guides", url: "https://bentley.com" },
            { name: "CSI ETABS Multi-Story Modeling Tutorials", url: "https://csiamerica.com" }
          ],
          tasks: [
            { id: "civ-t9", title: "3D Frame Geometry & Support Conditions Modeling", desc: "Define column/beam property cross-sections, rigid diaphragm slabs.", hours: "22h" },
            { id: "civ-t10", title: "Wind Load (IS 875 Part 3) & Seismic Load (IS 1893:2016)", desc: "Zone factors, response reduction factor (R), importance factor, response spectrum analysis.", hours: "28h" },
            { id: "civ-t11", title: "Design Verification, Member Optimization & Deflection Checks", desc: "Check maximum story drift, P-Delta effects, steel rebar percentage outputs.", hours: "22h" },
            { id: "civ-t12", title: "Project Milestone: Earthquake-Resistant Commercial Complex in ETABS", desc: "Perform equivalent static & dynamic seismic analysis, export detailing drawings.", hours: "32h" }
          ]
        },
        {
          id: "stage-civ-4",
          stageNumber: 4,
          title: "Building Information Modeling (BIM) with Revit & Navisworks",
          period: "Month 7–8 • 8 Weeks",
          effort: "~12–14 hrs/week",
          summary: "Create intelligent 3D BIM models, clash detection between architectural/MEP/structural disciplines, and 4D construction scheduling.",
          resources: [
            { name: "Autodesk Revit Certification Course", url: "https://autodesk.com" }
          ],
          tasks: [
            { id: "civ-t13", title: "Parametric BIM Modeling in Autodesk Revit", desc: "Levels, grids, walls, structural framing, reinforcement placement.", hours: "24h" },
            { id: "civ-t14", title: "Quantity Takeoff & Automated Bill of Quantities (BOQ)", desc: "Material schedules, concrete volume, steel weight calculations.", hours: "20h" },
            { id: "civ-t15", title: "Clash Detection & Model Coordination in Navisworks", desc: "Run hard and soft clash reports between structural beams and HVAC/plumbing ducts.", hours: "20h" },
            { id: "civ-t16", title: "Capstone Project: Integrated BIM Model for Multi-Level Hospital", desc: "Complete structural model with schedule takeoff, rebar detailing, and walk-through render.", hours: "35h" }
          ]
        },
        {
          id: "stage-civ-5",
          stageNumber: 5,
          title: "GATE Civil & Construction PSU / Corporate Placements",
          period: "Month 9–10 • 8 Weeks",
          effort: "~14–18 hrs/week",
          summary: "Excel in L&T ECC, Shapoorji Pallonji, Tata Projects, NHAI, CPWD, and GATE civil exam.",
          resources: [
            { name: "NPTEL GATE Civil Engineering Preparation", url: "https://gate.iitk.ac.in" }
          ],
          tasks: [
            { id: "civ-t17", title: "Geotechnical & Transportation Engineering Revision", desc: "Effective stress, consolidation, CBR test, flexible vs rigid pavement design (IRC).", hours: "30h" },
            { id: "civ-t18", title: "Environmental & Hydrology Engineering Key Formulations", desc: "BOD/COD kinetics, water treatment rapid sand filters, unit hydrographs.", hours: "25h" },
            { id: "civ-t19", title: "Contract Management, Tendering & Primavera Project Planning", desc: "CPM/PERT critical paths, tender documents, FIDIC contract conditions.", hours: "22h" },
            { id: "civ-t20", title: "Civil Technical Portfolio & Mock Site Engineer Interviews", desc: "Review structural drawing reading, slump test procedures, concrete cube strength checks.", hours: "20h" }
          ]
        }
      ]
    }
  },

  /**
   * Helper function to find or generate a tailored roadmap
   */
  generateRoadmap({ branch, year, role, skills = [], studyHours = 12, targetExam = "placements" }) {
    // Select base role or fallback to SWE
    let selectedRoleKey = role;
    if (!this.roles[selectedRoleKey]) {
      if (branch === "ece" || branch === "eee") selectedRoleKey = "embedded";
      else if (branch === "mech") selectedRoleKey = "mech";
      else if (branch === "civil") selectedRoleKey = "civil";
      else if (branch === "aiml") selectedRoleKey = "aiml";
      else selectedRoleKey = "swe";
    }

    const baseTemplate = this.roles[selectedRoleKey] || this.roles.swe;
    const branchInfo = this.branches.find(b => b.id === branch) || this.branches[0];
    const yearInfo = this.years.find(y => y.id === year) || this.years[1];

    // Compute pace multiplier based on weekly study hours
    const paceHours = parseInt(studyHours, 10) || 12;
    let paceLabel = "Standard Pace (10-14 hrs/week)";
    if (paceHours < 10) paceLabel = "Balanced Pace (5-9 hrs/week)";
    else if (paceHours > 16) paceLabel = "Intensive Sprint (16-24 hrs/week)";

    // Clone stages and customize with student's profile context
    const customStages = baseTemplate.stages.map((stage, idx) => {
      const isEarlyStage = idx < 2;
      return {
        ...stage,
        isExpanded: idx === 0, // expand first stage by default
        tasks: stage.tasks.map(t => {
          // Check if student already has a skill mentioned in the task title
          const alreadyHasSkill = skills.some(s => 
            t.title.toLowerCase().includes(s.toLowerCase()) || 
            t.desc.toLowerCase().includes(s.toLowerCase())
          );
          return {
            ...t,
            defaultStatus: alreadyHasSkill ? "completed" : "not_started"
          };
        })
      };
    });

    return {
      id: "roadmap-" + Date.now(),
      generatedAt: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
      branchId: branch,
      branchName: branchInfo.name,
      branchIcon: branchInfo.icon,
      yearId: year,
      yearLabel: yearInfo.label,
      roleId: baseTemplate.id,
      roleTitle: baseTemplate.title,
      targetExam,
      studyHours: paceHours,
      paceLabel,
      coreSkills: baseTemplate.coreSkills,
      salaryRange: baseTemplate.salary,
      stages: customStages
    };
  }
};

if (typeof window !== "undefined") {
  window.RoadmapTemplates = RoadmapTemplates;
}
