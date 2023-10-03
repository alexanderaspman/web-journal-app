const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
const pagesCount = Math.ceil(items/pageSize);

    if (pageCount===1){
        return null
    }
    const pages = Array.from({length:pagesCount},(_,i)=>i+1);
    console.log(pages)
    return (
      <div>Pagination</div>
    )
   }
   export default Pagination