const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");

const resolvers = {
  Query: {
    note(root, args, context) {
      return context.prisma.note({ id: args.noteId });
    },

    notesByUser(root, args, context) {
      return context.prisma
        .user({
          id: args.userId
        })
        .notes();
    }
  },
  Mutation: {
    createUser(root, args, context) {
      return context.prisma.createUser({
        name: args.name
      });
    },

    createNote(root, args, context) {
      return context.prisma.createNote({
        title: args.title,
        textbody: args.textbody,
        author: {
          connect: { id: args.userId }
        }
      });
    }
  },
  User: {
    notes(root, args, context) {
      return context.prisma
        .user({
          id: root.id
        })
        .notes();
    }
  },

  Note: {
    author(root, args, context) {
      return context.prisma
        .note({
          id: root.id
        })
        .author();
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  context: {
    prisma
  }
});

server.start(() =>
  console.log("Server is up and running on http://localhost:4000")
);
