import {ConfirmationService, MessageService} from 'primeng/api';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

@Injectable()
export class AbstractEditController<DTO extends BaseDto, CRITERIA extends BaseCriteria, SERVICE extends AbstractService<DTO, CRITERIA>> {

    protected _submitted = false;
    protected _errorMessages = new Array<string>();
    private myDatePipe: DatePipe;
    private myService: SERVICE;
    private myMessageService: MessageService;
    private myConfirmationService: ConfirmationService;
    private myRoleService: RoleService;
    private myRouter: Router;
    private myStringUtilService: StringUtilService;
    private _activeTab = 0;
    private _file: any;
    private _files: any;
    public constructor(datePipe: DatePipe, service: SERVICE, messageService: MessageService,
                       confirmationService: ConfirmationService, roleService: RoleService, router: Router
        , stringUtilService: StringUtilService) {
        this.myDatePipe = datePipe;
        this.myService = service;
        this.myMessageService = messageService;
        this.myConfirmationService = confirmationService;
        this.myRoleService = roleService;
        this.myRouter = router;
        this.myStringUtilService = stringUtilService;

    }

    public edit(): void {
        this.submitted = true;
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.editWithShowOption(false);
        } else {
            this.myMessageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }

    public editWithShowOption(showList: boolean) {
        this.myService.edit().subscribe(religion=>{
            const myIndex = this.items.findIndex(e => e.id === this.item.id);
            this.items[myIndex] = religion;
            this.editDialog = false;
            this.submitted = false;
            this.item = this.myService.constrcutDto();
        } , error =>{
            console.log(error);
        });
    }


    public uploadOne(event, i: number): void{
        this.file = event.files[0];
        console.log(event.files[0]);
        console.log(this.file);
        let formData = new FormData();
        formData.append('file',this.file);
        this.myService.upload(formData,i);
    }

    public uploadMultiple(event, i: number): void{
        this.files = event.files;
        console.log(event.files);
        const formData: FormData = new FormData();
        for (let i = 0; i < this.files.length; i++) {
            formData.append('files', this.files[i]);
        }
        this.myService.uploadMultiple(formData,i);
    }

    public validateForm(): void {
        
    }

    public setValidation(value: boolean) {

    }

    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }

    get items(): Array<DTO> {
        return this.myService.items;
    }

    set items(value: Array<DTO>) {
        this.myService.items = value;
    }

    get item(): DTO {
        return this.myService.item;
    }

    set item(value: DTO) {
        this.myService.item = value;
    }

    get editDialog(): boolean {
        return this.myService.editDialog;
    }

    set editDialog(value: boolean) {
        this.myService.editDialog = value;
    }

    get criteria(): CRITERIA {
        return this.myService.criteria;
    }

    set criteria(value: CRITERIA) {
        this.myService.criteria = value;
    }

    get dateFormat() {
        return environment.dateFormatEdit;
    }

    get dateFormatColumn() {
        return environment.dateFormatEdit;
    }

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    get errorMessages(): string[] {
        if (this._errorMessages == null) {
            this._errorMessages = new Array<string>();
        }
        return this._errorMessages;
    }

    set errorMessages(value: string[]) {
        this._errorMessages = value;
    }

    get activeTab(): number {
        return this._activeTab;
    }

    set activeTab(value: number) {
        this._activeTab = value;
    }

    get file(): any {
        return this._file;
    }

    set file(value: any) {
        this._file = value;
    }

    get files(): any {
        return this._files;
    }

    set files(value: any) {
        this._files = value;
    }
}