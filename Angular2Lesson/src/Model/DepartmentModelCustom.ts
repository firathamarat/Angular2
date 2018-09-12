
export class DepartmentModelCustom {

    departmentName: string;
    departmentAddress: string;
    isContract: boolean;
    attachment: string;
    language: string;
    email:string;

    constructor(DepartmentName: string, DepartmentAddress: string, IsContract: boolean, Attachment: string, Language: string, Email:string) {

        this.departmentName = DepartmentName;
        this.departmentAddress = DepartmentAddress;
        this.isContract = IsContract;
        this.attachment = Attachment;
        this.language = Language;
        this.email = Email;
    }

}