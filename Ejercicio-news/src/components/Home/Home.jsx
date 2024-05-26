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
      {news.map((article, i) => {
        console.log(article.title);
        return (
          <marquee direction="left" key={i}>{article.title}</marquee>
        );
      })}
    </div>
  );
}

export default Home;
