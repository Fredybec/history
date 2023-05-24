import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {ModePaiementService} from 'src/app/controller/service/ModePaiement.service';
import {ModePaiementDto} from 'src/app/controller/model/ModePaiement.model';
import {ModePaiementCriteria} from 'src/app/controller/criteria/ModePaiementCriteria.model';

@Component({
  selector: 'app-mode-paiement-view-admin',
  templateUrl: './mode-paiement-view-admin.component.html'
})
export class ModePaiementViewAdminComponent extends AbstractViewController<ModePaiementDto, ModePaiementCriteria, ModePaiementService> implements OnInit {


    constructor(private datePipe: DatePipe, private modePaiementService: ModePaiementService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, modePaiementService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
