import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {EtatReceptionService} from 'src/app/controller/service/EtatReception.service';
import {EtatReceptionDto} from 'src/app/controller/model/EtatReception.model';
import {EtatReceptionCriteria} from 'src/app/controller/criteria/EtatReceptionCriteria.model';

@Component({
  selector: 'app-etat-reception-view-admin',
  templateUrl: './etat-reception-view-admin.component.html'
})
export class EtatReceptionViewAdminComponent extends AbstractViewController<EtatReceptionDto, EtatReceptionCriteria, EtatReceptionService> implements OnInit {


    constructor(private datePipe: DatePipe, private etatReceptionService: EtatReceptionService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, etatReceptionService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
