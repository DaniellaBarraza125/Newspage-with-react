import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import "../../App.scss"
import './ListNews.scss'

const ListNews = () => {
  const { news, getNews } = useContext(GlobalContext);

  useEffect(() => {
    getNews();
  }, []);
console.log(news);
  if (news.length <= 0){
    return <p>Cargando...</p>
  }
  return (
    <div className='articleContainer'>

      
      {news.map((article, i) => {
        // console.log(article.title);
        const multimedia = article.multimedia

        return (

          <div className="article " key={i}>
              <h2>{article.title}</h2>
              <div className="articleBody">

                <p>{article.abstract}</p>
                <img  src={multimedia[2].url} alt="" />
                <a href={article.url}>{article.url}</a>
              </div>
          </div>
        );
      })}
    </div>
  );
}
export default ListNews;
