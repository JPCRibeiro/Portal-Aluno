import React, { useEffect } from 'react';
import styles from './NotFound.module.css';
import Header from '../../components/header/Header';
import Sidenav from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Página Não Encontrada | Portal do Aluno";
  }, [location]);

  return (
    <section className={styles.container}>
      <Header/>
      <Sidenav/>
      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1>Página não Encontrada!</h1>
          <p>Volte para a página principal</p>
          <Link to="/inicio">Voltar</Link>
        </div>
      </main>
      <Footer/>
    </section>
  );
}