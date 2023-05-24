import {ConfirmationService, MessageService} from 'primeng/api';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {MenuItem} from "primeng/api";

import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {FileTempDto} from 'src/app/zynerator/dto/FileTempDto.model';
@Injectable()
export class AbstractCreateController<DTO extends BaseDto, CRITERIA extends BaseCriteria, SERVICE extends AbstractService<DTO, CRITERIA>> {

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

    public save(): void {
        this.submitted = true;
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.saveWithShowOption(false);
        } else {
            this.myMessageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }

    public saveWithShowOption(showList: boolean) {
        this.myService.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;
                this.submitted = false;
                this.item = this.myService.constrcutDto();
            } else {
                this.myMessageService.add({severity: 'error', summary: 'Erreurs', detail: 'Element existant'});
            }

        }, error => {
            console.log(error);
        });
    }
    public uploadOne(event, i: number): void{
        console.log(event.files[0]);
        let formData = new FormData();
        formData.append('file',event.files[0]);
        this.myService.upload(formData,i);
    }

    public uploadMultiple(event, i: number): void{
        console.log(event.files);
        const formData: FormData = new FormData();
        for (let i = 0; i < event.files.length; i++) {
            formData.append('files', event.files[i]);
        }
        this.myService.uploadMultiple(formData,i);
    }
    public validateForm(): void {
    }

    public setValidation(value: boolean) {
    }
    public performNext(): void {
        this.myService.performNext();
    }

    public performBack(): void {
        this.myService.performBack();
    }

    public hideCreateDialog() {
        this.createDialog = false;
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

    get createDialog(): boolean {
        return this.myService.createDialog;
    }

    set createDialog(value: boolean) {
        this.myService.createDialog = value;
    }

    get criteria(): CRITERIA {
        return this.myService.criteria;
    }

    set criteria(value: CRITERIA) {
        this.myService.criteria = value;
    }

    get dateFormat() {
        return environment.dateFormatCreate;
    }

    get dateFormatColumn() {
        return environment.dateFormatCreate;
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


    get index(): number {
        return this.myService.index;
    }

    set index(value: number) {
        this.myService.index = value;
    }

    get back(): boolean {
        return this.myService.back;
    }

    set back(value: boolean) {
        this.myService.back = value;
    }

    get next(): boolean {
        return this.myService.next;
    }

    set next(value: boolean) {
        this.myService.next = value;
    }

    get validate(): boolean {
        return this.myService.validate;
    }

    set validate(value: boolean) {
        this.myService.validate = value;
    }
    get steps(): MenuItem[] {
        return this.myService.steps;
    }

    set steps(value: MenuItem[]) {
        this.myService.steps = value;
    }


    get activeTab(): number {
        return this._activeTab;
    }

    set activeTab(value: number) {
        this._activeTab = value;
    }
    get fileTempDtos(): Array<FileTempDto[]> {
        return this.myService.fileTempDtos;
    }

    set fileTempDtos(value: Array<FileTempDto[]>) {
        this.myService.fileTempDtos = value;
    }

    get fileTempDtosForOne(): FileTempDto[] {
        return this.myService.fileTempDtosForOne;
    }

    set fileTempDtosForOne(value: FileTempDto[]) {
        this.myService.fileTempDtosForOne = value;
    }
}