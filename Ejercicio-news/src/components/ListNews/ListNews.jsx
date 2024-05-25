import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const ListNews = () => {
  const { news, getNews } = useContext(GlobalContext);

  useEffect(() => {
    getNews();
  }, []);
console.log(news);
  // if (news.length <= 0){
  //   return <p>Cargando...</p>
  // }
  return (
    <div>
      {news.map((article, i) => {
        // console.log(article.title);
        const multimedia = article.multimedia

        return (
          <div key={i}>
            <h2>{article.title}</h2>
            <p>{article.abstract}</p>
                  <img  src={multimedia[2].url} alt="" />
                  <p>{multimedia[2].caption}</p>
        
            <a href={article.url}>{article.url}</a>
          </div>
        );
      })}
    </div>
  );
}
export default ListNews;
