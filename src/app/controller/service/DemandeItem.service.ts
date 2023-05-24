import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DemandeItemDto} from '../model/DemandeItem.model';
import {DemandeItemCriteria} from '../criteria/DemandeItemCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {DemandeDto} from '../model/Demande.model';
import {ProduitDto} from '../model/Produit.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeItemService extends AbstractService<DemandeItemDto, DemandeItemCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/demandeItem/');
    }

    public constrcutDto(): DemandeItemDto {
        return new DemandeItemDto();
    }

    public constrcutCriteria(): DemandeItemCriteria {
        return new DemandeItemCriteria();
    }
}
