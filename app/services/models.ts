
export interface Pagination<TData> {
    "total": number,
    "page": number,
    "pageSize": number,
    "totalPages": number,
    "data": TData[]
}

export interface User {
    "id"?: string,
    "name": string,
    "familyName": string,
    "phoneNumber": string,
    "nationalCode": string,
    "address": string,
    "pendingUntil": string,
    state?: "locked" | "unlocked"
}