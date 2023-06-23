# GOVUK Repository Template

This is a personal template for tracking best practices for what information should be contained in a GOV.UK repository.

There are elements of front end dependencies within here, this is mainly to cover the case of using the [govuk-frontend](https://frontend.design-system.service.gov.uk/) npm package.

## Docs

We store our documentation in the docs folder at the root of the repository. This allows easy access to new team members or contributors to understand how our code works.

### ADRs

All Architectural Decisions should be recorded in ADRs.

### Diagrams

Where possible, use structurizr to create your diagrams as code. This should be done to a max of level 3, ideally any need to document code structure should automatically be generated using your coding languages plugin options to generate on build/commit the appropriate files.

### Runbooks

Any information needed to get the repository working should be documented and kept up to date in this folder. This includes setting up local environments, updating dependencies and how to build into a live environment.

## Google Lighthouse

This repo provides the setup for testing your sites front end performance in Github Actions. It assumes the site will be static, but if it is dynamic, you can read the documentation to allow the script to navigate to specific urls. Do not forget about setting benchmarks for how your site should perform on slower devices.

Budgets can be set in the budget.json file in the src directory.

## pa11y

pa11y is also enabled in Github Actions following the same idea of a static site. Replace this with your own implementation should you not have a static site generated or adapt the code to call pa11y through something like Cypress.

## cspell

An optional extra that I like, this will check on commit and in CI for spelling mistakes in your files. You can add custom words to the dictionary, which will be required given the amount of acronyms in goverment.

## Makefile

Using Makefiles can help with running multi step processes and reducing complexity for getting your repo up and running. The example in this repo allows the running of Structurizr quickly from the command line.

## pre-commit

Pre-commit hooks allow you to run checks on files before they are committed. This is to prevent mistakes that only get caught during CI/CD and reducing the amount of tidy up/refactor commits in your code (yes I know you can squash them anyway). For a list of supported hooks, see this link [https://pre-commit.com/hooks.html](https://pre-commit.com/hooks.html).

## Renovate

Dependabot is great, Renovate is brilliant. If you are open source (which most Governement sites should be), then you can use Renovate for free and handle dependency updates better. Check out their documentation for all the benefits, this repo is setup to group common updates together while waiting 3 days after a release to raise a PR.

If you can and your testing is strong, you can set your dependecies to auto-merge in Github.
