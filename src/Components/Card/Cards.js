import React, { Component } from "react";
import { Container, Card, Image, Label, Icon } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

const dummyData = [
  {
    _id: 1,
    image: "https://www.behindwoods.com/tamil-director/ss-rajamouli/ss-rajamouli-stills-photos-pictures-16.jpg",
    title: "Raja Mouli",
    likes: "55"
  },
  {
    _id: 2,
    image: "https://1847884116.rsc.cdn77.org/telugu/home/kushi-special2.jpg",
    title: "Pawan Kalyan",
    likes: "32"
  },
  {
    _id: 3,
    image: "http://aishwaryarai.newssurge.com/aishwarya-pictures/d/139-4/Aishwarya+Rai+in+her+young+age.jpg",
    title: "Ash",
    likes: "15"
  },
  {
    _id: 4,
    image: "https://www.behindwoods.com/tamil-director/ss-rajamouli/ss-rajamouli-stills-photos-pictures-16.jpg",
    title: "Raja Mouli",
    likes: "55"
  },
  {
    _id: 5,
    image: "https://1847884116.rsc.cdn77.org/telugu/home/kushi-special2.jpg",
    title: "Pawan Kalyan",
    likes: "32"
  },
  {
    _id: 5,
    image: "http://aishwaryarai.newssurge.com/aishwarya-pictures/d/139-4/Aishwarya+Rai+in+her+young+age.jpg",
    title: "Ash",
    likes: "15"
  } ,
  {
    _id: 6,
    image: "https://www.behindwoods.com/tamil-director/ss-rajamouli/ss-rajamouli-stills-photos-pictures-16.jpg",
    title: "Raja Mouli",
    likes: "55"
  },
  {
    _id: 7,
    image: "https://1847884116.rsc.cdn77.org/telugu/home/kushi-special2.jpg",
    title: "Pawan Kalyan",
    likes: "32"
  },
  {
    _id: 8,
    image: "http://aishwaryarai.newssurge.com/aishwarya-pictures/d/139-4/Aishwarya+Rai+in+her+young+age.jpg",
    title: "Ash",
    likes: "15"
  }
];

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ads:[],
      };
  }

  componentDidMount() {
    // For Testing
    console.log("Mounted");
    console.log(dummyData);
    this.setState({
      ads: dummyData
    });
  }

  renderItems = () => {
    return (
      <Card.Group itemsPerRow={3} stackable={true} doubling={true}>
        {this.state.ads.map(card => (
          <Card key={card._id} className="fluid">
         <img src={card.image} height={200}/>
             <Card.Content extra>
                <Card.Header>{card.title}</Card.Header>
              <a>
                <Icon name='thumbs up' />
                  {card.likes}
             </a>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    );
  };
  render() {
    return <Container>{this.renderItems()}</Container>;
  }
}
