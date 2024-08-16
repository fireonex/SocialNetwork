export type dialogsData = {
    id: string;
    personName: string;
};

export type messagesInDialogsData = {
    id: string;
    text: string;
};

export type dialogsPage = {
    dialogsData: dialogsData[];
    messagesInDialogsData: messagesInDialogsData[];
};


export type DialogsFormData = {
    newMessageText: string
}