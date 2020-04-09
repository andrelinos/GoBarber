import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import { signInSuccess, signUpSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (user.provider) {
      Alert.alert(
        'Erro no login',
        'Usuário não pode ser prestador de serviços.'
      );
      yield put(signFailure());
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      `Houve  um erro no login, verique seus dados.`
    );
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    const response = yield call(api.get, 'users', {
      email,
    });

    const [user] = response.data;

    if (email === user.email) {
      Alert.alert(
        'Falha no cadastro',
        `E-mail já cadastrado em nosso sistema.${user.email}`
      );
      yield put(signFailure());
      return;
    }

    yield call(api.post, 'users', {
      name,
      email,
      password /* ,
      provider: true - cadastro apenas para não prestadores */,
    });
    Alert.alert('Sucesso!', `Cadastro realizado com sucesso!`);
    yield put(signUpSuccess());

    //  history.push('/');
  } catch (err) {
    Alert.alert(
      'Falha no cadastro',
      `Houve  um erro no cadastro, verique seus dados.`
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
