import { request } from "./request.js";

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}


//由于服务器返回的数据过于杂乱，在这里进行数据的整合，创建构造函数
export class GoodsInfo{
    constructor(itemInfo,columns,services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}