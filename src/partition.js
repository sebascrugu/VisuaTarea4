d3.json("flare.json").then(data => {
    const width = 500;
    const height = 500;
  
    const partition = d3.partition()
      .size([width, height])
      .padding(1)
      .round(true);
  
    const root = d3.hierarchy(data)
      .sum(d => d.value);
  
    partition(root);
  
    const svg = d3.select("#partition")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
  
    const node = svg.selectAll(".node")
      .data(root.descendants())
      .enter().append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.y0},${d.x0})`);
  
    node.append("rect")
      .attr("width", d => d.y1 - d.y0)
      .attr("height", d => d.x1 - d.x0)
      .attr("fill", d => d3.interpolateCool(d.value / 10000));
  
    node.append("text")
      .attr("x", 5)
      .attr("y", 15)
      .text(d => d.data.name);
  });
  