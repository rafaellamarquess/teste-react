import React from "react";

const Filmes = ({ filme }) => {
    
    const mostrarNome = () => {
        alert(filme.nome);
    };

    return (
        <tr>
            <td>{filme.nome}</td>
            <td>{filme.categoria}</td>
            <td>{filme.ano}</td>
            <td className='text-right'>
                <button className='btn btn-info' onClick={mostrarNome}>Informações</button>{' '}
                <button className='btn btn-danger'>Excluir</button>
            </td>
            </tr>
    );
};

export default Filmes;