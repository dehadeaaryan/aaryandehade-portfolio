const hello_api = {
    index: "/api/hello/",
    function: "returns a greeting message",
}

const courses_api = {
    index: "/api/courses/",
    function: "returns a list of courses taken by Aaryan Dehade",
    example_1: {
        query: "/api/courses/",
        response: '[{"sem":"F21","code":"PHYS 20474","name":"Physics I with Laboratory: Mechanics","grade":"B"},{"sem":"F21","code":"MATH 10524","name":"Calculus I","grade":"A-"},{"sem":"F21","code":"COSC 10403","name":"Introduction to Programming","grade":"A"},{"sem":"F21","code":"ANTH 20623","name":"Introduction to Cultural Anthropology","grade":"A-"},{"sem":"F21","code":"HIST 10103","name":"World History to 1500","grade":"A-"},{"sem":"S22","code":"MATH 20123","name":"Discrete Mathematics I","grade":"A"},{"sem":"S22","code":"COSC 20203","name":"Techniques in Programming","grade":"A"},{"sem":"S22","code":"PSYC 10524","name":"Principles of Behavior II","grade":"A"},{"sem":"S22","code":"MATH 20524","name":"Calculus II","grade":"A"},{"sem":"S22","code":"ENGL 10803","name":"Introductory Composition: Writing as Inquiry","grade":"A"},{"sem":"F22","code":"CITE 30103","name":"Unix/Linux System Administration","grade":"B+"},{"sem":"F22","code":"COSC 20803","name":"Data Structures","grade":"A"},{"sem":"F22","code":"ENGL 10133","name":"Introduction to Literature","grade":"A"},{"sem":"F22","code":"MATH 10043","name":"Elementary Statistics","grade":"A"},{"sem":"F22","code":"MATH 30123","name":"Discrete Mathematics II","grade":"A"},{"sem":"F22","code":"POSC 20303","name":"International Politics","grade":"A-"},{"sem":"S23","code":"GEOL 10113","name":"Understanding the Earth","grade":"Ongoing"},{"sem":"S23","code":"ENGL 20803","name":"Intermediate Composition: Writing Argument","grade":"Ongoing"},{"sem":"S23","code":"COSC 30253","name":"Computer Organization","grade":"Ongoing"},{"sem":"S23","code":"COSC 30403","name":"Programming Language Concepts","grade":"Ongoing"},{"sem":"S23","code":"MATH 30224","name":"Linear Algebra","grade":"Ongoing"}]',
    }, 
    example_2: {
        query: "/api/courses/F21",
        response: '[{"sem":"F21","code":"PHYS 20474","name":"Physics I with Laboratory: Mechanics","grade":"B"},{"sem":"F21","code":"MATH 10524","name":"Calculus I","grade":"A-"},{"sem":"F21","code":"COSC 10403","name":"Introduction to Programming","grade":"A"},{"sem":"F21","code":"ANTH 20623","name":"Introduction to Cultural Anthropology","grade":"A-"},{"sem":"F21","code":"HIST 10103","name":"World History to 1500","grade":"A-"}]',
    },
    example_3: {
        query: "/api/courses/F21/S22",
        response: '[{"sem":"F21","code":"PHYS 20474","name":"Physics I with Laboratory: Mechanics","grade":"B"},{"sem":"F21","code":"MATH 10524","name":"Calculus I","grade":"A-"},{"sem":"F21","code":"COSC 10403","name":"Introduction to Programming","grade":"A"},{"sem":"F21","code":"ANTH 20623","name":"Introduction to Cultural Anthropology","grade":"A-"},{"sem":"F21","code":"HIST 10103","name":"World History to 1500","grade":"A-"},{"sem":"S22","code":"MATH 20123","name":"Discrete Mathematics I","grade":"A"},{"sem":"S22","code":"COSC 20203","name":"Techniques in Programming","grade":"A"},{"sem":"S22","code":"PSYC 10524","name":"Principles of Behavior II","grade":"A"},{"sem":"S22","code":"MATH 20524","name":"Calculus II","grade":"A"},{"sem":"S22","code":"ENGL 10803","name":"Introductory Composition: Writing as Inquiry","grade":"A"}]'
    },
}

const squares_api = {
    index: "/api/squares/",
    function: "returns a list of squares of numbers provided in the query string",
    example_1: {
        query: "/api/squares/",
        response: "Squares from 1 to 1000"
    },
    example_2: {
        query: "/api/squares/2/",
        response: `[{number: 2, square: 4}]`
    },
    example_3: {
        query: "/api/squares/2/3/",
        response: `[{number: 2, square: 4}, {number: 3, square: 9}]`
    }
}

export default function Api(req, res) {
    res.status(200).json({
        message: 'Welcome to the API!',
        documentation_url: '',
        hello_api: {hello_api},
        courses_api: {courses_api},
        squares_api: {squares_api}
    });
}