import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {EtatCommandeService} from 'src/app/controller/service/EtatCommande.service';
import {EtatCommandeDto} from 'src/app/controller/model/EtatCommande.model';
import {EtatCommandeCriteria} from 'src/app/controller/criteria/EtatCommandeCriteria.model';

@Component({
  selector: 'app-etat-commande-view-admin',
  templateUrl: './etat-commande-view-admin.component.html'
})
export class EtatCommandeViewAdminComponent extends AbstractViewController<EtatCommandeDto, EtatCommandeCriteria, EtatCommandeService> implements OnInit {


    constructor(private datePipe: DatePipe, private etatCommandeService: EtatCommandeService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, etatCommandeService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
