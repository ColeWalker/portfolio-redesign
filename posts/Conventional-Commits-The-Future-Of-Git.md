---
excerpt: Conventional commits are something which have revolutionized the way that I work, and made me re-think how I go about my git workflow.
---

# Conventional Commits, the Future of Git

Conventional commits are something which have revolutionized the way that I work, and made me re-think how I go about my git workflow.

## What?

Put simply, conventional commits is a standard for writing commit messages. Just like we have [conventions for naming variables](https://medium.com/better-programming/naming-conventions-in-go-short-but-descriptive-1fa7c6d2f32a), or [numbering release versions](https://semver.org/), there is a convention for writing commit messages.

Put even simpler, conventional commits tell you how to write your commit messages.

## They're easier to write

There are many benefits to adopting conventional commits. But the first thing that an adopter notices is that they simplify the process of writing a commit. All developers are aware how difficult it can be to name things, and writing descriptive yet succinct commits can be even more difficult. By providing a format to follow, conventional commits take away a lot of the thinking work that is required when writing a commit message, and point us in a good direction.

## They're easier to read

Secondly, they make it easier to read the history of a repository, for both humans and computers. The beauty of the convention is that it was designed for maintainers to easily be able to gloss over commits and get the gist of what each has done to the repository. When [gitmojis](https://gitmoji.carloscuesta.me/) are added into the fray, it makes it even easier.

### Okay, so what are gitmojis?

[Gitmojis](https://gitmoji.carloscuesta.me/) are a convention (yes, another one) for attributing meaning to emojis in the context of development.

For example:

- 🎨 = "Improve structure / format of the code."
- ⚡️ = "Improve performance."
- ✨ = "Introduce new features."

These emojis make it even easier to see what changes a commit made, because they're bright and instantly pop out to the reader. Even someone unfamiliar with the format can understand the general idea because of how humans associate meanings with images.

## Tools can parse it

Conventions make it easy for automated tools to process commits. Tools exist to [lint commits](https://github.com/conventional-changelog/commitlint), [help to write them](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits), or even [automate changelogs and versioning.](https://github.com/semantic-release/semantic-release)

## I'm sold, what's the convention?

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

This is a basic representation of the convention, written in [Extended Backus–Naur Form.](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form) Further rules and explanations can be found on [the conventional commits website.](https://www.conventionalcommits.org/en/v1.0.0/)

### Type

The type of commit describes the type of work that occurs. You can think of this as being similar to the labels that are added to issues or stories.

The convention defines `feat` for features, and `fix` for bugfixes, but others can be added if necessary. For example, [commitlint](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) adds several more:

- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

### Scope (optional)

Scope represents the area that you're performing the work on, and thus entirely depends on the project that is being worked on. Scope is usually surrounded by `( )`. If a breaking change occurs, sometimes an `!` is placed at the end of the scope to denote so.

For example, a web-application might have:

- (database)
- (dependencies)
- (styling)

### Description

This is where the description of the commit goes. It is a brief statement describing the work that was done. Any gitmojis related to the changes should go at the beginning of this.

### Body (optional)

This is where a longer description would go if necessary. If breaking changes were introduced with this commit, they must be explained either here or footer, in the format:
`BREAKING CHANGE change description`

### Footer (optional)

Footers are entirely dependant on the project once again, but they must follow a specific format, "each footer MUST consist of a word token, followed by either a `:<space>` or `<space>#` separator, followed by a string value." (From the [conventional commits website](https://www.conventionalcommits.org/en/v1.0.0/#specification))

### Examples

(courtesy of the [conventional commits website](https://www.conventionalcommits.org/en/v1.0.0/#examples))

```
feat: ✨ allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

```
refactor!: 💥 drop support for Node 6

BREAKING CHANGE: refactor to use JavaScript features not available in Node 6.
```

```
fix: ✏️ correct minor typos in code

see the issue for details

on typos fixed.

Reviewed-by: Z
Refs #133
```

## Conclusion

Conventional commits are good and you should try them.
