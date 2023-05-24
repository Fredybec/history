import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ProprietaireChequeDto} from '../model/ProprietaireCheque.model';
import {ProprietaireChequeCriteria} from '../criteria/ProprietaireChequeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ProprietaireChequeService extends AbstractService<ProprietaireChequeDto, ProprietaireChequeCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/proprietaireCheque/');
    }

    public constrcutDto(): ProprietaireChequeDto {
        return new ProprietaireChequeDto();
    }

    public constrcutCriteria(): ProprietaireChequeCriteria {
        return new ProprietaireChequeCriteria();
    }
}
