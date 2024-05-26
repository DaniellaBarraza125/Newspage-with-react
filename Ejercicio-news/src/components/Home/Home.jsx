import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import "./Home.scss";

const Home = () => {
  const { news, getNews } = useContext(GlobalContext);

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="newsBar">
      
      <marquee direction="left">
        <span className='Title'>News</span>
        {news.map((article, i) => {
          console.log(article.title);
          return (
            <span key={i}>
              {article.title}
            </span>
          );
        })}
      </marquee>
    </div>
  );
}

export default Home;
