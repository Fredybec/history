import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {CategorieProduitService} from 'src/app/controller/service/CategorieProduit.service';
import {CategorieProduitDto} from 'src/app/controller/model/CategorieProduit.model';
import {CategorieProduitCriteria} from 'src/app/controller/criteria/CategorieProduitCriteria.model';

@Component({
  selector: 'app-categorie-produit-view-admin',
  templateUrl: './categorie-produit-view-admin.component.html'
})
export class CategorieProduitViewAdminComponent extends AbstractViewController<CategorieProduitDto, CategorieProduitCriteria, CategorieProduitService> implements OnInit {


    constructor(private datePipe: DatePipe, private categorieProduitService: CategorieProduitService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, categorieProduitService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
