import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {UniteMesureDto} from '../model/UniteMesure.model';
import {UniteMesureCriteria} from '../criteria/UniteMesureCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class UniteMesureService extends AbstractService<UniteMesureDto, UniteMesureCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/uniteMesure/');
    }

    public constrcutDto(): UniteMesureDto {
        return new UniteMesureDto();
    }

    public constrcutCriteria(): UniteMesureCriteria {
        return new UniteMesureCriteria();
    }
}
