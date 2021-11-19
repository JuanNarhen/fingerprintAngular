export class NewAssistantRequest{
    private email: string;
    private name: string;
    private lastUpdateDate: Date;
    private fingerprintImage: string;

    constructor(firstName:string, lastName:string, emailInfo:string, fingerprintSim:string){
        this.email = emailInfo;
        this.name = firstName + " " + lastName;
        this.fingerprintImage = fingerprintSim;
        this.lastUpdateDate = new Date();
    }

    public getEmail():string{
        return this.email;
    }

    public setEmail(value:string){
        this.email = value;
    }

    public getName():string{
        return this.name;
    }

    public setName(value:string){
        this.name = value;
    }

    public getLastUpdateDate():Date{
        return this.lastUpdateDate;
    }

    public setLastUpdateDate(value:Date){
        this.lastUpdateDate = value;
    }

    public getFingerprint():string{
        return this.fingerprintImage;
    }

    public setFingerprint(value:string){
        this.fingerprintImage = value;
    }
}