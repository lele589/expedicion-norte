export interface PostType {
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
};

export type PostFormType = {
    onSubmit: () => void
}