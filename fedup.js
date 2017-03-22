var surdef, g, r, spending;
surdef = [24.9, 15.3];
g = [2.77, 4.64];
r = [471, 883];
spending = [447, 867];

var gdp = d3.select(".gdp");
gdp.selectAll("div")
       .data(g)
      .enter().append("div")
      .transition()
      			.duration(1000)
      			.delay(function (d, i) {
      				return i * 200;
      			})
      .style("width", function(d){
			return d * 10 + "px"; })
	  .text(function(d) {return d;})
gdp.insert("h3", ":first-child").text("GDP");

var ds = d3.select(".ds");
    ds.selectAll("div")
       .data(surdef)
      .enter().append("div")
      .transition()
				.duration(1000)
				.delay(function (d, i) {
					return i * 200;
				})
      .style("width", function(d){
			return d * 5 + "px"; })
	  .text(function(d) {return d;})
ds.insert("h3", ":first-child").text("Total Surplus/Deficit");

var rev = d3.select(".rev");
    rev.selectAll("div")
       .data(r)
      .enter().append("div")
      .transition()
				.duration(1000)
				.delay(function (d, i) {
					return i * 200;
				})
      .style("width", function(d){
			return d / 5 + "px"; })
	  .text(function(d) {return d;})
rev.insert("h3", ":first-child").text("Total Surplus/Deficit");

var spdng = d3.select(".spdng");
    spdng.selectAll("div")
       .data(spending)
      .enter().append("div")
      .transition()
				.duration(1000)
				.delay(function (d, i) {
					return i * 200;
				})
      .style("width", function(d){
			return d / 5 + "px"; })
	  .text(function(d) {return d;})
spdng.insert("h3", ":first-child").text("Total Spending");