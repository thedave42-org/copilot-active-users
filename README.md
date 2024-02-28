# Copilot User list
This repository will generate a list of the current Copilot users for an Organization.  It retrieves that information from the [Copilot Management API](https://docs.github.com/en/rest/copilot/copilot-business?apiVersion=2022-11-28#list-all-copilot-business-seat-assignments-for-an-organization). You can create a GitHub Issue in this repo that will trigger the retrieval of the list of Copilot users from this GitHub REST API and provide that information as a file available from a comment added to that same Issue.  The repository will also collect this data daily for one or more organization, so you can examine information about usage trends.

### Setup
To get started you can click the green button on the upper right of this page to `Use this repository as a template` and create a new repository in your Organization.  (If you fork the repo, you wont be able to make your copy private.) The workflow requires a GitHub classic PAT defined as an [Actions Secret](../../settings/secrets/actions) and available to this workflow named `COPILOT_ACCESS_LIST`.  The PAT should have the permission `manage_billing:copilot`. 

Note: The PAT should have `manage_billing:copilot` access for any Organization you want to report on

Once you have the secret defined, you can use the [available issue template](../../issues/new?assignees=&labels=copilot-users&projects=&template=list-active-users.yaml&title=List+Copilot+Users) to get started.  The template will prompt you for the organization name, and the creation of the issue will trigger the workflow.  A comment will be posted to the issue containing a link to a file with the user list for download within a few minutes.  If there is a problem with retrieving the list, the comment will provide an error message.

### Scheduled Data Collection
This repo also contains a workflow that runs daily and collects user data for one or more Organizations.  The user data is stored in the `data` directory of this reposiotry in JSON format.  Files are named based on the date and time the data is collected and the name of the organization it was collected from (`YYYYMMDD-HHMMss-<org-name>-copilot-users.json`).  The report will default to using the Organization that owns the repo.  You can provide a configuration file called `config/organizations.json` to specify a different Organization or more than one Organization for the report.  An example of the JSON format is available in `config/organizations.json.example`.

Hint: If you do not want scheduled data collection you can disable the workflow `Scheduled Report` from the Actions tab of this repo.
