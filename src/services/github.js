import 'isomorphic-fetch';

export function fetchIssues(/* username, repository*/) {
    return Promise.resolve([{ title: 'Foo', body: 'foooooooo', id: 1 }]);
}

const REPOSITORY = {
    facebook: {
        react: {
            full_name: 'facebook/react'
        }
    },
    reactjs: {
        redux: {
            full_name: 'reactjs/redux'
        }
    },
    yelouafi: {
        'redux-saga': {
            full_name: 'reactjs/redux-saga'
        }
    }
};

export function fetchRepository(username, repository) {
    if (!REPOSITORY[username]) {
        return Promise.reject({ code: 404, message: `Unknown Github user: ${username}` });
    }

    const repo = REPOSITORY[username][repository];

    if (repo) {
        return Promise.resolve(repo);
    }

    return Promise.reject({ code: 404, message: `Repository: ${repository} not found` });
}
