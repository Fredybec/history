import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ProduitDto} from '../model/Produit.model';
import {ProduitCriteria} from '../criteria/ProduitCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {MarqueDto} from '../model/Marque.model';
import {CategorieProduitDto} from '../model/CategorieProduit.model';
import {StoreDto} from '../model/Store.model';
import {UniteMesureDto} from '../model/UniteMesure.model';
import {StockProduitDto} from '../model/StockProduit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService extends AbstractService<ProduitDto, ProduitCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/produit/');
    }

    public constrcutDto(): ProduitDto {
        return new ProduitDto();
    }

    public constrcutCriteria(): ProduitCriteria {
        return new ProduitCriteria();
    }
}
