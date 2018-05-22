export abstract class BaseModel {
    public id: number
	public static transformCollection(data: Array<any>) : Array<any> {
		let transformedData = [];
		for(let item of data) {
			transformedData.push(this.transform(item));
		}
		return transformedData;
	}
	
	public static transform(data: any) : any{
		return data;
	}
	
	protected capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
}

export interface BaseModelItems {
	items: BaseModel[];
	count: number;
}
