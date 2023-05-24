import { MessageService} from 'primeng/api';
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
export class AbstractViewController<DTO extends BaseDto, CRITERIA extends BaseCriteria, SERVICE extends AbstractService<DTO, CRITERIA>> {

    protected _submitted = false;
    protected _errorMessages = new Array<string>();
    private myDatePipe: DatePipe;
    private myService: SERVICE;
    private myMessageService: MessageService;
    private myRoleService: RoleService;
    private myRouter: Router;
    private myStringUtilService: StringUtilService;

    public constructor(datePipe: DatePipe, service: SERVICE, messageService: MessageService, roleService: RoleService, router: Router, stringUtilService: StringUtilService) {
        this.myDatePipe = datePipe;
        this.myService = service;
        this.myMessageService = messageService;
        this.myRoleService = roleService;
        this.myRouter = router;
        this.myStringUtilService = stringUtilService;
    }
    public hideViewDialog() {
        this.viewDialog = false;
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

    get viewDialog(): boolean {
        return this.myService.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.myService.viewDialog = value;
    }

    get criteria(): CRITERIA {
        return this.myService.criteria;
    }

    set criteria(value: CRITERIA) {
        this.myService.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }

}