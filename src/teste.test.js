import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renderiza o componente App', () => {
  const { getByText, getByLabelText } = render(<App />);
  const emailInput = getByLabelText('Email:');
  const senhaInput = getByLabelText('Senha:');
  const acessarBotao = getByText('Acessar');

  expect(emailInput).toBeInTheDocument();
  expect(senhaInput).toBeInTheDocument();
  expect(acessarBotao).toBeInTheDocument();
});

test('realiza o login com sucesso', () => {
  const { getByText, getByLabelText } = render(<App />);
  const emailInput = getByLabelText('Email:');
  const senhaInput = getByLabelText('Senha:');
  const acessarBotao = getByText('Acessar');

  fireEvent.change(emailInput, { target: { value: 'ramonppadilha2@gmail.com' } });
  fireEvent.change(senhaInput, { target: { value: '10101010' } });
  fireEvent.click(acessarBotao);

  const mensagem = getByText('Acessado com sucesso!');
  expect(mensagem).toBeInTheDocument();
});

test('exibe mensagem de erro para login inválido', () => {
  const { getByText, getByLabelText } = render(<App />);
  const emailInput = getByLabelText('Email:');
  const senhaInput = getByLabelText('Senha:');
  const acessarBotao = getByText('Acessar');

  fireEvent.change(emailInput, { target: { value: 'usuario-invalido' } });
  fireEvent.change(senhaInput, { target: { value: 'senha-invalida' } });
  fireEvent.click(acessarBotao);

  const mensagem = getByText('Usuário ou senha incorretos!');
  expect(mensagem).toBeInTheDocument();
});
