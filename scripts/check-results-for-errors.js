module.exports = ({ github, context }) => {
    const issue_number = context.issue.number;
    const response = '${{ steps.call-api.outputs.response }}';
    const org = '${{ steps.get-org.outputs.org }}';
    if (response.includes("Bad credentials") || response.includes("Not Found")) {
        let body = `Error: Bad credentials - the credentials used do not have access to \`${org}\` .\n\nPlease \[check\]\(../settings/secrets/actions\) that the \`COPILOT_ACCESS_LIST\` secret contains a valid classic PAT, and that it has the \`manage_billing:copilot\` permission for the organization.`;
        github.rest.issues.createComment({
            issue_number: issue_number,
            owner: context.repo.owner,
            repo: context.repo.repo,
            body: body
        });
        throw new Error(body);
    } else if (response.includes("set the GH_TOKEN environment variable")) {
        let body = `Error: Please \[check\]\(../settings/secrets/actions\) the COPILOT_ACCESS_LIST secret exists and is accessible to this repository.`;
        github.rest.issues.createComment({
            issue_number: issue_number,
            owner: context.repo.owner,
            repo: context.repo.repo,
            body: body
        });
        throw new Error(body);
    } else if (response.includes("error")) {
        let body = `Error: ${response}`;
        github.rest.issues.createComment({
            issue_number: issue_number,
            owner: context.repo.owner,
            repo: context.repo.repo,
            body: body
        });
        throw new Error(body);
    }
    return true;
};

