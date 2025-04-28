export interface Task {
    id: number;
    title: string;
    description: string;
    dueAt: Date;
    status: number;
};

export function truncateLongString(str: string): string {
    const maxLen = 40;
    return str.length > maxLen ? `${str.substring(0,maxLen-3)}...` : str;
}

export function formatDate(date: string): string {
return new Date(date).toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    
    hour: '2-digit',
    minute: '2-digit'
});
}