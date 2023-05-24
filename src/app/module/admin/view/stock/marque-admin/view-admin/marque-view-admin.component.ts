import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {MarqueService} from 'src/app/controller/service/Marque.service';
import {MarqueDto} from 'src/app/controller/model/Marque.model';
import {MarqueCriteria} from 'src/app/controller/criteria/MarqueCriteria.model';

@Component({
  selector: 'app-marque-view-admin',
  templateUrl: './marque-view-admin.component.html'
})
export class MarqueViewAdminComponent extends AbstractViewController<MarqueDto, MarqueCriteria, MarqueService> implements OnInit {


    constructor(private datePipe: DatePipe, private marqueService: MarqueService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, marqueService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
