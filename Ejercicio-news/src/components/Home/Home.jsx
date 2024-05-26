import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import "./Home.scss";
import image from '../../assets/image.png';
import image1 from '../../assets/image.png';

const Home = () => {
  const { news, getNews } = useContext(GlobalContext);

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>     
      <div className="newsBar">
        <marquee direction="left">
          <span className='title'>News</span>
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
      <div className='readmeContainer'>
        <div>
          <h2>## Newspaper Page for Travel Articles</h2>
          <p>Este proyecto es una aplicación web de una página que muestra artículos de viaje. Utiliza la API de New York Times para obtener los últimos artículos de la sección de viajes y los muestra en la página principal. Además, permite a los usuarios enviar sus propios artículos de viaje para que puedan ser mostrados en la plataforma.</p>
          <img src={image1} alt="Newspaper" />

          <h2>## Características</h2>
          <p>-   Muestra los últimos artículos de la sección de viajes obtenidos de la API de New York Times.</p>
          <p>-   Permite a los usuarios enviar sus propios artículos de viaje para que sean mostrados en la plataforma.</p>
          <p>-   Utiliza React y React Router para definir las rutas de la aplicación.</p>
          <p>-   Utiliza el componente Link de React Router para la navegación entre páginas.</p>
          <p>-   Establece un Global Context para hacer uso de ciertas variables de forma global en la aplicación.</p>
          <img src={image} alt="" />

          <h2>## Instalación</h2>
          <p>1. Clona este repositorio a tu máquina local utilizando `git clone`.</p>
          <p>2. Navega al directorio del proyecto y ejecuta `npm install` para instalar las dependencias.</p>
          <p>3. Una vez completada la instalación, ejecuta `npm start` para iniciar la aplicación en tu navegador.</p>

          <h2>## Uso</h2>
          <p>-   Al abrir la aplicación, serás recibido con los últimos artículos de viaje de la API de New York Times.</p>
          <p>-   Utiliza el menú de navegación para explorar diferentes secciones de artículos de viaje.</p>
          <p>-   Haz clic en un artículo para ver más detalles.</p>
          <p>-   Utiliza el formulario de envío de artículos para enviar tus propias historias de viaje.</p>

          <h2>## Tecnologías Utilizadas</h2>
          <p>-   React</p>
          <p>-   React Router</p>

          <h2>## Autor</h2>
          <p>Daniella Barraza - <a href="https://github.com/DaniellaBarraza125">Perfil de GitHub</a></p>
        </div>
      </div>
    </>
  );
}

export default Home;
