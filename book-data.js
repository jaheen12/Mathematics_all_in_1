// book-data.js

// Part 1: The National University Syllabus Structure
// I've added keywords to each chapter to power the suggestion logic.
const syllabusData = {
  "Fundamentals of Mathematics": {
    "Elements of Logic": ["logic", "set theory"],
    "Relations and Functions": ["function", "relation"],
    "Real Number System": ["real analysis", "number"],
    "Complex Number System": ["complex"],
    "Theory of Equations": ["algebra", "equation"]
  },
  "Calculus I & II": {
    "Limits & Continuity": ["limit", "calculus", "continuity"],
    "Differentiation": ["differentiation", "derivative", "calculus"],
    "Applications of Differentiation (AOD)": ["aod", "maxima", "minima"],
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
  // Add other subjects and chapters here as needed
};

// Part 2: Your Book Library with Keywords
// This maps your files to searchable terms.
const bookDatabase = [
  // Calculus Books
  { name: "3000 Solved Problems in Calculus", category: "1_Calculus", keywords: ["calculus", "integral", "derivative", "limit"] },
  { name: "AOD-edited.pdf", category: "1_Calculus", keywords: ["aod", "maxima", "minima", "calculus"] },
  { name: "CALCULUS OF VARIATIONS WITH APPLICATIONS.pdf", category: "1_Calculus", keywords: ["calculus of variations", "integral"] },
  { name: "Differentiation-edited.pdf", category: "1_Calculus", keywords: ["differentiation", "derivative", "calculus"] },
  { name: "Schaum's Outline of Calculus", category: "1_Calculus", keywords: ["calculus", "integral", "derivative", "limit", "schaum"] },
  { name: "Schaum's Advanced Calculus", category: "1_Calculus", keywords: ["calculus", "advanced", "aod"] },
  
  // Linear Algebra Books
  { name: "Linear-Algebra-Done-Right.pdf", category: "2_Linear_Algebra", keywords: ["linear algebra", "vector", "eigenvalue", "matrix"] },
  { name: "David Poole Linear Algebra", category: "2_Linear_Algebra", keywords: ["linear algebra", "vector", "matrix"] },
  { name: "Determinant-edited.pdf", category: "2_Linear_Algebra", keywords: ["determinant", "matrix", "linear algebra"] },
  { name: "Schaum's Outline of Linear Algebra", category: "2_Linear_Algebra", keywords: ["linear algebra", "vector", "matrix", "schaum"] },
  { name: "Schaum's 3000 Solved Problems in LA", category: "2_Linear_Algebra", keywords: ["linear algebra", "matrix", "schaum"] },

  // Real Analysis Books
  { name: "G. Bartle - Introduction to Real Analysis", category: "3_Real_Analysis", keywords: ["real analysis", "bartle", "limit", "sequence", "series"] },
  { name: "RUDIN - REAL ANALYSIS", category: "3_Real_Analysis", keywords: ["real analysis", "rudin", "advanced"] },
  { name: "S K Mapa - Real Analysis", category: "3_Real_Analysis", keywords: ["real analysis", "mapa", "sequence", "series"] },
  
  // Abstract Algebra Books
  { name: "Abstract Algebra Schaums Outline", category: "4_Abstract_Algebra", keywords: ["abstract algebra", "group theory", "ring", "field", "schaum"] },
  { name: "Group theory question.pdf", category: "4_Abstract_Algebra", keywords: ["group theory", "abstract algebra"] },

  // Complex Analysis Books
  { name: "Schaum's Outline of Complex Variables", category: "5_Complex_Analysis", keywords: ["complex", "integral", "function", "schaum"] },
  { name: "complex number-edited.pdf", category: "5_Complex_Analysis", keywords: ["complex", "number"] },

  // ... Add more of your books here with relevant keywords
];

// Part 3: Google Drive Folder Links
// *** YOUR JOB: Replace '#' with your actual Google Drive Folder links ***
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
