export const COMPANY_ID = 'storage/companyId';

export const storeValue = (key, value) => localStorage.setItem(key, value);
export const getValue = key => localStorage.getItem(key) || undefined;
export const removeValue = key => localStorage.removeItem(key);
export const hasValue = key => !!localStorage.getItem(key);
