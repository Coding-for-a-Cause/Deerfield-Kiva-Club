exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    // If a file is a markdown file
    // Add a field `collection` and set that to its sourceInstanceName
    const parent = getNode(node.parent)
    let collection = parent.sourceInstanceName

    createNodeField({
      node,
      name: "collection",
      value: collection,
    })
  }
}
