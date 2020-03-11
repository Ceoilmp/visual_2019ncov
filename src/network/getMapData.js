import {request} from "./request";

export function getMapArea() {
    return request({
        url:'/area'
    })
}

export function getMapNews() {
    return request({
        url:'/news'
    })
}