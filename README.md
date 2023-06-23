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


