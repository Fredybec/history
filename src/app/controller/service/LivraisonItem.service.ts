import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {LivraisonItemDto} from '../model/LivraisonItem.model';
import {LivraisonItemCriteria} from '../criteria/LivraisonItemCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {LivraisonDto} from '../model/Livraison.model';
import {ProduitDto} from '../model/Produit.model';

@Injectable({
  providedIn: 'root'
})
export class LivraisonItemService extends AbstractService<LivraisonItemDto, LivraisonItemCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/livraisonItem/');
    }

    public constrcutDto(): LivraisonItemDto {
        return new LivraisonItemDto();
    }

    public constrcutCriteria(): LivraisonItemCriteria {
        return new LivraisonItemCriteria();
    }
}
