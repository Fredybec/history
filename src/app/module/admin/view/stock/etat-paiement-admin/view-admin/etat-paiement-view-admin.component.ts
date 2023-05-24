import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {EtatPaiementService} from 'src/app/controller/service/EtatPaiement.service';
import {EtatPaiementDto} from 'src/app/controller/model/EtatPaiement.model';
import {EtatPaiementCriteria} from 'src/app/controller/criteria/EtatPaiementCriteria.model';

@Component({
  selector: 'app-etat-paiement-view-admin',
  templateUrl: './etat-paiement-view-admin.component.html'
})
export class EtatPaiementViewAdminComponent extends AbstractViewController<EtatPaiementDto, EtatPaiementCriteria, EtatPaiementService> implements OnInit {


    constructor(private datePipe: DatePipe, private etatPaiementService: EtatPaiementService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, etatPaiementService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
