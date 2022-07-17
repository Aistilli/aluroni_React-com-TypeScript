import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from 'components/Menu';
import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import PaginaPadrao from 'components/PaginaPadrao';
import Sobre from 'pages/Sobre';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
          </Route>
          <Route path='prato/:id' element={<Prato />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
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
