import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GithubRepo } from '../project.model';

@Component({
  host: {
    'class': 'app-page'
  },
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  repos: Observable<GithubRepo[]>;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    // this.http
    //   .get('https://api.github.com/users/murhafsousli/repos?type=owner&sort=created')
    //   .pipe(
    //     map((result: any) => {
    //       return result.filter(x => ids.includes(x.id.toString()));
    //     }),
    //     map(result => {
    //       console.log(result.toString());
    //     })
    //   )
    //   .subscribe();
    const arr: GithubRepo[] = test
      .filter(x => {
        const z = ids.includes(x.id.toString());
        return z;
      })
      .sort(
        (a, b) =>
          a.stargazers_count < b.stargazers_count
            ? 1
            : b.stargazers_count < a.stargazers_count
            ? -1
            : 0
      );
    this.repos = of<GithubRepo[]>(arr);
  }
}

const test: GithubRepo[] = [
  {
    id: 72248970,
    node_id: 'MDEwOlJlcG9zaXRvcnk3MjI0ODk3MA==',
    name: '8puzzle',
    full_name: 'MurhafSousli/8puzzle',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/8puzzle',
    description: '8- Puzzle Game 🕹',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/8puzzle',
    forks_url: 'https://api.github.com/repos/MurhafSousli/8puzzle/forks',
    keys_url: 'https://api.github.com/repos/MurhafSousli/8puzzle/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/MurhafSousli/8puzzle/teams',
    hooks_url: 'https://api.github.com/repos/MurhafSousli/8puzzle/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/issues/events{/number}',
    events_url: 'https://api.github.com/repos/MurhafSousli/8puzzle/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/8puzzle/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/MurhafSousli/8puzzle/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/8puzzle/deployments',
    created_at: '2016-10-28T23:01:47Z',
    updated_at: '2018-09-09T12:07:09Z',
    pushed_at: '2016-11-20T10:42:32Z',
    git_url: 'git://github.com/MurhafSousli/8puzzle.git',
    ssh_url: 'git@github.com:MurhafSousli/8puzzle.git',
    clone_url: 'https://github.com/MurhafSousli/8puzzle.git',
    svn_url: 'https://github.com/MurhafSousli/8puzzle',
    homepage: 'https://murhafsousli.github.io/8puzzle',
    size: 5701,
    stargazers_count: 21,
    watchers_count: 21,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 12,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'gpl-3.0',
      name: 'GNU General Public License v3.0',
      spdx_id: 'GPL-3.0',
      url: 'https://api.github.com/licenses/gpl-3.0',
      node_id: 'MDc6TGljZW5zZTk='
    },
    forks: 12,
    open_issues: 0,
    watchers: 21,
    default_branch: 'master'
  },
  {
    id: 128522367,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjg1MjIzNjc=',
    name: 'angular-electron',
    full_name: 'MurhafSousli/angular-electron',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/angular-electron',
    description:
      'Ultra-fast bootstrapping with Angular 5 and Electron (Typescript + SASS + Hot Reload) :speedboat:',
    fork: true,
    url: 'https://api.github.com/repos/MurhafSousli/angular-electron',
    forks_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/teams',
    hooks_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/angular-electron/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/angular-electron/deployments',
    created_at: '2018-04-07T11:34:47Z',
    updated_at: '2018-04-07T11:34:49Z',
    pushed_at: '2018-04-04T12:42:14Z',
    git_url: 'git://github.com/MurhafSousli/angular-electron.git',
    ssh_url: 'git@github.com:MurhafSousli/angular-electron.git',
    clone_url: 'https://github.com/MurhafSousli/angular-electron.git',
    svn_url: 'https://github.com/MurhafSousli/angular-electron',
    homepage: '',
    size: 1169,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 122417572,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjI0MTc1NzI=',
    name: 'angular-fontawesome',
    full_name: 'MurhafSousli/angular-fontawesome',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/angular-fontawesome',
    description: null,
    fork: true,
    url: 'https://api.github.com/repos/MurhafSousli/angular-fontawesome',
    forks_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/teams',
    hooks_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/angular-fontawesome/deployments',
    created_at: '2018-02-22T01:49:46Z',
    updated_at: '2018-02-22T01:49:49Z',
    pushed_at: '2018-02-21T22:08:29Z',
    git_url: 'git://github.com/MurhafSousli/angular-fontawesome.git',
    ssh_url: 'git@github.com:MurhafSousli/angular-fontawesome.git',
    clone_url: 'https://github.com/MurhafSousli/angular-fontawesome.git',
    svn_url: 'https://github.com/MurhafSousli/angular-fontawesome',
    homepage: null,
    size: 189,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 154256079,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNTQyNTYwNzk=',
    name: 'angular-ngrx-material-starter',
    full_name: 'MurhafSousli/angular-ngrx-material-starter',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/angular-ngrx-material-starter',
    description: 'Angular NgRx & Angular Material Starter Project',
    fork: true,
    url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter',
    forks_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/teams',
    hooks_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/angular-ngrx-material-starter/deployments',
    created_at: '2018-10-23T03:26:48Z',
    updated_at: '2018-10-23T03:26:52Z',
    pushed_at: '2018-10-22T22:41:00Z',
    git_url: 'git://github.com/MurhafSousli/angular-ngrx-material-starter.git',
    ssh_url: 'git@github.com:MurhafSousli/angular-ngrx-material-starter.git',
    clone_url:
      'https://github.com/MurhafSousli/angular-ngrx-material-starter.git',
    svn_url: 'https://github.com/MurhafSousli/angular-ngrx-material-starter',
    homepage: 'https://tomastrajan.github.io/angular-ngrx-material-starter',
    size: 16086,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 113275823,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMTMyNzU4MjM=',
    name: 'angular-ripple',
    full_name: 'MurhafSousli/angular-ripple',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/angular-ripple',
    description:
      'A standalone AngularJS implementation of the Google Material Design ripple effect.',
    fork: true,
    url: 'https://api.github.com/repos/MurhafSousli/angular-ripple',
    forks_url: 'https://api.github.com/repos/MurhafSousli/angular-ripple/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/MurhafSousli/angular-ripple/teams',
    hooks_url: 'https://api.github.com/repos/MurhafSousli/angular-ripple/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/angular-ripple/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/angular-ripple/deployments',
    created_at: '2017-12-06T06:03:55Z',
    updated_at: '2017-11-11T14:44:30Z',
    pushed_at: '2016-08-23T07:27:56Z',
    git_url: 'git://github.com/MurhafSousli/angular-ripple.git',
    ssh_url: 'git@github.com:MurhafSousli/angular-ripple.git',
    clone_url: 'https://github.com/MurhafSousli/angular-ripple.git',
    svn_url: 'https://github.com/MurhafSousli/angular-ripple',
    homepage: null,
    size: 493,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 60751032,
    node_id: 'MDEwOlJlcG9zaXRvcnk2MDc1MTAzMg==',
    name: 'CMS-angular-starter',
    full_name: 'MurhafSousli/CMS-angular-starter',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/CMS-angular-starter',
    description: 'CMS angular2 application designed to work with wordpress api',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/CMS-angular-starter',
    forks_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/teams',
    hooks_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/CMS-angular-starter/deployments',
    created_at: '2016-06-09T05:02:43Z',
    updated_at: '2018-10-17T00:06:57Z',
    pushed_at: '2016-07-18T14:00:50Z',
    git_url: 'git://github.com/MurhafSousli/CMS-angular-starter.git',
    ssh_url: 'git@github.com:MurhafSousli/CMS-angular-starter.git',
    clone_url: 'https://github.com/MurhafSousli/CMS-angular-starter.git',
    svn_url: 'https://github.com/MurhafSousli/CMS-angular-starter',
    homepage: 'http://cms.murhafsousli.com/',
    size: 8052,
    stargazers_count: 13,
    watchers_count: 13,
    language: 'CSS',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 7,
    mirror_url: null,
    archived: false,
    open_issues_count: 2,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 7,
    open_issues: 2,
    watchers: 13,
    default_branch: 'master'
  },
  {
    id: 109668542,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMDk2Njg1NDI=',
    name: 'd2-ui',
    full_name: 'MurhafSousli/d2-ui',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/d2-ui',
    description: 'UI and application wiring library for DHIS 2 apps',
    fork: true,
    url: 'https://api.github.com/repos/MurhafSousli/d2-ui',
    forks_url: 'https://api.github.com/repos/MurhafSousli/d2-ui/forks',
    keys_url: 'https://api.github.com/repos/MurhafSousli/d2-ui/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/MurhafSousli/d2-ui/teams',
    hooks_url: 'https://api.github.com/repos/MurhafSousli/d2-ui/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/issues/events{/number}',
    events_url: 'https://api.github.com/repos/MurhafSousli/d2-ui/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/d2-ui/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/MurhafSousli/d2-ui/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/MurhafSousli/d2-ui/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/MurhafSousli/d2-ui/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/issues{/number}',
    pulls_url: 'https://api.github.com/repos/MurhafSousli/d2-ui/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/MurhafSousli/d2-ui/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/d2-ui/deployments',
    created_at: '2017-11-06T08:38:05Z',
    updated_at: '2017-11-06T08:38:07Z',
    pushed_at: '2017-11-06T09:50:31Z',
    git_url: 'git://github.com/MurhafSousli/d2-ui.git',
    ssh_url: 'git@github.com:MurhafSousli/d2-ui.git',
    clone_url: 'https://github.com/MurhafSousli/d2-ui.git',
    svn_url: 'https://github.com/MurhafSousli/d2-ui',
    homepage: 'https://www.dhis2.org',
    size: 2364,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 112828580,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMTI4Mjg1ODA=',
    name: 'graphql-test',
    full_name: 'MurhafSousli/graphql-test',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/graphql-test',
    description: 'GraphQL exercise',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/graphql-test',
    forks_url: 'https://api.github.com/repos/MurhafSousli/graphql-test/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/MurhafSousli/graphql-test/teams',
    hooks_url: 'https://api.github.com/repos/MurhafSousli/graphql-test/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/issues/events{/number}',
    events_url: 'https://api.github.com/repos/MurhafSousli/graphql-test/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/graphql-test/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/MurhafSousli/graphql-test/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/graphql-test/deployments',
    created_at: '2017-12-02T09:11:37Z',
    updated_at: '2017-12-02T10:09:10Z',
    pushed_at: '2017-12-02T10:10:04Z',
    git_url: 'git://github.com/MurhafSousli/graphql-test.git',
    ssh_url: 'git@github.com:MurhafSousli/graphql-test.git',
    clone_url: 'https://github.com/MurhafSousli/graphql-test.git',
    svn_url: 'https://github.com/MurhafSousli/graphql-test',
    homepage: '',
    size: 25,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 105018020,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMDUwMTgwMjA=',
    name: 'magic-agenda',
    full_name: 'MurhafSousli/magic-agenda',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/magic-agenda',
    description: 'Magic Agenda App',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/magic-agenda',
    forks_url: 'https://api.github.com/repos/MurhafSousli/magic-agenda/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/MurhafSousli/magic-agenda/teams',
    hooks_url: 'https://api.github.com/repos/MurhafSousli/magic-agenda/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/issues/events{/number}',
    events_url: 'https://api.github.com/repos/MurhafSousli/magic-agenda/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/magic-agenda/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/MurhafSousli/magic-agenda/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/magic-agenda/deployments',
    created_at: '2017-09-27T12:54:03Z',
    updated_at: '2017-09-27T19:16:51Z',
    pushed_at: '2017-10-01T03:45:27Z',
    git_url: 'git://github.com/MurhafSousli/magic-agenda.git',
    ssh_url: 'git@github.com:MurhafSousli/magic-agenda.git',
    clone_url: 'https://github.com/MurhafSousli/magic-agenda.git',
    svn_url: 'https://github.com/MurhafSousli/magic-agenda',
    homepage: 'https://murhafsousli.github.io/magic-agenda/',
    size: 977,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 121662268,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjE2NjIyNjg=',
    name: 'material-datepicker-issue',
    full_name: 'MurhafSousli/material-datepicker-issue',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/material-datepicker-issue',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/material-datepicker-issue',
    forks_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/teams',
    hooks_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/material-datepicker-issue/deployments',
    created_at: '2018-02-15T17:59:29Z',
    updated_at: '2018-02-15T18:01:04Z',
    pushed_at: '2018-02-15T18:10:43Z',
    git_url: 'git://github.com/MurhafSousli/material-datepicker-issue.git',
    ssh_url: 'git@github.com:MurhafSousli/material-datepicker-issue.git',
    clone_url: 'https://github.com/MurhafSousli/material-datepicker-issue.git',
    svn_url: 'https://github.com/MurhafSousli/material-datepicker-issue',
    homepage: null,
    size: 93,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 70941404,
    node_id: 'MDEwOlJlcG9zaXRvcnk3MDk0MTQwNA==',
    name: 'memory',
    full_name: 'MurhafSousli/memory',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/memory',
    description: 'Memory game 🎴',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/memory',
    forks_url: 'https://api.github.com/repos/MurhafSousli/memory/forks',
    keys_url: 'https://api.github.com/repos/MurhafSousli/memory/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/memory/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/MurhafSousli/memory/teams',
    hooks_url: 'https://api.github.com/repos/MurhafSousli/memory/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/memory/issues/events{/number}',
    events_url: 'https://api.github.com/repos/MurhafSousli/memory/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/memory/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/memory/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/memory/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/memory/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/memory/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/memory/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/memory/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/memory/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/MurhafSousli/memory/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/memory/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/memory/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/memory/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/memory/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/memory/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/memory/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/memory/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/memory/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/memory/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/memory/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/MurhafSousli/memory/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/memory/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/MurhafSousli/memory/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/memory/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/memory/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/memory/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/memory/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/memory/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/memory/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/memory/deployments',
    created_at: '2016-10-14T19:33:25Z',
    updated_at: '2018-08-27T14:15:44Z',
    pushed_at: '2016-11-20T10:41:51Z',
    git_url: 'git://github.com/MurhafSousli/memory.git',
    ssh_url: 'git@github.com:MurhafSousli/memory.git',
    clone_url: 'https://github.com/MurhafSousli/memory.git',
    svn_url: 'https://github.com/MurhafSousli/memory',
    homepage: 'https://murhafsousli.github.io/memory/',
    size: 3739,
    stargazers_count: 15,
    watchers_count: 15,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 11,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'gpl-3.0',
      name: 'GNU General Public License v3.0',
      spdx_id: 'GPL-3.0',
      url: 'https://api.github.com/licenses/gpl-3.0',
      node_id: 'MDc6TGljZW5zZTk='
    },
    forks: 11,
    open_issues: 0,
    watchers: 15,
    default_branch: 'master'
  },
  {
    id: 61431421,
    node_id: 'MDEwOlJlcG9zaXRvcnk2MTQzMTQyMQ==',
    name: 'MurhafSousli',
    full_name: 'MurhafSousli/MurhafSousli',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/MurhafSousli',
    description: 'Some crap',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/MurhafSousli',
    forks_url: 'https://api.github.com/repos/MurhafSousli/MurhafSousli/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/MurhafSousli/MurhafSousli/teams',
    hooks_url: 'https://api.github.com/repos/MurhafSousli/MurhafSousli/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/issues/events{/number}',
    events_url: 'https://api.github.com/repos/MurhafSousli/MurhafSousli/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/MurhafSousli/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/MurhafSousli/MurhafSousli/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/MurhafSousli/deployments',
    created_at: '2016-06-18T11:57:03Z',
    updated_at: '2016-11-15T10:14:38Z',
    pushed_at: '2016-11-22T17:30:57Z',
    git_url: 'git://github.com/MurhafSousli/MurhafSousli.git',
    ssh_url: 'git@github.com:MurhafSousli/MurhafSousli.git',
    clone_url: 'https://github.com/MurhafSousli/MurhafSousli.git',
    svn_url: 'https://github.com/MurhafSousli/MurhafSousli',
    homepage: '',
    size: 23610,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'gh-pages'
  },
  {
    id: 146138024,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNDYxMzgwMjQ=',
    name: 'nest-example',
    full_name: 'MurhafSousli/nest-example',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/nest-example',
    description: 'Practicing on Nest + TypeORM',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/nest-example',
    forks_url: 'https://api.github.com/repos/MurhafSousli/nest-example/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/MurhafSousli/nest-example/teams',
    hooks_url: 'https://api.github.com/repos/MurhafSousli/nest-example/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/issues/events{/number}',
    events_url: 'https://api.github.com/repos/MurhafSousli/nest-example/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/nest-example/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/MurhafSousli/nest-example/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/nest-example/deployments',
    created_at: '2018-08-25T23:58:59Z',
    updated_at: '2018-08-26T03:42:16Z',
    pushed_at: '2018-08-26T03:42:14Z',
    git_url: 'git://github.com/MurhafSousli/nest-example.git',
    ssh_url: 'git@github.com:MurhafSousli/nest-example.git',
    clone_url: 'https://github.com/MurhafSousli/nest-example.git',
    svn_url: 'https://github.com/MurhafSousli/nest-example',
    homepage: null,
    size: 76,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 130045046,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMzAwNDUwNDY=',
    name: 'ng-exercise',
    full_name: 'MurhafSousli/ng-exercise',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/ng-exercise',
    description: 'An app for example exercises for modus recruiting',
    fork: true,
    url: 'https://api.github.com/repos/MurhafSousli/ng-exercise',
    forks_url: 'https://api.github.com/repos/MurhafSousli/ng-exercise/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/MurhafSousli/ng-exercise/teams',
    hooks_url: 'https://api.github.com/repos/MurhafSousli/ng-exercise/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/issues/events{/number}',
    events_url: 'https://api.github.com/repos/MurhafSousli/ng-exercise/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/ng-exercise/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/MurhafSousli/ng-exercise/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/ng-exercise/deployments',
    created_at: '2018-04-18T10:22:06Z',
    updated_at: '2018-07-11T14:32:11Z',
    pushed_at: '2018-05-10T06:32:32Z',
    git_url: 'git://github.com/MurhafSousli/ng-exercise.git',
    ssh_url: 'git@github.com:MurhafSousli/ng-exercise.git',
    clone_url: 'https://github.com/MurhafSousli/ng-exercise.git',
    svn_url: 'https://github.com/MurhafSousli/ng-exercise',
    homepage: 'https://murhafsousli.github.io/ng-exercise',
    size: 355,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 78813863,
    node_id: 'MDEwOlJlcG9zaXRvcnk3ODgxMzg2Mw==',
    name: 'ng-parallax',
    full_name: 'MurhafSousli/ng-parallax',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/ng-parallax',
    description: 'Angular Parallax Module',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/ng-parallax',
    forks_url: 'https://api.github.com/repos/MurhafSousli/ng-parallax/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/MurhafSousli/ng-parallax/teams',
    hooks_url: 'https://api.github.com/repos/MurhafSousli/ng-parallax/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/issues/events{/number}',
    events_url: 'https://api.github.com/repos/MurhafSousli/ng-parallax/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/ng-parallax/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/MurhafSousli/ng-parallax/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/ng-parallax/deployments',
    created_at: '2017-01-13T04:00:50Z',
    updated_at: '2017-01-14T01:12:40Z',
    pushed_at: '2017-01-14T01:12:39Z',
    git_url: 'git://github.com/MurhafSousli/ng-parallax.git',
    ssh_url: 'git@github.com:MurhafSousli/ng-parallax.git',
    clone_url: 'https://github.com/MurhafSousli/ng-parallax.git',
    svn_url: 'https://github.com/MurhafSousli/ng-parallax',
    homepage: null,
    size: 165,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 52843282,
    node_id: 'MDEwOlJlcG9zaXRvcnk1Mjg0MzI4Mg==',
    name: 'ng-wordpress-theme',
    full_name: 'MurhafSousli/ng-wordpress-theme',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/ng-wordpress-theme',
    description: 'Angular starter theme for WordPress',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme',
    forks_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/teams',
    hooks_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/ng-wordpress-theme/deployments',
    created_at: '2016-03-01T02:57:02Z',
    updated_at: '2018-01-23T09:26:05Z',
    pushed_at: '2017-01-29T16:58:10Z',
    git_url: 'git://github.com/MurhafSousli/ng-wordpress-theme.git',
    ssh_url: 'git@github.com:MurhafSousli/ng-wordpress-theme.git',
    clone_url: 'https://github.com/MurhafSousli/ng-wordpress-theme.git',
    svn_url: 'https://github.com/MurhafSousli/ng-wordpress-theme',
    homepage: 'http://ng2wordpress-murhaf.rhcloud.com/',
    size: 387,
    stargazers_count: 16,
    watchers_count: 16,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 3,
    mirror_url: null,
    archived: false,
    open_issues_count: 1,
    license: null,
    forks: 3,
    open_issues: 1,
    watchers: 16,
    default_branch: 'master'
  },
  {
    id: 73189172,
    node_id: 'MDEwOlJlcG9zaXRvcnk3MzE4OTE3Mg==',
    name: 'ng2-parallax',
    full_name: 'MurhafSousli/ng2-parallax',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/ng2-parallax',
    description: 'A parallax plugin/directive for Angular 2.  Learn more at: ',
    fork: true,
    url: 'https://api.github.com/repos/MurhafSousli/ng2-parallax',
    forks_url: 'https://api.github.com/repos/MurhafSousli/ng2-parallax/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/MurhafSousli/ng2-parallax/teams',
    hooks_url: 'https://api.github.com/repos/MurhafSousli/ng2-parallax/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/issues/events{/number}',
    events_url: 'https://api.github.com/repos/MurhafSousli/ng2-parallax/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/ng2-parallax/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/MurhafSousli/ng2-parallax/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/ng2-parallax/deployments',
    created_at: '2016-11-08T13:36:25Z',
    updated_at: '2017-09-26T14:27:36Z',
    pushed_at: '2017-01-13T02:46:32Z',
    git_url: 'git://github.com/MurhafSousli/ng2-parallax.git',
    ssh_url: 'git@github.com:MurhafSousli/ng2-parallax.git',
    clone_url: 'https://github.com/MurhafSousli/ng2-parallax.git',
    svn_url: 'https://github.com/MurhafSousli/ng2-parallax',
    homepage: 'http://cwadrupldijjit.com/ng2-parallax',
    size: 2025,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'master'
  },
  {
    id: 90902509,
    node_id: 'MDEwOlJlcG9zaXRvcnk5MDkwMjUwOQ==',
    name: 'ngx-bar-rating',
    full_name: 'MurhafSousli/ngx-bar-rating',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/ngx-bar-rating',
    description: 'Angular Bar Rating',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/ngx-bar-rating',
    forks_url: 'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/teams',
    hooks_url: 'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-bar-rating/deployments',
    created_at: '2017-05-10T19:49:39Z',
    updated_at: '2018-10-23T11:03:29Z',
    pushed_at: '2018-09-24T17:11:21Z',
    git_url: 'git://github.com/MurhafSousli/ngx-bar-rating.git',
    ssh_url: 'git@github.com:MurhafSousli/ngx-bar-rating.git',
    clone_url: 'https://github.com/MurhafSousli/ngx-bar-rating.git',
    svn_url: 'https://github.com/MurhafSousli/ngx-bar-rating',
    homepage: 'https://murhafsousli.github.io/ngx-bar-rating/',
    size: 919,
    stargazers_count: 58,
    watchers_count: 58,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 18,
    mirror_url: null,
    archived: false,
    open_issues_count: 12,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 18,
    open_issues: 12,
    watchers: 58,
    default_branch: 'master'
  },
  {
    id: 66580634,
    node_id: 'MDEwOlJlcG9zaXRvcnk2NjU4MDYzNA==',
    name: 'ngx-disqus',
    full_name: 'MurhafSousli/ngx-disqus',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/ngx-disqus',
    description: 'Disqus for Angular 💬',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/ngx-disqus',
    forks_url: 'https://api.github.com/repos/MurhafSousli/ngx-disqus/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/MurhafSousli/ngx-disqus/teams',
    hooks_url: 'https://api.github.com/repos/MurhafSousli/ngx-disqus/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/issues/events{/number}',
    events_url: 'https://api.github.com/repos/MurhafSousli/ngx-disqus/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/ngx-disqus/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/MurhafSousli/ngx-disqus/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-disqus/deployments',
    created_at: '2016-08-25T17:53:41Z',
    updated_at: '2018-10-19T01:39:35Z',
    pushed_at: '2018-10-18T06:58:50Z',
    git_url: 'git://github.com/MurhafSousli/ngx-disqus.git',
    ssh_url: 'git@github.com:MurhafSousli/ngx-disqus.git',
    clone_url: 'https://github.com/MurhafSousli/ngx-disqus.git',
    svn_url: 'https://github.com/MurhafSousli/ngx-disqus',
    homepage: 'https://murhafsousli.github.io/ngx-disqus/',
    size: 1520,
    stargazers_count: 64,
    watchers_count: 64,
    language: 'CSS',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 13,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 13,
    open_issues: 0,
    watchers: 64,
    default_branch: 'master'
  },
  {
    id: 123185037,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjMxODUwMzc=',
    name: 'ngx-fire-uploader',
    full_name: 'MurhafSousli/ngx-fire-uploader',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/ngx-fire-uploader',
    description: 'Angular Fire Uploader',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader',
    forks_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/teams',
    hooks_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-fire-uploader/deployments',
    created_at: '2018-02-27T20:34:08Z',
    updated_at: '2018-08-30T23:48:24Z',
    pushed_at: '2018-08-12T09:41:14Z',
    git_url: 'git://github.com/MurhafSousli/ngx-fire-uploader.git',
    ssh_url: 'git@github.com:MurhafSousli/ngx-fire-uploader.git',
    clone_url: 'https://github.com/MurhafSousli/ngx-fire-uploader.git',
    svn_url: 'https://github.com/MurhafSousli/ngx-fire-uploader',
    homepage: '',
    size: 1359,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 1,
    open_issues: 0,
    watchers: 2,
    default_branch: 'master'
  },
  {
    id: 66842319,
    node_id: 'MDEwOlJlcG9zaXRvcnk2Njg0MjMxOQ==',
    name: 'ngx-gallery',
    full_name: 'MurhafSousli/ngx-gallery',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/ngx-gallery',
    description: 'Angular Gallery, Carousel and Lightbox',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/ngx-gallery',
    forks_url: 'https://api.github.com/repos/MurhafSousli/ngx-gallery/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/MurhafSousli/ngx-gallery/teams',
    hooks_url: 'https://api.github.com/repos/MurhafSousli/ngx-gallery/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/issues/events{/number}',
    events_url: 'https://api.github.com/repos/MurhafSousli/ngx-gallery/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/ngx-gallery/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/MurhafSousli/ngx-gallery/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-gallery/deployments',
    created_at: '2016-08-29T12:37:59Z',
    updated_at: '2018-10-23T01:49:02Z',
    pushed_at: '2018-10-19T07:24:33Z',
    git_url: 'git://github.com/MurhafSousli/ngx-gallery.git',
    ssh_url: 'git@github.com:MurhafSousli/ngx-gallery.git',
    clone_url: 'https://github.com/MurhafSousli/ngx-gallery.git',
    svn_url: 'https://github.com/MurhafSousli/ngx-gallery',
    homepage: 'https://murhafsousli.github.io/ngx-gallery/',
    size: 30890,
    stargazers_count: 175,
    watchers_count: 175,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 48,
    mirror_url: null,
    archived: false,
    open_issues_count: 11,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 48,
    open_issues: 11,
    watchers: 175,
    default_branch: 'master'
  },
  {
    id: 98251478,
    node_id: 'MDEwOlJlcG9zaXRvcnk5ODI1MTQ3OA==',
    name: 'ngx-highlightjs',
    full_name: 'MurhafSousli/ngx-highlightjs',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/ngx-highlightjs',
    description: 'Angular syntax highlighting module',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/ngx-highlightjs',
    forks_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/teams',
    hooks_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-highlightjs/deployments',
    created_at: '2017-07-25T01:43:45Z',
    updated_at: '2018-10-18T15:12:09Z',
    pushed_at: '2018-10-08T18:07:02Z',
    git_url: 'git://github.com/MurhafSousli/ngx-highlightjs.git',
    ssh_url: 'git@github.com:MurhafSousli/ngx-highlightjs.git',
    clone_url: 'https://github.com/MurhafSousli/ngx-highlightjs.git',
    svn_url: 'https://github.com/MurhafSousli/ngx-highlightjs',
    homepage: 'https://murhafsousli.github.io/ngx-highlightjs/',
    size: 1783,
    stargazers_count: 73,
    watchers_count: 73,
    language: 'CSS',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 5,
    mirror_url: null,
    archived: false,
    open_issues_count: 1,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 5,
    open_issues: 1,
    watchers: 73,
    default_branch: 'master'
  },
  {
    id: 67102327,
    node_id: 'MDEwOlJlcG9zaXRvcnk2NzEwMjMyNw==',
    name: 'ngx-progressbar',
    full_name: 'MurhafSousli/ngx-progressbar',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/ngx-progressbar',
    description: 'Angular progress bar ☄',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/ngx-progressbar',
    forks_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/teams',
    hooks_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/ngx-progressbar/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-progressbar/deployments',
    created_at: '2016-09-01T05:55:21Z',
    updated_at: '2018-10-22T20:47:40Z',
    pushed_at: '2018-10-22T20:47:38Z',
    git_url: 'git://github.com/MurhafSousli/ngx-progressbar.git',
    ssh_url: 'git@github.com:MurhafSousli/ngx-progressbar.git',
    clone_url: 'https://github.com/MurhafSousli/ngx-progressbar.git',
    svn_url: 'https://github.com/MurhafSousli/ngx-progressbar',
    homepage: 'https://murhafsousli.github.io/ngx-progressbar',
    size: 3516,
    stargazers_count: 535,
    watchers_count: 535,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 71,
    mirror_url: null,
    archived: false,
    open_issues_count: 2,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 71,
    open_issues: 2,
    watchers: 535,
    default_branch: 'master'
  },
  {
    id: 109789410,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMDk3ODk0MTA=',
    name: 'ngx-scrollbar',
    full_name: 'MurhafSousli/ngx-scrollbar',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/ngx-scrollbar',
    description:
      'Custom overlay-scrollbars with native scrolling mechanism for Angular',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/ngx-scrollbar',
    forks_url: 'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/teams',
    hooks_url: 'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-scrollbar/deployments',
    created_at: '2017-11-07T05:08:08Z',
    updated_at: '2018-10-22T17:54:26Z',
    pushed_at: '2018-09-11T13:37:52Z',
    git_url: 'git://github.com/MurhafSousli/ngx-scrollbar.git',
    ssh_url: 'git@github.com:MurhafSousli/ngx-scrollbar.git',
    clone_url: 'https://github.com/MurhafSousli/ngx-scrollbar.git',
    svn_url: 'https://github.com/MurhafSousli/ngx-scrollbar',
    homepage: 'https://murhafsousli.github.io/ngx-scrollbar/',
    size: 1390,
    stargazers_count: 94,
    watchers_count: 94,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 19,
    mirror_url: null,
    archived: false,
    open_issues_count: 4,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 19,
    open_issues: 4,
    watchers: 94,
    default_branch: 'master'
  },
  {
    id: 65001441,
    node_id: 'MDEwOlJlcG9zaXRvcnk2NTAwMTQ0MQ==',
    name: 'ngx-sharebuttons',
    full_name: 'MurhafSousli/ngx-sharebuttons',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/ngx-sharebuttons',
    description: 'Angular Share Buttons ☂',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons',
    forks_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/teams',
    hooks_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-sharebuttons/deployments',
    created_at: '2016-08-05T08:14:27Z',
    updated_at: '2018-10-23T02:51:51Z',
    pushed_at: '2018-10-07T00:50:00Z',
    git_url: 'git://github.com/MurhafSousli/ngx-sharebuttons.git',
    ssh_url: 'git@github.com:MurhafSousli/ngx-sharebuttons.git',
    clone_url: 'https://github.com/MurhafSousli/ngx-sharebuttons.git',
    svn_url: 'https://github.com/MurhafSousli/ngx-sharebuttons',
    homepage: 'https://murhafsousli.github.io/ngx-sharebuttons/',
    size: 17441,
    stargazers_count: 263,
    watchers_count: 263,
    language: 'CSS',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 64,
    mirror_url: null,
    archived: false,
    open_issues_count: 4,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 64,
    open_issues: 4,
    watchers: 263,
    default_branch: 'master'
  },
  {
    id: 85423231,
    node_id: 'MDEwOlJlcG9zaXRvcnk4NTQyMzIzMQ==',
    name: 'ngx-teximate',
    full_name: 'MurhafSousli/ngx-teximate',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/ngx-teximate',
    description: 'Angular text animations',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/ngx-teximate',
    forks_url: 'https://api.github.com/repos/MurhafSousli/ngx-teximate/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/MurhafSousli/ngx-teximate/teams',
    hooks_url: 'https://api.github.com/repos/MurhafSousli/ngx-teximate/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/issues/events{/number}',
    events_url: 'https://api.github.com/repos/MurhafSousli/ngx-teximate/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/ngx-teximate/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/MurhafSousli/ngx-teximate/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-teximate/deployments',
    created_at: '2017-03-18T18:29:38Z',
    updated_at: '2018-10-22T20:49:32Z',
    pushed_at: '2018-10-22T20:49:51Z',
    git_url: 'git://github.com/MurhafSousli/ngx-teximate.git',
    ssh_url: 'git@github.com:MurhafSousli/ngx-teximate.git',
    clone_url: 'https://github.com/MurhafSousli/ngx-teximate.git',
    svn_url: 'https://github.com/MurhafSousli/ngx-teximate',
    homepage: 'https://murhafsousli.github.io/ngx-teximate/',
    size: 1116,
    stargazers_count: 17,
    watchers_count: 17,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 5,
    mirror_url: null,
    archived: false,
    open_issues_count: 2,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 5,
    open_issues: 2,
    watchers: 17,
    default_branch: 'master'
  },
  {
    id: 63754576,
    node_id: 'MDEwOlJlcG9zaXRvcnk2Mzc1NDU3Ng==',
    name: 'ngx-wordpress',
    full_name: 'MurhafSousli/ngx-wordpress',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/ngx-wordpress',
    description: 'Angular WordPress Module ✨',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/ngx-wordpress',
    forks_url: 'https://api.github.com/repos/MurhafSousli/ngx-wordpress/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/MurhafSousli/ngx-wordpress/teams',
    hooks_url: 'https://api.github.com/repos/MurhafSousli/ngx-wordpress/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/ngx-wordpress/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/ngx-wordpress/deployments',
    created_at: '2016-07-20T06:02:21Z',
    updated_at: '2018-10-10T17:42:15Z',
    pushed_at: '2018-10-07T20:08:57Z',
    git_url: 'git://github.com/MurhafSousli/ngx-wordpress.git',
    ssh_url: 'git@github.com:MurhafSousli/ngx-wordpress.git',
    clone_url: 'https://github.com/MurhafSousli/ngx-wordpress.git',
    svn_url: 'https://github.com/MurhafSousli/ngx-wordpress',
    homepage: '',
    size: 1529,
    stargazers_count: 59,
    watchers_count: 59,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 15,
    mirror_url: null,
    archived: false,
    open_issues_count: 1,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 15,
    open_issues: 1,
    watchers: 59,
    default_branch: 'master'
  },
  {
    id: 128894508,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjg4OTQ1MDg=',
    name: 'openvpn',
    full_name: 'MurhafSousli/openvpn',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/openvpn',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/openvpn',
    forks_url: 'https://api.github.com/repos/MurhafSousli/openvpn/forks',
    keys_url: 'https://api.github.com/repos/MurhafSousli/openvpn/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/MurhafSousli/openvpn/teams',
    hooks_url: 'https://api.github.com/repos/MurhafSousli/openvpn/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/issues/events{/number}',
    events_url: 'https://api.github.com/repos/MurhafSousli/openvpn/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/openvpn/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/MurhafSousli/openvpn/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/openvpn/deployments',
    created_at: '2018-04-10T07:48:16Z',
    updated_at: '2018-04-10T07:48:18Z',
    pushed_at: '2018-04-10T07:48:17Z',
    git_url: 'git://github.com/MurhafSousli/openvpn.git',
    ssh_url: 'git@github.com:MurhafSousli/openvpn.git',
    clone_url: 'https://github.com/MurhafSousli/openvpn.git',
    svn_url: 'https://github.com/MurhafSousli/openvpn',
    homepage: null,
    size: 1,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 120226658,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjAyMjY2NTg=',
    name: 'packagr-issue',
    full_name: 'MurhafSousli/packagr-issue',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/packagr-issue',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/packagr-issue',
    forks_url: 'https://api.github.com/repos/MurhafSousli/packagr-issue/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/MurhafSousli/packagr-issue/teams',
    hooks_url: 'https://api.github.com/repos/MurhafSousli/packagr-issue/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/packagr-issue/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/packagr-issue/deployments',
    created_at: '2018-02-04T21:52:22Z',
    updated_at: '2018-02-04T21:52:22Z',
    pushed_at: '2018-02-04T21:52:23Z',
    git_url: 'git://github.com/MurhafSousli/packagr-issue.git',
    ssh_url: 'git@github.com:MurhafSousli/packagr-issue.git',
    clone_url: 'https://github.com/MurhafSousli/packagr-issue.git',
    svn_url: 'https://github.com/MurhafSousli/packagr-issue',
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  {
    id: 97857153,
    node_id: 'MDEwOlJlcG9zaXRvcnk5Nzg1NzE1Mw==',
    name: 'property-finder',
    full_name: 'MurhafSousli/property-finder',
    private: false,
    owner: {
      login: 'MurhafSousli',
      id: 8130692,
      node_id: 'MDQ6VXNlcjgxMzA2OTI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/8130692?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/MurhafSousli',
      html_url: 'https://github.com/MurhafSousli',
      followers_url: 'https://api.github.com/users/MurhafSousli/followers',
      following_url:
        'https://api.github.com/users/MurhafSousli/following{/other_user}',
      gists_url: 'https://api.github.com/users/MurhafSousli/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/MurhafSousli/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/MurhafSousli/subscriptions',
      organizations_url: 'https://api.github.com/users/MurhafSousli/orgs',
      repos_url: 'https://api.github.com/users/MurhafSousli/repos',
      events_url: 'https://api.github.com/users/MurhafSousli/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/MurhafSousli/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/MurhafSousli/property-finder',
    description: 'Property Finder',
    fork: false,
    url: 'https://api.github.com/repos/MurhafSousli/property-finder',
    forks_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/forks',
    keys_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/teams',
    hooks_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/hooks',
    issue_events_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/events',
    assignees_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/branches{/branch}',
    tags_url: 'https://api.github.com/repos/MurhafSousli/property-finder/tags',
    blobs_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/languages',
    stargazers_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/stargazers',
    contributors_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/contributors',
    subscribers_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/subscribers',
    subscription_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/subscription',
    commits_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/merges',
    archive_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/downloads',
    issues_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/labels{/name}',
    releases_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/MurhafSousli/property-finder/deployments',
    created_at: '2017-07-20T16:35:01Z',
    updated_at: '2017-07-24T12:36:39Z',
    pushed_at: '2017-07-24T12:35:27Z',
    git_url: 'git://github.com/MurhafSousli/property-finder.git',
    ssh_url: 'git@github.com:MurhafSousli/property-finder.git',
    clone_url: 'https://github.com/MurhafSousli/property-finder.git',
    svn_url: 'https://github.com/MurhafSousli/property-finder',
    homepage: 'https://MurhafSousli.github.io/property-finder',
    size: 383,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'gpl-3.0',
      name: 'GNU General Public License v3.0',
      spdx_id: 'GPL-3.0',
      url: 'https://api.github.com/licenses/gpl-3.0',
      node_id: 'MDc6TGljZW5zZTk='
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  }
];

const ids = [
  '63754576',
  '85423231',
  '65001441',
  '109789410',
  '67102327',
  '98251478',
  '98251478',
  '66842319',
  '123185037',
  '66580634',
  '90902509',
  '70941404',
  '72248970'
];
