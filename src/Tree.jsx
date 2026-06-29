function TreeNode({ node, highlightedValue }) {
  if (!node) {
    return null;
  }

  const hasChildren = node.left || node.right;
  const isHighlighted = node.value === highlightedValue;

  return (
    <div className="tree-node-wrapper">
      <div
        className={`node-circle ${
          isHighlighted ? "node-highlighted" : ""
        }`}
      >
        {node.value}
      </div>

      {hasChildren && (
        <div className="children">
          <div className="child left-child">
            <TreeNode
              node={node.left}
              highlightedValue={highlightedValue}
            />
          </div>

          <div className="child right-child">
            <TreeNode
              node={node.right}
              highlightedValue={highlightedValue}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Tree({ root, highlightedValue }) {
  if (!root) {
    return <p>Insert a number to create the tree.</p>;
  }

  return (
    <div className="tree-container">
      <TreeNode
        node={root}
        highlightedValue={highlightedValue}
      />
    </div>
  );
}