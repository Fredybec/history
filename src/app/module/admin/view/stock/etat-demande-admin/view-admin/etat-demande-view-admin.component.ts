import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {EtatDemandeService} from 'src/app/controller/service/EtatDemande.service';
import {EtatDemandeDto} from 'src/app/controller/model/EtatDemande.model';
import {EtatDemandeCriteria} from 'src/app/controller/criteria/EtatDemandeCriteria.model';

@Component({
  selector: 'app-etat-demande-view-admin',
  templateUrl: './etat-demande-view-admin.component.html'
})
export class EtatDemandeViewAdminComponent extends AbstractViewController<EtatDemandeDto, EtatDemandeCriteria, EtatDemandeService> implements OnInit {


    constructor(private datePipe: DatePipe, private etatDemandeService: EtatDemandeService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, etatDemandeService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
