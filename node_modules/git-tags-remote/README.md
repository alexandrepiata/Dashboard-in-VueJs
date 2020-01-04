# git-tags-remote
[![GitHub issues](https://img.shields.io/npm/v/git-tags-remote.svg)](https://www.npmjs.com/package/git-tags-remote) [![Build Status](https://travis-ci.org/sh0ji/git-tags-remote.svg?branch=master)](https://travis-ci.org/sh0ji/git-tags-remote) [![dependencies Status](https://david-dm.org/sh0ji/git-tags-remote/status.svg)](https://david-dm.org/sh0ji/git-tags-remote)
> Get remote repository tags.

Inspired by [remote-git-tags](https://github.com/sindresorhus/remote-git-tags) and [node-git-tags](https://github.com/bfricka/node-git-tags). Allows any type of remote repository, including repositories accessed through SSH or private repositories. If `git ls-remote --tags` works for you, so will this.

## Install
```sh
$ npm install --save git-tags-remote
```
Note that a [git binary and command line interface](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) is a prerequisite.

## Usage
```javascript
const gitTagsRemote = require('git-tags-remote');

gitTagsRemote.get('git@github.com:sh0ji/focus-rover.git')
    .then(tags => console.log(tags));
// => Map {'v1.0.0-rc.2' => '8e048a0fd9cb668366eef550be445ac761efd667', ...}
```

## API
`.get(gitUrl)`  
Returns a `Promise<Map>` with the Git tags as keys and their commit SHA as values, just like [remote-git-tags](https://github.com/sindresorhus/remote-git-tags).  
 * `gitUrl` must be a [valid git url](https://git-scm.com/docs/git-clone#_git_urls_a_id_urls_a).  
      e.g. `'https://github.com/sh0ji/git-tags-remote.git'` is valid but `'github.com/sh0ji/git-tags-remote'` is not.

`.latest(gitUrl)`  
Returns a `Promise<Array>` with the latest git tag and commit SHA value.  
    e.g. `['v1.0.0-rc.2', '8e048a0fd9cb668366eef550be445ac761efd667']`
