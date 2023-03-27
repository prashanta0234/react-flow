export default function position(node, nodes, edges) {
  let temp = [];
  let tempNode = [];

  temp = edges
    .filter((item) => node.id === item.source)
    .map((edge) => edge.target);

  tempNode = nodes.filter((node) => temp.includes(node.id));
  console.log(tempNode);

  if (tempNode.length > 1) {
    console.log("in");
    const boxWidth = 1024; // set the width of the box
    const nodeWidth = 200; // set the width of each node
    const distance =
      (boxWidth - nodeWidth * tempNode.length) / (tempNode.length + 1);

    // sort the nodes by id to ensure consistent order
    tempNode.sort((a, b) => a.id.localeCompare(b.id));

    // calculate the new positions for each node
    tempNode.forEach((node, index) => {
      const newPosX = (index + 1) * distance + index * nodeWidth;
      const newPosY = node.position.y; // set the y position as desired
      node.position = { x: newPosX, y: newPosY };
    });
  }

  console.log(tempNode);
}
