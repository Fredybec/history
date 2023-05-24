import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {FournisseurService} from 'src/app/controller/service/Fournisseur.service';
import {FournisseurDto} from 'src/app/controller/model/Fournisseur.model';
import {FournisseurCriteria} from 'src/app/controller/criteria/FournisseurCriteria.model';

@Component({
  selector: 'app-fournisseur-view-admin',
  templateUrl: './fournisseur-view-admin.component.html'
})
export class FournisseurViewAdminComponent extends AbstractViewController<FournisseurDto, FournisseurCriteria, FournisseurService> implements OnInit {


    constructor(private datePipe: DatePipe, private fournisseurService: FournisseurService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, fournisseurService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
