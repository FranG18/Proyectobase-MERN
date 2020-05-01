import {makeExecutableSchema} from 'graphql-tools'
import {resolvers} from './resolver'

const typeDefs=`
type Query {
    hello: String
    greet(name:String!):String
    users:[User]
}
type User{
    _id:ID
    userName:String
    description:String
    sex:String
    email:String
    password:String
    profile:String
}
input UserInput{
    userName:String
    description:String
    sex:String
    email:String
    password:String
    profile:String
}
type Mutation{
    createUser(input:UserInput): User
}
`;

export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolvers
});

