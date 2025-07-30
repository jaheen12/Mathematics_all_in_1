// book-data.js

// Part 1: The National University Syllabus Structure
const syllabusData = {
  "Fundamentals of Mathematics": {
    "Elements of Logic": ["logic", "set theory", "discrete"],
    "Relations and Functions": ["function", "relation", "discrete"],
    "Real Number System": ["real analysis", "number"],
    "Complex Number System": ["complex"],
    "Theory of Equations": ["algebra", "equation"]
  },
  "Calculus I & II": {
    "Limits & Continuity": ["limit", "calculus", "continuity"],
    "Differentiation": ["differentiation", "derivative", "calculus"],
    "Applications of Differentiation (AOD)": ["aod", "maxima", "minima", "calculus"],
    "Integration & Definite Integrals": ["integral", "calculus"],
    "Calculus of Variations": ["calculus of variations"]
  },
  "Linear Algebra": {
    "Matrices & Determinants": ["matrix", "determinant", "linear algebra"],
    "Systems of Linear Equations": ["linear algebra", "equation"],
    "Vector Spaces": ["vector", "linear algebra"],
    "Eigenvalues & Eigenvectors": ["eigenvalue", "linear algebra"]
  },
  "Real Analysis": {
    "Sequences & Series": ["sequence", "series", "real analysis"],
    "Limits & Continuity of Functions": ["limit", "continuity", "real analysis"],
    "Properties of Continuous Functions": ["function", "real analysis"]
  },
  "Abstract Algebra": {
    "Groups & Subgroups": ["group theory", "abstract algebra"],
    "Rings & Fields": ["ring", "field", "abstract algebra"]
  },
  "Complex Analysis": {
    "Complex Functions": ["complex", "function"],
    "Complex Integration": ["complex", "integral"]
  }
};

// Part 2: Your Book Library with Keywords (ACCURATE FILENAMES)
const bookDatabase = [
  // 1_Calculus
  { name: "3000_Solved_Problems_in_Calculus_Schaum's_Outline_Series_.pdf", category: "1_Calculus", keywords: ["calculus", "integral", "derivative", "limit", "schaum"] },
  { name: "AOD-edited.pdf", category: "1_Calculus", keywords: ["aod", "maxima", "minima", "calculus"] },
  { name: "CALCULUS OF VARIATIONS WITH APPLICATIONS.pdf", category: "1_Calculus", keywords: ["calculus of variations", "integral"] },
  { name: "Calculus of Variations ( PDFDrive ).pdf", category: "1_Calculus", keywords: ["calculus of variations"] },
  { name: "Differentiation-edited.pdf", category: "1_Calculus", keywords: ["differentiation", "derivative", "calculus"] },
  { name: "Frank_Ayres_Schaum's_Outline_of_Calculus_2009,_McGraw_Hill_Osborne.pdf", category: "1_Calculus", keywords: ["calculus", "schaum", "frank ayres"] },
  { name: "Frank_Ayres_Schaum_s_Outline_of_Calculus_McGraw_Hill_Osborne_Media.pdf", category: "1_Calculus", keywords: ["calculus", "schaum", "frank ayres"] },
  { name: "Introduction to the calculus of variations_ms327.pdf", category: "1_Calculus", keywords: ["calculus of variations"] },
  { name: "Limit-edited.pdf", category: "1_Calculus", keywords: ["limit", "calculus"] },
  { name: "Schaum's Outline of Understanding Calculus Concepts.pdf", category: "1_Calculus", keywords: ["calculus", "schaum", "concepts"] },
  { name: "Schaum's Outlines - Advanced Calculus Third Edition (1).pdf", category: "1_Calculus", keywords: ["advanced calculus", "schaum"] },
  { name: "Schaum's Outlines - Advanced Calculus Third Edition.pdf", category: "1_Calculus", keywords: ["advanced calculus", "schaum"] },
  { name: "Schaum's Outlines - Theory and Problems of Calculus.pdf", category: "1_Calculus", keywords: ["calculus", "schaum", "problems"] },
  { name: "Schaum's_Outlines_Calculus_5th_Edition_by_Frank_Ayres_&_Elliott.pdf", category: "1_Calculus", keywords: ["calculus", "schaum", "5th edition"] },
  { name: "Schaums outline Calculus.pdf", category: "1_Calculus", keywords: ["calculus", "schaum"] },
  { name: "Schaums outline calculation 5 th addition.pdf", category: "1_Calculus", keywords: ["calculus", "schaum", "5th edition"] },
  { name: "Schaums outline differential and integral cal.pdf", category: "1_Calculus", keywords: ["calculus", "integral", "derivative", "schaum"] },
  { name: "Schaums outline of calculus 5th ed schaums outline series.pdf", category: "1_Calculus", keywords: ["calculus", "schaum", "5th edition"] },
  { name: "mathematics_calculus_of_variations_with_applications_to_physics.pdf", category: "1_Calculus", keywords: ["calculus of variations", "physics"] },

  // 2_Linear_Algebra
  { name: "David_Poole_Linear_Algebra_A_Modern_Introduction_Brooks_Cole_2011.pdf", category: "2_Linear_Algebra", keywords: ["linear algebra", "poole", "vector", "matrix"] },
  { name: "Determinant-edited.pdf", category: "2_Linear_Algebra", keywords: ["determinant", "linear algebra", "matrix"] },
  { name: "Hadley-LinearAlgebra.pdf", category: "2_Linear_Algebra", keywords: ["linear algebra", "hadley"] },
  { name: "Linda Gilbert Linear algebra.pdf", category: "2_Linear_Algebra", keywords: ["linear algebra", "gilbert"] },
  { name: "Linear-Algebra-Done-Right.pdf", category: "2_Linear_Algebra", keywords: ["linear algebra", "axler", "vector", "eigenvalue"] },
  { name: "Schaum's Outlines - Linear Algebra Fourth Edition.pdf", category: "2_Linear_Algebra", keywords: ["linear algebra", "schaum", "4th edition"] },
  { name: "Schaum's_outline_of_theory_and_problems_of_linear_algebra_PDFDrive.pdf", category: "2_Linear_Algebra", keywords: ["linear algebra", "schaum", "problems"] },
  { name: "Schaum_s_Outlines-MatrixOperations.pdf", category: "2_Linear_Algebra", keywords: ["matrix", "linear algebra", "schaum"] },
  { name: "Schaums Outline of Linear Algebra.pdf", category: "2_Linear_Algebra", keywords: ["linear algebra", "schaum"] },
  { name: "Schaums outline 3000 Solve LA problems.pdf", category: "2_Linear_Algebra", keywords: ["linear algebra", "schaum", "problems"] },
  { name: "Schaums outline LA 4th edition.pdf", category: "2_Linear_Algebra", keywords: ["linear algebra", "schaum", "4th edition"] },
  { name: "Strang (1).pdf", category: "2_Linear_Algebra", keywords: ["linear algebra", "strang"] },
  { name: "Strang.pdf", category: "2_Linear_Algebra", keywords: ["linear algebra", "strang"] },
  { name: "friedburg linear algebra.pdf", category: "2_Linear_Algebra", keywords: ["linear algebra", "friedburg"] },

  // 3_Real_Analysis
  { name: "G. Bartle , R. Sherbert, “Introduction to Real Analysis.pdf", category: "3_Real_Analysis", keywords: ["real analysis", "bartle", "sherbert", "limit", "sequence", "series"] },
  { name: "Introduction to Real Analysis 4th by Robert G. Bartle.pdf", category: "3_Real_Analysis", keywords: ["real analysis", "bartle", "4th edition", "limit", "sequence"] },
  { name: "REAL ANALYSIS RUDIN.pdf", category: "3_Real_Analysis", keywords: ["real analysis", "rudin", "advanced"] },
  { name: "S_K_Mapa_Introduction_to_Real_Analysis_Sarat_Book_Distributors_2014.pdf", category: "3_Real_Analysis", keywords: ["real analysis", "mapa", "sequence", "series"] },
  { name: "Basic-real-analysis.pdf", category: "3_Real_Analysis", keywords: ["real analysis", "basic"] },
  
  // 4_Abstract_Algebra
  { name: "Abstract Algebra Schaums Outline 2nd edition (1).pdf", category: "4_Abstract_Algebra", keywords: ["abstract algebra", "schaum", "2nd edition"] },
  { name: "Abstract Algebra Schaums Outline 2nd edition.pdf", category: "4_Abstract_Algebra", keywords: ["abstract algebra", "schaum", "2nd edition"] },
  { name: "Group theory question .pdf", category: "4_Abstract_Algebra", keywords: ["group theory", "abstract algebra"] },
  { name: "Schaum's Outlines - Abstract Algebra.pdf", category: "4_Abstract_Algebra", keywords: ["abstract algebra", "schaum"] },
  { name: "Schaums outline abstract algebra.pdf", category: "4_Abstract_Algebra", keywords: ["abstract algebra", "schaum"] },
  { name: "Schaums outline group theory.pdf", category: "4_Abstract_Algebra", keywords: ["group theory", "schaum"] },

  // 5_Complex_Analysis
  { name: "Schaum's Outline of Complex Variables (2nd Ed).pdf", category: "5_Complex_Analysis", keywords: ["complex", "schaum", "2nd edition"] },
  { name: "Schaums outline complex variable.pdf", category: "5_Complex_Analysis", keywords: ["complex", "schaum"] },
  { name: "Schaums-outline-complex-variables.pdf", category: "5_Complex_Analysis", keywords: ["complex", "schaum"] },
  { name: "complex number-edited.pdf", category: "5_Complex_Analysis", keywords: ["complex", "number"] },

  // 6_Differential_Equations
  { name: "Schaum's Outlines - Differential Equations (1).pdf", category: "6_Differential_Equations", keywords: ["differential equation", "ode", "schaum"] },
  { name: "Schaum's Outlines - Differential Equations.pdf", category: "6_Differential_Equations", keywords: ["differential equation", "ode", "schaum"] },
  { name: "Schaum's Outlines - Partial Differential Equations (1).pdf", category: "6_Differential_Equations", keywords: ["differential equation", "pde", "schaum"] },
  { name: "Schaum's Outlines - Partial Differential Equations-1.pdf", category: "6_Differential_Equations", keywords: ["differential equation", "pde", "schaum"] },
  { name: "Schaum's Outlines - Partial Differential Equations.pdf", category: "6_Differential_Equations", keywords: ["differential equation", "pde", "schaum"] },

  // 7_Foundational_Math
  { name: "Schaum's Outline of Discrete Mathematics.pdf", category: "7_Foundational_Math", keywords: ["discrete", "logic", "schaum"] },
  { name: "Binomial theorem-edited.pdf", category: "7_Foundational_Math", keywords: ["binomial", "algebra"] },
  { name: "function-edited.pdf", category: "7_Foundational_Math", keywords: ["function", "relation"] },
  { name: "ITF-edited.pdf", category: "7_Foundational_Math", keywords: ["trigonometry", "function"] },

  // 8_Geometry
  { name: "Schaum's Outlines - Geometry.pdf", category: "8_Geometry", keywords: ["geometry", "schaum"] },
  { name: "Schaums_outline_of_theory_and_problems_of_vector_analysis_and_an.pdf", category: "8_Geometry", keywords: ["vector", "geometry", "analysis", "schaum"] },
  { name: "Vector Analysis(Schaums Outline).pdf", category: "8_Geometry", keywords: ["vector", "geometry", "schaum"] },
  { name: "circle-edited.pdf", category: "8_Geometry", keywords: ["geometry", "circle"] },
  { name: "conic-edited.pdf", category: "8_Geometry", keywords: ["geometry", "conic"] },

  // 9_Statistics_and_Probability
  { name: "Schaums_Outline_of_Probability,_Random_Variables,_and_Random_Processes.pdf", category: "9_Statistics_and_Probability", keywords: ["statistics", "probability", "schaum"] },

  // 10_Numerical_Analysis
  { name: "Schaum's Outlines - Numerical Analysis (2nd Ed).pdf", category: "10_Numerical_Analysis", keywords: ["numerical analysis", "schaum"] },
  { name: "schaums-outline-of-numerical-analysis-second-editi.pdf", category: "10_Numerical_Analysis", keywords: ["numerical analysis", "schaum"] },

  // Other_Resources (These won't be suggested but are in the database in case you want to expand later)
  { name: "5th sem question (Rajendra).pdf", category: "Other_Resources", keywords: ["exam"] },
  { name: "jam-2021-2005-kalika293pages.pdf", category: "Other_Resources", keywords: ["exam", "jam"] },
  { name: "tifr-maths-2020-2010-95pages.pdf", category: "Other_Resources", keywords: ["exam", "tifr"] }
];


// Part 3: Google Drive Folder Links
const driveLinks = {
  "1_Calculus": "https://drive.google.com/drive/folders/15RBbX6x97PLLSceJHQIIV2bwLLdBjxTR",
  "2_Linear_Algebra": "https://drive.google.com/drive/folders/15Vs0Iyl1eoKlDMx-GBsd0le0mzXbnAZn",
  "3_Real_Analysis": "https://drive.google.com/drive/folders/15Z87DZEudqa_FlNFiCwfOggnv5FADyFC",
  "4_Abstract_Algebra": "https://drive.google.com/drive/folders/15dYx-7kvWcHCg6y7YSpZnV5GbrLYm5Wt",
  "5_Complex_Analysis": "https://drive.google.com/drive/folders/15efyI9TNIYfbukhZkcuAryqLApQmPCCZ",
  "6_Differential_Equations": "https://drive.google.com/drive/folders/15pfJ8cfiSxBAukn21x7Bra1M1P_THvrH",
  "7_Foundational_Math": "https://drive.google.com/drive/folders/15tlgVAzbeY_WBilMswTDIk0MurdE9d6y",
  "8_Geometry": "https://drive.google.com/drive/folders/15v7PvUsmXnbeSqdTNrPHgjROkOJx4Ug3",
  "9_Statistics_and_Probability": "https://drive.google.com/drive/folders/15y1ScpllM55AoeaUuQkJe9ToId_nQJKS",
  "10_Numerical_Analysis": "https://drive.google.com/drive/folders/1F8KNsZ00qs5E6EmNIZm6KRKaUgc7aOAt",
  "Other_Resources": "https://drive.google.com/drive/folders/15yeLj05b2xKBR5UjGBXNxlqzEbkXzs8V"
};
