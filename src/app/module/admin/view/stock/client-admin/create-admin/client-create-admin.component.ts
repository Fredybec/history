import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ClientService} from 'src/app/controller/service/Client.service';
import {ClientDto} from 'src/app/controller/model/Client.model';
import {ClientCriteria} from 'src/app/controller/criteria/ClientCriteria.model';
@Component({
  selector: 'app-client-create-admin',
  templateUrl: './client-create-admin.component.html'
})
export class ClientCreateAdminComponent extends AbstractCreateController<ClientDto, ClientCriteria, ClientService>  implements OnInit {



   private _validClientCin = true;
   private _validClientNom = true;

    constructor(private datePipe: DatePipe, private clientService: ClientService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, clientService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validClientCin = value;
        this.validClientNom = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateClientCin();
        this.validateClientNom();
    }

    public validateClientCin(){
        if (this.stringUtilService.isEmpty(this.item.cin)) {
        this.errorMessages.push('Cin non valide');
        this.validClientCin = false;
        } else {
            this.validClientCin = true;
        }
    }
    public validateClientNom(){
        if (this.stringUtilService.isEmpty(this.item.nom)) {
        this.errorMessages.push('Nom non valide');
        this.validClientNom = false;
        } else {
            this.validClientNom = true;
        }
    }






    get validClientCin(): boolean {
        return this._validClientCin;
    }

    set validClientCin(value: boolean) {
         this._validClientCin = value;
    }
    get validClientNom(): boolean {
        return this._validClientNom;
    }

    set validClientNom(value: boolean) {
         this._validClientNom = value;
    }



}
