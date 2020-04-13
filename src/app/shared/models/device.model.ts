export interface IDevice{
    deviceName : string,
    manufacturer ?: string,
    model?: string,
    os ?:  string,
    battery? : number,
    memory ?: number,
    memoryCapacity ?: number,
    phoneNumber ?: string,
    username ?: string,
    macAddress ?: string,
    isChecked?: boolean;
}