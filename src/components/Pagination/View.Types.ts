export type PaginationType = {
    currentPage: number,
    totalPages: number,
    getPagesArray?: (page: number) => void,
    handleClick?: (event: any) => void
    setNewPage?: any
}