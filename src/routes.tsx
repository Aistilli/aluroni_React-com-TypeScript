import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import { lazy, Suspense } from 'react';

const Cardapio = lazy(() => import('pages/Cardapio'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));
const Inicio = lazy(() => import('pages/Inicio'));
const NotFound = lazy(() => import('pages/NotFound'));
const Prato = lazy(() => import('pages/Prato'));
const Sobre = lazy(() => import('pages/Sobre'));

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Suspense fallback={<p> Carregando... </p>}>
          <Routes>
            <Route path='/' element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path='cardapio' element={<Cardapio />} />
              <Route path='sobre' element={<Sobre />} />
            </Route>
            <Route path='prato/:id' element={<Prato />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  );
}
//Essa configuração se chama nested routes

/* Exemplo para redirecionamento de usuário:
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from "react-router-dom"

function Admin() {
 const params = useParams()
 if (params.user !== "banana") {
   return <Navigate to="/" />
 }
 return (
   <>
     <h1>Área restrita!</h1>
   </>
 )
}
function PaginaInicial() {
 return (
   <h1>Página Inicial</h1>
 )
}
function AppRouter() {
 return (
   <Router>
     <Routes>
       <Route path="/" element={<PaginaInicial />} />
       <Route path="/admin/:user" element={<Admin />} />
     </Routes>
   </Router>
 )
}
export default AppRouter
*/
