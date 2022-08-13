/**
 * item for frontend
 */
 export interface Item {
    itemId: string;
    categoryId: string;
    categoryName:string;
    itemName: string;
    amount: number;
    period: number;
    unitName: string;
    addDate: string;
    updDate: string;
}

export interface Category {
    categoryId: string
    categoryName: string
    addDate: string
    updDate: string
}