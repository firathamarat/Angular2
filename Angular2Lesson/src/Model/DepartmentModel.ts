
export class DepartmentModel {

    departmentName: string;
    departmentAddress: string;
    isContract: boolean;
    attachment: string;
    language: string;

    constructor(DepartmentName: string, DepartmentAddress: string, IsContract: boolean, Attachment: string, Language: string) {

        this.departmentName = DepartmentName;
        this.departmentAddress = DepartmentAddress;
        this.isContract = IsContract;
        this.attachment = Attachment;
        this.language = Language;
    }

}