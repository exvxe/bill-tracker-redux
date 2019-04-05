import React, { Component} from 'react';

import * as d3 from "d3";
import 'lodash';

import '../styles/barChart.styl';

class BarChart extends Component {
    componentDidMount() {
      if (this.props.bills.length !== 0) {
        this.drawChart()
      } else {
        return;
      }
    }
    componentDidUpdate() {
      d3.select("#" + this.props.id).select('svg').remove();
      this.drawChart();
    }
    drawChart() {
      if (this.props.bills.length !== 0) {
        let data = _.reverse(_.sortBy(_(this.props.bills).groupBy('category').map((objs, key) => ({'category': key, 'amount': _.sumBy(objs, 'amount') })).value(), 'amount')),
            filteredData = this.props.bills.filter(bill => {
              let [day, month, year] = bill.added.split(".");
              return month == this.props.month
            }),
            h = this.props.height,
            w = this.props.width,
            svg = d3.select("#" + this.props.title.toLowerCase().replace(/\s/g, '-')).append("svg")
                    .attr("width", w)
                    .attr("height", h),
            categories = this.props.categories,
            biggest = _.maxBy(data, 'amount');

        svg.selectAll("rect")
        .data(filteredData)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 100)
        .attr("y", (d) => h - d.amount * (h - 30) / biggest.amount)
        .attr("width", 85)
        .attr("height", (d) => d.amount * (h - 30) / biggest.amount)
        .attr("fill", this.props.accent)

        svg.selectAll('text')
                    .data(filteredData)
                    .enter()
                    .append('text')
                    .attr("font-size", "14px")
                    .attr("x", (d, i) => i * 100)
                    .attr("y", (d) => (h - d.amount * (h - 30) / biggest.amount - 5))
                    .text( function (d) { return categories.find(x => x.id == d.category).name + ': ' + d.amount})
      } else {
        return;
      }
    }
          
    render(){
      return (
        <div id={this.props.title.toLowerCase().replace(/\s/g, '-')} className="barChart">
            <h2>{this.props.title}:</h2>
            {this.props.bills.length !== 0 ? '' : <h3>Empty</h3>}
        </div>
      )
    }
  }
  

export default BarChart;