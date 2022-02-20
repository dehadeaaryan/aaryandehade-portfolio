const squares_api = {
    index: "/api/squares/",
    function: "returns a list of squares of numbers provided in the query string",
    example_1: {
        query: "/api/squares/2/",
        response: `[
                {
                    number: 2,
                    square: 4
                }
            ]`
    },
    example_2: {
        query: "/api/squares/2/3/",
        response: `[
                {
                    number: 2,
                    square: 4
                },
                {
                    number: 3,
                    square: 9
                }
            ]`
    }
}

export default function Api(req, res) {
    res.status(200).json({
        message: 'Welcome to the API!',
        documentation_url: '',
        squares_api: {squares_api}
    });
}