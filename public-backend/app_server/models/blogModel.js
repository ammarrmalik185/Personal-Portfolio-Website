const { Model, Schema } = require('model-json-js');

const BlogSchema = {
    title: 'Test',
    $id: 'https://hiveframework.io/api/v1/models/Test',
    type: 'object',
    properties: {
        test: {
            type: 'string'
        },
        another: {
            type: 'string'
        }
    },
    required: ['test']
}

const testSchema = await new Schema(BlogSchema)
testSchema.test({
    title: ok
})
const testModel = await new Model(testSchema)
