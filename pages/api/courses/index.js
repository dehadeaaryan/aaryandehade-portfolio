
const courseList = [
    // F21 - Fall 2021
    // ----------------
    // 1. PHYS 20474 - Physics I with Laboratory: Mechanics
    // 2. MATH 10524 - Calculus I
    // 3. COSC 10403 - Introduction to Programming
    // 4. ANTH 20623 - Introduction to Cultural Anthropology
    // 5. HIST 10103 - World History to 1500
    {
        sem: 'F21',
        code: 'PHYS 20474',
        name: 'Physics I with Laboratory: Mechanics',
        grade: 'B',
    },
    {
        sem: 'F21',
        code: 'MATH 10524',
        name: 'Calculus I',
        grade: 'A-',
    },
    {
        sem: 'F21',
        code: 'COSC 10403',
        name: 'Introduction to Programming',
        grade: 'A',
    },
    {
        sem: 'F21',
        code: 'ANTH 20623',
        name: 'Introduction to Cultural Anthropology',
        grade: 'A-',
    },
    {
        sem: 'F21',
        code: 'HIST 10103',
        name: 'World History to 1500',
        grade: 'A-',
    },
    // S22 - Spring 2022
    // -----------------
    // 1. MATH 20123 - Discrete Mathematics I
    // 2. COSC 20203 - Techniques in Programming
    // 3. PSYC 10524 - Principles of Behavior II
    // 4. MATH 20524 - Calculus II
    // 5. ENGL 10803 - Introductory Composition: Writing as Inquiry
    {
        sem: 'S22',
        code: 'MATH 20123',
        name: 'Discrete Mathematics I',
        grade: 'A',
    },
    {
        sem: 'S22',
        code: 'COSC 20203',
        name: 'Techniques in Programming',
        grade: 'A',
    },
    {
        sem: 'S22',
        code: 'PSYC 10524',
        name: 'Principles of Behavior II',
        grade: 'A',
    },
    {
        sem: 'S22',
        code: 'MATH 20524',
        name: 'Calculus II',
        grade: 'A',
    },
    {
        sem: 'S22',
        code: 'ENGL 10803',
        name: 'Introductory Composition: Writing as Inquiry',
        grade: 'A',
    },
    // F22 - Fall 2022
    // ---------------
    // 1. CITE 30103 - Unix/Linux System Administration
    // 2. COSC 20803 - Data Structures
    // 3. ENGL 10133 - Introduction to Literature
    // 4. MATH 10043 - Elementary Statistics
    // 5. MATH 30123 - Discrete Mathematics II
    // 6. POSC 20303 - International Politics
    {
        sem: 'F22',
        code: 'CITE 30103',
        name: 'Unix/Linux System Administration',
        grade: 'B+',
    },
    {
        sem: 'F22',
        code: 'COSC 20803',
        name: 'Data Structures',
        grade: 'A',
    },
    {
        sem: 'F22',
        code: 'ENGL 10133',
        name: 'Introduction to Literature',
        grade: 'A',
    },
    {
        sem: 'F22',
        code: 'MATH 10043',
        name: 'Elementary Statistics',
        grade: 'A',
    },
    {
        sem: 'F22',
        code: 'MATH 30123',
        name: 'Discrete Mathematics II',
        grade: 'A',
    },
    {
        sem: 'F22',
        code: 'POSC 20303',
        name: 'International Politics',
        grade: 'A-',
    },
    // S23 - Spring 2023
    // -----------------
    // 1. GEOL 10113 - Understanding the Earth
    // 2. ENGL 20803 - Intermediate Composition: Writing Argument
    // 3. COSC 30253 - Computer Organization
    // 4. COSC 30403 - Programming Language Concepts
    // 5. MATH 30224 - Linear Algebra
    {
        sem: 'S23',
        code: 'GEOL 10113',
        name: 'Understanding the Earth',
        grade: 'Ongoing',
    },
    {
        sem: 'S23',
        code: 'ENGL 20803',
        name: 'Intermediate Composition: Writing Argument',
        grade: 'Ongoing',
    },
    {
        sem: 'S23',
        code: 'COSC 30253',
        name: 'Computer Organization',
        grade: 'Ongoing',
    },
    {
        sem: 'S23',
        code: 'COSC 30403',
        name: 'Programming Language Concepts',
        grade: 'Ongoing',
    },
    {
        sem: 'S23',
        code: 'MATH 30224',
        name: 'Linear Algebra',
        grade: 'Ongoing',
    },
];

export default function handler(req, res) {
    res.status(200).json(courseList);
}