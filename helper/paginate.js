

export const paginate = (items,pageNumber,pageSize )=>{
    const index = (pageNumber-1) * pageSize;
    return items.slice(index,index+pageSize)
    
    }