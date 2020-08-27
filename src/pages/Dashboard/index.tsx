import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/github-logo.svg';
import { Title, Form, Repositories, Error } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagyRepositories = localStorage.getItem(
      '@githubExplorer:repositories'
    );

    if (storagyRepositories) {
      return JSON.parse(storagyRepositories);
    }
  });
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    localStorage.setItem(
      '@githubExplorer:repositories',
      JSON.stringify(repositories)
    );
  }, [repositories]);
  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    //Retirando o comportamento do submit | HTMLFormElement é var global, por isso não é importada
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }
    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (error) {
      setInputError('Erro na busca por esse repositório: ' + error);
    }
  }
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositorios no Github</Title>;
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};
export default Dashboard;
