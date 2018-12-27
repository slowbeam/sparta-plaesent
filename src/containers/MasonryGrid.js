import React from "react";
import MasonryItem from "../components/MasonryItem";
import uuid from "uuid";

class MasonryGrid extends React.Component {
  state = {
    windowWidth: 0,
    windowHeight: 0,
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

  componentDidMount() {
    this.loadWindowDimensions();
    window.addEventListener("resize", this.loadWindowDimensions);
  }

  componentWillUnmount() {
    this.loadWindowDimensions();
    window.removeEventListener("resize", this.loadWindowDimensions);
  }

  loadWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  };

  reorder = (cards, columns) => {
    const cols = columns;
    const output = [];
    let col = 0;
    while (col < cols) {
      for (let i = 0; i < cards.length; i += cols) {
        let _val = cards[i + col];
        if (_val !== undefined) output.push(_val);
      }
      col++;
    }
    if (columns === 1) {
      return cards;
    } else {
      return output;
    }
  };

  renderMasonryItems = () => {
    let columns;
    switch (true) {
      case this.state.windowWidth > 1260:
        columns = 3;
        break;
      case this.state.windowWidth < 1260 && this.state.windowWidth > 450:
        columns = 2;
        break;
      case this.state.windowWidth <= 450:
        columns = 1;
        break;
      default:
        break;
    }

    const sortedCards = this.reorder(this.state.cards, columns);
    return sortedCards.map(item => (
      <MasonryItem
        key={uuid()}
        url={item.img}
        date={item.date}
        title={item.title}
      />
    ));
  };

  render() {
    return <div className="masonry">{this.renderMasonryItems()}</div>;
  }
}

export default MasonryGrid;
