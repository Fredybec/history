import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {UniteMesureService} from 'src/app/controller/service/UniteMesure.service';
import {UniteMesureDto} from 'src/app/controller/model/UniteMesure.model';
import {UniteMesureCriteria} from 'src/app/controller/criteria/UniteMesureCriteria.model';

@Component({
  selector: 'app-unite-mesure-view-admin',
  templateUrl: './unite-mesure-view-admin.component.html'
})
export class UniteMesureViewAdminComponent extends AbstractViewController<UniteMesureDto, UniteMesureCriteria, UniteMesureService> implements OnInit {


    constructor(private datePipe: DatePipe, private uniteMesureService: UniteMesureService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, uniteMesureService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
