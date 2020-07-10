export class Contact {
    title: String;
    items: [ContactInfoGroup];
}

export class ContactInfoGroup {
    infoItems: [ContactInfo]
}

export class ContactInfo {
    infoName: String;
    infoValue: String;
}
