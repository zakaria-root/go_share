export default {
  name: "user",
  type: "document",
  title: "User",
  fields: [
    {
      name: "userName",
      type: "string",
      title: "UserName",
    },
    {
      name: "image",
      type: "image",
      title: "userImage",
      options: {
       hotspot: true // <-- Defaults to false
     },
    },
  ],
}

