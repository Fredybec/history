import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {PaiementAchatService} from 'src/app/controller/service/PaiementAchat.service';
import {PaiementAchatDto} from 'src/app/controller/model/PaiementAchat.model';
import {PaiementAchatCriteria} from 'src/app/controller/criteria/PaiementAchatCriteria.model';

import {ModePaiementDto} from 'src/app/controller/model/ModePaiement.model';
import {ModePaiementService} from 'src/app/controller/service/ModePaiement.service';
import {AchatDto} from 'src/app/controller/model/Achat.model';
import {AchatService} from 'src/app/controller/service/Achat.service';
@Component({
  selector: 'app-paiement-achat-view-admin',
  templateUrl: './paiement-achat-view-admin.component.html'
})
export class PaiementAchatViewAdminComponent extends AbstractViewController<PaiementAchatDto, PaiementAchatCriteria, PaiementAchatService> implements OnInit {


    constructor(private datePipe: DatePipe, private paiementAchatService: PaiementAchatService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private modePaiementService: ModePaiementService, private achatService: AchatService
    ){
        super(datePipe, paiementAchatService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.achat = new AchatDto();
        this.achatService.findAll().subscribe((data) => this.achats = data);
        this.modePaiement = new ModePaiementDto();
        this.modePaiementService.findAll().subscribe((data) => this.modePaiements = data);
    }


    get achat(): AchatDto {
       return this.achatService.item;
    }
    set achat(value: AchatDto) {
        this.achatService.item = value;
    }
    get achats():Array<AchatDto> {
       return this.achatService.items;
    }
    set achats(value: Array<AchatDto>) {
        this.achatService.items = value;
    }
    get modePaiement(): ModePaiementDto {
       return this.modePaiementService.item;
    }
    set modePaiement(value: ModePaiementDto) {
        this.modePaiementService.item = value;
    }
    get modePaiements():Array<ModePaiementDto> {
       return this.modePaiementService.items;
    }
    set modePaiements(value: Array<ModePaiementDto>) {
        this.modePaiementService.items = value;
    }


}
