
const Filter_form = ({onFilterChange, filterValue}) => {
    return (
        <form >
            <div>find countries &nbsp;
                <input name='filter' value={filterValue} 
                onChange={onFilterChange} /></div>
        </form>
    )
}

export default Filter_form