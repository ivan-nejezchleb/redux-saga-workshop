import 'isomorphic-fetch';

export function fetchIssues(username, repository) {
    return fetch(`//api.github.com/repos/${username}/${repository}/issues`)
        .then((response) => {
            if (response.status >= 400) {
                throw new Error('Bad response from server');
            }
            return response.json();
        });
}

export function fetchRepository(username, repository) {
    return fetch(`//api.github.com/repos/${username}/${repository}`)
        .then((response) => {
            if (response.status >= 400) {
                throw new Error('Bad response from server');
            }
            return response.json();
        });
}
