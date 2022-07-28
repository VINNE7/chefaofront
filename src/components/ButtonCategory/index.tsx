import AddCategory from "../AddCategory";
import Category from "../Category";

export default function ButtonCategory(){
    return(
        <div className="overflow-x-auto scroll-smooth flex p-4">
            <AddCategory />
            <Category />
        </div>
    )
}