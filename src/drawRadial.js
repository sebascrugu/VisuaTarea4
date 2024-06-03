d3.json("flare.json").then(data => {
    const width = 500;
    const height = 500;
    const radius = width / 2;
  
    const cluster = d3.cluster()
      .size([360, radius - 100]);
  
    const root = d3.hierarchy(data)
      .sum(d => d.value);
  
    cluster(root);
  
    const svg = d3.select("#radial")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);
  
    const link = svg.selectAll(".link")
      .data(root.descendants().slice(1))
      .enter().append("path")
      .attr("class", "link")
      .attr("d", d => `
        M${project(d.x, d.y)}
        C${project(d.x, (d.y + d.parent.y) / 2)}
        ${project(d.parent.x, (d.y + d.parent.y) / 2)}
        ${project(d.parent.x, d.parent.y)}
      `);
  
    const node = svg.selectAll(".node")
      .data(root.descendants())
      .enter().append("g")
      .attr("class", d => `node ${d.children ? "node--internal" : "node--leaf"}`)
      .attr("transform", d => `translate(${project(d.x, d.y)})`);
  
    node.append("circle")
      .attr("r", 4);
  
    node.append("text")
      .attr("dy", "0.31em")
      .attr("x", d => d.x < 180 === !d.children ? 6 : -6)
      .style("text-anchor", d => d.x < 180 === !d.children ? "start" : "end")
      .attr("transform", d => `rotate(${d.x < 180 ? d.x - 90 : d.x + 90})`)
      .text(d => d.data.name);
  
    function project(x, y) {
      const angle = (x - 90) / 180 * Math.PI;
      return [y * Math.cos(angle), y * Math.sin(angle)];
    }
  });
  