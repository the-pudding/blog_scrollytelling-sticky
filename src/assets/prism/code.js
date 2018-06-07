enterView({
	selector: stepSel.nodes(),
	offset: 0.5,
	enter: el => {
		const index = +d3.select(el).attr('data-index');
		updateChart(index);
	},
	exit: el => {
		let index = +d3.select(el).attr('data-index');
		index = Math.max(0, index - 1);
		updateChart(index);
	}
});
