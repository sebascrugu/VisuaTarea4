d3.json("flare.json").then(data => {
    const width = 500;
    const height = 500;
    const format = d3.format(",d");
  
    const pack = d3.pack()
      .size([width - 2, height - 2])
      .padding(3);
  
    const root = d3.hierarchy(data)
      .sum(d => d.value)
      .sort((a, b) => b.value - a.value);
  
    pack(root);
  
    const svg = d3.select("#circlePacking")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("text-anchor", "middle");
  
    const node = svg.selectAll("g")
      .data(root.descendants())
      .enter().append("g")
      .attr("transform", d => `translate(${d.x},${d.y})`);
  
    node.append("circle")
      .attr("r", d => d.r)
      .attr("fill", d => d.children ? d3.interpolateCool(d.depth / 3) : "white")
      .attr("stroke", d => d.children ? "none" : "#ccc");
  
    node.append("text")
      .attr("dy", "0.3em")
      .text(d => d.children ? "" : d.data.name);
  
    node.append("title")
      .text(d => `${d.data.name}\n${format(d.value)}`);
  });
  