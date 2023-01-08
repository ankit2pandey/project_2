import React, { Component } from 'react'
import Newsitem from "./Newsitem";

export class News extends Component {
  articles= [
    {
      "title":"Management of five firms linked to Pegasus maker NSO is moved to London",
      "link":"https://www.theguardian.com/business/2023/jan/04/management-of-five-firms-linked-to-pegasus-maker-nso-is-moved-to-london",
      "keywords":["Business","World news"],
      "creator":["Stephanie Kirchgaessner in Washington"],
      "video_url":null,
      "description":"Change could stoke controversy for spyware company amid calls for UK sanctionsThe management of several companies linked to NSO Group, the spyware company blacklisted by the Biden administration, has moved to London.NSO, which sells Pegasus, one of the world’s most sophisticated hacking tools, is based in Israel, but several of the companies that manage some of the group’s operations – including one that NSO has said manages invoices and payments from NSO’s customers – are based in Luxembourg, inside the European Union. Continue reading...",
      "content":null,
      "pubDate":"2023-01-04 18:06:22",
      "image_url":"https://i.guim.co.uk/img/media/b54e794b6553cddd82c52adf03b6b325c3ddfcc5/0_117_3500_2101/master/3500.jpg?width=460&quality=85&auto=format&fit=max&s=aa208ea0a2677d12a74cd661aeeaf1f7",
      "source_id":"theguardian",
      "country":["united kingdom","india","singapore","canada"],
      "category":["business"],
      "language":"english"}]
  
  constructor(){
    super();
    this.state ={
      articles:this.articles,
      loading: false
      
    }
    console.log(this.state)
  }
   /*async componentDidMount(){
    let url= "https://newsdata.io/https://newsdata.io/api/1/news?apikey=pub_15430f90fb5a8516c49271ce2f4f714a4cdb5&q=games&language=en/1/news?apikey=pub_15430f90fb5a8516c49271ce2f4f714a4cdb5&q=pegasus&language=en";
    let data= await fetch(url);
     let parseData = await data.json();
     
     console.log(parseData);
     this.setState({articles: parseData.articles})
   }*/
  render() {
    return (
      <div className="container my-3">
        <h2>FastNews -Top Headlines</h2>
        
        <div className='row'>
        {this.state.articles.map((element)=>{
                return    <div className="col-md-3" key={element.title}>

           <Newsitem  title={element.title} description={element.description} imgurl={element.image_url} link={element.link}/>
                   
                    </div>
        })}

        
        
        </div>
      </div>
    )
  }
}

export default News
