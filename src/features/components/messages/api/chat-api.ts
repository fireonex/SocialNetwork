type StatusChangedSubscribers = (status: Status) => void;
type MessagesReceivedSubscribers = (messages: ChatMessageApi[]) => void;

type EventsNames = 'messages-received' | 'status-changed';

export type ChatMessageApi = {
    message: string;
    photo: string;
    userId: number;
    userName: string;
};

export type Status = 'pending' | 'ready' | 'error';

const subscribers = {
    'messages-received': [] as MessagesReceivedSubscribers[],
    'status-changed': [] as StatusChangedSubscribers[]
};

let ws: WebSocket | null = null;

const closeHandler = () => {
    notifySubscribersAboutStatus('pending');
    setTimeout(createChannel, 3000);
};

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers['messages-received'].forEach(s => s(newMessages));
};

const openHandler = () => {
    notifySubscribersAboutStatus('ready');
};

const errorHandler = () => {
    notifySubscribersAboutStatus('error');
    console.error('REFRESH PAGE');
};

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler);
    ws?.removeEventListener('message', messageHandler);
    ws?.removeEventListener('open', openHandler);
    ws?.removeEventListener('error', errorHandler);
};

const notifySubscribersAboutStatus = (status: Status) => {
    subscribers['status-changed'].forEach(s => s(status));
};

function createChannel() {
    cleanUp();
    ws?.close();
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    notifySubscribersAboutStatus('pending');
    ws.addEventListener('close', closeHandler);
    ws.addEventListener('message', messageHandler);
    ws.addEventListener('open', openHandler);
    ws.addEventListener('error', errorHandler);
}

export const chatAPI = {
    start() {
        createChannel();
    },
    stop() {
        subscribers['messages-received'] = [];
        subscribers['status-changed'] = [];
        cleanUp();
        ws?.close();
    },
    subscribe(eventName: EventsNames, callback: MessagesReceivedSubscribers | StatusChangedSubscribers) {
        if (eventName === 'messages-received') {
            subscribers['messages-received'].push(callback as MessagesReceivedSubscribers);
        } else if (eventName === 'status-changed') {
            subscribers['status-changed'].push(callback as StatusChangedSubscribers);
        }
        return () => {
            this.unsubscribe(eventName, callback);
        };
    },
    unsubscribe(eventName: EventsNames, callback: MessagesReceivedSubscribers | StatusChangedSubscribers) {
        if (eventName === 'messages-received') {
            subscribers['messages-received'] = subscribers['messages-received'].filter(s => s !== callback);
        } else if (eventName === 'status-changed') {
            subscribers['status-changed'] = subscribers['status-changed'].filter(s => s !== callback);
        }
    },
    sendMessage(message: string) {
        ws?.send(message);
    }
};
