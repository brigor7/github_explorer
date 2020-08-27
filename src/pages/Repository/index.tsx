import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import logoImg from '../../assets/github-logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';

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
      <RepositoryInfo>
        <header>
          <img
            src="https://unipublicabrasil.com.br/curso-gratuito/views/assets/img/avatar/homem-5.png"
            alt="Avatar"
          />
          <div>
            <strong>brigor7/match_renascer</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              cum qui consequatur ex, eveniet assumenda?
            </p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Star</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Issues abertos</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="teste">
          <div>
            <strong>Lorem ipsum dolor sit amet.</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              nihil voluptatem odio, assumenda at quo.
            </p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};
export default Repository;
