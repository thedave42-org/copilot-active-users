# Copilot User list
This repository will generate a list of the current Copilot for Business users for an Organization.  It retrieves that information from the [Copilot Management API](https://docs.github.com/en/rest/copilot/copilot-business?apiVersion=2022-11-28#list-all-copilot-business-seat-assignments-for-an-organization). You can create a GitHub Issue in this repo that will trigger the retrieval of the list of Copilot for Business users from the GitHub REST API and provide that information as a file available from a comment added to that same Issue.

### Setup
To get started you can use this repository as a template and then enable the ability to run its Action workflows. (If you fork the repo, you wont be able to make your copy private.) The workflow requires a GitHub classic PAT defined as an [Actions Secret](../../settings/secrets/actions) and available to this workflow named `COPILOT_ACCESS_LIST`.  The PAT should have the permission `manage_billing:copilot`. 

Once you have the secret defined, you can use the [available issue template](../../issues/new?assignees=&labels=copilot-users&projects=&template=list-active-users.yaml&title=List+Copilot+Users) to get started.  The template will prompt you for the organization name, and the creation of the issue will trigger the workflow.  A comment will be posted to the issue containing a link to a file with the user list for download within a few minutes.  If there is a problem with retrieving the list, the comment will provide an error message.

### Scheduled Data Collection
