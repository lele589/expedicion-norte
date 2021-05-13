export type PostListProps  = {
    limit?: number,
    order?: string,
    orderBy?: string,
    category?: string,
    page?: number,
    layout: string,
    setNewPage?: any,
    onlyPublic: boolean
}