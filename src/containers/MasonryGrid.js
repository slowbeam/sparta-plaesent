import React from 'react';
import MasonryItem from '../components/MasonryItem';
import uuid from 'uuid';

class MasonryGrid extends React.Component {

  state = {
            layout: "masonry",
            columns: 3,
            maxCards: 6,
            cards: [
              {
                img: require("../images/grid/grid-image-1.png"),
                date: "FEBRUARY 10 2017",
                title: "Bureaux exquisite delightful carefully curated soft power."
              },
              {
                img: require("../images/grid/grid-image-2.png"),
                date: "FEBRUARY 2 2017",
                title: "Sharp bureaux sleepy K-pop carefully curated."
              },
              {
                img: require("../images/grid/grid-image-3.png"),
                date: "JANUARY 27 2017",
                title: "St Moritz uniforms Beams."
              },
              {
                img: require("../images/grid/grid-image-4.png"),
                date: "JANUARY 21 2017",
                title: "Esse airport veniam ryokan soft power."
              },
              {
                img: require("../images/grid/grid-image-5.png"),
                date: "JANUARY 18 2017",
                title: "K-pop extraordinary."
              },
              {
                img: require("../images/grid/grid-image-6.png"),
                date: "JANUARY 12 2017",
                title: "Artisanal iconic cutting-edge business class."
              }
            ]
  };



  reorder = (arr, columns) => {

    const cols = columns;
    const out = [];
    let col = 0;
    while(col < cols) {
        for(let i = 0; i < arr.length; i += cols) {
            let _val = arr[i + col];
            if (_val !== undefined)
                out.push(_val);
        }
        col++;
    }

    this.setState({ cards: out, columns: columns });
  }



  renderMasonryItems = () => {

    return this.state.cards.map(item => <MasonryItem key={uuid()} url={item.img} date={item.date} title={item.title}/>)


  }

  render() {
    console.log(this.state.columns)
    return (
      <div className="masonry">
        {this.renderMasonryItems()}
      </div>
    );
  }
};

export default MasonryGrid;
