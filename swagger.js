const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = [
  './src/routes/toolsRoute.js',
  './src/routes/usersRoute.js',
]

swaggerAutogen(outputFile, endpointsFiles)
