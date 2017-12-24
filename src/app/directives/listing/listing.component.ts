import { OnInit, HostListener } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BaseModel, BaseModelItems} from '../../models';
import {BaseComponent} from "../../base.component";

export abstract class ListingComponent extends BaseComponent implements OnInit {
	public isLoading: boolean;
	public items: Array<BaseModel>;
	public count: number;
	protected page: number = 1;
	public queryParams: any;
	protected activatedRoute: ActivatedRoute;
	@HostListener('window:scroll', ['$event'])
	getRestItems(event) {
		let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		let isScrollEnd =  Math.ceil(scrollTop + window.innerHeight) >=
			document.body.scrollHeight - window.innerHeight / 2;
		if(isScrollEnd && !this.isLoading) {
			if(this.count) {
				this.page++;
				this.getItems();
			}
		}
	}
	
	constructor(
	) {
		super();
	}
	
	ngOnInit() {
	}
	
	protected getItems() {
		this.isLoading = true;
	};
	
	protected persistResponse(res: BaseModelItems) {
		if(this.page == 1) {
			this.items = res.items;
		} else {
			this.items = this.items.concat(res.items);
		}
		this.count = res.count;
		this.isLoading = false;
	}
		
	protected prepareRequestQuery() : string {
		let requestQuery: string = `?page=${this.page}`;
		if(this.queryParams.searchKey) requestQuery += '&search_key=' + this.queryParams.searchKey;
		if(this.queryParams.orderColumn) requestQuery += '&orderColumn=' + this.queryParams.orderColumn;
		if(this.queryParams.orderType) requestQuery += '&orderType=' + this.queryParams.orderType;
		if(this.queryParams.organizationId) requestQuery += '&organizations=' + this.queryParams.organizationId;
		if(this.queryParams.role) requestQuery += '&role=' + this.queryParams.role;
		if(this.queryParams.country) requestQuery += '&country=' + this.queryParams.country;
		if(this.queryParams.type) requestQuery += '&type=' + this.queryParams.type;
		if(this.queryParams.supplierId) requestQuery += '&organizations=' + this.queryParams.supplierId;
		if(this.queryParams.filterType) requestQuery += '&filterType=' + this.queryParams.filterType;
		return requestQuery;
	}
	
	protected subscribeQueryParams() : void {
		this.activatedRoute.queryParams
			.subscribe((data: any) => {
				this.queryParams = Object.assign({}, data);
				this.page = 1;
				this.getItems();
			})
	}
}
