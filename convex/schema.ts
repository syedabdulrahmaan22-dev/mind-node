import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  files: defineTable({
    teamId: v.string(),
    document: v.string(),
    fileName: v.string(),
    createdBy: v.string(),
    archive: v.boolean(),
    whiteboard: v.string(),
    canvasData: v.optional(v.string()),
  })
  .index("by_teamId", ["teamId"]),

  teams: defineTable({
    teamName: v.string(),
    createdBy: v.string(),
  }),

  // Add this new user table definition
  user: defineTable({
    name: v.string(),
    email: v.string(),
    image: v.string(),
  }),
});

// import { defineSchema, defineTable } from "convex/server";
// import { v } from "convex/values";

// export default defineSchema({
//   // This defines a table named "files"
//   files: defineTable({
//     // You likely have these fields already from the tutorial
//     teamId: v.string(),
//     document: v.string(),
//     fileName: v.string(),
//     createdBy: v.string(),
//     archive: v.boolean(),
//     whiteboard: v.string(),

//     // This is the new field we are adding for the canvas
//     canvasData: v.optional(v.string()),
//   })
//   .index("by_teamId", ["teamId"]), // Add a comma here

//   // Add the new teams table definition here
//   teams: defineTable({
//     teamName: v.string(),
//     createdBy: v.string(),
//   }),
// });

// import { defineSchema, defineTable } from "convex/server";
// import { v } from "convex/values";

// export default defineSchema({
//   // This defines a table named "files"
//   files: defineTable({
//     // You likely have these fields already from the tutorial
//     teamId: v.string(),
//     document: v.string(),
//     fileName: v.string(),
//     createdBy: v.string(),
//     archive: v.boolean(),
//     whiteboard: v.string(),

//     // This is the new field we are adding for the canvas
//     canvasData: v.optional(v.string()), 
//   })
//   .index("by_teamId",["teamId"]) // You might have an index like this
// });

