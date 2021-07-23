export default class IssueData {
    constructor(title, description, opener, openDate, priority, status, assignee = "", resolved = "") {
        this.title = title;
        this.description = description;
        this.opener = opener;
        this.openDate = openDate;
        this.priority = priority;
        this.status = status;
        this.assignee = assignee;
        this.resolved = resolved;
    }
}