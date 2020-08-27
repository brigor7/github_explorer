import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import logoImg from '../../assets/github-logo.svg';
import { Header } from './styles';
import { FiChevronsLeft } from 'react-icons/fi';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </Header>
    </>
  );
};
export default Repository;
