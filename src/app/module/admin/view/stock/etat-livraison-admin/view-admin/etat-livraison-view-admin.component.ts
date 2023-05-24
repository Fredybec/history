import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {EtatLivraisonService} from 'src/app/controller/service/EtatLivraison.service';
import {EtatLivraisonDto} from 'src/app/controller/model/EtatLivraison.model';
import {EtatLivraisonCriteria} from 'src/app/controller/criteria/EtatLivraisonCriteria.model';

@Component({
  selector: 'app-etat-livraison-view-admin',
  templateUrl: './etat-livraison-view-admin.component.html'
})
export class EtatLivraisonViewAdminComponent extends AbstractViewController<EtatLivraisonDto, EtatLivraisonCriteria, EtatLivraisonService> implements OnInit {


    constructor(private datePipe: DatePipe, private etatLivraisonService: EtatLivraisonService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, etatLivraisonService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
