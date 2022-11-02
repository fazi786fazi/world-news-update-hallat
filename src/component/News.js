import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class News extends Component {
    articles= [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "Bairstow wins Cricket Writers' Club award",
            "description": "Jonny Bairstow wins the Bob Willis Trophy after being voted as England's player of the year by the Cricket Writers' Club.",
            "url": "http://www.bbc.co.uk/sport/cricket/63134676",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/CCB7/production/_126970425_jonnybairstow.jpg",
            "publishedAt": "2022-10-04T15:52:27.7523254Z",
            "content": "Jonny Bairstow is currently the only batter in the world to score more than 1,000 runs in Tests this year\r\nJonny Bairstow has won the Bob Willis Trophy after being voted as England's player of the ye… [+1964 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    static defaultProps={
       catg: `general` 
    }

    static propTypes={
        catg: PropTypes.string,

     }
     capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    constructor(props){
        super(props);
        this.state= {
        articles: this.articles,
        page:1,
        loading: false,
        } 
        document.title=`${this.capitalizeFirstLetter(this.props.catg)} - Hallat Update`;
    }
    async updateNews(){
       
        const url=`https://newsapi.org/v2/top-headlines?country=de&category=${this.props.catg}&apiKey=71728dd030374c1b9e341000c53ff50b&page=${this.state.page}&pageSize=21`;
        this.setState({loading:true});
        let data= await fetch(url); 
        // this.state.setprogress(10);
        let pdata= await data.json();
        // this.state.setprogress(50);
        console.log("hello word",pdata);
        this.setState({
            articles:pdata.articles,
            totalResults:pdata.totalResults,
            loading: false
        })
        // this.state.setprogress(100);
    }
    async componentDidMount(){
        // let url=`https://newsapi.org/v2/top-headlines?country=de&category=${this.props.catg}&apiKey=71728dd030374c1b9e341000c53ff50b&page=1&pageSize=21`;
        // this.setState({loading:true});
        // let data= await fetch(url); 
        // let pdata= await data.json();
        // console.log("hello word",pdata);
        // this.setState({
        //     articles:pdata.articles,
        //     totalResults:pdata.totalResults,
        //     loading: false
        // })
        this.updateNews();
       
    }

    nextclick=async()=>{
      
        // let url=`https://newsapi.org/v2/top-headlines?country=de&category=${this.props.catg}&apiKey=71728dd030374c1b9e341000c53ff50b&page=${this.state.page+1}&pageSize=21`;
        // this.setState({loading:true});
        // let data= await fetch(url);
        // let pdata= await data.json();
        // this.setState({
        //     page : this.state.page + 1,
        //     articles:pdata.articles,
        //     loading: false
        // })
        this.setState({page: this.state.page+1});
        this.updateNews();
    }

    
    preclick=async()=>{
        // console.log('preclick')
        // let url=`https://newsapi.org/v2/top-headlines?country=de&category=${this.props.catg}&apiKey=71728dd030374c1b9e341000c53ff50b&page=${this.state.page-1}&pageSize=21`;
        // this.setState({loading:true});
        // let data= await fetch(url);
        // let pdata= await data.json();
        // this.setState({
        //     page : this.state.page - 1,
        //     articles:pdata.articles,
        //     loading: false
           
        // })
        this.setState({page: this.state.page-1});
        this.updateNews();
        
    }
  render() {
    return (
      <div className="container my-4">
        <h2 className='text-center ' style={{ marginTop:'80px'}}>Top {this.capitalizeFirstLetter(this.props.catg)} Headline   </h2>
      {this.state.loading && <Spinner />}
        <div className="row">
        {!this.state.loading && this.state.articles.map((ele)=>{
          return  <div className="col-md-4" key={ele.url}>
           <Newsitem title={ele.title?ele.title.slice(0, 45):" "} des={ele.description?ele.description.slice(0,75):""} 
           imgurl={ele.urlToImage} 
           url={ele.url}
           publishedAt={ele.publishedAt}
           author={ele.author}
           source={ele.source.name}
           />
          </div>
             
        })}
       </div>
       <div className="container d-flex justify-content-between my-3">
       <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.preclick}>&larr; Previous</button>
       <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/21)} className="btn btn-primary" onClick={this.nextclick}>Next &rarr;</button>
       </div>
       </div>
    )
  }
}

export default News
