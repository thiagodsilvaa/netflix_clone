import React, { useEffect, useState } from "react";
import './App.css';
import Tmbd from "./tmbd";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from './components/FeaturedMovie';
import Header from "./components/header";




// eslint-disable-next-line import/no-anonymous-default-export
export default () => {


    const [movieList, setMovieList] = useState([])
    const [featuredData, setFeaturedData] = useState(null)
    const [blackHeader, setBlackHeader] = useState(false)

    useEffect(() => {
        const loadAll = async () => {
            // Pegando a lista total

            let list = await Tmbd.getHomelist();
            setMovieList(list)

            // Pegando o featured
            
            let originals = list.filter(i=>i.slug === 'originals')
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length))
            let chosen = originals[0].items.results[randomChosen]
            let chosenInfo = await Tmbd.getMovieInfo(chosen.id, 'tv')
            
            setFeaturedData(chosenInfo)

        }
        loadAll()

    }, [])

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10){
                setBlackHeader(true)
            } else {
                setBlackHeader(false)
            }


        }

        window.addEventListener('scroll', scrollListener)
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, [])

    return (


        <div className="page">

            <Header black={blackHeader} />

            {featuredData && 
                <FeaturedMovie item={featuredData} />
            }

            <section className="lists">
                {movieList.map((item , key) => (
                    <MovieRow key={key} title={item.title} items={item.items}/>
                ))}
            </section>

            <section className="footer">
                <p>Feito com <span role="img" aria-label="coração">❤️</span> por <a className="link-Linkedin" href="https://www.linkedin.com/in/silvaathiagod/">Thiago Silva</a></p>
                <p>Direitos de imagem para Netflix</p>
                <p>Dados buscados no site Themoviedb.org</p>
            </section>

        </div>
    )
}
