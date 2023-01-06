import React, { Component } from 'react'
import Newsitem from "./Newsitem";

export class News extends Component {
  articles= [
    {
      "source": {
      "id": "wired",
      "name": "Wired"
      },
      "author": "Saira Mueller",
      "title": "How to (Finally) Break That Bad Habit",
      "description": "Neuroscientists and psychologists explain how to keep yourself on track—for good this time.",
      "url": "https://www.wired.com/story/how-to-break-bad-habits/",
      "urlToImage": "https://media.wired.com/photos/63a22e952eab8b7848ee633a/191:100/w_1280,c_limit/Gear-bad-habits-2666343.jpg",
      "publishedAt": "2023-01-01T12:00:00Z",
      "content": "James Clear, author of Atomic Habits, adds that looking at data can be a good starting point. For fitness habits, it could be things like your Apple Watch or Whoop band or MyFitnessPal. There are man… [+4994 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Guardian"
      },
      "author": "Vicki Power",
      "title": "Sunday with Emilia Fox: ‘Rowing on the Thames with my daughter and all the dogs’",
      "description": "The actor on enjoying a lie-in and then a strong coffee, making apple crumble and listening to Desert Island DiscsUp early? I normally get up at 5.30 for filming. On Sundays it’s a treat to stay in bed. But we’ve got three dogs now, and my daughter, Rose, who…",
      "url": "https://www.theguardian.com/lifeandstyle/2023/jan/01/sunday-with-emilia-fox-rowing-on-the-thames-with-my-daughter-and-the-dogs",
      "urlToImage": "https://i.guim.co.uk/img/media/c13ff836a00d8c862f1fc03a91fffd9e74063844/0_559_3140_1883/master/3140.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=0c47d9891d0defaeef51fb38ada38c5b",
      "publishedAt": "2023-01-01T06:45:39Z",
      "content": "Up early? I normally get up at 5.30 for filming. On Sundays its a treat to stay in bed. But weve got three dogs now, and my daughter, Rose, whos 12, so its not as if we can have a mega lie-in. Were u… [+1664 chars]"
      }
  ]
  constructor(){
    super();
    this.state ={
      articles:this.articles,
      loading: false
    }
  }
   async componentDidMount(){
    let url= "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7326cc10c83645a9a06cadd2fdcfe4f3";
    let data= await fetch(url);
     let parseData = await data.json();
     
     console.log(parseData);
     this.setState({articles: parseData.articles})
   }
  render() {
    return (
      <div className="container my-3">
        <h2>FastNews -Top Headlines</h2>
        
        <div className='row'>
        {this.state.articles.map((element)=>{
                return    <div className="col-md-3" key={element.url}>

           <Newsitem  title={element.title.slice(0,44)} description={element.description.slice(0,88)} imgurl={element.urlToImage} link={element.url}/>
                   
                    </div>
        })}

        
        
        </div>
      </div>
    )
  }
}

export default News
