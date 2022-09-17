export default {
  name: "pin",
  type: "document",
  title: "Pin",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },

    {
      name: "about",
      type: "string",
      title: "About",
    },
    {
      name: "description",
      type: "url",
      title: "Description",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
    },
    {
      name: "image",
      type: "image",
      title: "PinImage",
      options: {
        hotspot: true,
      },
    },
    {
      name: "userId",
      type: "string",
      title: "UserId",
    },
    {
      name: "postedBy",
      type: "postedBy",
      title: "PostedBy",
    },

    {
      name: "save",
      type: "array",
      title: "Save",
      of: [{ type: "save" }],
    },
    {
      name: "comment",
      type: "array",
      title: "Comment",
      of: [{ type: "comment" }],
    },
  ],
}
