# Copilot Usage
This repository allows you to use an issue to retrieve information about an Organization's Copilot Usage.  It retrieves that information from the [Copilot Usage Metrics API](https://docs.github.com/en/enterprise-cloud@latest/rest/copilot/copilot-usage?apiVersion=2022-11-28). You can create a GitHub Issue in this repo that will trigger the retrieval of the list of Copilot usage from this GitHub REST API and provide that information as a comment added to that same Issue.  There will also be a pdf formatted report of the same information available to download.

### Setup
To get started you can click the green button on the upper right of this page to `Use this repository as a template` and create a new repository in your Organization.  (If you fork the repo, you wont be able to make your copy private.) The workflow requires a GitHub classic PAT defined as an [Actions Secret](../../settings/secrets/actions) and available to this workflow named `COPILOT_ACCESS_LIST`.  The PAT should have the permission `manage_billing:copilot`. 

Note: The PAT should have `manage_billing:copilot` access for any Organization you want to report on

Once you have the secret defined, you can use the [available issue template](../../issues/new?assignees=&labels=copilot-users&projects=&template=list-active-users.yaml&title=List+Copilot+Users) to get started.  The template will prompt you for the organization name, and the creation of the issue will trigger the workflow.  A comment will be posted to the issue containing a link to a file with the user list for download within a few minutes.  If there is a problem with retrieving the list, the comment will provide an error message.

