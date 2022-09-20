import React, { useState } from 'react';
import Filmes from '../../componentes/Filmes';

const Home = () => {
    //lógica do componente
    const [filmes, setFilmes] = useState([]);
    const [filme, setFilme] = useState ({});

    const cadastrar = () => {
        setFilmes([filme, ...filmes]);
    }


    // retorna o html do componente
    return (
        <div className='container'>
            <br />
            <h1>Lista Filmes</h1>
            <br />
            <div className='jumbotron'>
                <div className='row'>
                    <br />
                    <div className='col-4'>
                        <label>Nome</label>
                        <input type="text"
                        className='form-control'
                        placeholder='Nome do Filme'
                        onChange= {(e) => {
                            setFilme({
                             ...filme, nome: e.target.value
                            })
                         }}>
                        </input>
                    </div>
                    <div className='col-4'>
                        <label>Categoria</label>
                        <select 
                        onChange= {(e) => {
                            setFilme({
                             ...filme, categoria: e.target.value
                            }); 
                         }}
                        className='form-control'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        
                        </select>
                    </div>
                    <div className='col-4'>
                        <label>Ano</label>
                        <input 
                        onChange= {(e) => {
                            setFilme({
                             ...filme, ano: e.target.value
                            }); 
                         }}
                        type="number" className='form-control'></input>
                    </div>
                <button onClick={cadastrar} className='btn btn-success btn-block'>Cadastrar</button>
                </div>
            </div>
            <br />
        <table className="table table-striped">
        <thead>
            <tr>
            <th scope="col">Nome</th>
            <th scope="col">Categorias</th>
            <th scope="col">Ano</th>
            <th scope='col' className='text-right'>Ações</th>
            </tr>
        </thead>
        <tbody>
            {filmes.map((filme) =>
            (<Filmes filme={filme}/>
            ))}
        </tbody>
         </table>
        </div>
);
};

export default Home;