import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {MarqueDto} from '../model/Marque.model';
import {MarqueCriteria} from '../criteria/MarqueCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class MarqueService extends AbstractService<MarqueDto, MarqueCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/marque/');
    }

    public constrcutDto(): MarqueDto {
        return new MarqueDto();
    }

    public constrcutCriteria(): MarqueCriteria {
        return new MarqueCriteria();
    }
}
