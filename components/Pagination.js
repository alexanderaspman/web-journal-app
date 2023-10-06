
import styles from '@/pages/home/home.module.scss'

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
const pagesCount = Math.ceil(items/pageSize);

    if (pagesCount===1){
        return null
    }
    const pages = Array.from({length:pagesCount},(_,i)=>i+1);
    console.log("pagination page",pages)
    return (
      <div style={{margin:"auto" , padding:"10px"}}>
        <ul className="flex flexDirecation-row" >
{pages.map((page)=>{
    return(
<li key={page}>
    <button>
<a onClick={()=>{ onPageChange(page)}}>
   {page}
</a></button>
</li>
    )}
)}

        </ul>
        
        </div>
    )
   }
   export default Pagination