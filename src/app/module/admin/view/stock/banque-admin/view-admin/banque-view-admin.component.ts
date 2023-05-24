import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {BanqueService} from 'src/app/controller/service/Banque.service';
import {BanqueDto} from 'src/app/controller/model/Banque.model';
import {BanqueCriteria} from 'src/app/controller/criteria/BanqueCriteria.model';

@Component({
  selector: 'app-banque-view-admin',
  templateUrl: './banque-view-admin.component.html'
})
export class BanqueViewAdminComponent extends AbstractViewController<BanqueDto, BanqueCriteria, BanqueService> implements OnInit {


    constructor(private datePipe: DatePipe, private banqueService: BanqueService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, banqueService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
