import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:null,
      loading:true
    };
  }
  componentDidMount() {
    this.load();
  }
  load() {
    axios.get('https://xavierdpt.github.io/data/data.js').then(
      response => {
        this.setState({loading:false,data:response.data});
      }
    ).catch(
      error => {
	    console.log(error);
    });
  }
  loading() {
    return <div>Loading ...</div>;
  }
  authors(list) {
    let authors = "";
	let sep = "";
	for(let i = 0 ; i < list.length ; ++i) {
	  authors = authors + sep+list[i];
	  sep = ", ";
	}
    return authors;
  }
  books() {
    const {data} = this.state;
    const books = data.books;
    const items =  [];
	for(const k in books) {
		items.push(<li key={k}>{books[k].title} ; {this.authors(books[k].authors)} ; {books[k].date}</li>);
	}
    return <React.Fragment>
      <h1>Books</h1>
      <ul>{items}</ul>
    </React.Fragment>;
  }
  tv() {
    const {data} = this.state;
    const tv = data.tv;
    const items =  [];
	for(const k in tv) {
		items.push(<li key={k}>{tv[k].title} ; {this.authors(tv[k].authors)} ; {tv[k].date}</li>);
	}
    return <React.Fragment>
      <h1>TV</h1>
      <ul>{items}</ul>
    </React.Fragment>;
  }
  yt() {
    const {data} = this.state;
    const yt = data.youtube;
    const items =  [];
	for(const k in yt) {
		items.push(<div key={k}><div><img src={"https://i.ytimg.com/vi/"+k+"/hqdefault.jpg"} style={{width:"246px", height:"138px"}}/></div><div>{yt[k].title}</div></div>);
	}
    return <React.Fragment>
      <h1>YouTube</h1>
      {items}
    </React.Fragment>;
  }
  data() {
	const {data} = this.state;
    const books = data.books;
    const tv = data.tv;
	const items =  [];
	for(const k in books) {
		items.push(<li key={k}>{books[k].title}</li>);
	}
    const items2 =  [];
	for(const k in tv) {
		items2.push(<li key={k}>{tv[k].title}</li>);
	}
    return <div>
        {this.books()}
        {this.tv()}
        {this.yt()}
	</div>
  }
  render() {
    const {loading, data} = this.state;
    return (loading?this.loading():this.data());
  }
}

export default App;
