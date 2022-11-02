import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let {title, des, imgurl, url, author, publishedAt, source}= this.props;
    return (
      <div className="container my-3">
        
        <div className="card">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary " style={{zIndex:'1'}}>
           {source}
        
            </span>
          <img src={!imgurl?
          "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/10/zillow-ios-16.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1": imgurl } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {des}...
            </p>
            <p class="card-text"><small class="text-muted">By {!author?"Unkown":author} on {new Date(publishedAt).toGMTString()}</small></p>
            <a href={url} target='blank' className="btn btn-primary btn-sm">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
