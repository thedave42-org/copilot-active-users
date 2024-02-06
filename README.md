# Copilot: User list
This repository will generate a list of the current Copilot for Business users for an Organization.  You can create a GitHub Issue in this repo that will trigger the retrieval of the list of Copilot for Business users from the GitHub REST API and provide that information as a file available from a comment added to that same Issue.

### Setup
To get started you can fork the repo and enable the ability to run Action workflows.  The workflow requires a GitHub classic PAT defined as an Actions Secret and available to this workflow named `COPILOT_ACCESS_LIST`.  The PAT should have the permission `manage_billing:copilot`. 

Once you have the secret defined, you can use the [available issue template](issues/new?assignees=&labels=copilot-users&projects=&template=list-active-users.yaml&title=List+Copilot+Users) to get started.  The template will prompt you for the organization name, and the creation of the issue will trigger the workflow.  A comment will be posted to the issue containing a link to a file with the user list for download within a few minutes.  If there is a problem with retrieving the list, the comment will provide an error message.