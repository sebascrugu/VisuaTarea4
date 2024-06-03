d3.json('distritos_cr.json').then(data => {
    const width = 800;
    const height = 500;

    const root = d3.hierarchy(data)
        .sum(d => d.size)
        .sort((a, b) => b.size - a.size);

    d3.treemap()
        .size([width, height])
        .padding(1)
        .round(true)(root);

    const svg = d3.select("#treemap")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("font", "10px sans-serif");

    const cell = svg.selectAll("g")
        .data(root.leaves())
        .enter().append("g")
        .attr("transform", d => `translate(${d.x0},${d.y0})`);

    cell.append("rect")
        .attr("id", d => (d.leafUid = d3.uid("leaf")).id)
        .attr("width", d => d.x1 - d.x0)
        .attr("height", d => d.y1 - d.y0)
        .attr("fill", d => d3.interpolateMagma(d.size / root.value));

    cell.append("clipPath")
        .attr("id", d => (d.clipUid = d3.uid("clip")).id)
        .append("use")
        .attr("xlink:href", d => d.leafUid.href);

    cell.append("text")
        .attr("clip-path", d => d.clipUid)
        .selectAll("tspan")
        .data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g))
        .enter().append("tspan")
        .attr("x", 3)
        .attr("y", (d, i) => 13 + i * 10)
        .text(d => d);
});
