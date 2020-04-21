import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore Repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/5742201?s=460&u=f88127f927b4c9c945e638cce65837e51634ec0f&v=4"
            alt="Ariane Mateus"
          />
          <div>
            <strong>Ariane92/GoStack</strong>
            <p>Bootcamp JS</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/5742201?s=460&u=f88127f927b4c9c945e638cce65837e51634ec0f&v=4"
            alt="Ariane Mateus"
          />
          <div>
            <strong>Ariane92/GoStack</strong>
            <p>Bootcamp JS</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/5742201?s=460&u=f88127f927b4c9c945e638cce65837e51634ec0f&v=4"
            alt="Ariane Mateus"
          />
          <div>
            <strong>Ariane92/GoStack</strong>
            <p>Bootcamp JS</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
