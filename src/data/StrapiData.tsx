export const API_BASE = 'http://127.0.0.1:1337/api'

export type BlogPost = {
    title: string
    body: string
    imageLink: string
    imageDescription: string
    date: number
}

export type Hero = {
    title: string
}

export type StrapiImage = {

}

export type Response = {
    data: any,
    id: number
}