import { tail } from 'lodash';

const USERNAME_REPOSITORY = /^([a-z0-9\-]+)\/([a-z0-9\-]+)$/i;

export const isValidUsernameRepository = name => USERNAME_REPOSITORY.test(name);

export const getUsernameRepository = name => tail(name.match(USERNAME_REPOSITORY));

export const getKey = (username, repository) => `${username}:${repository}`;
