export class HistoryItem {
    title: String;
    subtitle: String;
    description: String;
    startDate: String;
    endDate: String;
}

export class History{
    title: String;
    items: [HistoryItem];
}
