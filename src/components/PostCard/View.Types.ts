export interface PostCardType {
    _id: string,
    title: string,
    category: string,
    image: string,
    location: string,
    locationUrl: string,
    price: number,
    description: string,
    date: string,
    public: boolean,
    pets: boolean,
}

export type PostCardProps  = {
    post: PostCardType,
    layout: string
}

